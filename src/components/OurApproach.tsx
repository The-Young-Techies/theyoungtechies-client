import { steps } from "@/lib/ourApproach";
import PrimaryButton from "@/lib/PrimaryButton";

export default function OurApproach() {
    return (
        <section className="w-full py-20 bg-blue-50 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28 px-10 lg:px-20">
            <div className="flex flex-col justify-start items-center gap-4 md:gap-6 text-center md:text-start md:items-start">
                <h1 className="text-h6 md:text-h5 xl:text-h4 text-gray-900 font-bold ">
                    Our Simple & Basic <span className="text-blue-600">Approach</span>
                </h1>
                <p className="text-body-small md:text-body xl:text-para text-gray-600 w-full max-w-3xl">
                    We follow a collaborative, client-centered approach to ensure that every project meets and exceeds expectations.
                </p>
              <PrimaryButton label="get in touch"/>
            </div>

            <div className="flex flex-col gap-10 justify-center items-start w-full md:w-4xl rounded-lg shadow-lg p-5 md:p-10 border bg-white border-gray-300">
                {steps.map(({ icon, title, description }, index) => (
                    <div key={index} className="flex flex-col justify-start items-start gap-3 w-full">
                        <span className="flex flex-col justify-start items-start gap-1">
                            <p className="text-gray-500 text-para-small md:text-body-small font-bold uppercase text-md">
                                {icon}
                            </p>
                            <h2 className="text-para md:text-h6 font-semibold">{title}</h2>
                        </span>
                        <p className="text-body-small md:text-body xl:text-para text-gray-700">{description}</p>

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
