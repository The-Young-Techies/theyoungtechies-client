"use client";

import { StarIcon } from "lucide-react";
import { headerContent } from "@/utils/data";
import { type HeaderContent } from "@/utils/interface";
import ContactButton from "@/lib/ContactButton";
import PrimaryButton from "@/lib/PrimaryButton";
import { Link as ScrollLink } from 'react-scroll';


export default function Header() {
  const {
    title,
    highlight,
    description,
    primaryButton,
    showContact,
    imageUrl,
    imageAlt,
    ratings,
  }: HeaderContent = headerContent;

  return (
    <header
      className="w-full h-[85vh] flex flex-col md:flex-row justify-center min-[550px]:py-5 md:justify-between md:items-center items-start px-10 xl:px-16 gap-5 relative bg-[url('/images/header3.jpg')] bg-no-repeat bg-left bg-cover"
      aria-label="Main header showcasing our services and client ratings"
    >
      {/* Text Section */}
      <div className="flex flex-col justify-start items-start gap-4 xl:gap-7 text-start z-10 md:w-2xl xl:w-3xl">
        <h1 className="text-black text-h5 min-[550px]:text-h5 sm:text-h4 md:text-h4 lg:text-h3 xl:text-h1 font-bold leading-8 sm:leading-10 md:leading-11 xl:leading-14">
          {title} <span className="text-blue-500">{highlight}</span>
        </h1>
        <p className="text-gray-700 text-body-small md:text-body lg:text-para">
          {description}
        </p>
        <div className="flex flex-col md:flex-row justify-start items-start gap-2">

          <ScrollLink to="services" smooth={true} duration={500}>
            <PrimaryButton label={primaryButton} className="cursor-pointer" />
          </ScrollLink>

          {showContact && (
             <ScrollLink to="contact" smooth={true} duration={500}>
            <ContactButton className="flex min-[500px]:hidden md:flex cursor-pointer" />
             </ScrollLink>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative hidden min-[500px]:flex w-[400px] h-[180px] min-[550px]:w-[400px] min-[550px]:h-[200px] md:w-[400px] md:h-[300px] xl:w-[600px] xl:h-[60vh] rounded-xl ">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
          draggable={false}
        />

        {/* Ratings */}
        <div className="bg-white flex flex-col justify-start items-start gap-1 w-fit px-4 py-2 rounded-xl absolute bottom-2 md:bottom-6 -right-15 md:-left-10 border border-gray-300 shadow-md">
          <h6 className="capitalize text-para-small font-bold lg:text-body">{ratings.label}</h6>
          <div className="flex justify-start items-center gap-3">
            <p className="text-para-small lg:text-body">{ratings.score}</p>
            <span className="flex justify-start items-center gap-1">
              {[...Array(ratings.stars)].map((_, i) => (
                <StarIcon key={i} className="h-3 w-3 lg:h-5 lg:w-5" color="#FBBF24" fill="#FBBF24" />
              ))}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
