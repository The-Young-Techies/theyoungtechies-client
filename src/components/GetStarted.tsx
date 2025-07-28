import { buttons } from "@/lib/getstarted";

export default function GetStarted() {

    return (
        <section className="w-[90%] relative m-auto max-lg:py-5 rounded-xl z-10 gap-4 px-5 md:px-10 flex flex-col md:flex-row justify-center text-center md:text-start md:justify-between items-center max-lg:h-full h-[150px] bg-[url('/images/blue-bg.jpg')] bg-no-repeat bg-cover bg-center">
            <span className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2 ">
                <h2 className="text-h6 text-white capitalize font-bold">have a amazing project in mind?</h2>
                <p className="text-body-small text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corrupti?</p>
            </span>
                    <button className="text-black bg-amber-200 py-2 px-7 rounded-lg text-lg capitalize font-bold">contact us</button>
        </section>
    );
}
