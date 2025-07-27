export const buttons = [
    {
        text: "✨ View Demos",
        className: "px-7 py-4 max-sm:text-[15px] max-sm:px-5 rounded-xl transition-all duration-700 bg-[#3468E9] text-white text-xl hover:drop-shadow-[0_0_10px_#3468E9]"
    },
    {
        text: "🎨 Explore Features",
        className: "px-3  py-4 max-sm:text-[14px] rounded-xl max-sm:px-2 hover:bg-white hover:text-black transition-all duration-700 text-white text-xl border-[1px] border-white hover:drop-shadow-[0_0_10px_white]"
    }
];


export interface Service {
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Website Development",
    description: "Custom-built websites tailored to your business needs and goals.",
    bgColor: "#EDE8FF",
    icon: "/images/web-dev-service.jpg",
  },
  {
    title: "E-Commerce Solutions",
    description: "We Help You To Robust e-commerce platforms to boost your online sales.",
    bgColor: "#FFE3E3",
    icon: "/images/e-commerce-solutions.jpg",
  },
  {
    title: "Mobile Development",
    description: "Improve your visibility on search engines with expert SEO.",
    bgColor: "#E4F1FF",
    icon: "/images/mobile-development.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Create delightful user experiences with our UI/UX services.",
    bgColor: "#FFF0E1",
    icon: "/images/ui-ux-design.jpg",
  },
  {
    title: "Custom Web Apps",
    description: "Advanced web applications designed to scale and perform.",
    bgColor: "#F1E4FF",
    icon: "/images/customise-web-apps.jpg",
  },
  {
    title: "Social Media Marketing",
    description: "Advanced web applications designed to scale and perform.",
    bgColor: "#F1E4FF",
    icon: "/images/social-media-marketing.jpg",
  },
];