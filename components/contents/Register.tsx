// pages/index.js
export default function Home() {
    return (
      <div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center">
        <div className="text-center mb-5">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#BA2025] to-[#133042] text-transparent bg-clip-text px-8">
            REGISTRATION FORM
          </h1>
          <p className="text-sm font-medium text-gray-700 mt-2">
            The first step to start your journey
          </p>
        </div>
        <form className="bg-white px-16 py-8 rounded-lg shadow-lg w-full max-w-4xl mb-8 border border-gray-300">
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Jajang Pargoy"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">NIM</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="1010XXXX"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Class</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="TK-xx-xx"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">E-Mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="jeremy.jajang@gmail.com"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">WhatsApp Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="08xxxxxxxx"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Gender</label>
              <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>Select an option</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Faculty</label>
              <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>Select an option</option>
                <option>Faculty of Electrical Engineering</option>
                <option>Faculty of Industrial Engineering</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Year of Enrollment</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Select an option"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Major</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="S1 - Teknik xxxxx"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Document</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
  