import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section
  const menuRef = useRef<HTMLDivElement>(null);
  const sections = ["home", "about", "benefit", "course", "requirement", "medpart"];
  
  const navHeight = 80; // Tinggi navbar, sesuaikan dengan tinggi navbar Anda

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle scrolling to section with offset
  const handleNavigationClick = (id: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      setActiveSection(id); // Set the active section state
      closeMenu(); // Close the menu after click
    }
  };

  return (
    <nav
      ref={menuRef}
      className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 lg:block lg:hidden max-h-screen overflow-y-auto "
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href={`#home`}
          onClick={(e) => handleNavigationClick("home", e)}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logocps.png"
            className="h-8 left-6"
            alt="Logo"
            width={110}
            height={50}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Menu Button */}
        <div className="flex space-x-3 rtl:space-x-reverse">
          <a
            href="/registration"
            rel="noopener noreferrer"
            className="bg-red-600 text-white text-m px-4 py-2 rounded-full hover:bg-red-700"
            onClick={closeMenu}
          >
            Register Now
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 gap-1 sm:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 sm:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleNavigationClick(section, e)}
                  className={`font-medium ${
                    activeSection === section ? "text-red-600" : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
