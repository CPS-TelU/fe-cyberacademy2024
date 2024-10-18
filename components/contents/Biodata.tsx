import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Biodata: React.FC = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    nim: "",
    Group: "",
    faculty: "",
    major: "",
    className: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  // Fetch user profile data when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      const token = Cookies.get('token');  // Get the token from cookies

      if (!token) {
        router.push('/login'); // Redirect to login if no token is found
        return;
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profile`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}` // Send the token with the request
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        
        // Update state with the user's profile data
        setProfileData({
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          nim: data.nim,
          Group: data.Group,
          faculty: data.faculty,
          major: data.major,
          className: data.className
        });
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError('Unable to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;  // Show a loading state while data is being fetched
  }

  if (error) {
    return <div>{error}</div>;  // Display error if there was a problem fetching the data
  }

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
