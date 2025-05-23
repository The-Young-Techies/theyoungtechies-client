import { buttons } from "@/lib/getstarted";

export default function GetStarted() {

    return (
        <section className="w-full relative max-md:py-5 z-10 flex justify-center items-center max-lg:h-full bg-fixed h-[400px] bg-[url('/images/headerback.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="w-full h-full absolute inset-0 z-0 bg-[#000000b3]"></div>
            <div className="w-[85%] h-[80%] max-lg:py-5 max-lg:h-[80%] flex flex-col gap-4 justify-center items-center rounded-4xl bg-[#ffffff1c] relative z-10">
                <button className="text-white px-5 max-lg:text-[15px] py-2 bg-[#fff2] rounded-xl">Get Started</button>
                <h2 className="text-4xl max-sm:text-[20px] max-md:w-[90%]  font-bold max-lg:text-center max-lg:text-3xl text-white">Get Started Ready to Transform Your Digital Presence?</h2>
                <p className="text-white max-lg:w-[95%] max-lg:text-[15px] text-xl w-[50%] text-center">
                    Let's turn your ideas into high-performance digital experiences that stand out from the competition.
                </p>
                <div className="flex gap-5">
                    {buttons.map((btn, idx) => (
                        <button key={idx} className={`px-7 py-3 max-sm:text-[15px] max-md:px-4 rounded-xl text-lg font-semibold flex items-center gap-2 transition-all duration-700 ${btn.className}`}>{btn.text}</button>
                    ))}
                </div>
            </div>
        </section>
    );
}
