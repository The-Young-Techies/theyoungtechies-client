import ProjectCard from '@/components/home/Projects/ProjectCard';
import PrimaryButton from '@/lib/PrimaryButton';
import { projectsData } from '@/utils/data';
import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
import { Search } from 'lucide-react';

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [visibleProjects, setVisibleProjects] = React.useState<number>(9);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const showAllProjects = () => setVisibleProjects(filteredProjects.length);

  // Filtering projects by title or description
  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasMoreProjects = visibleProjects < filteredProjects.length;

  return (
    <section id="projects" className="bg-white text-black my-20 mt-10 px-6 sm:px-10 md:px-14 lg:px-16">
      <div className="container mx-auto flex justify-center gap-4 md:gap-10 items-center flex-col">
        <div className="text-center"> 
          <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold leading-tight">
            Our <span className="text-[#3468E9]">Projects</span>
          </h2>
          <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 mt-4 max-w-4xl mx-auto">
            Explore a curated selection of our recent projects each one a testament to our dedication to creativity, precision, and impactful results. From innovative web platforms to high-performing mobile apps, our work speaks for itself.
          </p>
        </div>

        {/* Search input with icon and centered alignment same as services page */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <div className="relative flex-1 w-full">
            <span className="absolute top-2.5 left-3 text-blue-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
                setVisibleProjects(9); // Optional: reset visible projects on search change
              }}
              placeholder="Search projects..."
              className="w-full rounded-lg border border-blue-100 pl-10 pr-3 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {filteredProjects.length > 0 ? (
            filteredProjects.slice(0, visibleProjects).map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))
          ) : (
            <div className="col-span-full text-gray-400 text-lg pt-16 pb-14 text-center">
              No projects found matching your search.
            </div>
          )}
        </div>

        {hasMoreProjects && filteredProjects.length > 0 && (
          <PrimaryButton label="view all projects" onClick={showAllProjects} className="mt-6" />
        )}
      </div>
    </section>
  );
}
