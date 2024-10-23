"use client";

import { dmSans } from "@/styles/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

interface Discussion {
  id: string;
  messages: string;
  user_id: number;
  topic_id: string;
  createdAt: string;
}

interface Topic {
  id: string;
  title: string;
}

const ModulDiscussion = () => {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopicId, setSelectedTopicId] = useState<string>("");

  // Fetch topics from the API (you can update the API endpoint as needed)
  const fetchTopics = async () => {
    try {
      const response = await axios.get<{ data: Topic[] }>(
        `https://be-cyber-academy.vercel.app/discussion/topics`
      );
      const fetchedTopics = response.data.data || [];
      setTopics(fetchedTopics);

      // Automatically select the first topic by default
      if (fetchedTopics.length > 0) {
        setSelectedTopicId(fetchedTopics[0].id);
        fetchDiscussions(fetchedTopics[0].id); // Fetch discussions for the first topic
      }
    } catch (error) {
      console.error("Error fetching topics:", error);
      setTopics([]);
    }
  };

  // Fetch discussions for the selected topic
  const fetchDiscussions = async (topicId: string) => {
    try {
      const response = await axios.get<{ data: Discussion[] }>(
        `https://be-cyber-academy.vercel.app/discussion/questions/${topicId}`
      );
      const fetchedDiscussions = response.data.data || [];
      setDiscussions(fetchedDiscussions);
    } catch (error) {
      console.error("Error fetching discussions:", error);
      setDiscussions([]);
    }
  };

  // Fetch topics on component mount
  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <section className={`p-12 ${dmSans.className}`}>
      <div className="m-6">
        <h2 className="text-red-600 text-5xl font-bold">Basic Linux</h2>
      </div>

      <div className="border border-gray-100 p-6 rounded-2xl bg-white shadow-lg min-w-[1000px]">
        <div className="p-2 ">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="border border-gray-100 p-4 rounded mb-4 bg-white shadow-lg rounded-3xl"
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                  {/* Placeholder for user initials */}
                </div>
                <div>
                  <h3 className="font-bold">User {discussion.user_id}</h3>
                  <span className="text-gray-500 text-sm">
                    {discussion.createdAt}
                  </span>
                </div>
              </div>
              <p className="mb-4">{discussion.messages}</p>
              <button className="text-red-600 font-bold">Reply</button>
            </div>
          ))}
        </div>

        <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-white shadow-lg">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-6 h-6 text-gray-400 mr-3 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Type here"
            className="flex-1 outline-none bg-transparent"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ModulDiscussion;
