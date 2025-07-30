import { type Project } from "@/utils/interface";
import { Code, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        flex flex-row bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group relative
        
      "
      tabIndex={0}
      aria-label={project.title}
    >
      {/* Accent bar */}
      <div className="flex-shrink-0" />

      {/* Main Content Area */}
      <div className="flex flex-col justify-between flex-grow p-5">
        <div className="space-y-3 mb-5">
          {/* Project image */}
          <div className="rounded-lg overflow-hidden mb-2 w-full h-40 bg-zinc-100 flex items-center justify-center">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h3 className="text-lg font-semibold text-zinc-800">
            {project.title}
          </h3>
          <p className="text-base text-zinc-600 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 justify-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium
                hover:bg-blue-700 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                w-full sm:w-auto
              "
              tabIndex={0}
              aria-label="View Live"
            >
              <ExternalLink size={18} />
              <span>Live</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 justify-center px-4 py-2 bg-zinc-800 text-white rounded-md text-sm font-medium
                hover:bg-zinc-900 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700
                w-full sm:w-auto
              "
              tabIndex={0}
              aria-label="View Code"
            >
              <Code size={18} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
