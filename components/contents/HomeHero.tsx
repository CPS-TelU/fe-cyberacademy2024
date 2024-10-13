import Link from "next/link";
import React from "react";
import ArrowButton from "../ui/AniButton";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="flex flex-col justify-center items-center  py-10 md:py-20">
      {/* Content */}
      <div className="text-center items-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold items-center text-center mb-4 mx-auto w-[90%] sm:w-[600px] md:w-[800px] lg:w-[900px] 2xl:w-[1000px]">
          Welcome To <span className="gradient-text">Cyber Academy</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          Brace Yourself For A Whole New Adventure
        </p>
        <ArrowButton text="Let's Get Started" href="/" className="mt-8" />
      </div>

      {/* Image Section */}
      <div className="mt-12 w-full flex justify-center px-4 md:px-0">
        <Image
          src="/oplab.jpg" // Replace with your image path
          alt="Hero Image"
          width={1200}
          height={800}
          objectFit="cover"
          className="rounded-2xl w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[90%] h-auto"
        />
      </div>
    </section>
  );
};

export default HomeHero;
