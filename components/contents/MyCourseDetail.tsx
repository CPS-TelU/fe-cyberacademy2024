"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import axios from 'axios';
import Link from "next/link";
import { FaFileAlt } from 'react-icons/fa';
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

interface CourseDetail {
  id: number;
  name: string;
  link: string;
  user_id: number;
  status: string;
  description: string;
  image: string;
  available_at: string;
  is_clicked: boolean;
}

const MyCourseDetail: React.FC = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [courseDetail, setCourseDetail] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const COURSE_DETAIL_API_URL = `${API_BASE_URL}/moduls/get/${slug}`;

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const response = await axios.get(COURSE_DETAIL_API_URL);
        
        if (response.data.status === "COMINGSOON") {
          setShowAlert(true);
          setTimeout(() => router.push('/lms/mycourses'), 3000); // Redirect setelah 3 detik
          return;
        }

        setCourseDetail(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course detail:", error);
        setLoading(false);
      }
    };

    fetchCourseDetail();
  }, [slug, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    );
  }

  if (showAlert) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <Alert variant="destructive" className="max-w-md">
          <AlertTitle>Course Not Available</AlertTitle>
          <AlertDescription>
            This course is not available yet. You will be redirected to the course list shortly.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!courseDetail) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="text-xl text-gray-700">Course not found</div>
      </div>
    );
  }

  return (
    <section className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[250px] xl:h-[150px] 2xl:h-[250px] rounded-2xl overflow-hidden mb-6">
        <Image
          src={courseDetail.image || "/default-image.png"}
          alt={courseDetail.name}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="text-left p-4 space-y-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600">{courseDetail.name}</h2>
        <p className="text-gray-700 2xl:min-w-[1200px] xl:min-w-[1000px] lg:min-w-[900px] md:min-w-[700px] sm:min-w-[500px] text-base sm:text-lg lg:text-xl">{courseDetail.description}</p>
        <p className="text-gray-500 text-sm">Available At: {new Date(courseDetail.available_at).toLocaleDateString()}</p>
        <div className="grid gap-4 grid-cols-1 p-4 bg-white rounded-2xl border border-gray-100 shadow-lg">
          {courseDetail.link && (
            <Link href={courseDetail.link} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center p-4 bg-white rounded-2xl shadow-md border border-gray-100 transition-transform transform hover:scale-105 cursor-pointer">
                <div className="text-red-600 text-2xl sm:text-3xl mr-4">
                  <FaFileAlt />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Module {courseDetail.id}</h3>
                  <p className="text-gray-500 text-sm sm:text-base">{courseDetail.name}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyCourseDetail;
