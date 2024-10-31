import { Skeleton } from "@/components/ui/Skeleton"
import React from "react";


export function SkeletonHomeHero() {
    return (
        <section className="flex flex-col justify-center items-center  py-10 md:py-20 animate-pulse">
        <div className="text-center items-center justify-center">
          <Skeleton className=" items-center text-center mb-4 mx-auto w-[250px]  sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[900px] 2xl:w-[900px] h-12 sm:h-12 md:h-14 lg:h-16 xl:h-16 2xl:h-16 bg-gray-300"/>
        <div className="flex flex-col mt-4 text-center items-center">
          <Skeleton className=" h-4 sm:h-6 md:h-6 lg:h-8 xl:h-8 2xl:h-8 w-[320px] sm:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[300px] 2xl:w-[500px] bg-gray-300 "/>
        </div>
        <div className="mt-8 flex flex-col mt-4 text-center items-center">
        <Skeleton className=" rounded-full bg-gray-300 h-14 w-[180px]" />
        </div>
      </div>
      <div className="mt-12 w-full flex justify-center px-4 md:px-0">
        <Skeleton className="bg-gray-300 rounded-2xl h-[160px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[450px] w-[300px] sm:w-[530px] md:w-[640px] lg:w-[700px] xl:w-[860px] 2xl:w-[1100px] "
        />
      </div>
    </section>

    )
}

export function SkeletonAbout() {
    return (
      <section className="px-6 md:py-12 md:px-12 xl:px-28 animate-pulse ">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Skeleton className="bg-gray-300 h-12 sm:h-12 md:h-14 lg:h-16 xl:h-16 2xl:h-16 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[780px] xl:w-[800px] 2xl:w-[800px] "/>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 flex justify-center">
          <Skeleton
            className="bg-gray-300 rounded-xl h-[300px] sm:h-[400px] md:h-[220px] lg:h-[350px] xl:h-[500px] 2xl:h-[500px] 
                                              w-[250px] sm:w-[500x] md:w-[200px] lg:w-[300px] xl:w-[700px] 2xl:w-[600px] "
          />
        </div>

        <div className="md:w-1/2 px-4 md:px-8">
          <div className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-justify">
            <Skeleton className="w-[320px] sm:w-[550px] md:w-[260px] lg:w-[380px] xl:w-[550px] 2xl:w-[600px] h-[375px] sm:h-[300px] md:h-[770px] lg:h-[400px] xl:h-[300px] 2xl:h-[250px] bg-gray-300"/>
            <Skeleton className="w-[280px] sm:w-[150px] md:w-[210px] lg:w-[300px] xl:w-[480px] 2xl:w-[500px] h-8 sm:h-8 md:h-10 lg:h-16 xl:h-10 2xl:h-8 bg-gray-300"/>
          </div>
        </div>
      </div>
    </section>
    )
}



export function SkeletonBenefit() {
  return (
    <section className="p-12">
      <div className="flex flex-col justify-center items-center text-center animate-pulse">
        <Skeleton className="w-[250px] sm:w-[500px] md:w-[600px] lg:w-[830px] xl:w-[800px] 2xl:w-[850px] 
                                                      h-12 sm:h-12 md:h-14 lg:h-16 xl:h-16 2xl:h-16 bg-gray-300 "/>
      </div>
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center mx-auto">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="mt-8" >
              <Skeleton className="bg-gray-300 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] 
                                               w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] 2xl:w-[220px] "/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkeletonKnowledge() {
  return (
    <div className="w-full h-full py-10 md:py-20 px-4 animate-pulse">
  <div className="flex flex-col justify-center items-center text-center gap-4">
    <Skeleton className="w-[250px] sm:w-[500px] md:w-[600px] lg:w-[830px] xl:w-[800px] 2xl:w-[860px] 
                        h-12 sm:h-12 md:h-14 lg:h-16 xl:h-16 2xl:h-16 bg-gray-300 "/>
  </div>

  <div className="w-full h-full py-8 md:py-20 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-4">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="mt-6">
        <div className="bg-gray-300 h-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px] xl:h-[250px] 2xl:h-[300px] 
                         rounded-3xl w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[300px]">
        </div>
      </div>
    ))}
  </div>
</div>

  <div className="flex justify-center items-center gap-4 mt-8">
    <Skeleton className="bg-gray-300 h-10 w-10 rounded-full" />
    <Skeleton className="bg-gray-300 h-10 w-10 rounded-full" />
  </div>
</div>

  )
}

export function SkeletonRequirement() {
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-5xl mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <Skeleton className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] 2xl:w-[500px]
                            rounded-xl h-12 sm:h-12 md:h-14 lg:h-16 xl:h-16 2xl:h-16 bg-gray-300"/>
      </div>
      <div className="mt-6">
        <div className="border-b border-gray-300 py-2 w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] 2xl:w-[900px]">
          <Skeleton className="bg-gray-300 h-6 w-[400px] rounded-3xl"/>
        </div>
        <div className="border-b border-gray-300 py-2 w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] 2xl:w-[900px]">
          <Skeleton className="bg-gray-300 h-6 w-[400px] rounded-3xl"/>
        </div>
        <div className="border-b border-gray-300 py-2 w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] 2xl:w-[900px]">
          <Skeleton className="bg-gray-300 h-6 w-[400px] rounded-3xl"/>
        </div>
        <div className="border-b border-gray-300 py-2 w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] 2xl:w-[900px]">
          <Skeleton className="bg-gray-300 h-6 w-[400px] rounded-3xl"/>
        </div>
        <div className="border-b border-gray-300 py-2 w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] 2xl:w-[900px]">
          <Skeleton className="bg-gray-300 h-6 w-[400px] rounded-3xl"/>
        </div>
      </div>
    </section>
  );
}

export function SkeletonMedPart() {
  return (
    <div className="w-full h-full py-10 md:py-20 px-4">
      <div className="flex flex-col justify-center items-center text-center mb-8">
    <Skeleton className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] 2xl:w-[500px]
                            rounded-xl h-12 sm:h-12 md:h-14 lg:h-16 xl:h-16 2xl:h-16 bg-gray-300"/>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-32 justify-items-center">
    {[...Array(5)].map((_, index) => (
            <div key={index} className="mt-8" >
              <Skeleton className="bg-gray-300 h-[100px] sm:h-[80px] md:h-[90px] lg:h-[100px] xl:h-[100px] 2xl:h-[100px] 
                                   rounded-full w-[100px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px] "/>
            </div>
             ))} 
        </div>
    </div>
  )
}


const SkeletonAssignmentSection = () => {
  return (
    <div className="p-4 mt-8 mx-auto sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1155px] 2xl:w-[1190px]">
      {/* Title Skeleton */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-300 rounded-xl"></div>
        <div className="w-[250px] h-8 bg-gray-300 rounded"></div>
      </div>

      <div className="mt-4 p-4 bg-white rounded-md shadow-md">
        {/* File name skeleton */}
        <div className="h-4 bg-gray-300 rounded w-[400px]"></div>

        {/* Divider */}
        <div className="mt-2 w-full h-1 bg-gray-300"></div>

        {/* Opened/Closed time skeleton */}
        <div className="mt-4 space-y-2">
          <div className="w-[300px] h-4 bg-gray-300 rounded"></div>
          <div className="w-[300px] h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonAssignmentSection;

export const SkeletonCourseCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(5)].map((_, index) => (
      <div key={index} className="mt-8" >
        <Skeleton className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-[200px]">
          <Skeleton
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover bg-gray-300"
          />
        </div>
        <div className="p-4 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7">
          <Skeleton className="h-4 w-[100px] bg-gray-300"/>
          <Skeleton className="h-6 w-[200px] bg-gray-300"/>
          <div className="flex justify-between items-center mt-2">
            <Skeleton className="h-4 w-[200px] bg-gray-300"/>

            <Skeleton
              className="mt-8 bg-gray-300 px-4 py-2 rounded rounded-xl h-8 w-20"
            />   
          </div>
        </div>
      </Skeleton>
      </div>
      ))}
    </div>
  );
}

export const SkeletonAnnouncement = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
    {[...Array(5)].map((_, index) => (
      <div key={index} className="mt-8 gap-4" >
    <div className="w-40 h-24 bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center space-y-2 gap-4">
      {/* Icon skeleton */}
      <div className="flex items-center space-x-3">
        <div className="bg-gray-300 w-8 h-8 rounded-full" />
        
        {/* Text skeleton */}
        <div className="flex flex-col space-y-1">
          <div className="bg-gray-300 w-16 h-4 rounded" />
          <div className="bg-gray-400 w-24 h-5 rounded" />
        </div>
      </div>
    </div>
    </div>
    ))} 
  </div>
  );
}
