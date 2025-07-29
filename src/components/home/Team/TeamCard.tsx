import React from "react";
import { type TeamMember } from "@/utils/interface";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

interface Props {
  member: TeamMember;
}

const TeamCard: React.FC<Props> = ({ member }) => {
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
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin size={22} />
          </a>
        )}
        {member.socials.twitter && (
          <a
            href={member.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaTwitter size={22} />
          </a>
        )}
        {member.socials.instagram && (
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={22} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
