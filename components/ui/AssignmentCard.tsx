interface AssignmentCardProps {
    title: string;
    deadline: string;
    description: string;
    time: string;
}

export default function AssignmentCard({ title, deadline, description, time }: AssignmentCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg mb-10 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-28 2xl:mb-32">
            <div className="text-black font-bold p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-t-lg">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">{deadline}</p>
            </div>
            <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center">
                        <img src="/icon-task.png" alt="Task Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-4 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18" />
                        <div>
                            <h3 className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold">{title}</h3>
                            <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{description}</p>
                            <p className="text-[#5B5B5B] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Deadline at: {time}</p>
                        </div>
                    </div>
                    <button className="w-full md:w-auto px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-[#BA2025] text-white text-xs sm:text-sm md:text-base lg:text-lg rounded shadow">
                        Attempt Task
                    </button>
                </div>
            </div>
        </div>
    );
}