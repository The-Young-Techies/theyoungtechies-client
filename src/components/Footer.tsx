import { contactInfo, footerSections } from "@/lib/footer";
import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
    return (
        <footer className="w-full bg-white  flex justify-center items-center py-10 flex-col ">
            <div className="max-w-7xl w-full px-6 py-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {/* Logo & Description */}
                <div>
                    <Link to="/" className="inline-flex items-center mb-5">
                        <img src="/images/png logo.png" alt="Logo" width={50} height={40} />
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                        High-performance digital experiences. Stunning websites. Seamless UX.
                    </p>
                    <div className="mt-6 flex space-x-5 text-gray-500">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                            <Link key={idx} to="." className="hover:text-accent transition" aria-label="Social Link">
                                <Icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mapped Link Sections */}
                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h3 className="text-lg font-semibold mb-6 text-gray-800">{section.title}</h3>
                        <nav className="flex flex-col space-y-3 text-gray-600 text-sm">
                            {section.links.map((link) => (
                                <Link key={link.label} to={link.href} className="hover:text-accent transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                ))}

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-gray-800">Contact Us</h3>
                    {contactInfo.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 mb-3 text-gray-600 text-sm">
                            {item.icon}
                            <a href={item.href} className="hover:text-accent transition-colors">{item.value}</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t w-[90%] border-gray-300 pt-6 text-center text-sm text-gray-500 select-none">
                © {new Date().getFullYear()} The Young Techies. All rights reserved.
            </div>
        </footer>
    );
}
