import { dmSans } from "@/styles/font"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ModulDiscussion = () => {
    const discussionData = [
        {
            id: 1,
            user: 'Citra Kusumadewi Sribawono',
            time: '1 day ago',
            content: "Linux is an open-source operating system (OS) that manages a computer's hardware and resources, such as memory, CPU, and storage."
        },
        {
            id: 2,
            user: 'Agung Kusumadewi Sribawono',
            time: '2 days ago',
            content: "Linux is an open-source operating system (OS) that manages a computer's hardware and resources, such as memory, CPU, and storage."
        },
        
    ];

    return (
        <section className={`p-12 ${dmSans.className}`}>
            <div className="m-6">
                <h2 className="text-red-600 text-5xl font-bold">Basic Linux</h2>
            </div>
            <div className="border border-gray-100 p-6 rounded-2xl bg-white shadow-lg">
                <div className="p-2">
                    {discussionData.map((discussion) => (
                        <div key={discussion.id} className="border border-gray-100 p-4 rounded mb-4 bg-white shadow-lg rounded-3xl">
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex justify-center items-center text-white font-bold mr-3">
                                    {discussion.user.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h3 className="font-bold">{discussion.user}</h3>
                                    <span className="text-gray-500 text-sm">{discussion.time}</span>
                                </div>
                            </div>
                            <p className="mb-4">{discussion.content}</p>
                            <button className="text-red-600 font-bold">Reply</button>
                        </div>
                    ))}
                </div>
                <div className="flex items-center border border-gray-100 p-4 rounded-2xl bg-white shadow-lg">
                    <FontAwesomeIcon icon={faPaperclip} className="w-6 h-6 text-gray-400 mr-3 cursor-pointer" />                    
                    <input
                        type="text"
                        placeholder="Type here"
                        className="flex-1 outline-none bg-transparent"
                    />
                    <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-red-600 hover:scale-110 transition-all duration-300" />
                </div>
            </div>
        </section>
    );
};

export default ModulDiscussion;
