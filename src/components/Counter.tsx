"use client";
import { eventStats } from "@/lib/counter";
import CountUp from "react-countup";
eventStats
export default function Counter() {
    return (
        <section className="w-full h-[400px] max-lg:h-full max-md:py-10 flex justify-center items-center flex-col relative bg-cover bg-fixed bg-center bg-no-repeat bg-[url('https://t4.ftcdn.net/jpg/08/10/40/51/360_F_810405110_yGQETirKk1O25jZ1H65f3IOz7SjoBPsZ.jpg')]">
            <div className="absolute inset-0 bg-[#000000c7] z-0"></div>
            <div className="relative z-20 flex flex-col items-center gap-2 w-full">
                <h1 className="max-lg:w-[95%] text-[30px] text-center text-white">
                    Proven Web Development Success
                </h1>
                <p className="w-[55%] max-md:w-[95%] text-[#ffffffbf] text-center">
                    Our agency consistently delivers innovative, high-quality web solutions that exceed client expectations and drive real results.
                </p>

                <div className="flex gap-[100px] max-lg:gap-[20px] max-lg:flex-wrap mt-10 justify-center items-center w-full">
                    {eventStats.map((stat, i) => (
                        <div key={i} className="bg-[#ffffff24] text-white rounded-2xl w-[220px] max-sm:w-[150px] h-[160px] p-1 flex flex-col justify-center items-center text-3xl gap-1 max-sm:gap-0 max-sm:h-[140px]">
                            <span className="max-sm:text-[20px]"> {stat.icon}{" "} {typeof stat.value === "number" ? (
                                <> <CountUp end={stat.value} duration={2} /> {i < 3 && "+"}</>
                            ) : (stat.value)}
                            </span>
                            <span className="text-[17px] max-sm:text-[12px]">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
