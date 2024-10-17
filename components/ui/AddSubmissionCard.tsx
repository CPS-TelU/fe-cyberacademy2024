import React from 'react';

const SubmissionCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200 mt-12  w-full max-w-[350px] sm:max-w-[400px] md:max-w-[1180px] lg:w-[900px] lg:h-[450px] xl:w-[1300px] mx-auto">
      {children}
    </div>
  );
};

export default SubmissionCard;
