import { services } from "@/lib/header";
export default function Services() {
    return (
        <section className="text-black w-full py-10 h-screen bg-white max-lg:h-full max-sm:px-5 flex flex-col max-sm:py-20 gap-10 justify-center items-center">
            <div className="text-center flex flex-col gap-1 max-sm:gap-0">
                <h1 className="text-[45px] max-sm:text-3xl font-bold">Our Services</h1>
                <p className="text-[22px] max-sm:w-[95%] max-sm:text-[17px] w-[80%] mx-auto">
                    We provide end-to-end web development solutions to help your business thrive in the digital world.
                </p>
            </div>

            <div className="w-full h-[60%] gap-8 max-sm:gap-5 flex justify-center flex-wrap items-center">
                {services.map((service, index) => (
                    <div key={index} className="flex w-[450px] max-sm:px-3 h-[180px] max-sm:h-[150px] px-4 rounded-2xl gap-5 justify-center items-center scale-100 hover:scale-102 transition-all duration-500" style={{ backgroundColor: service.bgColor }}>
                        <span className="flex flex-col gap-1">
                            <h2 className="text-2xl max-sm:text-[20px] font-[550]">{service.title}</h2>
                            <p className="text-[18px] max-sm:w-full max-sm:text-[15px]">{service.description}</p>
                        </span>
                        <img src={service.icon} className="max-sm:w-[80px]" width={100} height={100} alt={service.title} />
                    </div>
                ))}
                <div className="flex w-[450px]  h-[180px] bg-[#E0F7F1] max-sm:h-[150px] px-4 rounded-2xl gap-5 justify-center items-center scale-100 hover:scale-102 transition-all duration-500" >
                    <span className="flex flex-col justify-start gap-2">
                        <h2 className="text-2xl max-sm:text-[20px] font-[550]">Need a Custom services</h2>
                        <p className="text-[18px] max-sm:text-[15px]">Contact us to discuss your specific requiments</p>
                        <button className="w-fit px-10 py-2 bg-[#2D58E0] text-white rounded-xl" >Contact Us</button>
                    </span>
                </div>
            </div>
        </section>
    );
}
