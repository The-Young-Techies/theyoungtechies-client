import { steps } from "@/lib/ourApproach";
import PrimaryButton from "@/lib/PrimaryButton";

export default function OurApproach() {
    return (
        <section className="w-full py-20 bg-blue-50 flex items-center gap-28 px-20">
            <div className="flex flex-col justify-start items-start gap-6 text-start">
                <h1 className="text-4xl text-gray-900 font-bold ">
                    Our Simple & Basic <span className="text-blue-600">Approach</span>
                </h1>
                <p className="text-lg text-gray-600 w-full max-w-3xl">
                    We follow a collaborative, client-centered approach to ensure that every project meets and exceeds expectations.
                </p>
              <PrimaryButton label="get in touch"/>
            </div>

            <div className="flex flex-col gap-10 justify-center items-start w-4xl rounded-lg shadow-lg p-10 border bg-white border-gray-300">
                {steps.map(({ icon, title, description }, index) => (
                    <div key={index} className="flex flex-col justify-start items-start gap-3 w-full">
                        <span className="flex flex-col justify-start items-start gap-1">
                            <p className="text-gray-500 text-sm font-bold uppercase text-md">
                                {icon}
                            </p>
                            <h2 className="text-2xl font-semibold">{title}</h2>
                        </span>
                        <p className="text-md text-gray-700">{description}</p>

                        {/* Show <hr> for all except last step */}
                        {index !== steps.length - 1 && (
                            <hr className="w-full border-t border-gray-300 mt-4" />
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
}
