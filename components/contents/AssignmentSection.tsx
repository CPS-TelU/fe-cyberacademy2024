"use client";

import React, { useEffect, useState } from 'react';
import AssignmentCard from '../ui/AssignmentCard2';
import Image from 'next/image';
import { poppins } from '@/styles/font';
import SkeletonAssignmentSection from '../ui/SkeletonCard';
import { useParams } from 'next/navigation'; // Import useParams

interface Task {
    id: string;
    title: string;
    description: string;
    opened_at: string;
    closed_at: string;
    module: string;
    group_id: string;
    file: string;
}

const AssignmentSection: React.FC = () => {
    const { slug } = useParams(); // Get slug from URL
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // Include slug in the API URL
                const response = await fetch(`https://be-cyber-academy.vercel.app/api/tasks/${slug}`);
                const data = await response.json();
                setTasks(data.tasks);
                console.log(data.tasks);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
                setLoading(false);
            }
        };

        fetchTasks();
    }, [slug]); // Depend on slug to refetch when slug changes

    if (loading) {
        return <SkeletonAssignmentSection />;
    }

    return (
        <div className={` ${poppins.className}`}>
            {tasks.map((task) => (
                <div key={task.id}>
                    {/* Red Title with PNG Icon outside of AssignmentCard */}
                    <h1 className="text-3xl font-semibold text-red-600 flex items-center justify-start mb-4 mt-12 font-bold">
                        <span className="mr-4 sm:mr-0 ml-4 sm:ml-0">
                            {/* PNG Icon for Assignment */}
                            <Image
                                src="/Assignment1.png"
                                alt="Assignment Icon"
                                width={32}
                                height={32}
                                className="text-red-600 mr-2"
                            />
                        </span>
                        {task.title}
                    </h1>

                    {/* Assignment Card for the details */}
                    <AssignmentCard
                        title="" // No need to pass title here
                        details={(
                            <div>
                                <div className="flex items-center mb-1">
                                    <Image
                                        src="/Assignment1pdf.png"
                                        alt="File Icon"
                                        width={24}
                                        height={24}
                                        className="mr-2 text-red-600"
                                    />
                                   <a 
                                        href={task.file} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-600 underline"
                                    >
                                        {task.file.split('/').pop()} {/* Extract file name from URL */}
                                    </a>
                                </div>
                                <div className="border-b mt-4 border-black w-full" />
                            </div>
                        )}
                        openDate={new Date(task.opened_at).toLocaleString()}
                        closeDate={new Date(task.closed_at).toLocaleString()}
                    />
                </div>
            ))}
        </div>
    );
};

export default AssignmentSection;
