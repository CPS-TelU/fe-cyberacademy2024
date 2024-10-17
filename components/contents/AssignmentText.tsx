import React from 'react';
import AddAssignmentCard from '../ui/AddAssignmentCard';

const AssignmentText: React.FC = () => {
  return (
    <div>
        {/* Red Title with PNG Icon outside of AssignmentCard */}
        <h1 className="text-3xl font-semibold text-red-600 flex items-center justify-start mb-4 mt-28">
            <span className="mr-4 sm:mr-0 ml-4 sm:ml-0"> {/* Geser icon ke kanan pada mobile */}
                {/* PNG Icon for Assignment */}
                <img 
                    src="Assignment1.png" // Update this path to your PNG file
                    alt="Assignment Icon" 
                    width={32} 
                    height={32} 
                    className="text-red-600 mr-2"
                />
            </span>
            Assignment 1
        </h1>
        
        {/* Assignment Card for the details */}
        <AddAssignmentCard 
            title="" // You don't need to pass the title here anymore
            details={
                <div>
                    <div className="flex items-center mb-1"> {/* Margin bottom for spacing */}
                        <img 
                            src="Assignment1pdf.png" // Update this path to your PNG file
                            alt="File Icon" 
                            width={24} 
                            height={24} 
                            className="mr-2 text-red-600" // This can be styled with CSS if needed
                        />
                        <span>Assignment 1.pdf</span>
                    </div>
                    {/* Add a border line below the text */}
                    <div className="border-b mt-4 border-black w-full" /> {/* Adjust width as needed */}
                </div>
            }
            openDate="Thursday, 31 October 2024, 6:00 PM" 
            closeDate="Monday, 4 November 2024, 5:00 PM" 
        />
    </div>
);
};


export default AssignmentText;
