"use client";;
import Image from "next/image";
import { useState, useEffect } from "react";
import { SkeletonAbout }  from "../ui/SkeletonCard";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700); // Simulate loading delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (isLoading) {
    return (
        <SkeletonAbout /> 
    );
  }
  return (
    <section className="px-6 md:py-12 md:px-12 xl:px-28  ">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          What is <span className="gradient-text">Cyber Academy</span>?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        {/* Image Section */}
        <div className="md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 flex justify-center">
          <Image
            src="/castle.png" // Ganti dengan path gambar yang benar
            alt="Cyber Academy Castle"
            width={1000}
            height={1000}
            className="w-full max-w-[90%] md:max-w-[110%] lg:max-w-[120%] xl:max-w-[130%] h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 px-4 md:px-8">
          <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-justify">
            Welcome to the <span className="gradient-text">Cyber Academy</span>,
            where learning transforms into an extraordinary adventure! Here,
            innovation knows no bounds, teamwork is at the heart of everything
            we do, and every new member contributes to a rich and vibrant
            tapestry of knowledge. Embark on a journey filled with discovery,
            creativity, and endless possibilities. Are you ready to follow the
            white rabbit and explore the unknown?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
