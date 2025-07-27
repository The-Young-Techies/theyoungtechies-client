import { buttons } from "@/lib/header";
import ServiceCarousel from "./Carousel";
export default function Header() {
    return (
        <header className="w-full h-[100vh]  flex justify-center items-center bg-[url('/images/home-header.jpg')] relative bg-no-repeat bg-left bg-cover">
            <div className="w-full h-full absolute inset-0 z-0 bg-[#000000b9]"></div>
            <div className="flex flex-col justify-center items-center gap-7 text-center z-10">
                <h1 className="text-white text-[40px] font-bold w-2xl ">
                    We Turn Ideas Into Digital Products That <span className="text-blue-500">Perform</span>
                </h1>
                <p className="text-gray-200 text-lg w-5xl">
                    With our cutting-edge UI/UX, unique web apps, high-converting e-commerce sites, and astute SEO, we help brands stand out. We ensure that your online presence truly functions, from design to deployment and even social media.</p>
                <div className="flex justify-start items-center gap-5">
                    <button className="text-white text-lg border border-blue-500 bg-blue-500 py-2 px-4 rounded-xl capitalize">view our services</button>
                    <button className="text-white text-lg border border-white py-2 px-6 rounded-xl capitalize">contact us</button>
                </div>
            </div>
        </header>
    );
}
