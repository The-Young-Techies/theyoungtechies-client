// components/OurApproach.tsx
import { steps } from "@/utils/data";
import PrimaryButton from "@/lib/PrimaryButton";
import ApproachCard from "./ApproachCard";
import { Link as ScrollLink } from "react-scroll";

export default function OurApproach() {
  return (
    <section className="w-full px-6 sm:px-10 md:px-14 lg:px-16  py-20 bg-blue-50 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28">
      <div className="flex flex-col justify-start items-center gap-4 md:gap-6 text-center md:text-start md:items-start">
        <span className="flex flex-col justify-start items-center text-center md:text-start md:items-start">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2">
            our approach
          </p>
          <h2 className="text-h6 md:text-h5 xl:text-h3  text-gray-900 font-bold leading-tight">
            Our Simple & Basic <span className="text-[#3468E9]">Approach</span>
          </h2>
        </span>
        <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600  w-full max-w-3xl">
          We follow a collaborative, client-centered approach to ensure that every project meets and exceeds expectations.
        </p>
        <ScrollLink to="contact" smooth={true} duration={5 * 150}>
          <PrimaryButton label="get in touch" className="cursor-pointer" />
        </ScrollLink>
      </div>

      <div className="flex flex-col gap-10 justify-center items-start w-full md:w-4xl rounded-lg shadow-lg p-5 md:p-10 border bg-white border-gray-300">
        {steps.map((step, index) => (
          <ApproachCard key={index} step={step} isLast={index === steps.length - 1 ? false : true} />
        ))}
      </div>
    </section>
  );
}
