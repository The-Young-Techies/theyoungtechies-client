import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { services } from '@/utils/data';
import ServiceCard from '@/components/common/ServiceCard';

function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="services"
      className="bg-white text-black my-20 mt-10 px-6 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="container mx-auto flex justify-center gap-4 md:gap-10 items-center flex-col">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold leading-tight">
            Our <span className="text-[#3468E9]">Services</span>
          </h2>
          <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 mt-4 max-w-4xl mx-auto">
            Discover the range of services we offer — each designed to help you grow, engage, and stand out. From strategy to execution, our team is dedicated to delivering impactful solutions tailored to your goals.
          </p>
        </div>

        {/* Search input */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <div className="relative flex-1 w-full">
            <span className="absolute top-2.5 left-3 text-blue-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services..."
              className="w-full rounded-lg border border-blue-100 pl-10 pr-3 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <ServiceCard key={index} services={service} />
            ))
          ) : (
            <div className="col-span-full text-gray-400 text-lg pt-16 pb-14 text-center">
              No services found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Route export for TanStack Router
export const Route = createFileRoute('/services/')({
  component: ServicesPage,
});
