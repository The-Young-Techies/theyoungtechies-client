import { Link } from "@tanstack/react-router";
import { MailIcon, MapIcon } from "lucide-react";

export default function InfoNav() {
    const socialLinks = [
        {
            icon:'/images/linked-in-icon.png'
        },
        {
            icon:'/images/X-icon.png'
        },
        {
            icon:'/images/whatsapp-icon.webp'
        },
        {
            icon:'/images/instagram-icon.png'
        }
        ]
    return (
        <nav className="bg-black px-16 py-1 flex justify-between items-center">
            <span className="flex justify-start items-center gap-1">
                <MapIcon className="text-blue-300 " size={15}/>
                <p className="text-sm text-white">Lorem ipsum dolor sit amet consectetur.</p>
            </span>
            <span className="flex justify-start items-center gap-1">
                <MailIcon className="p-0 m-0 text-blue-300" size={15} />
                <p className="text-sm text-white">Loremipsum@gmail.com</p>
            </span>
            <span className="flex justify-start items-center gap-2">
                {
                    socialLinks.map((value, index) => (
                        <Link to="/" key={index}>
                            <img src={value.icon} alt="" className="w-5 rounded-full" />
                        </Link>
                    ))
                }
            </span>
        </nav>
    )
}