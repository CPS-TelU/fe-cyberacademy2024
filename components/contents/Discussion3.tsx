
"use client";
import { useState, useEffect, useRef } from "react";
import { poppins } from "@/styles/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie";
import { create } from "domain";



interface Topic {
  id: string;
  title: string;
  user_id: number;
}

interface Discussion {
  id: string;
  messages: string;
  user_id: number;
  topic_id: string;
  created_at: string;
}

interface User {
  id: number;
  name: string;
}
type ModuleOption = "Basic Linux" | "Web Development" | "IoT" | "Machine Learning";

const discussionsData: Record<
  ModuleOption,
  { id: number; user: string; createdAt: string; messages: string; replies?: { user: string; time: string; content: string }[] }[]
> = {
  "Web Development": [
    {
      id: 1,
      user: "Citra Kusumadewi Sribawono",
      createdAt: "1 day ago",
      messages:
        "Linux is an open-source operating system (OS) that manages a computer's hardware and resources, such as memory, CPU, and storage.",
    },
  ],
  "Basic Linux": [
    {
      id: 2,
      user: "Agung Kusumadewi Sribawono",
      createdAt: "1 day ago",
      messages:
        "Linux is an open-source operating system (OS) that manages a computer's hardware and resources, such as memory, CPU, and storage.",
    },
  ],
  IoT: [
    {
      id: 3,
      user: "Jajang Miharja",
      createdAt: "3 days ago",
      messages: "IoT Iot apa yang Iot?",
    },
  ],
  "Machine Learning": [
    {
      id: 4,
      user: "Niki Manurung",
      createdAt: "5 days ago",
      messages: "Machine learning apaan?",
    },
  ],
};

const Discussion = () => {
  const [topicId, setTopicId] = useState("");
  const [selectedModul, setSelectedModul] = useState<ModuleOption>("Web Development");
  const [filter, setFilter] = useState("Newest");
  const [newDiscussion, setNewDiscussion] = useState(""); 
  const [discussions, setDiscussions] = useState([...discussionsData[selectedModul]]);
  const [isOpen, setIsOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState<number | null>(null); // State to track which discussion is being replied to
  const [replyContent, setReplyContent] = useState<string>(""); // Track reply content
  const selectRef = useRef<HTMLDivElement>(null);
  const options: ModuleOption[] = ["Basic Linux", "Web Development", "IoT", "Machine Learning"];
  const [user, setUser] = useState<User | null>(null);





  useEffect(() => {
    axios.get('https://be-cyber-academy.vercel.app/discussion/questions').then((res) => {
      setTopicId(res.data.data[0].topic_id);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    axios.get(`https://be-cyber-academy.vercel.app/discussion/questions/${topicId}`).then((res) => {
      console.log(topicId);
      setDiscussions(res.data.data);
      console.log(res.data.data);
    })
  }, [topicId]);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: ModuleOption) => {
    setSelectedModul(option);
    setDiscussions([...discussionsData[option]]);
    setIsOpen(false);
  };

  const handleOption = (option: string) => {
    if (option === "Web Development") {
      setTopicId("1");
    } else if (option === "Basic Linux") {
      setTopicId("2");
    } else if (option === "IoT") {
      setTopicId("3");
    } else if (option === "Machine Learning") {
      setTopicId("4");
    }
  }
  const addNewDiscussion = () => {
    if (newDiscussion.trim() === "") return;
    const newId = discussions.length + Date.now();
    const newEntry = {
      id: newId,
      user: "New User", 
      createdAt: "Just now",
      messages: newDiscussion,
    };
    setDiscussions((prev) => [...prev, newEntry]);
    setNewDiscussion("");
  };

  const handleReply = (discussionId: number) => {
    if (replyContent.trim() === "") return; // Prevent empty reply
    setDiscussions((prevDiscussions) =>
      prevDiscussions.map((discussion) =>
        discussion.id === discussionId
          ? {
              ...discussion,
              replies: [
                ...(discussion.replies || []),
                { user: "New User",
                  time: "Just now", content: replyContent },
              ],
            }
          : discussion
      )
    );
    setReplyingTo(null);
    setReplyContent("");
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
      <h1 className="text-red-600 text-2xl md:text-4xl lg:text-5xl font-bold mt-10">Forum Discussion</h1>

      <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-white shadow-lg mt-6 w-full max-w-7xl mx-auto min-w-[300px] sm:min-w-[500px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[700px] 2xl:min-w-[900px]">
        <FontAwesomeIcon icon={faPaperclip} className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300" />
        <input
          type="text"
          value={newDiscussion}
          onChange={(e) => setNewDiscussion(e.target.value)}
          placeholder="Type New Discussion Here"
          className="flex-1 outline-none bg-transparent "
        />
        <FontAwesomeIcon icon={faPaperPlane} onClick={addNewDiscussion} className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300" />
      </div>

      <div className="flex flex-col md:flex-row mt-6 md:mt-10 w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white border border-gray-100 p-4 md:p-6 shadow-lg rounded-2xl h-auto md:h-[240px] mb-6 md:mb-0 min-w-[200px] sm:min-w-[500px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px] 2xl:min-w-[300px] max-w-[200px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[250px] xl:max-w-[200px] 2xl:max-w-[300px]">
          <h2 className="font-bold mb-4">Filter Discussion</h2>
          <div className="border-b border-gray-300 mb-4">
            <label className="block mb-2">
              <input
                type="radio"
                name="filter"
                value="Newest"
                checked={filter === "Newest"}
                onChange={(e) => setFilter(e.target.value)}
                className="accent-black"
              />
              <span className="ml-2">Newest</span>
            </label>
            <label className="block mb-4">
              <input
                type="radio"
                name="filter"
                value="Oldest"
                checked={filter === "Oldest"}
                onChange={(e) => setFilter(e.target.value)}
                className="accent-black"
              />
              <span className="ml-2">Oldest</span>
            </label>
          </div>

          <input
            type="text"
            placeholder="Find keyword"
            className="border border-gray-100 p-2 rounded w-full rounded-3xl mb-6 shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 lg:w-3/4 md:ml-6 lg:ml-10">
          <div className="relative w-full mb-6" ref={selectRef}>
            <button
              onClick={handleDropdown}
              className="border border-gray-100 p-2 rounded w-full bg-white shadow-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              {selectedModul}
            </button>

            {isOpen && (
              <ul className="absolute z-10 w-full border border-gray-100 bg-white shadow-lg rounded-3xl mt-1">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOption(option)}
                    className="cursor-pointer p-2 hover:bg-red-500 hover:text-white"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-6 justify-start items-center w-full">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="border border-gray-100 p-6 rounded mb-6 bg-white shadow-lg rounded-3xl w-full  min-w-[300px] sm:min-w-[500px] md:min-w-[400px] lg:min-w-[600px] xl:min-w-[700px] 2xl:min-w-[900px] max-w-[300px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[900px]"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                    {/* {discussion.user.charAt(0).toUpperCase()} */}
                  </div>
                  <div>
                    <h3 className="font-bold">{discussion.user}</h3>
                    <span className="text-gray-500 text-sm">{discussion.createdAt}</span>
                  </div>
                </div>
                <p className="mb-4">{discussion.messages}</p>

                {discussion.replies && (
                  <div className="ml-10 mt-4 ">
                    {discussion.replies.map((reply, index) => (
                      <div key={index} className="border-t border-gray-300 pt-4">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                          {reply.user.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold">{reply.user}</h4>
                          <span className="text-gray-500 text-sm">{reply.time}</span> 
                          
                        </div>
                      </div>
                      <p>{reply.content}</p>
                    </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setReplyingTo(discussion.id)}
                  className="text-red-600 font-bold mt-4 hover:underline"
                >
                  Reply
                </button>

                {replyingTo === discussion.id && (
                  <div className="mt-4 flex items-center">
                    <input
                      type="text"
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Type your reply here"
                      className="border border-gray-100 p-2 rounded-lg flex-1"
                    />
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      onClick={() => handleReply(discussion.id)}
                      className="w-6 h-6 text-gray-400 cursor-pointer ml-3 hover:text-red-600 hover:scale-110 transition-all duration-300"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discussion;