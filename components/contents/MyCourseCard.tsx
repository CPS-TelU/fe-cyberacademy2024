"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../ui/CourseCard';

interface Course {
  module: string;
  title: string;
  name: string;
  status: string;
  description: string;
  image: string;
}

const MyCourseCard: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://be-cyber-academy.vercel.app/api/moduls/get');
        const modules = response.data.map((mod: any) => ({
          module: mod.id,
          title: mod.name,
          description: mod.description,
          status: mod.status,
          image: mod.image || '/default-image.png' // Set default image if API image is not available
        }));
        setCourses(modules);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
          <div
            className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#BA2025] mb-8">My Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourseCard;
