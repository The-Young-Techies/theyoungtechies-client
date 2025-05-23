import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

interface FooterLinkSection {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterContactInfo {
  icon: React.ReactNode;
  value: string;
  href: string;
}

export const footerSections: FooterLinkSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "🛠️ Services", href: "/#services" },
      { label: "👨‍💼 About Us", href: "/#aboutus" },
      { label: "📁 Projects", href: "/#projects" },
      { label: "📞 Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "💻 Website Development", href: "/#services" },
      { label: "🎨 Website Design", href: "/#services" },
      { label: "📊 Admin Dashboard", href: "/#services" },
      { label: "🚀 SEO Optimization", href: "/#services" },
    ],
  },
];


export const contactInfo: FooterContactInfo[] = [
  {
    icon: <span className="text-lg">📧</span>,
    value: "contact@theyoungtechies.com",
    href: "mailto:contact@theyoungtechies.com",
  },
  {
    icon: <span className="text-lg">📞</span>,
    value: "+91 93102 56281",
    href: "tel:+919310256281",
  },
];
