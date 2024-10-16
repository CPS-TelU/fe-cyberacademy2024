export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center p-4 relative">
      <button className="absolute top-6 left-4 sm:left-72 flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full z-10 transform hover:scale-105 hover:bg-red-700 transition-colors duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="text-center mb-5 relative">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#BA2025] to-[#133042] text-transparent bg-clip-text px-4 md:px-8">
          REGISTRATION FORM
        </h1>
        <p className="text-sm font-medium text-gray-700 mt-2">
          The first step to start your journey
        </p>
      </div>
      <form className="bg-white px-6 md:px-16 py-8 rounded-lg shadow-2xl w-full max-w-md md:max-w-xl lg:max-w-2xl mb-8 border border-gray-300">
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
              placeholder="08xxxxxxxx"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500">
              <option>Select an option</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Faculty</label>
            <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500">
              <option>Select an option</option>
              <option>Faculty of Electrical Engineering</option>
              <option>Faculty of Industrial Engineering</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Year of Enrollment</label>
            <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500">
              <option>Select an option</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
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
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
