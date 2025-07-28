// TeamCard.tsx
import React from "react";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  bgColor?: string; // optional, in case you want to fall back to a default
};


const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, bgColor }) => {
  return (
    <div className={`w-lg sm:w-md md:w-lg relative ${bgColor} rounded-lg flex flex-col items-center text-center py-6 px-4 shadow-md`}>
      <img
        src={image}
        alt={name}
        className="w-20 h-20 absolute -top-10 rounded-full object-cover border-4 border-white shadow"
      />
      <span className="mt-8">
        <p className="text-gray-800 text-body font-bold capitalize">{name}</p>
        <p className="text-body text-gray-700">{role}</p>
      </span>
    </div>
  );
};

export default TeamCard;
