'use client'
import { StarIcon } from "lucide-react";
import ContactButton from "@/lib/ContactButton";
import PrimaryButton from "@/lib/PrimaryButton";
export default function Header() {
    return (
        <header className="w-full h-[90vh] flex justify-between items-center px-10 gap-28 bg-[url('/images/header3.jpg')] relative bg-no-repeat bg-left bg-cover">
            <div className="w-full h-full absolute inset-0 z-0 bg-[rgba(24,24,24,0)]"></div>
            <div className="flex flex-col justify-start items-start gap-7 text-start z-10 w-2xl">
                <h1 className="text-black text-4xl font-bold">
                    We Turn Ideas Into Digital Products That <span className="text-blue-500">Perform</span>
                </h1>
                <p className="text-gray-700 text-lg ">
                    With our cutting-edge UI/UX, unique web apps, high-converting e-commerce sites, and astute SEO, we help brands stand out. We ensure that your online presence truly functions, from design to deployment and even social media.</p>
                <div className="flex justify-start items-center gap-5">
                   <PrimaryButton label="view our services"/>
                    <ContactButton/>
                </div>
            </div>
            <div className="w-[500px] h-[400px] rounded-xl bg-[url('/images/home-header.jpg')] relative bg-no-repeat bg-left bg-cover">
                <div className="bg-white flex flex-col justify-start items-start gap-1 w-fit px-4 py-2 rounded-xl absolute bottom-6 -left-10 border border-gray-300 shadow-md">
                    <h6 className="capitalize font-bold">client ratings</h6>
                    <div className=" flex justify-start items-center gap-3">
                        <p>4.8</p>
                        <span className="flex justify-start items-center gap-1 ">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="h-5 w-5" color="#FBBF24" fill="#FBBF24" />
                            ))}
                        </span>
                    </div>

                </div>
            </div>
        </header>
    );
}
