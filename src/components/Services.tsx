import { services } from "@/lib/header";

export default function Services() {
    return (
        <section className="py-12 px-20 flex flex-col justify-center items-center">
            <p className="text-sm uppercase text-gray-500 font-bold mb-1">Our Services</p>
            <h2 className="text-4xl font-bold mb-10 capitalize w-2xl text-center"><span className="text-blue-600">services</span> That Deliver <span className="text-blue-600">Results</span> and Bring Your Ideas to Life</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((value, index) => (
                    <div
                        key={index}
                        className="flex gap-6 items-start border border-gray-300 rounded-lg shadow-sm w-full max-w-xl"
                    >
                        <img
                            src={value.icon}
                            alt={value.title}
                            className="w-28 h-[100%] object-cover rounded-l-lg "
                        />
                        <div className={`flex flex-col justify-start items-start gap-2 p-4`} >
                            <h4 className="text-xl font-bold">{value.title}</h4>
                            <p className="text-gray-600">{value.description}</p>
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
