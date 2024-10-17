import Image from "next/image";


interface StatusCardProps {
    status: string;
    label: string;
}

export default function StatusCard({ status, label }: StatusCardProps) {
    return (
        <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-md flex items-center space-x-3 sm:space-x-4">
            {/* Icon with responsive size */}
            <div className="bg-[#BA2025] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                <Image 
                    src="/icon-status.png"  
                    alt="Status Icon" 
                    className="w-4 h-4 sm:w-6 sm:h-6"
                    width={1000}
                    height={1000}
                />
            </div>
            {/* Text content with responsive spacing */}
            <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">{status}</p>
                <p className="font-semibold text-black text-sm sm:text-base md:text-lg truncate">{label}</p>
            </div>
        </div>
    );
}
