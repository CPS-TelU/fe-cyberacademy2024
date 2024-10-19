"use client";

import { useState, useEffect } from 'react';
import { SkeletonRequirement } from '../ui/SkeletonCard';

const Requirements = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700); // Simulate loading delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (isLoading) {
    return (
        <SkeletonRequirement /> 
    );
  }

    return (
        
        <section className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-5xl mx-auto">
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center gradient-text">
                    Requirements
                </h1>
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-4 text-lg sm:text-xl font-medium text-left transition-colors duration-300 ${
                            isOpen1 ? 'text-red-600' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen1(!isOpen1)}
                    >
                        <span>CV ATS</span>
                        <span className={`${isOpen1 ? 'text-[#BA2025]' : 'text-gray-900'}`}>
                            {isOpen1 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen1 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                            ATS Curriculum Vitae (CV) reflecting your educational background, experience, and skills.
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-4 text-lg sm:text-xl font-medium text-left transition-colors duration-300 ${
                            isOpen2 ? 'text-[#BA2025]' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen2(!isOpen2)}
                    >
                        <span>Full Body Photo</span>
                        <span className={`${isOpen2 ? 'text-[#BA2025]' : 'text-gray-900'}`}>
                            {isOpen2 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen2 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                            A recent full body photo that clearly shows your appearance.
                        </div>
                    </div>
                </div>

                {/* Accordion 3 */}
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-4 text-lg sm:text-xl font-medium text-left transition-colors duration-300 ${
                            isOpen3 ? 'text-red-600' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen3(!isOpen3)}
                    >
                        <span>KHS</span>
                        <span className={`${isOpen3 ? 'text-red-600' : 'text-gray-900'}`}>
                            {isOpen3 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen3 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                        The latest semester transcript should include detailed course grades and formal proof of the student&apos;s academic performance.
                        </div>
                    </div>
                </div>

                {/* Accordion 4 */}
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-4 text-lg sm:text-xl font-medium text-left transition-colors duration-300 ${
                            isOpen4 ? 'text-red-600' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen4(!isOpen4)}
                    >
                        <span>Motivation Letter</span>
                        <span className={`${isOpen4 ? 'text-red-600' : 'text-gray-900'}`}>
                            {isOpen4 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen4 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                            Your motivation for applying to Cyber Academy.
                        </div>
                    </div>
                </div>

                {/* Accordion 5 */}
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-4 text-lg sm:text-xl font-medium text-left transition-colors duration-300 ${
                            isOpen5 ? 'text-red-600' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen5(!isOpen5)}
                    >
                        <span>Student of Telkom University</span>
                        <span className={`${isOpen5 ? 'text-red-600' : 'text-gray-900'}`}>
                            {isOpen5 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen5 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                            Only for 2022, 2023, 2024.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Requirements;
