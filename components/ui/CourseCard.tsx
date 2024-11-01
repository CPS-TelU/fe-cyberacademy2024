"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from "./AniButton";
import Link from "next/link";

interface CourseCardProps {
  id: number;
  image: string;
  module: string;
  title: string;
  status: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  image,
  module,
  title,
  status,
}) => {
  const isComingSoon = status === "COMINGSOON";

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        isComingSoon ? "opacity-50 cursor-not-allowed disabled" : ""
      }`}
    >
      <div className="relative w-full h-[200px]">
        <Image
          src={image}
          alt="course image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7">
        <p className="text-[#454545] text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md 2xl:text-lg lowercase">
          Module {module}
        </p>
        <h2 className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-[#000000] lowercase">
          {title}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-[#454545] text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md 2xl:text-lg lowercase">
            {status}
          </p>
          {isComingSoon ? (
            <button
              className="mt-8 bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed rounded-xl"
              disabled
            >
              Coming Soon
            </button>
          ) : (
            <Link href={`/lms/mycourses/${id}`} passHref>
              <CustomButton
                text="View Course"
                href={`/lms/mycourses/${id}`} // Module ID as link when status is not COMINGSOON
                className="mt-8"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
