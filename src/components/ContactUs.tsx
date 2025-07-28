import { contactMethods, formFields, reasons, selectOptions } from "@/lib/Contactus";
import { CheckCircle2 } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="text-black w-full h-[645px] max-lg:py-5 flex z-20 bg-white justify-center flex-col md:flex-row max-lg:h-full items-start md:items-center px-5 md:px-10 lg:px-20 gap-5">
            <div className="w-[40%] max-lg:w-full h-[90%] flex flex-col gap-2 md:gap-4 justify-center items-start">
                <span className="text-gray-500 font-bold text-sm w-fit uppercase ">Contact Us</span>
                <h3 className="text-4xl font-bold text-[#0B1026]">Get In <span className="text-blue-600">Touch</span></h3>
                <p className="text-lg text-[#6B6E7A]">Have a project in mind? Fill out the form and we'll get back to you soon.</p>
                <div className="flex flex-col justify-start items-start text-start">
                    {contactMethods.map(({ icon, title, detail }, i) => (
                        <div key={i} className="flex gap-5 h-[65px]">
                            <span className="w-11 h-11 rounded-full flex justify-center items-center text-lg bg-[#E0F2FE]">{icon}</span>
                            <div className="justify-start items-start">
                                <h2 className="text-[#0B1026]">{title}</h2>
                                <p className="text-[#222222be]">{detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <h4 className="text-xl font-semibold">Why choose us?</h4>
                    {reasons.map((reason, i) => (
                        <div key={i} className="flex justify-start gap-2 items-center">
                            <CheckCircle2 color="#3468E9" size={16} /> <p className="text-[#222222da]">{reason}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="w-[40%] lg:w-[50%] max-lg:w-full h-[85%] max-md:border-0 border-2 max-md:px-0 px-5 md:py-4 rounded-2xl border-[#2222222d] flex flex-col gap-6 justify-center items-center">
                <div className="w-full max-lg:flex-col max-lg:h-[110px] flex gap-4 justify-center">
                    {formFields.slice(0, 2).map(({ type, placeholder }, i) => (
                        <input key={i} type={type} placeholder={placeholder} className="flex-1 !h-[47px] rounded-xl border border-[#7473734a] px-3 text-black" />
                    ))}
                </div>

                {formFields.slice(2).map(({ type, placeholder }, i) => (
                    <input key={i} type={type} placeholder={placeholder} className="w-full h-[47px] rounded-xl border border-[#7473734a] px-3 text-black" />
                ))}

                <select className="w-full h-[47px] rounded-xl border border-[#7473734a] px-3 text-[#7F7F7F]">
                    {selectOptions.map((option, i) => (
                        <option key={i} value={option === "Select a service" ? "" : option}>{option}</option>
                    ))}
                </select>

                <textarea placeholder="Tell us about your project" className="w-full h-[120px] rounded-xl border border-[#7473734a] p-3 text-black resize-none"></textarea>

                <button type="submit" className="bg-[#3468E9] text-white w-full h-[47px] rounded-xl">Send Message</button>
            </div>

        </section>
    );
}
