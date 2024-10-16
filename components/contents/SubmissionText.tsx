import React from 'react';

const SubmissionText: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600 mb-4">Add Submission</h1>
      
      {/* Flex container to hold the label and image side by side */}
      <div className="mb-4 flex items-center space-x-2">
        <img
          src="/Vector.png" // Update with the actual image path
          alt="File Icon"
          className="h-6 w-6" // Adjust the size as needed
        />
        <label className="text-gray-700 font-medium">File</label>
      </div>

      <div className="border-dashed border-2 border-gray-400 bg-[#D9D9D9] rounded-lg p-20 mb-4 flex justify-center items-center text-gray-500">
        <div className="text-center">
          <img
            src="/path-to-your-image.png" // Update with the actual image path
            alt="Upload"
            className="h-12 w-12 mb-3 mx-auto"
          />
          <p>You can drag and drop files here to add them.</p>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Save changes
        </button>
        <button className="px-4 py-2 bg-white border-2 border-red-300 text-gray-700 rounded-md hover:bg-gray-400">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SubmissionText;
