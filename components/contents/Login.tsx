import React from 'react';
import { poppins } from '@/styles/font';
import Image from 'next/image';
import Link from 'next/link';


const LoginPage = () => {
  return (
    <div className={`relative min-h-screen w-full bg-[#ffffff] flex items-center justify-center p-4 ${poppins.className}`}>
      <Link href="/">
        <button
          aria-label="Go back"
          className="absolute top-12 left-4 sm:left-72 flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full z-10 transform hover:scale-105 hover:bg-red-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </Link>

      <div className="flex flex-col items-center w-full max-w-2xl">
        <Image
          src="/LogoAbout.png"
          alt="Logo"
          width={800}
          height={800}
          className="w-48 sm:w-64 mx-auto mb-4 mt-1"
        />

        <div className="relative w-full bg-white rounded-lg shadow-2xl p-6 sm:p-8 md:p-16 mt-4 border border-gray-100 rounded-2xl">
          <form>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 font-bold">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username here"
                className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-6 text-white bg-gradient-to-r from-[#BA2025] to-[#133042] rounded-[12px] hover:from-[#A31C21] hover:to-[#0F2A3C] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;