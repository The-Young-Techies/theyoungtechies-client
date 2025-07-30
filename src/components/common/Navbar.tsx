import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import InfoNav from './Info';
import { navData, socialLinks } from '@/utils/data';
import { Link as ScrollLink } from 'react-scroll';
import PrimaryButton from "@/lib/PrimaryButton";

// --- PRIMARY BUTTON COMPONENT ---
// A simple, reusable button component.
// const PrimaryButton: React.FC<{ label: string; className?: string; onClick?: () => void }> = ({ label, className, onClick }) => (
//     <button onClick={onClick} className={`px-6 py-2 rounded-lg bg-[#3468E9] text-white font-semibold transition-all duration-300 hover:drop-shadow-[0_0_5px_#3468E9] ${className}`}>
//         {label}
//     </button>
// );


// --- MOBILE MENU COMPONENT ---
// This overlay will appear on mobile screens when the menu is toggled.
const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
    <>
        {/* Backdrop */}
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
            aria-hidden="true"
        />
        {/* Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-full max-w-xs bg-black text-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end p-6">
                <button onClick={onClose} aria-label="Close menu">
                    <X className="w-8 h-8 text-white hover:text-blue-400 transition-colors" />
                </button>
            </div>
            <div className="flex flex-col justify-center items-center h-full -mt-20 text-center">
                {navData.map(({ anker, href }) => (
                    <ScrollLink to={href} key={anker} smooth={true} duration={500} className="cursor-pointer">
                        <span onClick={onClose} className="block py-4 text-3xl font-semibold hover:text-blue-400 transition-colors">{anker}</span>
                    </ScrollLink>
                ))}
                <div className="mt-8">
                    <ScrollLink to="contact" smooth={true} duration={8*150} >
                        <PrimaryButton label="Contact Us" className="cursor-pointer" onClick={onClose} />
                    </ScrollLink>
                </div>
                <div className="mt-12 flex flex-col items-center gap-4 text-lg">
                    <a href="mailto:contact@theyoungtechies.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Mail size={20} /> contact@theyoungtechies.com</a>
                    <a href="tel:+919310256281" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Phone size={20} /> +91 93102 56281</a>
                </div>
                <div className="mt-8 flex items-center gap-6">
                    {socialLinks.map(({ icon, path, label }) => (
                        <a key={label} href={path} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full overflow-hidden hover:opacity-80 transition transform hover:scale-110">
                            <img src={icon} alt={label} className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.src = 'https://placehold.co/32x32/ff0000/ffffff?text=E'; }} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </>
);


// --- MAIN NAVBAR COMPONENT ---
const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when the mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="w-full sticky top-0 z-40">
            <nav className="w-full bg-white z-30 shadow-md flex justify-between items-center px-6 sm:px-10 md:px-14 lg:px-16 h-[64px]">
                <a href="/" className="flex items-center">
                    <img src="/images/logos/youngtech-logos.png" alt="The Young Techies Logo" className="h-12 object-contain" />
                </a>

                <div className="hidden sm:flex items-center space-x-10">
                    {navData.map(({ anker, href }) => (
                        <ScrollLink to={href} key={anker} smooth={true} duration={500} className="cursor-pointer">
                            <span className="relative text-lg font-semibold font-sans text-gray-900 hover:text-blue-600 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                                {anker}
                            </span>
                        </ScrollLink>
                    ))}
                </div>

                <div className="hidden md:flex">
                    <ScrollLink to="contact" smooth={true} duration={8*150}>
                        <PrimaryButton label="Contact Us" className="cursor-pointer" />
                    </ScrollLink>
                </div>

                <div className="flex sm:hidden items-center">
                    <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                        <Menu className="w-8 h-8 text-gray-900 cursor-pointer hover:text-blue-600 transition-colors" />
                    </button>
                </div>
            </nav>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
};


// --- MAIN APP COMPONENT ---
// This renders the complete Navbar.
export default Navbar;
