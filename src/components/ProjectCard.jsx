// src/components/ProjectCard.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, techStack, github, demo, image }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-zinc-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 group hover:ring-1 hover:ring-cyan-400 w-full">

      {/* Left Image */}
      {image && (
        <div className="w-full md:w-1/2 max-h-64 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover md:object-left rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Right Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-semibold text-white tracking-wide mb-2 font-[Orbitron]">
          {title}
        </h3>
        <p className="text-zinc-300 text-base mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition"
            >
              <Github size={22} />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition"
            >
              <ExternalLink size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
