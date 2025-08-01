import type { Service } from "@/utils/interface"
import { Link } from "@tanstack/react-router"
import { Mail, FolderOpen } from "lucide-react"

function ServiceCard({ services }: { services: Service }) {
    return (
        <div
            className="flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow duration-200 min-h-[340px] max-w-full"
        >
            {/* Icon Area */}
            <div className="flex items-center justify-center mb-4">
                <div
                    className="rounded-full p-3"
                    style={{
                        backgroundColor: services.bgColor || "#EFF6FF",
                        boxShadow: "0 1px 6px 0 rgba(16,30,54,0.06)",
                    }}
                >
                    <img
                        src={services.icon}
                        alt={services.title}
                        className="w-12 h-12 object-contain"
                        loading="lazy"
                        draggable={false}
                    />
                </div>
            </div>
            {/* Title & Description */}
            <div className="flex flex-col items-center text-center flex-1 mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{services.title}</h4>
                <p className="text-base text-gray-600">{services.description}</p>
            </div>
            {/* Actions */}
            <div className="flex gap-2 mx-auto">
                <Link to="/contact" className="cursor-pointer">
                    <button
                        className=" cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-150"
                    >
                        <Mail className="w-4 h-4" />
                        Contact
                    </button>
                </Link>
                <Link to="/projects" className="cursor-pointer">
                    <button
                        className=" cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-700 text-blue-700 bg-white font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-150"
                    >
                        <FolderOpen className="w-4 h-4" />
                        View Projects
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard
