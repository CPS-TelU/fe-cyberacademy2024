"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-10 md:py-20 px-4">
      {/* Responsive Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
        The <span className="gradient-text">Knowledge</span> You Will Learn
      </h2>

      {/* Carousel Component */}
      <div className="max-w-7xl mx-auto">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const data = [
  {
    src: "./linux.svg",
    title: "Basic Linux",
  },
  {
    src: "./app-development.svg",
    title: "Website Development",
  },
  {
    src: "./internet-of-things.svg",
    title: "Internet of Things",
  },
  {
    src: "/machine-learning.svg",
    title: "Machine Learning",
  },
  {
    src: "./pitching.svg",
    title: "Pitching Idea",
  },
];
