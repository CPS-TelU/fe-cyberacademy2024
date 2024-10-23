"use client";

import { poppins } from "@/styles/font";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SuccessAlert from "../ui/Alerts";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { FileUp } from "lucide-react";


const RegistrationPage = () => {
  const initialFormData = {
    name: "",
    nim: "",
    className: "",
    email: "",
    noHp: "",
    gender: "Pilih jenis kelamin",
    faculty: "Pilih fakultas",
    year: "Pilih tahun masuk",
    major: "",
    document: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isReady, setIsReady] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [showFacultyDropdown, setShowFacultyDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const faculties = [
    "Fakultas Teknik Elektro",
    "Fakultas Komunikasi dan Ilmu Sosial",
    "Fakultas Informatika",
    "Fakultas Rekayasa Industri",
    "Fakultas Ekonomi Bisnis",
    "Fakultas Industri Kreatif",
    "Fakultas Ilmu Terapan",
  ];
  const years = ["2022", "2023", "2024"];
  const genders = ["Laki-Laki", "Perempuan"];

  const facultyRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const genderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const allFieldsValid =
      formData.name.trim() !== "" &&
      formData.nim.trim() !== "" &&
      formData.className.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.noHp.trim() !== "" &&
      formData.major.trim() !== "" &&
      formData.document.trim() !== "" &&
      formData.faculty !== "Pilih fakultas" &&
      formData.year !== "Pilih tahun masuk" &&
      formData.gender !== "Pilih jenis kelamin";

    setIsReady(allFieldsValid);
  }, [formData]);

  const handleCheckboxChange = () => {
    if (isReady) {
      setIsCheckboxChecked(!isCheckboxChecked);
    }
  };

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
    setLoading(true);

    try {
      await axios.post(REGISTRATION_API_URL, formData);
      setIsSuccess(true);
      setAlertMessage(
        "Registrasi berhasil! Silakan cek email Anda secara berkala untuk informasi lebih lanjut."
      );
      setFormData(initialFormData);
      setIsCheckboxChecked(false);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        const errorMessage =
          err.response.data?.message || "Gagal mendaftar. Silakan coba lagi.";
        setIsSuccess(false);
        setAlertMessage(errorMessage);
      } else {
        setAlertMessage("Terjadi kesalahan yang tidak diketahui.");
      }
    }
    finally {
      setLoading(false); // Set loading to false after submission
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
          <img src="/arrow-back-white.png" alt="Kembali" className="w-4 h-4" />
        </Link>
      </div>
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#BA2025] to-[#133042] text-transparent bg-clip-text px-4 md:px-8">
          FORMULIR PENDAFTARAN
        </h1>
        <p className="text-lg font-medium text-gray-700 mt-2">
          Langkah pertama untuk memulai perjalanan Anda
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white px-6 md:px-16 py-8 rounded-2xl shadow-2xl w-full max-w-lg md:max-w-4xl mb-8 border border-gray-100"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium">Nama</label>
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
            <label className="block text-sm font-medium">Kelas</label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  className: e.target.value.toUpperCase(),
                })
              }
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
            <label className="block text-sm font-medium">Nomor WhatsApp</label>
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
            <label className="block text-sm font-medium">Jenis Kelamin</label>
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
            <label className="block text-sm font-medium">Fakultas</label>
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
            <label className="block text-sm font-medium">Tahun Masuk</label>
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
          <label className="block text-sm font-medium">Jurusan</label>
          <input
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="Teknik Telekomunikasi"
          />
        </div>
        <div className="mb-4">
          <Alert>
            <FileUp className="h-4 w-4" />
            <AlertTitle>Perhatian !!</AlertTitle>
            <AlertDescription>
              Pastikan semua dokumen rekrutmen sesuai dengan syarat dan
              ketentuan, seperti:
              <br />
              a. CV dalam Format ATS-Friendly
              <div className="text-blue-500">
                <Link
                  href="https://drive.google.com/file/d/1zaVxmaSS8HRxb9tKd6Yw8Cv2sKUELHJR/view?usp=drivesdk"
                  target="_blank"
                >
                  🔗Link Contoh CV ATS
                </Link>
              </div>
              b. Foto Formal 4x6 & Portfolio (jika ada lebih baik)
              <br />
              c. KHS
              <br />
              d. Motivation Letter
              <div className="text-blue-500">
                <Link
                  href="https://drive.google.com/file/d/1LynFik_Kq7a7fy-FJLHeaZTV9Atlct1b/view?usp=drivesdk"
                  target="_blank"
                >
                  🔗Link Contoh Motivation Letter
                </Link>
              </div>
              Untuk informasi lebih detail, silakan lihat halaman utama situs
              web ini.
            </AlertDescription>
          </Alert>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Dokumen</label>
          <input
            type="text"
            name="document"
            value={formData.document}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            placeholder="Tempelkan link dokumen di sini"
          />
        </div>
        <div className="flex items-center mb-4 mt-4">
          <input
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
            disabled={!isReady}
            className={`h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded ${
              isReady ? "" : "opacity-50 cursor-not-allowed"
            }`}
          />
          <label className="ml-2 text-sm">
            Saya Siap Memulai Perjalanan Saya
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
          disabled={!isReady && !isCheckboxChecked}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
