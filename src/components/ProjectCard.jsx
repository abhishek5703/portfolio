// src/components/ProjectCard.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, techStack, github, demo }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black dark:hover:text-white transition"
          >
            <Github size={20} />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black dark:hover:text-white transition"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
