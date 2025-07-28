import type { TeamMember } from "@/lib/TeamData";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckCircle } from "lucide-react";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 max-w-6xl w-full">
      <div
        className="w-full h-[100vh] lg:w-1/2 flex flex-col items-start bg-center relative bg-no-repeat bg-cover rounded-lg p-6"
        style={{ backgroundImage: `url(${member.image})` }}
      >
        <div className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-lg mb-4">
          {member.title}
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-gray-600 mb-4">{member.bio}</p>

        <div className="flex gap-4 mb-8">
          {member.socials.facebook && (
            <a href={member.socials.facebook} className="text-gray-500 hover:text-blue-600 text-xl">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
            </a>
          )}
          {member.socials.instagram && (
            <a href={member.socials.instagram} className="text-gray-500 hover:text-pink-500 text-xl">
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl" />
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="text-gray-500 hover:text-blue-500 text-xl">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-2xl" />
            </a>
          )}
        </div>

        <hr className="mb-8 text-gray-300" />

        <div className="space-y-6">
          <h4 className="font-semibold text-gray-800 mb-1">{member.name.split(' ')[0]}'s Experience</h4>
          <ul className="space-y-3">
            {member.experience.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}