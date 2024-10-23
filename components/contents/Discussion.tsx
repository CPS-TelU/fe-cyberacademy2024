"use client";
import { useState, useEffect, useRef } from "react";
import { poppins } from "@/styles/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { io, Socket } from "socket.io-client";  // Import socket.io-client
import Cookies from "js-cookie";

// Type Definitions
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
  const selectRef = useRef<HTMLDivElement>(null);

  // Socket reference
  const socketRef = useRef<Socket | null>(null);

  // Connect to Socket.IO server when component mounts
  useEffect(() => {
    const socket = io("https://server-cyber-academy.vercel.app", { withCredentials: true }); 
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    // Listen to real-time event for new discussions on the selected topic
    if (selectedTopic) {
      socket.on(`new-question-${selectedTopic.id}`, (newDiscussion: Discussion) => {
        setDiscussions((prevDiscussions) => [...prevDiscussions, newDiscussion]);
      });
    }

    // Cleanup the socket connection and listeners when unmounting
    return () => {
      socket.disconnect();  // Cleanup on unmount
    };
  }, [selectedTopic]);  // Re-run this effect when selectedTopic changes

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get<{ data: Topic[] }>(
          "https://server-cyber-academy.vercel.app/discussion/topics"
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
        `https://server-cyber-academy.vercel.app/discussion/questions/${topicId}`
      );
      const fetchedDiscussions = response.data.data || [];
      setDiscussions(fetchedDiscussions);
    } catch (error) {
      console.error("Error fetching discussions:", error);
      setDiscussions([]);
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
        "https://server-cyber-academy.vercel.app/discussion/question",
        newEntry
      );

      // Emit the new discussion event to the server
      socketRef.current?.emit(`new-question-${selectedTopic.id}`, response.data.data);

      // Update the discussion list with the new entry
      setDiscussions((prev) => [...prev, response.data.data]);
      setNewDiscussion("");
    } catch (error) {
      console.error("Error adding new discussion:", error);
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
      <h1 className=" flex text-red-600 text-2xl md:text-4xl lg:text-5xl font-bold mt-10 ">
        Forum Discussion
      </h1>

      <div className="flex flex-col items-center justify-center mt-6 w-full max-w-7xl mx-auto min-w-[1000px]">
        <div className="relative w-full mb-6" ref={selectRef}>
          <button
            onClick={handleDropdown}
            className="border border-gray-100 p-2 rounded w-full bg-white shadow-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 "
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
          <FontAwesomeIcon icon={faPaperclip} className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300" />
          <input
            type="text"
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
            placeholder="Type New Discussion Here"
            className={`flex-1 outline-none bg-transparent transition-opacity duration-300 ${
              !selectedTopic || isOpen ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={!selectedTopic || isOpen}
          />
          <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300" onClick={addNewDiscussion} />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;
