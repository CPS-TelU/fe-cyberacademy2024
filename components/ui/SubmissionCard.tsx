import React from 'react';

interface SubmissionCardProps {
    status: string;
    timeRemaining: string;
}

const SubmissionCard: React.FC<SubmissionCardProps> = ({ status, timeRemaining }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto w-11/12 sm:w-3/4 md:w-2/3 lg:w-full lg:mr-[36rem]">
            {/* Add Submission Button */}
            <div className="mb-4"> {/* Margin below the button to separate from the header */}
                <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                    Add Submission
                </button>
            </div>
            <h2 className="text-xl font-semibold text-red-600">Submission Status</h2>
            <table className="min-w-full mt-4">
                <tbody>
                    <tr>
                        <td className="border border-black px-4 py-2">Submission status</td>
                        <td className="border border-black px-4 py-2">{status}</td>
                    </tr>
                    <tr>
                        <td className="border border-black px-4 py-2">Time remaining</td>
                        <td className="border border-black px-4 py-2">{timeRemaining}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SubmissionCard;
