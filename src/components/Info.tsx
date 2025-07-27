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
    }
  ];

  return (
    <nav className="bg-black px-4 sm:px-16 py-3 flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 text-white text-sm">
      <span className="flex items-center gap-1">
        <Mail className="text-blue-300 translate-y-0.5" size={18} />
        <p>contact@theyoungtechies.com</p>
      </span>

      <span className="flex items-center gap-1">
        <Phone className="text-blue-300 translate-y-0.5" size={18} />
        <p>+91 93102 56281</p>
      </span>

      <span className="flex items-center gap-3">
        {socialLinks.map((item, index) => (
          <a
            href={item.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            title={item.label}
            className="hover:opacity-80 transition-all hover:scale-[1.1]"
          >
            <img src={item.icon} alt={item.label} className="w-7 h-7 rounded-full object-contain" />
          </a>
        ))}
      </span>
    </nav>
  );
}
