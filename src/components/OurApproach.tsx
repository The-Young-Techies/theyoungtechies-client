import { steps } from "@/lib/ourApproach";
export default function OurApproach() {
    return (
        <section className="w-full h-full py-15 relative gap-5 max-sm:gap-10 flex bg-[url('/images/ouraproch.jpg')] bg-fixed bg-center bg-cover bg-no-repeat justify-center flex-col items-center">
            <div className="w-full h-full absolute inset-0 z-0 bg-[#000000ad]"></div>
            
            <div className="flex relative flex-col max-sm:mb-5 justify-center items-center gap-3">
                <h1 className="text-4xl text-white font-bold">Our Approach</h1>
                <p className="text-[18px] text-[#ffffffd4] w-[70%] max-sm:w-[90%] text-center leading-7">
                    We follow a collaborative, client-centered approach to ensure that every project meets and exceeds expectations.
                </p>
            </div>
            <div className="w-full relative flex justify-center  gap-15 max-sm:gap-10 items-center max-sm:h-full h-[400px] flex-wrap">
                {steps.map(({ icon, title, description, bgColor }, index) => (
                    <div key={index} className="flex flex-col  hover:scale-102 transition-all duration-400 gap-3 justify-center items-center w-[380px]">
                        <span className="w-[70px] h-[70px] text-[30px] rounded-full flex justify-center items-center" style={{ backgroundColor: bgColor }}>
                            {icon}
                        </span>
                        <h2 className="text-[27px] text-white">{title}</h2>
                        <p className="text-[18px] max-sm:w-[90%] text-[#e6e2e2] w-full text-center">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
