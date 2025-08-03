import PrimaryButton from "@/lib/PrimaryButton"
import { features } from "@/utils/data"
import { Link } from "@tanstack/react-router"
import { CheckCircleIcon } from "lucide-react"
export default function WhyChooseUs() {
    return (
        <div className="flex flex-col px-6 sm:px-10 md:px-14 lg:px-16 md:flex-row-reverse justify-between items-center mb-20 gap-10 lg:gap-20" >
            <div className='flex flex-col justify-center md:justify-start md:items-start md:text-start items-center gap-6 text-center '>
                <div className="text-center md:text-start">
                    <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2">why choose us</p>
                    <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold capitalize leading-tight" >Why Your Next <span className='text-blue-600'>Projects</span> Belongs Here</h2>
                </div>
                <img src="/images/about/why-choose-us.jpg" alt="" className='flex md:hidden w-full rounded-2xl' />
                <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 text-center md:text-start">We create visually striking, high-performing websites that help businesses stand out online. Our team is passionate about building seamless digital experiences that balance style and function.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
                    {
                        features.map((value, index) => (
                            <li key={index} className="flex justify-center sm:justify-start items-center gap-2">
                                <CheckCircleIcon color="#3468E9" className="shrink-0" size={20} />
                                <p className="text-base md:text-sm lg:text-base capitalize font-semibold ">{value}</p>
                            </li>
                        ))
                    }
                </ul>
                <Link to="/projects">
                    <PrimaryButton label="view all projects" />
                </Link>
            </div>
            <img src="/images/about/why-choose-us.jpg" alt="" className='hidden md:flex w-[400px] lg:w-[500px] rounded-2xl' />
        </div>
    )
}