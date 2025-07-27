import { Mail } from "lucide-react";

export default function ContactButton() {
  return (
    <button
      className="group relative flex items-center border border-[#3468E9] justify-start w-[45px] h-[45px] bg-neutral-100 hover:w-[160px] rounded-md transition-all duration-300 overflow-hidden shadow-md active:translate-x-[2px] active:translate-y-[2px]"
    >
      <div className="flex items-center justify-center w-full group-hover:w-[30%] transition-all duration-300 pl-0 group-hover:pl-5">
        <Mail className="w-[17px] h-[17px] text-neutral-800" />
      </div>
      <div className="absolute right-0 w-0 opacity-0 text-neutral-800 text-[1.1rem] font-semibold transition-all duration-300 group-hover:w-[70%] group-hover:opacity-100 group-hover:pr-3 whitespace-nowrap">
        Contact Us
      </div>
    </button>
  );
}
