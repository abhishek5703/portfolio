// src/components/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "CareerCraft",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Developed a full-stack platform with tech roadmaps, quizzes, and progress tracking.</li>
        <li>Integrated JWT-based auth with protected routes for user sessions.</li>
        <li>Deployed on Vercel with Tailwind UI and GitHub CI/CD workflow.</li>
      </ul>
    ),
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/abhishek5703/CareerCraft",
    demo: "https://career-craft-two.vercel.app/",
    image: "/careercraft.png",
  },
  {
    title: "NestVoyage",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Full-featured real estate app with listings, reviews, and auth.</li>
        <li>Cloudinary integration and session persistence with Express.</li>
        <li>Mobile-friendly UI with RESTful routes, deployed on Render.</li>
      </ul>
    ),
    techStack: ["EJS", "MongoDB", "Express.js", "Bootstrap", "Cloudinary", "Render"],
    github: "https://github.com/abhishek5703/NestVoyage",
    demo: "https://nestvoyage.onrender.com/listings",
    image: "/nestvoyage.png",
  },
  {
    title: "Dicey Duels",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Multiplayer dice game with animations, logic, and turn-based flow.</li>
        <li>Used React Router and Framer Motion for transitions.</li>
        <li>Responsive layout and reusable components deployed on Vercel.</li>
      </ul>
    ),
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "React Router", "Vercel"],
    github: "https://github.com/abhishek5703/Dicey-Duels",
    demo: "https://dicey-duels.vercel.app/",
    image: "/diceyduels.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-zinc-100 dark:bg-zinc-950">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 drop-shadow-[0_1.2px_1.2px_rgba(0,255,255,0.6)] font-[Orbitron]">
        Featured Projects
      </h1>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
