import React from 'react';

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full bor">
      <button className="absolute top-4 left-72 flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <img src="LogoAbout.png" alt="Logo" className="w-48 mx-auto mb-4 mt-6" /> 
      <div className="relative max-w-2xl mx-auto border border-gray-00 bg-white rounded-lg shadow-lg p-16 mt-6"> {/* Jarak diubah dari mt-10 ke mt-6 */}
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
          <button type="submit" className="w-full py-3 mt-6 text-white bg-gradient-to-r from-[#BA2025] to-[#133042] rounded-[12px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;