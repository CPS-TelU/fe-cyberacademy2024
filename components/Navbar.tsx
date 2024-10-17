"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dmSans } from "../styles/font";
import MobileNavDash from "./MobileNavDash";

const NavbarLms = () => {
  const pathname = usePathname();
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavigationClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

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
        <div className="flex items-center">
          <Link href="/" onClick={(e) => handleNavigationClick("/", e)}>
            <Image src="/logocps.png" alt="logo" width={130} height={50} />
          </Link>
        </div>

        <div className="flex-1 flex justify-center gap-10">
          <Link
            href="/lms"
            onClick={(e) => handleNavigationClick("/lms", e)}
            className={`font-medium ${
              pathname === "/lms"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/lms/mycourses"
            onClick={(e) => handleNavigationClick("/lms/mycourses", e)}
            className={`font-medium ${
              pathname === "/lms/mycourses"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            My Courses
          </Link>
          <Link
            href="/lms/discussion"
            onClick={(e) => handleNavigationClick("/lms/discussion", e)}
            className={`font-medium ${
              pathname === "/lms/discussion"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            Discussion
          </Link>
        </div>

        <div className="relative flex items-center" ref={dropdownRef}>
          <div className="cursor-pointer flex items-center" onClick={toggleDropdown}>
            <Image src="/profile-icon.png" alt="Profile" width={40} height={40} />
            <Image
              src="/down-arrow.png"
              alt="Dropdown Arrow"
              width={24}
              height={24}
              className="ml-2"
            />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-40 w-48 bg-white border border-gray-200 shadow-lg rounded-2xl z-10">
              <Link
                href="/lms/profile"
                className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-red-600 hover:rounded-t-2xl "
              >
                Profile
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-red-600 hover:rounded-b-2xl"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>
      <MobileNavDash/>
    </header>
  );
};

export default NavbarLms;
