"use client";
import React from 'react';
import { projectsData } from '@/utils/data';
import ProjectCard from './ProjectCard';

const Project = () => {
  const [visibleProjects, setVisibleProjects] = React.useState<number>(3);
  const showAllProjects = () => setVisibleProjects(projectsData.length);
  const hasMoreProjects = visibleProjects < projectsData.length;

  return (
    <section id="projects" className="py-20 px-4 md:px-16 bg-white text-black">
      <div className="container mx-auto flex justify-center gap-10 items-center flex-col">
        <div className="text-center">
          <h2 className="text-5xl max-sm:text-4xl font-bold">
            Featured <span className="text-[#3468E9]">Projects</span>
          </h2>
          <p className="mt-4 text-lg max-sm:text-[17px] text-[#222222ee] max-w-3xl mx-auto">
            Explore a selection of our recent projects that highlight our commitment to quality, creativity, and delivering results that matter.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projectsData.slice(0, visibleProjects).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {hasMoreProjects && (
          <button
            onClick={showAllProjects}
            className="inline-flex px-10 py-4 mt-12 rounded-xl bg-[#3468E9] text-white hover:drop-shadow-[0_0_5px_#3468E9] transition-all duration-500 items-center"
          >
            View All Projects
          </button>
        )}
      </div>
    </section>
  );
};

export default Project;
