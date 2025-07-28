import { contactMethods, formFields, reasons, selectOptions } from "@/lib/Contactus";
import { CheckCircle2 } from "lucide-react";

// You might want to replace below with your UI Kit's Button/Field if available!

export default function ContactUs() {
  return (
    <section className="relative py-16 px-4 md:px-10 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-slate-100 min-h-[700px] flex justify-center items-center">
      {/* MAIN WRAPPER */}
      <div className="w-full  mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        {/* LEFT: Contact info & value prop */}
        <div className="w-full md:w-[45%] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-blue-500 font-semibold text-xs uppercase tracking-widest">Contact Us</span>
            <h2 className="text-4xl/[1.2] md:text-5xl font-extrabold text-gray-900">
              Let’s <span className="text-blue-600 underline underline-offset-8 decoration-2">Talk</span>
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              Have a project in mind? Fill out the form and our team will respond within 24 hours.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactMethods.map(({ icon, title, detail }, i) => (
              <div key={i} className="flex gap-4 items-center">
                <span className="flex justify-center items-center w-12 h-12 bg-white/80 border-2 border-blue-200 rounded-full shadow-lg group-hover:scale-105 transition text-2xl text-blue-500 shadow-blue-100">
                  {icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-slate-700">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/70 shadow-md rounded-xl p-5 mt-2 border border-blue-100 flex flex-col gap-2 backdrop-blur">
            <h4 className="text-lg font-bold text-gray-900 mb-1">Why choose us?</h4>
            <ul className="space-y-2">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="text-blue-500" size={18} />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="w-full md:w-[55%] p-0 md:p-1">
          <form
            className="w-full bg-white shadow-xl rounded-2xl border border-blue-100/60 px-7 py-8 flex flex-col gap-6 backdrop-blur-lg"
            onSubmit={e => e.preventDefault()}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {formFields.slice(0, 2).map((field, i) => (
                <input
                  key={i}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="flex-1 bg-slate-50 border border-blue-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                  required
                />
              ))}
            </div>
            {formFields.slice(2).map((field, i) => (
              <input
                key={i}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full bg-slate-50 border border-blue-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                required
              />
            ))}
            <select
              className="w-full bg-slate-50 border border-blue-100 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              required
            >
              {selectOptions.map((option, i) => (
                <option key={i} value={option === "Select a service" ? "" : option} disabled={i === 0}>
                  {option}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Tell us about your project"
              className="w-full bg-slate-50 border border-blue-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200 transition resize-none min-h-[120px]"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-extrabold text-lg py-3 rounded-xl shadow-blue-100 shadow-lg hover:from-blue-700 hover:to-blue-500 transition duration-150 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
