import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckCheckIcon, CheckCircle, CheckIcon } from "lucide-react";

export default function TeamMember() {
    return (
        <section className="w-full py-20 bg-white flex flex-col items-center px-6 mt-10 mb-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">
                    Meet Our <span className="text-blue-600">Team</span>
                </h2>
                <p className="text-gray-600 max-w-xl mt-4">
                    We're a young, ambitious team excited to build great things. Here's a closer look at who we are.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-10 max-w-6xl w-full">
                <div className="w-full h-[520px] lg:w-1/2 flex flex-col items-start bg-[url('/images/home-header2.jpg')] bg-center relative bg-no-repeat bg-cover rounded-xl p-6">
                    <div className=" text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full mb-4">
                        CEO & Founder
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mayank Kansal</h3>
                    <p className="text-gray-600 mb-4">
                        Mayank leads our creative and technical direction with energy and vision. He's passionate about helping clients bring their ideas to life through thoughtful design and strong technology.
                    </p>

                    <div className="flex gap-4 mb-8">
                        <a href="#" className="text-gray-500 hover:text-blue-600 text-xl">
                            <FontAwesomeIcon icon={faFacebook} className="text-gray-600 hover:text-blue-600 text-xl" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 text-xl">
                            <FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-pink-500 text-xl" />

                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 text-xl">
                            <FontAwesomeIcon icon={faLinkedin} className="text-gray-600 hover:text-blue-500 text-xl" />
                        </a>
                    </div>
                    <hr className="mb-8 text-gray-300"/>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">What Drives Mayank</h4>
                            <p className="text-gray-600">
                                He’s all about clean design, good code, and honest communication. Mayank believes in making things simple, smart, and real.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Skills & Tools</h4>
                            <ul className="list-inside text-gray-600">
                                <li className="flex justify-start items-center gap-2">
                                    <CheckCircle size={16} color="#3468E9"/>
                                    React, Next.js, Tailwind CSS</li>
                                <li className="flex justify-start items-center gap-2">
                                     <CheckCircle size={16} color="#3468E9" />UI/UX Collaboration</li>
                                <li className="flex justify-start items-center gap-2">
                                     <CheckCircle size={16} color="#3468E9"/>Client Communication & Team Strategy</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Fun Fact</h4>
                            <p className="text-gray-600">
                                Built his first landing page using only Notepad and Google at age 16 — and it still works.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
