import ProjectCard from "./Project-Card";
import { Link } from "@tanstack/react-router";

export default function Project() {
    return (
        <section id="projects" className="py-20 bg-white text-black" >
            <div className="container flex justify-center gap-20 items-center flex-col">
                <div className="text-center">
                    <h2 className="text-5xl max-sm:text-4xl font-bold">Featured <span className="text-[#3468E9]">Projects</span></h2>
                    <p className="mt-4 text-lg max-sm:text-[17px] text-[#222222ee]  max-w-3xl mx-auto"> Explore a selection of our recent projects that highlight our commitment to quality, creativity, and delivering results that matter.
                    </p>
                </div>
                <div className="w-full gap-15 flex max-lg:flex-wrap  justify-center items-center">
                    <ProjectCard title="TRYST 2025 - Cultural Fest Website" description="Event platform with real-time updates and smooth registration flow for Delhi University's annual fest." image="/images/tryst-fest-website.png" tags={["Event Tech", "University Fest", "UI/UX"]} link="https://tryst-website.vercel.app/" />

                    <ProjectCard title="SkillsYard - Learning Platform" description="Skill-based learning platform with course support, payments, and responsive design." image="/images/skillsyard-website.png" tags={["EdTech", "Online Learning", "Payments"]} link="https://skillsyard.com/" />

                    <ProjectCard title="Cancer Heal - Medical Website" description="Trustworthy site showcasing services, team, and milestones with clear CTAs." image="/images/cancerheal-website.png" tags={["Healthcare", "Company Profile", "Professional"]} link="https://cancerheal.co.in/" />
                </div>

                <Link to="." className="inline-flex px-10 transition-all duration-500  py-4 rounded-xl bg-[#3468E9] text-white hover:drop-shadow-[0_0_5px_#3468E9] items-center">
                    View All Projects
                </Link>
            </div>
        </section>
    );
}
