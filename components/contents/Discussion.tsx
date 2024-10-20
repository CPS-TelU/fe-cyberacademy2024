"use client";

import { useState, useEffect, useRef } from "react";
import { poppins } from "@/styles/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

type ModuleOption = "Basic Linux" | "Web Development" | "IoT" | "Machine Learning";

const Discussion = () => {
  const [selectedModul, setSelectedModul] = useState<ModuleOption>("Web Development");
  const [filter, setFilter] = useState("Newest");
  const [newDiscussion, setNewDiscussion] = useState(""); 
  const [discussions, setDiscussions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState<number | null>(null); 
  const [replyContent, setReplyContent] = useState<string>("");
  const selectRef = useRef<HTMLDivElement>(null);
  const options: ModuleOption[] = ["Basic Linux", "Web Development", "IoT", "Machine Learning"];

  // Fetch discussions by module/topic
  const fetchDiscussions = async (topicId: string) => {
    try {
      const response = await fetch(`https://be-cyber-academy.vercel.app/discussion/question/${topicId}`);
      const data = await response.json();
  
      // Ensure data is an array
      if (Array.isArray(data)) {
        setDiscussions(data);
      } else {
        console.error("Data received is not an array:", data);
        setDiscussions([]); // Fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching discussions:", error);
      setDiscussions([]); // Handle error by setting empty array
    }
  };

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = async (option: ModuleOption) => {
    setSelectedModul(option);
    setIsOpen(false);
    // Map module names to topic IDs
    const topicMap = {
      "Basic Linux": "1",
      "Web Development": "2",
      IoT: "3",
      "Machine Learning": "4",
    };
    await fetchDiscussions(topicMap[option]);
  };

  // Add new discussion
  const addNewDiscussion = async () => {
    if (newDiscussion.trim() === "") return;
    try {
      const response = await fetch("https://be-cyber-academy.vercel.app/discussion/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: "66", 
          messages: newDiscussion,
          topic_id: selectedModul, 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to post new discussion:", errorData);
        alert(`Error: ${errorData.message || 'Unknown error occurred.'}`); // Show alert with error message
        return; // Exit function if error occurred
      }
  
      const newEntry = await response.json();
      setDiscussions((prev) => [...prev, newEntry]);
      setNewDiscussion("");
    } catch (error) {
      console.error("Error adding new discussion:", error);
      alert("An error occurred while adding the discussion."); // Show alert for general error
    }
  };
  // Add reply to discussion
  const handleReply = async (discussionId: number) => {
    if (replyContent.trim() === "") return;
    try {
      const response = await fetch(`https://be-cyber-academy.vercel.app/discussion/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: "66", // Replace with actual user
          messages: replyContent,
          questionId: discussionId, // Attach reply to the correct discussion
        }),
      });

      if (response.ok) {
        const replyData = await response.json();
        setDiscussions((prevDiscussions) =>
          prevDiscussions.map((discussion) =>
            discussion.id === discussionId
              ? {
                  ...discussion,
                  replies: [...(discussion.replies || []), replyData],
                }
              : discussion
          )
        );
        setReplyingTo(null);
        setReplyContent("");
      }
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  // Fetch discussions on component mount for the default module
  useEffect(() => {
    const topicMap = {
      "Basic Linux": "1",
      "Web Development": "2",
      IoT: "3",
      "Machine Learning": "4",
    };
    fetchDiscussions(topicMap[selectedModul]);
  }, []);

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

      <div className="flex items-center border border-gray-100 p-4 rounded-2xl max-w-[1100px] bg-white shadow-lg mt-6 w-full mx-auto min-w-[300px] min-w-[300px] sm:min-w-[500px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[900px] 2xl:min-w-[1100px]">
        <FontAwesomeIcon 
        icon={faPaperclip} 
        className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300" />
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
        className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300" />
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
              className="border border-gray-100 p-2 rounded w-full bg-white shadow-lg rounded-3xl"
            >
              {selectedModul}
            </button>

            {isOpen && (
              <ul className="absolute z-10 w-full border border-gray-100 bg-white shadow-lg rounded-3xl mt-1">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer p-2 hover:bg-red-500 hover:text-white"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-6 justify-start items-center w-full">
          {Array.isArray(discussions) && discussions.length > 0 ? (
            discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="border border-gray-100 p-6 rounded mb-6 bg-white shadow-lg rounded-3xl w-full  min-w-[300px] sm:min-w-[500px] md:min-w-[400px] lg:min-w-[600px] xl:min-w-[700px] 2xl:min-w-[900px] max-w-[300px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[900px]"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                    {discussion.user.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold">{discussion.user_id}</h3>
                    <span className="text-gray-500 text-sm">{discussion.time}</span>
                  </div>
                </div>
                <p>{discussion.messages}</p>

                <div className="mt-6">
                  {discussion.replies?.map((reply: any) => (
                    <div key={reply.id} className="border border-gray-100 p-4 rounded mb-4 bg-gray-100">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center text-white font-bold mr-2">
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

                  {replyingTo === discussion.id ? (
                    <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-white shadow-lg mt-4">
                      <FontAwesomeIcon icon={faPaperclip} className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300" />
                      <input
                        type="text"
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Type Reply Here"
                        className="flex-1 outline-none bg-transparent "
                      />
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        onClick={() => handleReply(discussion.id)}
                        className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setReplyingTo(discussion.id)}
                      className="text-red-600 mt-4 font-bold text-sm hover:underline"
                    >
                      Reply
                    </button>
                    
                  )}

                </div>
              </div>
            ))) : (
              <p>No discussions found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discussion;
