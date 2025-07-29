import { Mail, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function InfoNav() {
  return (
    <nav className="hidden sm:flex bg-black text-white px-4 sm:px-16 py-3 justify-between items-center gap-4 text-xs md:text-sm select-none" aria-label="Contact and Social Links">
           <div className="flex items-center gap-2 whitespace-nowrap">
               <Mail className="text-blue-400" size={18} />
               <a href="mailto:contact@theyoungtechies.com" className="hover:text-blue-400 transition-colors">contact@theyoungtechies.com</a>
           </div>
           <div className="flex items-center gap-2 whitespace-nowrap">
               <Phone className="text-blue-400" size={18} />
               <a href="tel:+919310256281" className="hover:text-blue-400 transition-colors">+91 93102 56281</a>
           </div>
           <SocialLinks iconsHeight={30} iconsWidth={30}/>
       </nav>
  );
}
