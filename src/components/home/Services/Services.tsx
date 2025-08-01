import ServiceCard from "@/components/common/HomeServiceCard";
import { services } from "@/utils/data";

export default function Services() {
  return (
    <section id="services" className="w-full px-6 sm:px-10 md:px-14 lg:px-16 mb-20 flex flex-col items-center bg-gradient-to-b from-white via-blue-50 to-white gap-4">
      <span>
        <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2 text-center">
          Our Services
        </p>
        <h2 className="text-h6 md:text-h5 xl:text-h3 max-w-3xl font-bold mb-8 text-center text-gray-900 leading-tight">
          <span className="text-blue-600">Services</span> That Deliver{" "}
          <span className="text-blue-600">Results</span> and Bring Your Ideas to Life
        </h2>
      </span>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((services, index) => (
          <ServiceCard key={index} services={services} />
        ))}
      </div>
    </section>
  );
}
