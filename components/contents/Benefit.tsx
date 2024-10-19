"use client";

import { BenefitCard } from "./BenefitCard"
import { useState, useEffect } from "react";
import { SkeletonBenefit } from "../ui/SkeletonCard";


const Benefit = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 700); // Simulate loading delay
  
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);
  
    if (isLoading) {
      return (
          <SkeletonBenefit /> 
      );
    }

    return (
        <section className="p-12">
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold items-center text-center">
                    What&apos;s the<span className="gradient-text"> Benefit</span> you ask?</h1>
            </div>
            <BenefitCard/>
        </section>

    )
}
export default Benefit