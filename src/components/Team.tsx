// TeamContainer.tsx
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "Anuj Mishra",
    role: "CEO / Founder",
    image: "/images/ceo.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/anujmishra",
      twitter: "https://twitter.com/anujmishra",
      instagram: "https://instagram.com/theyoungtechiesofficial"
    }
  },
  {
    name: "Anuj Mishra",
    role: "CEO / Founder",
    image: "/images/ceo.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/anujmishra",
      twitter: "https://twitter.com/anujmishra",
      instagram: "https://instagram.com/theyoungtechiesofficial"
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
  }
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-gray-100 p-6 gap-3 w-full max-w-xs mx-auto">
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 object-cover rounded-full shadow mb-2"
        loading="lazy"
        draggable={false}
      />
      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
      <p className="text-blue-700 text-sm font-medium">{member.role}</p>
      <div className="flex gap-3 justify-center mt-2">
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank" aria-label="LinkedIn" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={22} />
          </a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter} target="_blank" aria-label="Twitter" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaTwitter size={22} />
          </a>
        )}
        {member.socials.instagram && (
          <a href={member.socials.instagram} target="_blank" aria-label="Instagram" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <FaInstagram size={22} />
          </a>
        )}
      </div>
      
    </div>
  );
}

export default function TeamContainer() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center bg-gradient-to-b from-white via-blue-50 to-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 text-center">
        <span className="text-blue-600">Meet</span> Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items- w-full ">
        {teamMembers.map((member, idx) => (
          <TeamCard member={member} key={idx} />
        ))}
      </div>
    </section>
  );
}
