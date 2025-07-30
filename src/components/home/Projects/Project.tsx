"use client";
import React from 'react';
import { projectsData } from '@/utils/data';
import ProjectCard from './ProjectCard';
import PrimaryButton from '@/lib/PrimaryButton';

const Project = () => {
  const [visibleProjects, setVisibleProjects] = React.useState<number>(3);
  const showAllProjects = () => setVisibleProjects(projectsData.length);
  const hasMoreProjects = visibleProjects < projectsData.length;

  return (
    <section id="projects" className=" bg-white text-black mb-20 px-6 sm:px-10 md:px-14 lg:px-16">
      <div className="container mx-auto flex justify-center gap-4 md:gap-10 items-center flex-col">
        <div className="text-center">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2 text-center">
            our projects
          </p>
          <h2 className="text-h6 md:text-h5 xl:text-h3 font-bold leading-tight">
            Featured <span className="text-[#3468E9]">Projects</span>
          </h2>
          <p className="text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore a selection of our recent projects that highlight our commitment to quality, creativity, and delivering results that matter.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projectsData.slice(0, visibleProjects).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {hasMoreProjects && (
        <PrimaryButton label='view all services' onClick={showAllProjects} className='mt-6' />
        )}
      </div>
    </section>
  );
};

export default Project;
