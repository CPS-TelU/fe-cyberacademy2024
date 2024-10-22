"use client";
import { useState, useEffect, useRef } from "react";
import { poppins } from "@/styles/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie";

// Type Definitions
interface Topic {
  id: string;
  title: string;
}

interface Discussion {
  id: string;
  messages: string;
  user_id: number;
  topic_id: string;
  createdAt: string;
}

interface Reply {
  id: string;
  messages: string;
  user: string;
  createdAt: string;
}

interface User {
  id: number;
  name: string;
}

const Discussion = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [newDiscussion, setNewDiscussion] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [replyContent, setReplyContent] = useState<string>("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replies, setReplies] = useState<Record<string, Reply[]>>({});

  const selectRef = useRef<HTMLDivElement>(null);

  // Fetch topics on component mount
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get<{ data: Topic[] }>(
          "https://be-cyber-academy.vercel.app/discussion/topics"
        );

        const fetchedTopics = response.data.data;
        setTopics(fetchedTopics);
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
        `https://be-cyber-academy.vercel.app/discussion/questions/${topicId}`
      );

      const fetchedDiscussions = response.data.data || [];
      setDiscussions(fetchedDiscussions);

      // Fetch replies for each discussion
      fetchedDiscussions.forEach((discussion) => {
        fetchReplies(discussion.id);
      });
    } catch (error) {
      console.error("Error fetching discussions:", error);
      setDiscussions([]);
    }
  };

  // Fetch replies for a discussion
  const fetchReplies = async (discussionId: string) => {
    try {
      const response = await axios.get<{ data: Reply[] }>(
        `https://be-cyber-academy.vercel.app/discussion/answers?question_id=${discussionId}`
      );

      const fetchedReplies = response.data.data || [];
      setReplies((prevReplies) => ({
        ...prevReplies,
        [discussionId]: fetchedReplies,
      }));
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };

  const addNewDiscussion = async () => {
    if (newDiscussion.trim() === "" || !selectedTopic || !user) return;

    try {
      const newEntry = {
        messages: newDiscussion,
        user_id: user.id,
        topic_id: selectedTopic.id,
        image: null,
      };

      const response = await axios.post(
        "https://be-cyber-academy.vercel.app/discussion/question",
        newEntry
      );

      setDiscussions((prev) => [...prev, response.data.data]);
      setNewDiscussion("");
    } catch (error) {
      console.error("Error adding new discussion:", error);
    }
  };

  const handleReply = async (discussionId: string) => {
    if (replyContent.trim() === "" || !user) return;

    try {
      const replyData = {
        messages: replyContent,
        user_id: user.id,
        question_id: discussionId,
        image: null,
      };

      const response = await axios.post(
        "https://be-cyber-academy.vercel.app/discussion/answer",
        replyData
      );

      // Update the replies state with the new reply
      setReplies((prevReplies) => ({
        ...prevReplies,
        [discussionId]: [...(prevReplies[discussionId] || []), response.data.data],
      }));

      setReplyContent(""); // Clear input after posting
      setReplyingTo(null); // Reset replying state
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className={`p-4 md:p-10 lg:p-12 ml-0 md:ml-10 ${poppins.className}`}>
      <h1 className="flex text-red-600 text-2xl md:text-4xl lg:text-5xl font-bold mt-10">
        Forum Discussion
      </h1>

      <div className="flex flex-col items-center justify-center mt-6 w-full max-w-7xl mx-auto min-w-[1000px]">
        {/* Select Topic Dropdown */}
        <div className="relative w-full mb-6" ref={selectRef}>
          <button
            onClick={handleDropdown}
            className="border border-gray-100 p-2 rounded w-full bg-white shadow-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
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

        {/* Input for new discussion */}
        <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-white shadow-lg w-full">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300"
          />
          <input
            type="text"
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
            placeholder="Type New Discussion Here"
            className="flex-1 outline-none bg-transparent"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300"
            onClick={addNewDiscussion}
          />
        </div>

        {/* Discussions list */}
        <div className="flex flex-col gap-6 justify-start items-center w-full mt-6">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="border border-gray-100 p-6 rounded mb-6 bg-white shadow-lg rounded-3xl w-full"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <h3 className="font-bold">A</h3>
                  <span className="text-gray-500 text-sm">{discussion.createdAt}</span>
                </div>
              </div>
              <p className="mb-4">{discussion.messages}</p>

              {replies[discussion.id]?.length > 0 && (
                <div className="ml-10 mt-4">
                  {replies[discussion.id].map((reply, index) => (
                    <div key={index} className="border-t border-gray-300 pt-4">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                          {/* {reply.user.charAt(0).toUpperCase()} */} A
                        </div>
                        <div>
                          <h4 className="font-bold">{reply.user}</h4>
                          <span className="text-gray-500 text-sm">{reply.createdAt}</span>
                        </div>
                      </div>
                      <p>{reply.messages}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Input for replying to a discussion */}
              <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-gray-50 shadow-lg w-full mt-4">
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300"
                />
                <input
                  type="text"
                  value={replyingTo === discussion.id ? replyContent : ""}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Reply to this discussion"
                  className="flex-1 outline-none bg-transparent"
                />
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300"
                  onClick={() => handleReply(discussion.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;
