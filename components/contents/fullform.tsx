"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/LogoBlack.png";
import { poppins } from "@/styles/font";

const Fullform = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 9000); // delay 9 seconds
    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []);

return (
    <div className={`${poppins.className} min-h-screen flex flex-col justify-center items-center`}>
      <div className="relative w-full flex flex-col items-center">
        <Image
          src="/LogoAbout.png"
          alt="CPS"
          width={200}
          height={200}
          className="mx-auto w-20 mb-4 animate-pulse sm:w-32 sm:mb-8 md:w-40 md:mb-10 lg:w-44 lg:mb-12"
        />
        <div className="overflow-hidden text-center">
          <p
            className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-600 animate-marquee font-viga font-regular text-[30px] sm:text-[50.5px] md:text-[55px] lg:text-[65px] drop-shadow-lg shadow-red-400"
          >
            REGISTRATION ARE CLOSED
          </p>
          <p className="text-gray-600 mt-4 font-medium text-lg sm:text-xl md:text-2xl">
            Thank you for your interest. Please stay tuned for future updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fullform;
