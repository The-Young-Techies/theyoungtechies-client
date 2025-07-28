import { Mail, Phone } from "lucide-react";

export default function InfoNav() {
  const socialLinks = [
    {
      icon: '/images/linked-in-icon.png',
      path: "https://www.linkedin.com/company/106689660/admin/dashboard/",
      label: "LinkedIn",
    },
    {
      icon: '/images/X-icon.png',
      path: "https://x.com/theyoungtechies",
      label: "Twitter / X",
    },
    {
      icon: '/images/whatsapp-icon.webp',
      path: "https://wa.me/9310256281",
      label: "WhatsApp",
    },
    {
      icon: '/images/instagram-icon.png',
      path: "https://www.instagram.com/theyoungtechiesofficial/",
      label: "Instagram",
    },
    {
      icon: '/images/facebook-icon.png',
      path: "https://www.facebook.com/profile.php?id=61575130954126",
      label: "Facebook",
    },
  ];

  return (
    <nav className="hidden sm:flex bg-black text-white px-4 sm:px-16 py-3 justify-between items-center gap-4 text-xs md:text-sm select-none max-w-full overflow-x-auto no-scrollbar" aria-label="Contact and Social Links">
      {/* Email */}
      <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
        <Mail className="text-blue-400" size={18} aria-hidden="true" />
        <a href="mailto:contact@theyoungtechies.com" className="hover:text-blue-400 transition-colors" aria-label="Send email to contact@theyoungtechies.com">
          contact@theyoungtechies.com
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
        <Phone className="text-blue-400" size={18} aria-hidden="true" />
        <a href="tel:+919310256281" className="hover:text-blue-400 transition-colors" aria-label="Call +91 93102 56281">
          +91 93102 56281
        </a>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-4 flex-nowrap min-w-max">
        {socialLinks.map(({ icon, path, label }, index) => (
          <a
            key={index}
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${label} page`}
            className="rounded-full overflow-hidden hover:opacity-80 transition transform hover:scale-110"
          >
            <img
              src={icon}
              alt={label}
              className="w-5 h-5 md:w-6 md:h-6 object-contain"
              loading="lazy"
              draggable={false}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
