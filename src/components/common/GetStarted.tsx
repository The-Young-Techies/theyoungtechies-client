"use client";

import { ctaData } from "@/utils/data";

export default function GetStarted() {
  return (
    <section
      className="relative m-auto max-lg:py-5 mx-16 rounded-xl z-10 gap-4 px-5 md:px-10 flex flex-col md:flex-row justify-center text-center md:text-start md:justify-between items-center max-lg:h-full h-[150px]"
      style={{
        backgroundImage: `url(${ctaData.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
        <h2 className="text-h6 text-white capitalize font-bold">
          {ctaData.heading}
        </h2>
        <p className="text-body-small text-gray-200">{ctaData.subText}</p>
      </span>
      <button className="text-black bg-amber-200 py-2 px-7 rounded-lg text-lg capitalize font-bold">
        {ctaData.buttonText}
      </button>
    </section>
  );
}
