import PrimaryButton from "@/lib/PrimaryButton";
import { Link } from "@tanstack/react-router";
import { ChartArea, Rocket, Settings } from "lucide-react";

export default function AboutHeader() {
    const highlights = [{
        content: "10+ Custom Projects Delivered",
        icon: <Rocket color="#C2410C" />
    },
    {
        content: "20+ Technologies Mastered",
        icon: <Settings color="#4D7C0F" />
    },
    {
        content: "1-Week Avg. Delivery Time",
        icon: <ChartArea color="#BE185D" />
    }
    ]
    return (
        <header className="relative w-full h-[85vh] flex flex-col justify-center items-center text-center m-auto bg-[url('/images/about/about-header.jpg')] bg-no-repeat bg-left bg-cover">
            <div className="absolute h-[100%] inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
            <span className="relative z-10 flex flex-col justify-center items-center gap-8">
                <h1 className="text-white text-h5 min-[550px]:text-h5 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h1 font-bold leading-tight">
                    Built with <span className="text-blue-500">Vision</span>, Backed by <span className="text-blue-500">Skill</span>
                </h1>
                <p className="text-gray-200 text-body-small md:text-body lg:text-para w-5xl">
                    Young Techies is a web agency building fast, functional, and visually sharp websites. We help businesses grow online with tailored design, smart development, and solid execution.                </p>
                <div className="flex justify-center items-center gap-6">
                    {
                        highlights.map((value, index) => (
                            <span key={index} className="flex justify-start items-center gap-3 bg-white rounded-lg shadow-md border border-gray-500 p-3">
                                {value.icon}
                                <p className="text-gray-700 text-base">{value.content}</p>
                            </span>
                        ))
                    }
                </div>
                <Link to="/contact">
                    <PrimaryButton label="let's build together" className="w-fit" />
                </Link>
            </span>
        </header>
    )
}