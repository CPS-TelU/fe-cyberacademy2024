import React from 'react';


const knowledgeItems = [
    { image: './linux.svg', title: 'Basic Linux' },
    { image: './app-development.svg', title: 'Website Development' },
    { image: './internet-of-things.svg', title: 'Internet of Things' },
    { image: '/machine-learning.svg', title: 'Machine Learning' },
    { image: './pitching.svg', title: 'Pitching Idea' },
];



const Knowledge = () => {
    return (
        <section className="p-14 mt-6 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Title */}
                    <div className="sm:col-span-2 md:col-span-1 text-left w-[350px] sm:w-[400px] md:w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[400px]">
                        <h2 className="text-5xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-6xl font-bold text-gray-800">
                            The <span className="gradient-text">Knowledge</span> You Will Learn
                        </h2>
                    </div>

                    {knowledgeItems.slice(0, 2).map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 gap-4 rounded-lg p-6 shadow-lg text-center w-[310px] sm:w-[250px] md:w-[210px] lg:w-[300px] xl:w-[400px]">
                            <img src={item.image} alt={item.title} className="w-20 2xl:w-20 xl:w-16 lg:w-16 md:w-16 sm:w-16 h-20 mb-4 mx-auto" />
                            <h3 className="text-3xl font-bold gradient-text">{item.title}</h3> 
                        </div>
                    ))}
                </div>

                {/* Second row with three images */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {knowledgeItems.slice(2).map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg text-center w-[310px] sm:w-[250px] md:w-[210px] lg:w-[300px] xl:w-[400px] 2xl:w-[400px]">
                            <img src={item.image} alt={item.title} className="w-20 2xl:w-20 xl:w-16 lg:w-16 md:w-16 sm:w-16 h-20 mb-4 mx-auto" />
                            <h3 className="text-3xl font-bold gradient-text">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Knowledge;
