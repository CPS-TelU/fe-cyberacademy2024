"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/Skeleton";


interface ProfileData {
  id: number;
  name: string;
  email: string;
  noHp: string;
  nim: string;
  Group: string;
  faculty: string;
  major: string;
  className: string;
}

const Biodata: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    id: 0,
    name: "",
    email: "",
    noHp: "",
    nim: "",
    Group: "",
    faculty: "",
    major: "",
    className: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = Cookies.get("token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/whoami`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch profile data");
        }

        const result = await response.json();

        if (result.status) {
          const data = result.data;
          setProfileData({
            id: data.id,
            name: data.name,
            email: data.email,
            noHp: data.noHp,
            nim: data.nim,
            Group: data.Group || "",
            faculty: data.faculty,
            major: data.major,
            className: data.className,
          });
        } else {
          throw new Error(result.message);
        }
      } catch (err: unknown) {
        console.error("Error fetching profile data:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [router]);

  if (loading) {
    return (
      <div className="bg-white p-6 mt-24 rounded-lg shadow-md w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-3/4 2xl:w-2/3 mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <Skeleton className="w-12 h-12 rounded-full" />
          <Skeleton className="w-48 h-8 mt-4 sm:mt-0" />
        </div>

        <div className="mt-6">
          <Skeleton className="w-32 h-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-6" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white p-6 mt-24 rounded-lg shadow-md w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-3/4 2xl:w-2/3 mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
          <Image
            src="/profile-icon.png"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {profileData.name}
          </h2>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#BA2025]">
          About Participant
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <p>
            <span className="font-semibold">E-mail:</span> {profileData.email}
          </p>
          <p>
            <span className="font-semibold">Faculty:</span>{" "}
            {profileData.faculty}
          </p>
          <p>
            <span className="font-semibold">Phone number:</span>{" "}
            {profileData.noHp}
          </p>
          <p>
            <span className="font-semibold">Major:</span> {profileData.major}
          </p>
          <p>
            <span className="font-semibold">NIM:</span> {profileData.nim}
          </p>
          <p>
            <span className="font-semibold">Class:</span>{" "}
            {profileData.className}
          </p>
          {/* <p>
            <span className="font-semibold">Group:</span> {profileData.Group}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Biodata;
