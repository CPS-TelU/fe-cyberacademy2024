"use client";
import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define props interface once
interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href: string; // Define the link target
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

// First Button Component: ArrowButton
export function ArrowButton({
  text = "Open",
  href,
  textColor = "#BA2025",
  buttonOverlayColor = "#BA2025",
  borderColor = "#BA2025",
  iconColor = "white",
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <Link href={href} passHref>
      <button
        style={{ borderColor: borderColor }}
        {...props}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 bg-background px-6 py-3 font-medium shadow-md transition duration-300 ease-out",
          className
        )}
      >
        <span
          style={{ background: buttonOverlayColor }}
          className={cn(
            "ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center duration-300 group-hover:translate-x-0"
          )}
        >
          <MoveRight style={{ color: iconColor }} />
        </span>
        <span
          style={{ color: textColor }}
          className={cn(
            "absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover:translate-x-full"
          )}
        >
          {text}
        </span>
        <span className="invisible relative">{text}</span>
      </button>
    </Link>
  );
}

// Second Button Component: CustomButton
export function CustomButton({
  text = "Open",
  href,
  textColor = "white",
  borderColor = "#BA2025", // purple border color
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <Link href={href} passHref>
      <button
        className={cn(
          "rounded-xl relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#BA2025] active:shadow-none shadow-lg bg-gradient-to-tr from-[#BA2025] to-red-500 border-[#BA2025] text-white",
          className
        )}
        {...props}
      >
        <span
          className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"
        ></span>
        <span style={{ color: textColor }} className="relative">
          {text}
        </span>
      </button>
    </Link>
  );
}