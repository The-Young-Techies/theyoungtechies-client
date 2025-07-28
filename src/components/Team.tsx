import TeamMemberCard from "./TeamCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { teamMembers } from "@/lib/TeamData";

export default function TeamMember() {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: {
            perView: 2,
            spacing: 20,
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                    perView: 1,
                    spacing: 10,
                },
            },
        },
    })

    const prev = () => instanceRef.current?.prev()
    const next = () => instanceRef.current?.next()


    const teamMembers = [
        {
            name: "Anuj Mishra",
            role: "CEO/Founder",
            image: "/images/home-header2.jpg", // your local or hosted image path
            bgColor: "bg-green-100",

        },
        {
            name: "Anuj Mishra",
            role: "Web developer",
            image: "/images/home-header2.jpg", // your local or hosted image path
            bgColor: "bg-purple-100",

        },
        {
            name: "Anuj Mishra",
            role: "Web developer",
            image: "/images/home-header2.jpg", // your local or hosted image path
            bgColor: "bg-pink-100",

        },
        {
            name: "Anuj Mishra",
            role: "Web developer",
            image: "/images/home-header2.jpg", // your local or hosted image path
            bgColor: "bg-red-100",

        },
        // Add more...
    ];
    return (
        <section className="w-full py-20 bg-white flex flex-col items-center px-20 mt-10 mb-10 gap-10">
            <div className="flex flex-col justify-center items-center text-center ">
                <h2 className="text-h4 font-bold text-gray-900">
                    Meet Our <span className="text-blue-600">Team</span>
                </h2>
                <p className="text-gray-600 max-w-xl mt-4">
                    We're a young, ambitious team excited to build great things. Here's a closer look at who we are.
                </p>
            </div>

            <div ref={sliderRef} className="keen-slider">
                {teamMembers.map((member, i) => (
                    <div className="keen-slider__slide" key={i}>
                        <TeamMemberCard
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            bgColor={member.bgColor}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-start mb-6 gap-4">
                <button onClick={prev} className="px-2.5 py-1 text-h6 leading-8 bg-blue-600 text-white rounded-full">
                    &larr;
                </button>
                <button onClick={next} className="px-2.5 py-1 text-h6 leading-8 bg-blue-600 text-white rounded-full">
                    &rarr;
                </button>
            </div>
        </section>
    );
}
