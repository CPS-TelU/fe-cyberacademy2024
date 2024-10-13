import React from 'react';
import CourseCard from '../ui/CourseCard';

const MyCourseCard: React.FC = () => {
  const courses = [
    { module: 'Module 1', title: 'Basic Linux & GitHub', status: 'On progress', image: '/linux.png' },
    { module: 'Module 2', title: 'Web Development', status: 'Coming soon', image: '/linux.png' },
    { module: 'Module 3', title: 'Internet of Things (IoT)', status: 'Coming soon', image: '/linux.png' },
    { module: 'Module 4', title: 'Machine Learning', status: 'Coming soon', image: '/linux.png' },
    { module: 'Module 5', title: 'Pitching', status: 'Coming soon', image: '/linux.png' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
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
