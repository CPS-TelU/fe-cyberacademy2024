import React from "react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { CustomButton  } from "./AniButton";

interface CourseCardProps {
  image: string;
  module: string;
  title: string;
  status: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  module,
  title,
  status,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-[200px]">
        <Image
          src={image}
          alt="course image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7">
        <p className="text-[#454545] text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md 2xl:text-lg">
          {module}
        </p>
        <h2 className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-[#000000]">
          {title}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-[#454545] text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md 2xl:text-lg">
            {status}
          </p>
          <CustomButton text="View Course" href="/lms/mycourses/coursedetail" className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
