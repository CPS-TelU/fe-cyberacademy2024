 "use client";
import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href: string; // Add this to define the link target
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

export default function ArrowButton({
  text = "Open",
  href, // Use this to pass the target link
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
            "group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-400 bg-background px-6 py-3 font-medium shadow-md transition duration-300 ease-out",
            className
          )}
        >
          <span
            style={{ background: buttonOverlayColor }}
            className={cn(
              "ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-400 text-white duration-300 group-hover:translate-x-0"
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
