import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    number: "01", title: "CareerCraft", subtitle: "CAREER GUIDANCE · AI LEARNING", image: "/careercraft.png",
    description: "A full-stack career roadmap and quiz platform designed around persistent learning progress and contextual AI assistance.",
    highlights: ["Roadmaps across 13+ technology domains with per-user progress and timed quizzes.", "Gemini + Ollama assistant with automatic fallback, SSE streaming, and roadmap-aware prompts.", "Smart Resource Recommendation powered by a curated 47-resource catalog and tag relevance scoring."],
    techStack: ["React 19", "Node.js", "Express 5", "MongoDB", "Firebase", "Gemini", "Ollama", "Tailwind", "Vercel"],
    github: "https://github.com/abhishek5703/CareerCraft", demo: "https://career-craft-two.vercel.app/"
  },
  {
    number: "02", title: "NestVoyage", subtitle: "RENTALS · SEARCH · AI TRAVEL", image: "/nestvoyage.png",
    description: "An Airbnb-inspired property rental platform rebuilt as a modern React + Express application without sacrificing legacy functionality.",
    highlights: ["Owner-authorized CRUD listings with up to 8 Cloudinary images per listing and review permissions.", "Server-driven search, filtering, sorting, pagination, favorites, and recently viewed history.", "Gemini/Ollama AI Trip Planner plus Helmet, rate limiting, Joi validation, and Firebase/Google sign-in."],
    techStack: ["React", "Express", "MongoDB", "Firebase", "Passport", "Cloudinary", "Joi", "Gemini", "Ollama"],
    github: "https://github.com/abhishek5703/NestVoyage-Travel-Platform", demo: "https://nest-voyage-travel-platform-9x13.vercel.app/"
  },
  {
    number: "03", title: "DocMind", subtitle: "RAG · DOCUMENT INTELLIGENCE", image: "/docmind.png",
    description: "A dependency-light document Q&A assistant that combines retrieval with an explicit confidence fallback to reduce unsupported answers.",
    highlights: ["PDF and notes Q&A using local embeddings and a self-built NumPy vector store.", "Hybrid retrieval combining dense similarity and BM25 with Reciprocal Rank Fusion.", "Confidence-based fallback that can respond with an explicit 'I don't know' instead of hallucinating."],
    techStack: ["Python", "Streamlit", "Groq API", "RAG", "NumPy", "BM25", "RRF"],
    github: "https://github.com/abhishek5703/docmind", demo: "https://docmind-lhlh3gybhtrbyxwtiprty2.streamlit.app/"
  },
];

const Projects = () => (
  <section id="projects" className="relative px-5 py-24 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl"><div className="section-kicker">02 / SELECTED WORK</div><h2 className="section-title mt-5">Products, not just <span className="gradient-text">projects.</span></h2><p className="mt-5 text-base leading-7 text-zinc-500">A selection of applications where engineering depth, AI capabilities, and product polish come together.</p></div>
      <div className="mt-14 space-y-8">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div>
    </div>
  </section>
);
export default Projects;
