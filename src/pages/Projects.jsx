import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CareerCraft",
    description: (
      <ul className="list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
        <li>Developed a full-stack platform with tech roadmaps, quizzes, and progress tracking.</li>
        <li>Integrated JWT-based auth with protected routes for user sessions.</li>
        <li>Deployed on Vercel with Tailwind UI and GitHub CI/CD workflow.</li>
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
      <ul className="list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
        <li>Full-featured real estate app with listings, reviews, and auth.</li>
        <li>Cloudinary integration and session persistence with Express.</li>
        <li>Mobile-friendly UI with RESTful routes, deployed on Render.</li>
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
      <ul className="list-disc list-inside text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
        <li>Multiplayer dice game with animations, logic, and turn-based flow.</li>
        <li>Used React Router and Framer Motion for transitions.</li>
        <li>Responsive layout and reusable components deployed on Vercel.</li>
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
    <section id="projects" className="min-h-screen px-6 py-16 bg-zinc-100 dark:bg-zinc-950">
      <h1 className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Featured Projects
      </h1>

      <div className="space-y-20">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 items-center bg-white/10 dark:bg-zinc-900/40 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-800 hover:ring-1 hover:ring-purple-500 transition-all duration-300 group"
          >
            {/* Thumbnail */}
            <div className="md:w-1/2 w-full overflow-hidden rounded-2xl">
              <img
                src={proj.thumbnail}
                alt={proj.title}
                className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {proj.title}
              </h2>
              <div>{proj.description}</div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {proj.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-purple-600 dark:text-purple-400 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition"
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
