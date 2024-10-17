// ui/AssignmentCard.tsx
import React from 'react';
interface AddAssignmentCardProps {
  title: string;
  details: React.ReactNode;
  openDate: string;
  closeDate: string;
}

const AddAssignmentCard: React.FC<AddAssignmentCardProps> = ({ title, details, openDate, closeDate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-8 mx-auto w-11/12 sm:w-3/4 md:w-2/3 lg:w-full lg:translate-x-[-2px] lg:mr-[50rem] xl:w-full">
            {/* Konten dirapikan di kiri pada ukuran lg ke atas */}
            <div className="text-left">
                <h1 className="text-2xl font-semibold text-red-600">{title}</h1>
                <div className="mt-1">
                    <p>{details}</p>
                    <p className="mt-2">Opened: {openDate}</p>
                    <p>Closed: {closeDate}</p>
                </div>
            </div>
        </div>
    );
};

export default AddAssignmentCard;
