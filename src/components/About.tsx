
const services: string[] = [
    "🌐 Website Design & Development",
    "🎨 UI/UX Design",
    "🛒 E-commerce Solutions",
    "⚙️ Custom Web Applications",
    "🚀 SEO & Performance Optimization",
];

export default function AboutUs() {
    return (
        <section className="text-black w-full flex justify-center max-lg:flex-col max-lg:gap-2 max-lg:py-10 items-center gap-35  bg-white py-20 h-full">
            <div className="w-[40%] px-5 max-sm:gap-4  py-5 max-lg:h-full max-lg:w-[95%] h-[500px] justify-center flex gap-7 flex-col ">
                <strong className="text-3xl">About Us</strong>
                <h1 className="text-[43px] max-sm:text-[27px] max-sm:leading-8 max-md:text-[32px] font-serif leading-11">
                    Turning ideas into powerful web experiences.
                </h1>
                <p className="text-xl max-sm:text-[17px] text-[#222222da]">
                    We build fast, user-friendly websites that turn ideas into impactful digital experiences—for startups and growing brands.
                </p>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
                    <ul className="list-none space-y-1">
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-[40%] max-lg:w-[90%] flex justify-center relative max-lg:h-[600px] max-sm:h-[400px] items-center h-[600px] ">
                <img src={"/images/headerback.jpg"} className=" h-[75%] rounded-b-2xl max-lg:h-[80%] max-sm:h-[70%]" alt={""} width={1000} height={200} />
                <img src={"/images/aboutus-img.jpg"} className=" absolute rounded-b-2xl max-lg:w-[70%] max-sm:h-[180px] max-lg:h-[270px] h-[250px] max-lg:bottom-0  bottom-0 shadow-[0_0_20px_white]" alt={""} width={400} height={200} />
            </div>
        </section>
    );
}
