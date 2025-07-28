import TeamMemberCard from "./TeamCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { teamMembers } from "@/lib/TeamData";

export default function TeamMember() {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    });

    const prev = () => instanceRef.current?.prev();
    const next = () => instanceRef.current?.next();
    return (
        <section className="w-full py-20 bg-white flex flex-col items-start px-20 mt-10 mb-10 gap-10">
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col ">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Meet Our <span className="text-blue-600">Team</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mt-4">
                        We're a young, ambitious team excited to build great things. Here's a closer look at who we are.
                    </p>
                </div>
                <div className="flex justify-start mb-6 gap-4">
                    <button onClick={prev} className="px-2.5 py-1 text-h6 leading-8 bg-blue-600 text-white rounded-full">
                        &larr;
                    </button>
                    <button onClick={next} className="px-2.5 py-1 text-h6 leading-8 bg-blue-600 text-white rounded-full">
                       &rarr;
                    </button>
                </div>
            </div>
            <div ref={sliderRef} className="keen-slider w-full">
                {teamMembers.map((member, index) => (
                    <div key={index} className="keen-slider__slide">
                        <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>
        </section>
    );
}
