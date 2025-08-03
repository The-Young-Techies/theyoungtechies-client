import PrimaryButton from "@/lib/PrimaryButton";
import { aboutHeaderHighlights } from "@/utils/data";
import { Link } from "@tanstack/react-router";
export default function AboutHeader() {
    return (
        <header className="relative w-full h-full px-6 sm:px-10 md:px-14 lg:px-16 py-5 md:h-[85vh] flex flex-col justify-center items-center text-center  bg-[url('/images/about/about-header.jpg')] bg-no-repeat bg-left bg-cover">
            <div className="absolute h-[100%] inset-0 bg-gradient-to-b from-black/80 to-black/70"></div>
            <span className="relative z-10 flex flex-col justify-center items-center gap-4 md:gap-8">
                <h1 className="text-white text-h5 min-[550px]:text-h5 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h1 font-bold leading-tight">
                    Built with <span className="text-blue-500">Vision</span> - Backed by <span className="text-blue-500">Skill</span>
                </h1>
                <p className="text-gray-200 text-body-small md:text-body lg:text-para lg:w-5xl">
                    Young Techies is a web agency building fast, functional, and visually sharp websites. We help businesses grow online with tailored design, smart development, and solid execution.
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap md:gap-6 gap-2 justify-center items-center text-start md:text-center">
                    {
                        aboutHeaderHighlights.map((value, index) => (
                            <span key={index} className="flex justify-start items-center gap-3 bg-white rounded-lg shadow-md border border-gray-500 p-3">
                                {value.icon}
                                <p className="text-gray-700 text-sm md:text-base">{value.content}</p>
                            </span>
                        ))
                    }
                </div>
                <Link to="/contact" className="cursor-pointer">
                    <PrimaryButton label="let's build together" className="w-fit cursor-pointer" />
                </Link>
            </span>
        </header>
    )
}