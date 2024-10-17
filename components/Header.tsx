"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { dmSans } from "../styles/font";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // New state for tracking scroll direction
  const lastScrollY = useRef(0); // Reference to store last scroll position
  const [activeSection, setActiveSection] = useState<string>("home"); // Track active section

  const sections = ["home", "about", "benefit", "course", "requirement", "medpart"];


  const handleNavigationClick = (id: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = document.querySelector("header")?.offsetHeight || 0; // Get header height
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerOffset; // Calculate position with offset

      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section based on visible section
          }
        });
      },
      {
        threshold: 0.6, // Adjusts when a section is considered "active" (60% visible)
      }
    );

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <header
      className={`${dmSans.className} fixed top-0 w-full transition-transform duration-300 z-[9999] ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className="mx-auto hidden lg:flex max-w-[1200px] items-center justify-between p-4 rounded-full bg-white shadow-lg"
        style={{ transform: "translateY(40%)" }}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2" onClick={(e) => handleNavigationClick("home", e)}>
            <Image src="/logocps.png" alt="logo" width={130} height={50} />
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center gap-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavigationClick(section, e)}
              className={`font-medium ${
                activeSection === section ? "text-red-600" : "text-gray-700 hover:text-red-600"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <Button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
            <Link href="/registration">Register Now</Link>
          </Button>
        </div>
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
