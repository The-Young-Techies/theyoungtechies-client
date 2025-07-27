import { steps } from "@/lib/ourApproach";

export default function OurApproach() {
    return (
        <section className="w-full py-20 bg-white flex flex-col items-center gap-14 px-4">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-4xl text-gray-900 font-bold text-center">
                    Our Simple & Basic <span className="text-blue-600">Approach</span>
                </h1>
                <p className="text-lg text-gray-600 w-full max-w-3xl text-center leading-7">
                    We follow a collaborative, client-centered approach to ensure that every project meets and exceeds expectations.
                </p>
            </div>

            <div className="flex flex-wrap justify-center items-start gap-14 w-full max-w-7xl">
                {steps.map(({ icon, title, description }, index) => (
                    <div key={index} className="flex justify-start items-start rounded-lg border border-gray-200 p-6 hover:scale-105 transition-all shadow-md max-w-xs gap-4">
                         <p className="text-blue-600 text-xl border-2 border-gray-300 rounded-full px-2 py-1 font-bold">
                                {icon}
                            </p>
                        <span className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-xl font-semibold underline text-blue-800">{title}</h2>
                             <p className="text-md text-gray-600">{description}</p>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
