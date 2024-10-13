"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    imageSrc: string;
    url: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[400px] sm:max-w-[500px] md:max-w-[770px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1200px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[120px] sm:w-[180px] md:w-[200px] lg:w-[250px] xl:w-[250px] relative flex-shrink-0 flex justify-center items-center"
            key={idx}
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div
                className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px]  flex-shrink-0 overflow-hidden"
                style={{
                  backgroundImage: `url(${item.imageSrc})`,
                  backgroundSize: "contain", // Ensure the image fits the container
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat", // Prevent the image from repeating
                }}
              ></div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
