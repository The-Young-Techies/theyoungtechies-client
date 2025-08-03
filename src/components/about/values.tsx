import { values } from '@/utils/data';
import { useState } from 'react';

export default function AboutValues() {

    const [activeIndex, setActiveIndex] = useState(0); // default to first item (mission)

    return (
        <div className="flex flex-col md:flex-row px-6 sm:px-10 md:px-14 lg:px-16 justify-between items-center mt-20 sm:gap-0 md:gap-14 min-[418px]:gap-5 gap-14 min-[350px]:gap-12 mb-32 ">
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start gap-5 text-start '>
                <div className="text-center md:text-start">
                    <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2">Our Values</p>
                    <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold capitalize leading-tight" >What Drives Us <span className='text-blue-500'>Every</span> Day</h2>
                </div>

                <div className="flex justify-start gap-4">
                    {values.map((value, index) => (
                        <button
                            key={index}
                            className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md text-para-small sm:text-base font-medium transition-colors ${activeIndex === index
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {value.btn}
                        </button>
                    ))}
                </div>

                <div className="text-start text-gray-700 text-body mx-auto h-[100px] ">
                    <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 text-center md:text-start ">{values[activeIndex].desc}</p>
                </div>
               
            </div>
            <img src="/images/about/about-header.jpg" alt="" className='w-[90%] md:w-[300px] lg:w-[500px] rounded-2xl h-[100%] mt-3 sm:mt-0' />
        </div>
    );
}
