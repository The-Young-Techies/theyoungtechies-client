import { contactInfo, footerSections } from "@/utils/data";
import { Link } from "@tanstack/react-router";
import SocialLinks from "./SocialLinks";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 py-14 flex justify-center items-center flex-col px-6 sm:px-10 lg:px-16 select-none">
      <div className="w-full grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo & Description */}
        <div className="flex flex-col">
          <Link to="/" aria-label="Homepage" className="inline-flex items-center mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
            <img
              src="/images/logos/youngtech-logos.png"
              alt="The Young Techies Logo"
              width={50}
              height={40}
              className="object-contain"
              loading="lazy"
            />
            <span className="sr-only">The Young Techies</span>
          </Link>

          <p className="text-white text-sm leading-relaxed max-w-xs">
            High-performance digital experiences. Stunning websites. Seamless UX.
          </p>

          <div className="mt-8 flex space-x-6 text-white">
            <SocialLinks iconsHeight={30} iconsWidth={30} />
          </div>
        </div>

        {/* Mapped Link Sections */}
        {footerSections.map((section) => (
          <section
            key={section.title}
            aria-labelledby={`footer-heading-${section.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <h3
              id={`footer-heading-${section.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white text-lg font-semibold mb-6 uppercase tracking-wider"
            >
              {section.title}
            </h3>
            <nav className="flex flex-col space-y-3 text-white text-sm" aria-label={section.title}>
              {section.links.map((link) => (
                <ScrollLink key={link.label}
                  to={link.href} smooth={true} duration={500}>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
                    {link.label}
                  </span>
                </ScrollLink>
              ))}
            </nav>
          </section>
        ))}

        {/* Contact Info */}
        <section aria-labelledby="footer-contact">
          <h3
            id="footer-contact"
            className="text-white text-lg font-semibold mb-6 uppercase tracking-wider"
          >
            Contact Us
          </h3>
          <address className="not-italic">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 mb-4 text-white text-sm">
                <span className="flex items-center justify-center w-9 h-9 bg-blue-700 rounded-full">
                  {item.icon}
                </span>
                {item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? (
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors break-words focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="break-words">{item.value}</p>
                )}
              </div>
            ))}
          </address>
        </section>
      </div>

      <div className="border-t border-blue-700 w-full max-w-7xl mt-12 pt-6 text-center text-xs text-blue-300">
        &copy; {new Date().getFullYear()} The Young Techies. All rights reserved.
      </div>
    </footer>
  );
}
