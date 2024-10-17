"use client";

import { poppins } from "@/styles/font";
import React, { useState, useEffect, useRef } from "react";

const RegistrationPage = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("Select you faculty");
  const [selectedYear, setSelectedYear] = useState("Select an option");
  const [selectedGender, setSelectedGender] = useState("Select an option");
  const [showFacultyDropdown, setShowFacultyDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);

  const faculties = [
    "Faculty of Electrical Engineering",
    "Faculty of Industrial Engineering",
  ];

  const years = ["2022", "2023", "2024"];
  const genders = ["Male", "Female"];

  const facultyRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const genderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (facultyRef.current && !facultyRef.current.contains(event.target as Node)) {
        setShowFacultyDropdown(false);
      }
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setShowYearDropdown(false);
      }
      if (genderRef.current && !genderRef.current.contains(event.target as Node)) {
        setShowGenderDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${poppins.className}`}>
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#BA2025] to-[#133042] text-transparent bg-clip-text px-4 md:px-8">
          REGISTRATION FORM
        </h1>
        <p className="text-lg font-medium text-gray-700 mt-2">
          The first step to start your journey
        </p>
      </div>
      <form className="bg-white px-6 md:px-16 py-8 rounded-2xl shadow-2xl w-full max-w-lg md:max-w-4xl mb-8 border border-gray-100">
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="Jajang Pargoy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">NIM</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="1010XXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Class</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="TK-xx-xx"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">E-Mail</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="jeremy.jajang@gmail.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">WhatsApp Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="08xxxxx"
            />
          </div>
          <div ref={genderRef} className="relative mb-4">
            <label className="block text-sm font-medium">Gender</label>
            <div
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => setShowGenderDropdown(!showGenderDropdown)}
            >
              {selectedGender}
            </div>
            {showGenderDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto">
                {genders.map((gender, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                    onClick={() => {
                      setSelectedGender(gender);
                      setShowGenderDropdown(false);
                    }}
                  >
                    {gender}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div ref={facultyRef} className="relative mb-4">
            <label className="block text-sm font-medium">Faculty</label>
            <div
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => setShowFacultyDropdown(!showFacultyDropdown)}
            >
              {selectedFaculty}
            </div>
            {showFacultyDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto">
                {faculties.map((faculty, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                    onClick={() => {
                      setSelectedFaculty(faculty);
                      setShowFacultyDropdown(false);
                    }}
                  >
                    {faculty}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div ref={yearRef} className="relative mb-4">
            <label className="block text-sm font-medium">Year of Enrollment</label>
            <div
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              {selectedYear}
            </div>
            {showYearDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto">
                {years.map((year, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                    onClick={() => {
                      setSelectedYear(year);
                      setShowYearDropdown(false);
                    }}
                  >
                    {year}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Major</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="S1 - Teknik xxxxx"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Document</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="Paste Your Link Here"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm">I'm Ready To Start My Journey</label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#BA2025] text-white py-2 px-4 rounded-lg hover:bg-red-500 "
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
