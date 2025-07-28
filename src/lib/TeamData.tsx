export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  experience: string[];
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
};


export const teamMembers = [
  {
    name: "Mayank Kansal",
    title: "CEO & Founder",
    bio: "Mayank leads our creative and technical direction with energy and vision. He's passionate about helping clients bring their ideas to life through thoughtful design and strong technology.",
    image: "/images/home-header2.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    experience: [
      "3+ years in full-stack web development",
      "Expertise in React, Next.js, and Node.js",
      "Hands-on with UI/UX for web and mobile interfaces",
      "Experience working with e-commerce platforms and admin dashboards",
      "Strong foundation in clean, scalable code and component-based design",
    ],
  },
  {
    name: "Ayushi Bisht",
    title: "Web Developer",
    bio: "Ayushi is a problem-solver at heart. Whether it's building dynamic interfaces or fine-tuning performance, she focuses on writing clean, maintainable code that delivers results.",
    image: "/images/home-header2.jpg", // Make sure this image exists in your public folder
    socials: {
      linkedin: "https://www.linkedin.com/in/ayushi-bisht", // Replace with actual profile link
      instagram: "https://www.instagram.com/ayushi.dev",     // Optional
    },
    experience: [
      "2+ years of hands-on experience in front-end development",
      "Proficient in React, Tailwind CSS, and TypeScript",
      "Built dashboards, landing pages, and full websites from scratch",
      "Strong understanding of responsive design and accessibility",
      "Works closely with designers to turn mockups into pixel-perfect UIs",
    ],
  },
  {
    name: "Ritika Sharma",
    title: "Lead Designer",
    bio: "Ritika combines visual storytelling with usability. She’s all about creating designs that not only look good but actually work.",
    image: "/images/home-header2.jpg",
    socials: {
      linkedin: "#",
    },
    experience: [
      "5+ years in UI/UX design",
      "Worked on 30+ mobile apps and web products",
      "Deep knowledge of Figma, Adobe XD, and design systems",
      "Focus on accessibility and user-centered design",
    ],
  },
  // Add more team members here...
];