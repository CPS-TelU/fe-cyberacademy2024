import React from 'react';
import { poppins } from '@/styles/font';
import Image from 'next/image';
import Link from 'next/link';


const LoginPage = () => {
  return (
    <div className={`relative min-h-screen w-full bg-[#ffffff] flex items-center justify-center p-4 ${poppins.className}`}>
      <div className="absolute top-12 left-4 sm:left-72 flex w-full max-w-lg md:max-w-4xl">
        <Link
          href="/"
          className="bg-[#BA2025] text-white p-3 rounded-full hover:bg-red-700"
        >
          <img src="/arrow-back-white.png" alt="Back" className="w-6 h-6" />
        </Link>
      </div>

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