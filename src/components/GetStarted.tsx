import { buttons } from "@/lib/getstarted";

export default function GetStarted() {

    return (
        <section className="w-[90%] relative m-auto max-md:py-5 rounded-xl z-10 flex justify-between items-center px-20 max-lg:h-full h-[150px] bg-[url('/images/blue-bg.jpg')] bg-no-repeat bg-cover bg-center">
            <span className="flex flex-col justify-start items-start gap-3">
                <h2 className="text-3xl text-white capitalize font-bold">have a amazing project in mind?</h2>
                <p className="text-lg text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corrupti?</p>
            </span>
                    <button className="text-black bg-amber-200 py-2 px-7 rounded-lg text-lg capitalize font-bold">contact us</button>
        </section>
    );
}
