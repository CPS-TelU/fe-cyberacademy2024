import React from 'react';

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#ffffff] flex items-center justify-center p-4">
      <button className="absolute top-12 left-4 sm:left-72 flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full z-10 transform hover:scale-105 hover:bg-red-700 transition-colors duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="flex flex-col items-center w-full max-w-2xl">
        <img src="LogoAbout.png" alt="Logo" className="w-48 sm:w-64 mx-auto mb-4 mt-1" />
        <div className="relative w-full bg-white rounded-lg shadow-2xl p-6 sm:p-8 md:p-16 mt-4 border border-gray-200">
          <form>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700">UserName</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username here"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-6 text-white bg-gradient-to-r from-[#BA2025] to-[#133042] rounded-[12px] hover:from-[#A31C21] hover:to-[#0F2A3C] transition-colors duration-300"
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
