import { useState } from 'react';

export default function AboutValues() {
    const values = [
        {
            btn: 'Our Mission',
            desc: "Our mission is to build high-quality digital solutions that help businesses not just exist online, but thrive. We focus on clean code, smart design, and user-first thinking—delivering websites that are both visually strong and technically sound. No templates. Just purposeful, custom-built experiences."
        },
        {
            btn: 'Our Vision',
            desc: 'Our vision is to create a digital world where every business—big or small—can access modern web solutions that look great and perform with purpose. We aim to simplify the complex, empower growth, and build tools that make a lasting impact.'
        },
        {
            btn: 'Our Goal',
            desc: "Our goal is to be the trusted digital partner for businesses that value quality, performance, and results. We’re committed to delivering on time, with precision, and turning ideas into impactful web solutions—built with care and purpose."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0); // default to first item (mission)

    return (
        <div className="flex justify-between px-16 my-20 gap-14 ">
            <div className='flex flex-col justify-start items-start gap-5 text-start '>
                <div className="text-start">
                    <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2">Our Values</p>
                    <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold capitalize leading-tight" >What Drives Us <span className='text-blue-500'>Every</span> Day</h2>
                </div>

                <div className="flex justify-start gap-4">
                    {values.map((value, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${activeIndex === index
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
            <img src="/images/about/about-header.jpg" alt="" className='w-[500px] rounded-2xl h-[100%]' />
        </div>
    );
}
