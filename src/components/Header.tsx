import { buttons } from "@/lib/header";
export default function Header() {
    return (
        <header className="w-full h-[100vh]  flex justify-center items-center bg-fixed bg-[url('/images/headerback.jpg')] relative bg-no-repeat bg-center bg-cover">
            <div className="w-full h-full absolute inset-0 z-0 bg-[#0000009e]"></div>
            <div className=" mt-20  max-sm:mt-0 w-full flex gap-6 justify-center items-center flex-col z-1">
                <img src={"/images/png logo.png"} width={100} className="max-sm:w-[70px] " height={100} alt={""}/>
                <h2 className="text-[50px] w-[40%] max-md:w-[70%] max-lg:w-[80%] max-sm:w-[90%] max-sm:text-[27px] max-sm:leading-8 max-md:text-[35px] text-center leading-14 text-white">
                    Premium Web Template for Digital Agencies
                </h2>
                <p className="text-xl max-md:w-[95%] max-sm:text-[17px] text-center w-[60%] text-white">Stand out with a sleek, responsive template built to impress. Perfect for creative agencies, portfolios, and startups.</p>
                <div className="flex max-sm:gap-4 gap-9">
                    {buttons.map((btn, idx) => (
                        <button key={idx} className={btn.className}>{btn.text}</button>
                    ))}
                </div>
            </div>
        </header>
    );
}
