import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CareerCraft",
    description: (
      <ul className="list-disc list-inside text-sm space-y-1 text-zinc-700 dark:text-zinc-300">
        <li>
          Developed a full-stack platform featuring tech roadmaps, quizzes, and personalized progress tracking.
        </li>
        <li>
          Integrated JWT-based authentication with protected routes for secure user access.
        </li>
        <li>
          Deployed on Vercel with Tailwind CSS UI and GitHub CI/CD workflow.
        </li>
      </ul>
    ),
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/abhishek5703/CareerCraft",
    demo: "https://career-craft-two.vercel.app/",
    thumbnail: "/careercraft.png",
  },
  {
    title: "NestVoyage",
    description: (
      <ul className="list-disc list-inside text-sm space-y-1 text-zinc-700 dark:text-zinc-300">
        <li>
          Created a full-featured real estate platform with listings, user auth, CRUD, and reviews.
        </li>
        <li>
          Integrated Cloudinary for secure image uploads and Express sessions for login persistence.
        </li>
        <li>
          Built RESTful routes with EJS templating and deployed with mobile-optimized UI via Render.
        </li>
      </ul>
    ),
    techStack: ["EJS", "MongoDB", "Express.js", "Bootstrap", "Cloudinary", "Render"],
    github: "https://github.com/abhishek5703/NestVoyage",
    demo: "https://nestvoyage.onrender.com/listings",
    thumbnail: "/nestvoyage.png",
  },
  {
    title: "Dicey Duels",
    description: (
      <ul className="list-disc list-inside text-sm space-y-1 text-zinc-700 dark:text-zinc-300">
        <li>
          Built a multiplayer dice game with animated rolls, scoring logic, and turn-based flow.
        </li>
        <li>
          Implemented React Router for navigation and Framer Motion for UI transitions.
        </li>
        <li>
          Designed reusable components and deployed a responsive layout on Vercel.
        </li>
      </ul>
    ),
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "React Router", "Vercel"],
    github: "https://github.com/abhishek5703/Dicey-Duels",
    demo: "https://dicey-duels.vercel.app/",
    thumbnail: "/diceyduels.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Featured Projects
      </h1>

      <div className="space-y-16">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 bg-white/5 dark:bg-zinc-900/50 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-zinc-800 hover:border-purple-600 transition-all duration-300 group"
          >
            {/* Left Image */}
            <div className="md:w-1/3 w-full overflow-hidden rounded-xl">
              <img
                src={proj.thumbnail}
                alt={proj.title}
                className="h-48 w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-2/3 w-full space-y-4">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                {proj.title}
              </h2>
              {proj.description}
              <div className="flex flex-wrap gap-2">
                {proj.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-zinc-200 dark:bg-zinc-800 text-xs px-3 py-1 rounded-full text-zinc-800 dark:text-zinc-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium border border-purple-600 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-600 hover:text-white transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
