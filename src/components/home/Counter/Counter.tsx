"use client";
import { eventStats } from "@/utils/data";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <section
      className="
        w-full min-h-[320px] py-12 px-16 sm:py-16 flex flex-col items-start justify-center
        bg-cover bg-fixed bg-center bg-no-repeat
        bg-[url('https://t4.ftcdn.net/jpg/08/10/40/51/360_F_810405110_yGQETirKk1O25jZ1H65f3IOz7SjoBPsZ.jpg')]
        relative
      "
      aria-label="Proven Success Statistics"
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="relative z-20 w-full flex flex-col items-start justify-center mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Proven Success
        </h1>
        <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl">
          Our agency consistently delivers innovative, high-quality web solutions that exceed client expectations and drive real results.
        </p>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {eventStats.map((stat, i) => (
            <div
              key={i}
              className="
                bg-white/10 backdrop-blur-md border border-white/10 shadow
                rounded-2xl px-6 py-7 flex flex-col items-start
                w-full min-w-[0]
                transition-transform hover:scale-[1.025] duration-200
              "
            >
              <span className="text-4xl sm:text-5xl mb-2 select-none">{stat.icon}</span>
              <div className="font-extrabold text-2xl sm:text-3xl text-white flex items-center">
                <CountUp end={stat.value} duration={2} />
                <span className="ml-1">{stat.suffix}</span>
              </div>
              <div className="text-base text-white mt-1 font-semibold">{stat.label}</div>
              <div className="text-xs sm:text-sm text-white/70 mt-2">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
