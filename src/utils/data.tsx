import { Mail, Phone } from "lucide-react";
import type { ApproachStep, Blog, BlogList, ContactMethod, CTAData, FAQItem, FooterContactInfo, FooterLinkSection, FormField, HeaderContent, IEventStats, NavLink, Project, Service, SocialLink, TeamMember } from "./interface";

// nav items 
export const navData: NavLink[] = [
  { anker: "About", href: "/about" },
  { anker: "Services", href: "/services" },
  { anker: "Projects", href: "/projects" },
  { anker: "Blogs", href: "/blogs" },
];

// social links
export const socialLinks: SocialLink[] = [
  {
    icon: '/images/social-icons/linked-in-icon.png',
    path: "https://www.linkedin.com/company/106689660/admin/dashboard/",
    label: "LinkedIn",
  },
  {
    icon: '/images/social-icons/X-icon.png',
    path: "https://x.com/theyoungtechies",
    label: "Twitter / X",
  },
  {
    icon: '/images/social-icons/whatsapp-icon.png',
    path: "https://wa.me/9310256281",
    label: "WhatsApp",
  },
  {
    icon: '/images/social-icons/instagram-icon.png',
    path: "https://www.instagram.com/theyoungtechiesofficial/",
    label: "Instagram",
  },
  {
    icon: '/images/social-icons/facebook-icon.png',
    path: "https://www.facebook.com/profile.php?id=61575130954126",
    label: "Facebook",
  },
];

// about 
export const aboutContent = {
  title: "Helping brands grow with design, tech, and marketing that works.",
  description:
    "We're a team of web designers and developers creating websites, dashboards, and e-commerce platforms that are visually engaging, user-friendly, and SEO-optimized. From new builds to revamps and maintenance, we deliver solutions that drive growth.",
  sections: [
    {
      id: "our-story",
      title: "our story",
      text: "We started with a simple goal: to create meaningful digital work that blends design, technology, and marketing. Since day one, we've been focused on building things that not only look good but actually help businesses grow.",
      bg: "bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.3),transparent),url('/images/about/our-story.jpg')]",
      textColor: "text-white",
    },
    {
      id: "our-vision",
      title: "our vision",
      text: "To become a trusted creative and tech partner for businesses looking to stand out online—by always pushing for better ideas, better execution, and better results.",
      bg: "bg-amber-100",
      textColor: "text-black",
    },
    {
      id: "our-mission",
      title: "our mission",
      text: "To help brands turn ideas into digital realities—through thoughtful design, clean code, and smart marketing. We aim to deliver work that’s creative, functional, and results-driven.",
      bg: "bg-purple-200",
      textColor: "text-black",
    },
  ],
};

// Carousel data 
export const serviceCarouselItems = [
  "Talk to Us",
  "*",
  "Web Design",
  "*",
  "Web Development",
  "*",
  "UI/UX Design",
  "*",
  "Social Media Marketing",
];

// counter 
export const eventStats: IEventStats[] = [
  {
    icon: "/images/success/projects-comp.png",
    label: 'Projects Completed',
    value: 10,
    suffix: '+',
    description: 'Successful launches',
  },
  {
    icon: "/images/success/hourglass-icon.png",
    label: 'Average Delivery Time',
    value: 1,
    suffix: 'w',
    description: 'Weeks per project',
  },
  {
    icon: "/images/success/clients-icon.png",
    label: 'Clients Served',
    value: 6,
    suffix: '+',
    description: 'Satisfied clients',
  },
  {
    icon: "/images/success/technology-icon.png",
    label: 'Technologies Used',
    value: 20,
    suffix: '+',
    description: 'Modern frameworks & tools',
  },
];

// ourApproach 
export const steps: ApproachStep[] = [
  {
    icon: 'Step 1',
    title: "Discovery",
    description: "We begin by understanding your business goals and audience to craft a smart, custom strategy.",
    bgColor: "#7cdff8bf",
  },
  {
    icon: "Step 2",
    title: "Design & Development",
    description: "Our team creates stunning, responsive designs and builds high-performance websites that deliver.",
    bgColor: "#bd3dce9b",
  },
  {
    icon: "Step 3",
    title: "Delivery & Support",
    description: "We launch your website and provide ongoing support to keep it optimized, secure, and up to date.",
    bgColor: "#eca542cb",
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Skillsyard",
    description:
      "Online learning platform with LMS features, admin dashboard, and student progress tracking. In this, worked and added services and functionalities in it.",
    liveUrl: "https://skillsyard.com/",
    imageUrl: "/images/projects/skillsyard.png",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Redux", "Nestjs", "graphQL"],
  },
  {
    id: "2",
    title: "Tryst Fest",
    description:
      "Official website for Keshav Mahavidyalaya annual tech fest, featuring an interactive event schedule, user registrations, and detailed information on workshops and competitions. Built with modular and responsive design to handle high-traffic student engagement.",
    imageUrl: "/images/projects/tryst-fest-website.png",
    githubUrl: "https://github.com/iam-mayank-kansal/tryst-website",
    liveUrl: "https://tryst-website-bjvs5quyt-mayanks-projects-b06bc3e0.vercel.app/",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    id: "3",
    title: "Cancer Heal",
    description:
      "AI-powered health support system designed for cancer patients to track symptoms, access hospital data, and receive personalized suggestions. Contributed to the intelligent assistant module and ensured a smooth user experience.",
    imageUrl: "/images/projects/cancerheal.png",
    liveUrl: "https://cancerheal.co.in/",
    techStack: ["HTML", "CSS", "JavaScript", "lambda"],
  },
  {
    id: "4",
    title: "Hotelswale",
    description:
      "Dynamic hotel booking platform featuring real-time room availability, search filters, and a fully functional admin CMS. Developed backend modules and ensured data integrity and smooth user interactions.",
    imageUrl: "/images/projects/hotelswale-website.png",
    liveUrl: "https://hotelswale.com/",
    techStack: ["Node.Js", "Express.Js", "EJS", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "5",
    title: "Wolf Pharma",
    description:
      "High-performance eCommerce website tailored for bodybuilding and wellness products. Includes sleek animations, dark-themed design, product filtering, and QR code verification for product authenticity.",
    imageUrl: "/images/projects/wolf-pharma.png",
    liveUrl: "https://wolfpharmacompany.com/",
    techStack: ["React.js", "Tailwind", "Framer Motion", "QR-Code"],
  },
  {
    id: "6",
    title: "Hanushiv Cricket Academy",
    description:
      "Modern and responsive website built for a local cricket academy, highlighting coaching programs, location maps, and contact integration. Focused on clean UI and ease of use for both students and staff.",
    imageUrl: "/images/projects/hanushiv-website.png",
    liveUrl: "https://hanushiv.com/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];


// serviceData 
export const services: Service[] = [
  {
    icon: "/images/services/web-dev-icon.png",
    title: "Website Development",
    description: "We create responsive, high-performance websites tailored to your business goals using the latest web technologies and frameworks.",
    bgColor: "#EDE8FF",
  },
  {
    title: "E-Commerce Solutions",
    description: "Launch your online store with a secure, scalable e-commerce platform that supports payments, product management, inventory, and customer engagement.",
    bgColor: "#FFE3E3",
    icon: "/images/services/e-commerce-icon.png",
  },
  {
    title: "Website Design",
    description: "Our team designs visually appealing, user-friendly websites that reflect your brand identity and deliver a seamless user experience across all devices.",
    bgColor: "#E4F1FF",
    icon: "/images/services/website-design.png",
  },
  {
    title: "Admin Dashboard",
    description: "We build custom admin panels that make it easy to manage users, content, analytics, and operations—all in one secure and intuitive interface.",
    bgColor: "#FFF0E1",
    icon: "/images/services/admin-dashboard.png",
  },
  {
    title: "SEO Optimization",
    description: "Boost your website’s visibility with on-page SEO, technical improvements, and keyword strategies that help you rank higher on Google and drive organic traffic.",
    bgColor: "#F1E4FF",
    icon: "/images/services/seo-optimization.png",
  },
  {
    title: "Custom Website Development",
    description: "Get a fully custom-built website designed from the ground up to meet your specific business requirements, functionality, and user journey.",
    bgColor: "#E2F6F1",
    icon: "/images/services/custom-web-dev.png",
  },
   {
    title: "Website Maintenance",
    description: "Keep your site secure and up-to-date with regular backups, bug fixes, performance checks, and content updates—handled by our expert team.",
    bgColor: "#FFF6E5",
    icon: "/images/services/web-maintainence.png",
  },
   {
    title: "Website Revamp",
    description: "Transform your outdated website with a complete redesign focused on modern aesthetics, faster performance, and improved user engagement.",
    bgColor: "#FDEBFF",
    icon: "/images/services/web-revamp.png",
  },

];

// faq data 
export const faqs: FAQItem[] = [
  {
    question: "What services does your agency offer?",
    answer:
      "We specialize in UI/UX design, custom web development, e-commerce solutions, and SEO performance optimization.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on scope, but most standard projects are completed within 3 to 6 weeks.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing support, maintenance, and performance tuning after launch.",
  },
  {
    question: "Can you work with clients outside of India?",
    answer:
      "Absolutely. We collaborate remotely with clients across different time zones using tools like Zoom, Slack, and Notion.",
  },
];

export const aboutFAQs = [
  {
    question: "What kind of businesses do you work with?",
    answer: "We work with startups, small businesses, local brands, and growing companies across various industries. Whether you're launching your first website or need a redesign, we adapt to fit your goals and scale."
  },
  {
    question: "What services do you offer?",
    answer: "We specialize in custom website development, UI/UX design, e-commerce solutions, portfolio sites, and CMS platforms like WordPress and Shopify. We also offer maintenance and performance optimization services."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "On average, a standard website takes about 1 to 2 weeks depending on its size and complexity. For larger or more custom builds, we’ll give you a detailed timeline before starting."
  },
  {
    question: "What makes Young Techies different from other agencies?",
    answer: "We're a small, focused team that prioritizes quality, clarity, and speed. Every project is custom-built—no templates, no shortcuts. We care about clean code, smart design, and long-term client relationships."
  },
  {
    question: "Will I be able to update my website on my own?",
    answer: "Absolutely. If your site is built with a CMS like WordPress or Shopify, we’ll show you how to manage content easily. For custom sites, we can add a simple dashboard or offer ongoing support."
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing depends on the project’s scope, design complexity, and features. Once we understand your needs, we’ll provide a clear, fixed quote—no surprises."
  },
  {
    question: "Can I see some of your past work?",
    answer: "Yes. You can check out our recent projects on the portfolio or work page. If you're looking for something industry-specific, just ask—we’ve likely built something similar."
  }
];


// team member data 
export const teamMembers: TeamMember[] = [
  {
    name: "Mayank Kansal",
    role: "Full Stack Web Developer",
    image: "/images/team/mayank.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/mayank-kansal-a062752a7/",
      twitter: "https://x.com/_mayankkansal_",
      instagram: "https://www.instagram.com/mynkk__1/"
    }
  },
  {
    name: "Priya Singh",
    role: "Lead Developer",
    image: "/images/dev1.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/priyasingh",
      twitter: "https://twitter.com/priyasingh"
    }
  },
  {
    name: "Rahul Sharma",
    role: "UI/UX Designer",
    image: "/images/uiux.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/rahulsharma",
      instagram: "https://instagram.com/rahulsharma"
    }
  },
  {
    name: "Anita Roy",
    role: "Frontend Intern",
    image: "/images/intern.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/anitaroy"
    }
  }
];

// contact Infor Data 
export const contactMethods: ContactMethod[] = [
  {
    icon: "📩",
    title: "Email us at",
    detail: "contact@theyoungtechies.com",
  },
  {
    icon: "📞",
    title: "Call us at",
    detail: "+91 93102 56281",
  },
];

export const reasons: string[] = [
  "Stunning websites with seamless user experience",
  "High-speed performance and optimization",
  "Responsive designs that work on all devices",
  "Quick turnaround times and reliable support",
];

export const formFields: FormField[] = [
  { placeholder: "Enter your name", type: "text", width: "45.5%" },
  { placeholder: "Enter your last name", type: "text", width: "45.5%" },
  { placeholder: "Enter your email", type: "text", width: "93.5%" },
  { placeholder: "Enter your phone number", type: "text", width: "93.5%" },
];

export const selectOptions: string[] = [
  "Select a service",
  "Website Development",
  "Responsive Web Design",
  "SEO Optimization",
  "E-commerce Development",
  "Website Maintenance & Support",
  "Custom Web Application Development",
  "UI/UX Design",
  "Other",
];

// footer 
export const footerSections: FooterLinkSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Services", href: "services" },
      { label: "About Us", href: "about" },
      { label: "Projects", href: "projects" },
      { label: "Contact", href: "contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "services" },
      { label: "Website Design", href: "services" },
      { label: "Admin Dashboard", href: "services" },
      { label: "SEO Optimization", href: "services" },
      { label: "E-Commerce Solution", href: "services" },
      { label: "Custom Website Development", href: "services" },
      { label: "Website Maintenance", href: "services" },
      { label: "Website Revamp", href: "services" },
    ]
    ,
  },
];

export const contactInfo: FooterContactInfo[] = [
  {
    icon: <Mail className="px-2" size={150}/>,
    value: "contact@theyoungtechies.com",
    href: "mailto:contact@theyoungtechies.com",
  },
  {
    icon: <Phone  className="px-2" size={150}/>,
    value: "+91 93102 56281",
    href: "tel:+919310256281",
  },
];

// CTA Data 
export const ctaData: CTAData = {
  heading: "have an amazing project in mind?",
  subText:
    "Let’s turn your idea into a polished, high-impact product built the right way from day one.",
  buttonText: "contact us",
  backgroundImage: "/images/get-started/blue-bg.jpg",
};

// Header Data 
export const headerContent: HeaderContent = {
  title: "We Turn Ideas Into Digital Products That",
  highlight: "Perform",
  description:
    "We craft custom websites, dashboards, and e-commerce platforms with clean design, smart development, and built-in SEO to help your business grow across devices, attract more users, boost performance, and stay ahead of the competition.",
  primaryButton: "view our services",
  showContact: true,
  imageUrl: "/images/header/home-header.jpg",
  imageAlt: "Showcase of digital performance",
  ratings: {
    label: "client ratings",
    score: "4.8",
    stars: 5,
  },
};


export const blogData: Record<string, Blog> = {
    'best-web-development-services-in-burari': {
        title: 'Best Web Development Services in Burari - The Young Techies',
        content:
            "When it comes to building a strong digital presence, your website is everything. It's your first impression, your 24/7 salesperson, and the backbone of your brand online. If you're a business or startup in Burari looking for professional, reliable, and modern web development, The Young Techies is the name to trust.",
        head1: "Who We Are",
        description: "At The Young Techies, we’re not just another agency. We’re a team of passionate developers and designers based right here in Burari, helping local businesses go digital the right way. We combine technical skill with creative thinking to build websites that actually work—fast, responsive, and optimized for real-world results.",
        head2: "What We Offer",
        list: [
            "We design visually compelling websites that align with your brand identity and business goals, ensuring a strong first impression.",
            "From intuitive user interfaces to robust backend systems, we deliver complete development solutions tailored to your requirements.",
            "We build secure, scalable online stores with integrated payment systems, product management, and user-friendly navigation.",
            "Every website is optimized for seamless performance on desktops, tablets, and smartphones to ensure a consistent user experience.",
            "We fine-tune your website for speed and efficiency, reducing load times and improving overall functionality.",

        ],
        head3: "Who We Work With",
        description2: [
            "Whether you’re a small business, a growing startup, or even a solo creator—if you’ve got a vision, we can build it.", "We’ve already worked with local institutes, retail stores, fitness brands, and freelancers in Burari, Sant Nagar, and nearby areas."
        ],
        tags: ['websites', 'web development', 'frontend', 'backend']
    },
}

export const bloglistData: BlogList[] = [
  {
    title: 'Best Web Development Services in Burari - The Young Techies',
    slug: 'best-web-development-services-in-burari',
    summary: 'Explore the top-rated web development services available in Burari, offered by The Young Techies.',
    image: "/images/blogs/web-agency.jpg"
  },
  {
    title: 'Best Web Development Services in Burari - The Young Techies',
    slug: 'best-web-development-services-in-burari',
    summary: 'Explore the top-rated web development services available in Burari, offered by The Young Techies.',
    image: "/images/blogs/web-agency.jpg"
  },
  {
    title: 'Best Web Development Services in Burari - The Young Techies',
    slug: 'best-web-development-services-in-burari',
    summary: 'Explore the top-rated web development services available in Burari, offered by The Young Techies.',
    image: "/images/blogs/web-agency.jpg"
  },
  {
    title: 'Best Web Development Services in Burari - The Young Techies',
    slug: 'best-web-development-services-in-burari',
    summary: 'Explore the top-rated web development services available in Burari, offered by The Young Techies.',
    image: "/images/blogs/web-agency.jpg"
  },
  // Add more blogs as needed
];



