import React from 'react';
import Image from "next/image";

const Biodata: React.FC = () => {
  const profileData = {
    name: "Citra Kusumadewi Sribawono",
    email: "csribawono@gmail.com",
    phoneNumber: "081234934325",
    nim: "101012324832",
    Group: "Gryffindor",
    faculty: "Electrical Engineering Faculty",
    major: "Telecommunication Engineering",
    className: "TT-47-INT"
  };

  return (
    <div className="bg-white p-6 mt-24 rounded-lg shadow-md w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-3/4 2xl:w-2/3 mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
          <Image src="/profile-icon.png" alt="Profile" width={50} height={50} className="rounded-full" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{profileData.name}</h2>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#BA2025]">About Participant</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <p><span className="font-semibold">E-mail:</span> {profileData.email}</p>
          <p><span className="font-semibold">Faculty:</span> {profileData.faculty}</p>
          <p><span className="font-semibold">Phone number:</span> {profileData.phoneNumber}</p>
          <p><span className="font-semibold">Major:</span> {profileData.major}</p>
          <p><span className="font-semibold">NIM:</span> {profileData.nim}</p>
          <p><span className="font-semibold">Class:</span> {profileData.className}</p>
          <p><span className="font-semibold">Group:</span> {profileData.Group}</p>
        </div>
      </div>
    </div>
  );
};

export default Biodata;