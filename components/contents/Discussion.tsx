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
  user_id: number;
}

interface Discussion {
  id: string;
  messages: string;
  user_id: number;
  topic_id: string;
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

  // Mengambil informasi pengguna (whoami) menggunakan API
  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token");
      if (!token) {
        console.error("Token not found in cookies.");
        return;
      }

      try {
        const response = await axios.get<User>(
          "https://be-cyber-academy.vercel.app/api/user/whoami",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  // Mengambil daftar topik dari API
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
      const response = await axios.get<Discussion[]>(
        `https://be-cyber-academy.vercel.app/discussion/questions/${topicId}`
      );
      setDiscussions(response.data);
    } catch (error) {
      console.error("Error fetching discussions:", error);
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

      <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-white shadow-lg mt-6 w-full max-w-5xl mx-auto">
        <FontAwesomeIcon
          icon={faPaperclip}
          className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300"
        />
        <input
          type="text"
          value={newDiscussion}
          onChange={(e) => setNewDiscussion(e.target.value)}
          placeholder="Type New Discussion Here"
          className="flex-1 outline-none bg-transparent "
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          onClick={addNewDiscussion}
          className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="flex flex-col md:flex-row mt-6 md:mt-10 w-full max-w-7xl mx-auto">
        <div className="w-full md:w-2/3 lg:w-3/4 md:ml-6 lg:ml-10">
          <div className="relative w-full mb-6" ref={selectRef}>
            <button
              onClick={handleDropdown}
              className="border border-gray-100 p-2 rounded w-full bg-white shadow-lg rounded-3xl"
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
        </div>
      </div>
    </section>
  );
};

export default Discussion;
