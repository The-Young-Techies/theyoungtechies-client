import PrimaryButton from '@/lib/PrimaryButton'
import { contactMethods, formFields, selectOptions } from '@/utils/data'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <section id="contact" className="relative px-6 sm:px-10 md:px-14 lg:px-16 py-20 bg-gradient-to-br from-blue-50 via-white to-slate-100 min-h-[700px] flex justify-center items-center">
          {/* MAIN WRAPPER */}
          <div className="w-full  mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* LEFT: Contact info & value prop */}
            <div className="w-full md:w-[45%] flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-blue-500 text-xs uppercase tracking-widest font-bold">Contact Us</span>
                <h2 className="text-h6 md:text-h5 xl:text-h3 leading-tight font-bold text-gray-900">
                  We'd Love to <span className="text-blue-600">Hear</span> From You
                </h2>
                </div>
                <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600">
                  Have a project in mind? Fill out the form and our team will respond within 24 hours.
                </p>
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
            <PrimaryButton label="send message" type="submit" className="w-full" />
              </form>
            </div>
          </div>
        </section>
  )
}
