"use client";

import { poppins } from "@/styles/font";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SuccessAlert from "../ui/Alerts"; 
import Link from "next/link";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    className: "",
    email: "",
    noHp: "",
    gender: "Select your gender",
    faculty: "Select your faculty",
    year: "Select your year of enrollment",
    major: "",
    password: "",
    document: "",
    github: "",
  });
  const [isReady, setIsReady] = useState(false);
  const [showFacultyDropdown, setShowFacultyDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);

  const [alertMessage, setAlertMessage] = useState(""); // State for alert message
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // State for success or failure alert

  const faculties = ["Electrical Engineering", "Industrial Engineering"];
  const years = ["2022", "2023", "2024"];
  const genders = ["Male", "Female"];

  const facultyRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const genderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        facultyRef.current &&
        !facultyRef.current.contains(event.target as Node)
      ) {
        setShowFacultyDropdown(false);
      }
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setShowYearDropdown(false);
      }
      if (
        genderRef.current &&
        !genderRef.current.contains(event.target as Node)
      ) {
        setShowGenderDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const REGISTRATION_API_URL = `${API_BASE_URL}/auth/register`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTRATION_API_URL,
        formData
      );
      setIsSuccess(true);
      setAlertMessage("Registration successful!");
    } catch (err: any) {
      console.error("Error registering:", err.response?.data?.message);
      const errorMessage = err.response?.data?.message || "Failed to register. Please try again.";
      
      setIsSuccess(false);
      setAlertMessage(errorMessage);
    }
  };
  

  const handleCloseAlert = () => {
    setIsSuccess(null);
    setAlertMessage("");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${poppins.className}`}
    >
      <div className="w-full max-w-lg flex md:max-w-4xl">
        <Link
          href="/"
          className="bg-[#BA2025] text-white p-3 rounded-full hover:bg-red-700"
        >
          <img src="/arrow-back-white.png" alt="Back" className="w-4 h-4" />
        </Link>
      </div>
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#BA2025] to-[#133042] text-transparent bg-clip-text px-4 md:px-8">
          REGISTRATION FORM
        </h1>
        <p className="text-lg font-medium text-gray-700 mt-2">
          The first step to start your journey
        </p>
      </div>


      <form
        onSubmit={handleSubmit}
        className="bg-white px-6 md:px-16 py-8 rounded-2xl shadow-2xl w-full max-w-lg md:max-w-4xl mb-8 border border-gray-100"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="Sayyid"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">NIM</label>
            <input
              type="text"
              name="nim"
              value={formData.nim}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="1101213340"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Class</label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="TT-45-09"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">E-Mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="sayyid@gmail.com"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">WhatsApp Number</label>
            <input
              type="text"
              name="noHp"
              value={formData.noHp}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="085161735214"
            />
          </div>
          <div ref={genderRef} className="relative mb-4">
            <label className="block text-sm font-medium">Gender</label>
            <div
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => setShowGenderDropdown(!showGenderDropdown)}
            >
              {formData.gender}
            </div>
            {showGenderDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto">
                {genders.map((gender, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                    onClick={() => {
                      handleDropdownSelect("gender", gender);
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
              {formData.faculty}
            </div>
            {showFacultyDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto">
                {faculties.map((faculty, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                    onClick={() => {
                      handleDropdownSelect("faculty", faculty);
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
            <label className="block text-sm font-medium">
              Year of Enrollment
            </label>
            <div
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              {formData.year}
            </div>
            {showYearDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto">
                {years.map((year, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                    onClick={() => {
                      handleDropdownSelect("year", year);
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
            name="major"
            value={formData.major}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="Informatics Engineering"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Document</label>
          <input
            type="text"
            name="document"
            value={formData.document}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="Paste your document link here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">GitHub Account</label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="https://github.com/sayyid"
          />
        </div>

        <div className="flex items-center mb-4 mt-4">
          <input
            type="checkbox"
            checked={isReady}
            onChange={() => setIsReady(!isReady)}
            className="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm">
            I'm Ready To Start My Journey
          </label>
        </div>

        {alertMessage && (
        <div className="mb-4 w-full max-w-lg md:max-w-4xl">
          <SuccessAlert
            message={alertMessage}
            isSuccess={isSuccess}
            onClose={handleCloseAlert}
          />
        </div>
      )}

        <button
          type="submit"
          className={`w-full bg-[#BA2025] text-white font-bold py-4 px-4 rounded-lg ${
            isReady ? "hover:bg-red-500" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isReady}
        >
          Submit
        </button>
      </form>

     
    </div>
  );
};

export default RegistrationPage;
