import { services } from "@/lib/header";

export default function Services() {
    return (
        <section className="py-12 px-5 sm:px-10 lg:px-20 flex flex-col justify-center  items-center">
            <p className="text-sm uppercase text-gray-500 font-bold md:gap-1">Our Services</p>
            <h2 className="text-h6 md:text-h5 lg:text-h4 md:max-w-2xl font-bold mb-5 md:mb-10 capitalize text-center"><span className="text-blue-600">services</span> That Deliver <span className="text-blue-600">Results</span> and Bring Your Ideas to Life</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {services.map((value, index) => (
                    <div
                        key={index}
                        className="flex gap-3 justify-start items-start border border-gray-300 rounded-lg shadow-sm w-full"
                    >
                        <img
                            src={value.icon}
                            alt={value.title}
                            className="w-20 md:w-28 h-[100%] object-cover rounded-l-lg "
                        />
                        <div className={`flex flex-col justify-start items-start gap-2 p-3 md:p-4`} >
                            <h4 className="text-body font-bold">{value.title}</h4>
                            <p className="text-gray-600 text-body-small">{value.description}</p>
                            <button className="flex group justify-center items-baseline gap-1 font-semibold mt-2">
                                <p className=" text-md text-blue-600">
                                    Learn more <span className="inline-block text-md -rotate-[30deg] group-hover:rotate-0 transition-all">&rarr;</span>
                                </p>     
                           </button>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
