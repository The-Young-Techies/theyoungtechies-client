import type { Service } from "@/utils/interface"

function ServiceCard({ key, services }: { key: number|string, services: Service }) {
    return (
        <div key={key}
            className="group flex flex-col items-center justify-between bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg hover:scale-[1.025] transition-all duration-200 p-6 min-h-[290px]"
        >
            <div
                className="flex items-center justify-center h-20 w-20 rounded-xl mb-4 shadow ring-1 ring-blue-200"
                style={{ backgroundColor: services.bgColor }}
            >
                <img
                    src={services.icon}
                    alt={services.title}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                    draggable={false}
                />
            </div>
            <div className="flex flex-col gap-2 items-center text-center flex-1">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                    {services.title}
                </h4>
                <p className="text-gray-600 text-base">{services.description}</p>
            </div>
        </div>
    )
}

export default ServiceCard