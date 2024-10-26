"use client";
import { useState, useEffect, useRef } from "react";
import { poppins } from "@/styles/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { io, Socket } from "socket.io-client";
import Cookies from "js-cookie";

// Type Definitions
interface Topic {
  id: string;
  title: string;
  user_id: number;
}

interface User {
  id: number;
  name: string;
}

interface Discussion {
  id: string;
  messages: string;
  user_id: number;
  topic_id: string;
  createdAt: string;
  User: User;
  Topic: Topic;
  answers: Answer[];
  image?: string;
}

interface Answer {
  id: string;
  messages: string;
  user: string;
  createdAt: string;
  User: User;
  image?: string;
}

const DiscussionComponent = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [newDiscussion, setNewDiscussion] = useState<string>("");
  const [newDiscussionImage, setNewDiscussionImage] = useState<File | null>(null);
  const [newDiscussionImageName, setNewDiscussionImageName] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const [answerContent, setAnswerContent] = useState<string>("");
  const [answerImage, setAnswerImage] = useState<File | null>(null);
  const [answerImageName, setAnswerImageName] = useState<string | null>(null);
  const [answeringTo, setAnsweringTo] = useState<string | null>(null);

  const socketRef = useRef<Socket | null>(null);
  const URL = process.env.NEXT_PUBLIC_API_DISCUSSION_URL;
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${URL}/api/user/whoami`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
    }
  }, []);

  useEffect(() => {
    const socket = io(URL, { 
      transports: ['pooling'],
      withCredentials: true });

    socket.on("newQuestion", (newQuestion) => {
      
    })
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get<{ data: Topic[] }>(`${URL}/discussion/topics`);
        setTopics(response.data.data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchTopics();
  }, []);

  const handleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Topic) => {
    setSelectedTopic(option);
    setIsOpen(false);
    fetchDiscussions(option.id);
  };

  const fetchDiscussions = async (topicId: string) => {
    try {
      const response = await axios.get<{ data: Discussion[] }>(
        `${URL}/api/discussion?topicId=${topicId}`
      );
      setDiscussions(response.data.data || []);
    } catch (error) {
      console.error("Error fetching discussions:", error);
      setDiscussions([]);
    }
  };

  const addNewDiscussion = async () => {
    if (!newDiscussion.trim() || !selectedTopic || !user) {
      console.log("Cannot send message: Input is empty or no topic/user selected.");
      return;
    }

    const formData = new FormData();
    formData.append("messages", newDiscussion);
    formData.append("user_id", String(user.id));
    formData.append("topic_id", selectedTopic.id);
    if (newDiscussionImage) formData.append("image", newDiscussionImage);

    try {
      const response = await axios.post(`${URL}/api/discussion`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const newQuestion = response.data.data;
      newQuestion.User = user;
      newQuestion.Topic = selectedTopic;

      socketRef.current?.emit("newQuestion", newQuestion);
      setNewDiscussion("");
      setNewDiscussionImage(null);
      setNewDiscussionImageName(null);
    } catch (error) {
      console.error("Error adding new discussion:", error);
    }
  };

  const handleAnswer = async (discussionId: string) => {
    if (!answerContent.trim() || !user) return;

    const formData = new FormData();
    formData.append("messages", answerContent);
    formData.append("user_id", String(user.id));
    formData.append("question_id", discussionId);
    if (answerImage) formData.append("image", answerImage);

    try {
      const response = await axios.post(`${URL}/api/discussion/answers`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const newAnswer = response.data.data;
      newAnswer.user = user.name;

      socketRef.current?.emit("newAnswer", { ...newAnswer, question_id: discussionId });

      setDiscussions((prevDiscussions) =>
        prevDiscussions.map((discussion) =>
          discussion.id === discussionId
            ? { ...discussion, answers: [...discussion.answers, newAnswer] }
            : discussion
        )
      );

      setAnswerContent("");
      setAnswerImage(null);
      setAnswerImageName(null);
      setAnsweringTo(null);
    } catch (error) {
      console.error("Error posting answer:", error);
    }
  };

  const handleNewDiscussionImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setNewDiscussionImage(file);
    setNewDiscussionImageName(file ? file.name : null);
  };

  const handleAnswerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setAnswerImage(file);
    setAnswerImageName(file ? file.name : null);
  };

  return (
    <section className={`p-4 md:p-10 lg:p-12 ml-0 md:ml-10 ${poppins.className}`}>
      <h1 className="flex text-red-600 text-2xl md:text-4xl lg:text-5xl font-bold mt-10 ">
        Forum Discussion
      </h1>

      <div className="flex flex-col items-center justify-center mt-6 w-full max-w-7xl mx-auto min-w-[1000px]">
        <div className="relative w-full mb-6" ref={selectRef}>
          <button
            onClick={handleDropdown}
            className="border border-gray-100 p-2 w-full bg-white shadow-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 "
          >
            {selectedTopic ? selectedTopic.title : "Select Topic"}
          </button>

          {isOpen && (
            <ul className="absolute z-10 w-full border border-gray-100 bg-white shadow-lg rounded-3xl mt-1">
              {topics.map((topic, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(topic)}
                  className="cursor-pointer p-2 hover:bg-red-500 hover:text-white"
                >
                  {topic.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-white shadow-lg w-full">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300"
            onClick={() => document.getElementById("discussionImageInput")?.click()}
          />
          <input
            type="file"
            id="discussionImageInput"
            style={{ display: "none" }}
            onChange={handleNewDiscussionImageChange}
          />
          <input
            type="text"
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
            placeholder="Type New Discussion Here"
            className={`flex-1 outline-none bg-transparent transition-opacity duration-300 ${
              !selectedTopic ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            disabled={!selectedTopic}
          />
          {newDiscussionImageName && (
            <span className="text-sm text-gray-500 ml-2">{newDiscussionImageName}</span>
          )}
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`w-6 h-6 text-gray-400 mr-3 ${
              newDiscussion.trim() === "" || !selectedTopic
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-red-600 hover:scale-110 cursor-pointer transition-all duration-300"
            }`}
            onClick={() => {
              if (newDiscussion.trim() !== "" && selectedTopic) {
                addNewDiscussion();
              }
            }}
          />
        </div>

        <div className="flex flex-col gap-6 justify-start items-center w-full mt-6">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="border border-gray-100 p-6 mb-6 bg-white shadow-lg rounded-3xl w-full"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                  {discussion.User.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold">{discussion.User.name}</h3>
                  <span className="text-gray-500 text-sm">
                    {new Date(discussion.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="mb-4">{discussion.messages}</p>
              {discussion.image && (
                 <img
                 src={discussion.image}
                 alt="discussion image"
                 className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg mb-4"
               />
              )}

              {discussion.answers?.length > 0 && (
                <div className="ml-10 mt-4">
                  {discussion.answers.map((answer) => (
                    <div key={answer.id} className="border-t border-gray-300 pt-4">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                          {answer.User.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold">{answer.User.name}</h4>
                          <span className="text-gray-500 text-sm">
                            {new Date(answer.createdAt).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <p>{answer.messages}</p>
                      {answer.image && (
                        <img
                        src={answer.image}
                        alt="answer image"
                        className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg mb-4"
                      />
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-gray-50 shadow-lg w-full mt-4">
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300"
                  onClick={() => document.getElementById(`answerImageInput-${discussion.id}`)?.click()}
                />
                <input
                  type="file"
                  id={`answerImageInput-${discussion.id}`}
                  style={{ display: "none" }}
                  onChange={handleAnswerImageChange}
                />
                <input
                  type="text"
                  value={answeringTo === discussion.id ? answerContent : ""}
                  onFocus={() => setAnsweringTo(discussion.id)}
                  onChange={(e) => setAnswerContent(e.target.value)}
                  placeholder="Answer this discussion"
                  className="flex-1 outline-none bg-transparent"
                />
                {answerImageName && (
                  <span className="text-sm text-gray-500 ml-2">{answerImageName}</span>
                )}
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300"
                  onClick={() => {
                    if (answeringTo === discussion.id) handleAnswer(discussion.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussionComponent;
