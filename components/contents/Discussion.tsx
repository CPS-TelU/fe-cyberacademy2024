"use client";

import { useState, useEffect, useRef } from 'react';
import { dmSans } from '@/styles/font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// Define the possible module options as a union of string literals
type ModuleOption = 'Basic Linux' | 'Web Development' | 'IoT' | 'Machine Learning';

// Define discussionsData with keys matching the ModuleOption type
const discussionsData: Record<ModuleOption, { id: number; user: string; time: string; content: string }[]> = {
  'Web Development': [
    {
      id: 1,
      user: 'Citra Kusumadewi Sribawono',
      time: '1 day ago',
      content:
        "Linux is an open-source operating system (OS) that manages a computer's hardware and resources, such as memory, CPU, and storage.",
    },
  ],
  'Basic Linux': [
    {
      id: 2,
      user: 'Agung Kusumadewi Sribawono',
      time: '1 days ago',
      content:
        "Linux is an open-source operating system (OS) that manages a computer's hardware and resources, such as memory, CPU, and storage.",
    },
  ],
  'IoT': [
    {
      id: 3,
      user: 'Jajang Miharja',
      time: '3 days ago',
      content:
        "IoT Iot apa yang Iot?",
    },
  ],
  'Machine Learning': [
    {
      id: 4,
      user: 'Niki Manurung',
      time: '5 days ago',
      content:
        "Machine learning apaan?",
    },
  ],
};

const Discussion = () => {
  const [selectedModul, setSelectedModul] = useState<ModuleOption>('Web Development');
  const [filter, setFilter] = useState('Newest');
  const [newDiscussion, setNewDiscussion] = useState(''); // New state for input
  const [discussions, setDiscussions] = useState(discussionsData[selectedModul]);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const options: ModuleOption[] = ['Basic Linux', 'Web Development', 'IoT', 'Machine Learning'];

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: ModuleOption) => {
    setSelectedModul(option);
    setDiscussions(discussionsData[option]);
    setIsOpen(false);
  };

  const addNewDiscussion = () => {
    if (newDiscussion.trim() === '') return; // Prevent adding empty content
    const newId = discussions.length + 1;
    const newEntry = {
      id: newId,
      user: 'New User', // You can change this to a dynamic value
      time: 'Just now',
      content: newDiscussion,
    };
    setDiscussions((prev) => [...prev, newEntry]);
    setNewDiscussion(''); // Clear the input field
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className={`p-4 md:p-10 lg:p-12 ml-0 md:ml-10 ${dmSans.className}`}>
      <h1 className="text-red-600 text-2xl md:text-4xl lg:text-5xl font-bold mt-10">Forum Discussion</h1>
      <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-white shadow-lg mt-6">
        <FontAwesomeIcon icon={faPaperclip} className="w-6 h-6 text-gray-400 mr-3 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300" />                    
        <input
            type="text"
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
            placeholder="Type New Discussion Here"
            className="flex-1 outline-none bg-transparent"
        />
        <FontAwesomeIcon icon={faPaperPlane} onClick={addNewDiscussion} className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300" />
    </div>
      <div className="flex flex-col md:flex-row mt-6 md:mt-10">
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white border border-gray-100 p-4 md:p-6 shadow-lg rounded-2xl h-auto md:h-[240px]">
          <h2 className="font-bold mb-4">Filter Discussion</h2>
          <div className="border-b border-gray-300 mb-4">
            <label className="block mb-2">
              <input
                type="radio"
                name="filter"
                value="Newest"
                checked={filter === 'Newest'}
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
                checked={filter === 'Oldest'}
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
        <div className="w-full md:w-2/3 lg:w-3/4 mt-6 md:mt-0 md:ml-6 lg:ml-10">
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
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer p-2 hover:bg-red-500 hover:text-white"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="border border-gray-100 p-4 rounded mb-4 bg-white shadow-lg rounded-3xl flex flex-col justify-between"
            style={{ height: '200px', overflowY: 'auto', minWidth: '900px', maxWidth: '900px' }} // Set minimum and maximum width
          >
            <div className="flex items-center mb-2 ">
              <div className="w-10 h-10 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                {discussion.user.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-bold">{discussion.user}</h3>
                <span className="text-gray-500 text-sm">{discussion.time}</span>
              </div>
            </div>
            <p className="mb-4">{discussion.content}</p>
            <button className="text-red-600 font-bold text-left">Reply</button>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;
