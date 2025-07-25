import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, techStack, github, demo, image }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center w-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 group hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300">

      {/* Left Image */}
      {image && (
        <div className="w-full md:w-2/5 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Right Content */}
      <div className="w-full md:w-3/5 text-left">
        <h3 className="text-3xl font-bold text-white mb-2 tracking-wide font-[Orbitron]">
          {title}
        </h3>

        <div className="text-zinc-300 text-sm leading-relaxed mb-4">
          {description}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-2 flex-wrap">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-300 hover:text-white transition"
            >
              <Github size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-300 hover:text-white transition"
            >
              <ExternalLink size={20} />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
