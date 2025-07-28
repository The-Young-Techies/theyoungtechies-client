import { List } from "lucide-react";
import { Link } from "@tanstack/react-router";
import PrimaryButton from "@/lib/PrimaryButton";

interface NavAnker {
  anker: string;
}

const navdata: NavAnker[] = [
  { anker: "About" },
  { anker: "Services" },
  { anker: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-white z-50 shadow-md flex justify-between items-center px-6 sm:px-10 md:px-14 lg:px-16 h-[64px]">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/youngtech-logos.png"
          alt="The Young Techies Logo"
          className="max-sm:w-[70px] h-12 object-contain"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Navigation links */}
      <div className="hidden sm:flex items-center space-x-10">
        {navdata.map(({ anker }, index) => (
          <Link
            key={index}
            to="."
            className="relative text-lg font-semibold font-sans text-gray-900 hover:text-blue-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {anker}
          </Link>
        ))}
      </div>

      {/* Contact button */}
      <div className="hidden md:flex">
        <PrimaryButton label="Contact Us" className="cursor-pointer"/>
      </div>

      {/* Mobile menu icon */}
      <div className="flex sm:hidden items-center">
        <List className="w-8 h-8 text-gray-900 cursor-pointer hover:text-blue-600 transition-colors" aria-label="Open menu" />
      </div>
    </nav>
  );
}
