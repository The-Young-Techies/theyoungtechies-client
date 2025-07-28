import { List } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
<nav className="w-full max-lg:px-7 h-fit sticky top-0 bg-white z-50 flex justify-between px-10 xl:px-20 items-center shadow-lg">
                <div className="flex justify-start items-center gap-12">
                    <img src={"/images/logo1.jpeg"} width={70} className="max-sm:w-[70px]" height={100} alt={""} />
                </div>
                <div className=" justify-start items-center gap-7 hidden sm:flex">
                    {navdata.map((items, index) => {
                        return (
                            <Link
                                key={index}
                                to="."
                                className="relative text-lg text-black hover:text-blue-600 font-semibold font-sans after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {items.anker}
                            </Link>
                        )
                    })
                    }
                </div>
                <PrimaryButton label="contact us" className="hidden sm:flex" />
                <div className="hidden max-sm:flex">
                    <List className="w-10 h-10 text-black " />
                </div>
            </nav>
    )
}