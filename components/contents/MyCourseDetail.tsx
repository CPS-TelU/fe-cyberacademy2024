import Image from "next/image";
import Link from "next/link";
import { FaFileAlt, FaClipboardList, FaComments } from "react-icons/fa"; 

const MyCourseDetail = () => {
    const elements = [
        { 
            title: "Module 1", 
            description: "Basic Linux", 
            icon: FaFileAlt, 
            url: "/module-1"  // Replace with the actual path
        },
        { 
            title: "Assignment 1", 
            description: "Basic Linux & GitHub", 
            icon: FaClipboardList, 
            url: "/lms/mycourses/coursedetail/assignment"  
        },
        { 
            title: "Forum Discussion", 
            description: "Basic Linux & GitHub", 
            icon: FaComments, 
            url: "/lms/mycourses/coursedetail/moduldiscussion"  
        },
    ];

    return (
        <section className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[250px] xl:h-[150px] 2xl:h-[250px] rounded-2xl overflow-hidden mb-6">
                <Image
                    src="/banner_linux.png"
                    alt="Linux Course Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="text-left p-4 space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600">Basic Linux</h2>
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
                    Linux is an open-source operating system (OS) that manages a computer's hardware and resources, such as memory, CPU, and storage.
                </p>
            </div>
            <div className="grid gap-4 grid-cols-1 p-4 bg-white rounded-2xl border border-gray-100 shadow-lg">
                {elements.map((item, index) => (
                    <Link href={item.url} key={index}>
                        <div 
                            className="flex items-center p-4 bg-white rounded-2xl shadow-md border border-gray-100 transition-transform transform hover:scale-105 cursor-pointer"
                        >
                            <div className="text-red-600 text-2xl sm:text-3xl mr-4">
                                <item.icon />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-500 text-sm sm:text-base">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default MyCourseDetail;
