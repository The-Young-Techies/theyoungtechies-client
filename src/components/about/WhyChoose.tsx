import PrimaryButton from "@/lib/PrimaryButton"
import { Link } from "@tanstack/react-router"
import { CheckCircleIcon } from "lucide-react"

export default function WhyChooseUs() {
    const features = ["website Design", "SEO Optimization", "Web Development", "Mobile Apps Design"]
    return (
        <div className="flex flex-row-reverse justify-between items-center px-10 mb-20  gap-20" >
            <div className='flex flex-col justify-start items-start gap-6  text-start'>
                <div className="text-start">
                    <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2">why choose us</p>
                    <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold capitalize leading-tight" >Why Your Next <span className='text-blue-600'>Projects</span> Belongs Here</h2>
                </div>
                <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 text-center md:text-start">We create visually striking, high-performing websites that help businesses stand out online. Our team is passionate about building seamless digital experiences that balance style and function.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        features.map((value, index) => (
                            <li key={index} className="flex justify-start items-center gap-2">
                                <CheckCircleIcon color="#3468E9" size={20} />
                                <p className="text-base capitalize font-semibold ">{value}</p>
                            </li>
                        ))
                    }
                </ul>
                <Link to="/projects">
                    <PrimaryButton label="view all projects" />
                </Link>
            </div>
            <img src="/images/about/why-choose-us.jpg" alt="" className='w-[500px] rounded-2xl h-[100%]' />
        </div>
    )
}