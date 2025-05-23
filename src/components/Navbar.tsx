import { List } from "lucide-react";
import { Link } from "@tanstack/react-router";
interface NavAnker {
    anker: string;
}

const navdata: NavAnker[] = [
    { anker: "About" },
    { anker: "Services" },
    { anker: "Projects" },
    { anker: "Contact" },
];


export default function Navbar() {
    return (
        <nav className="w-full max-sm:h-[90px] max-lg:px-7 h-[120px] absolute z-30  top-0 flex justify-between px-15 items-center">
            <img src={"/images/png logo.png"} width={90} className="max-sm:w-[70px]" height={100} alt={""}/>
            <div className="flex justify-center max-lg:hidden items-center gap-7">
                {navdata.map((items, index) => {
                    return (<Link key={index} to="." className="text-[21.7px] text-white font-sans">{items.anker}</Link>)
                })
                }
                <button className="px-7 py-3 rounded-xl bg-[#3468E9] text-white">Get a Quote</button>
            </div>
            <div className="hidden max-lg:flex">
                <List className="w-10 h-10 text-white " />
            </div>
        </nav>
    )
}