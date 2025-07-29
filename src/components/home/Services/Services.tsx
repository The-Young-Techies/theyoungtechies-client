import { services } from "@/utils/data";

export default function Services() {
  return (
    <section  id="services" className="w-full px-6 sm:px-10 md:px-14 lg:px-16 mb-20 flex flex-col items-center bg-gradient-to-b from-white via-blue-50 to-white">
      <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-semibold mb-2 text-center">
        Our Services
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl max-w-3xl font-extrabold mb-8 text-center text-gray-900 leading-tight">
        <span className="text-blue-600">Services</span> That Deliver{" "}
        <span className="text-blue-600">Results</span> and Bring Your Ideas to Life
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((value, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-between bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg hover:scale-[1.025] transition-all duration-200 p-6 min-h-[320px]"
          >
            <div
              className="flex items-center justify-center h-20 w-20 rounded-xl mb-4 shadow ring-1 ring-blue-200"
              style={{ backgroundColor: value.bgColor }}
            >
              <img
                src={value.icon}
                alt={value.title}
                className="w-12 h-12 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="flex flex-col gap-2 items-center text-center flex-1">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                {value.title}
              </h4>
              <p className="text-gray-600 text-base">{value.description}</p>
            </div>
            <button className="mt-6 flex items-center font-semibold text-blue-700 hover:text-blue-900 group transition-colors">
              <span>Learn more</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &rarr;
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
