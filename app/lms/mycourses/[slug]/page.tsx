"use client";

import MyCoursesDetail from "@/components/contents/MyCourseDetail";
import { useParams } from "next/navigation";

export default function course() {
    return (
      <main className="relative flex flex-col items-center justify-center px-4 pt-24 z-[999]">
        <MyCoursesDetail/>
      </main>
    );
  }