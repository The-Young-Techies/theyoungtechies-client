import TeamCard from "./TeamCard";
import { teamMembers } from "@/utils/data";

const TeamContainer = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center bg-gradient-to-b from-white via-blue-50 to-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 text-center">
        <span className="text-blue-600">Meet</span> Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {teamMembers.map((member, idx) => (
          <TeamCard member={member} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default TeamContainer;
