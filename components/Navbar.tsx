"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dmSans } from "../styles/font";

const Header = () => {
  const pathname = usePathname();
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);

  const handleNavigationClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current || currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="flex items-center">
          <Link href="/" onClick={(e) => handleNavigationClick("/", e)}>
            <Image src="/logocps.png" alt="logo" width={130} height={50} />
          </Link>
        </div>
        <div className="flex-1 flex justify-center gap-10">
          <Link
            href="/dashboard"
            onClick={(e) => handleNavigationClick("/dashboard", e)}
            className={`font-medium ${
              pathname === "/dashboard"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/my-courses"
            onClick={(e) => handleNavigationClick("/my-courses", e)}
            className={`font-medium ${
              pathname === "/my-courses"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            My Courses
          </Link>
          <Link
            href="/discussion"
            onClick={(e) => handleNavigationClick("/discussion", e)}
            className={`font-medium ${
              pathname === "/discussion"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            Discussion
          </Link>
        </div>

        <div className="flex items-center">
          <div className="cursor-pointer">
            <Image src="/profile-icon.png" alt="Profile" width={40} height={40} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
