import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "CareerCraft",
      description: "A MERN stack career roadmap platform with quizzes, analytics, and progress tracking.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind", "JWT"],
      github: "https://github.com/abhishek/CareerCraft",
      demo: "https://careercraft.vercel.app"
    },
    {
      title: "NestVoyage",
      description: "A real estate marketplace with location-based filtering and contact options.",
      techStack: ["React", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com/abhishek/NestVoyage",
      demo: "https://nestvoyage.vercel.app"
    },
    {
      title: "Ransomware Simulator",
      description: "Security awareness tool that mimics ransomware behavior for training purposes.",
      techStack: ["HTML", "CSS", "JS", "Python"],
      github: "https://github.com/abhishek/ransomware-simulator",
      demo: ""
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 py-16"
    >
      <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-12">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
