import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    number: "01",
    title: "CareerCraft",
    subtitle: "CAREER GUIDANCE · AI LEARNING",
    image: "/careercraft.png",
    description:
      "A full-stack career roadmap and quiz platform built around persistent learning progress, guided discovery, and contextual AI assistance.",
    highlights: [
      "13+ technology roadmaps with per-user progress tracking, timed quizzes, and analytics.",
      "Gemini + Ollama learning assistant with automatic fallback, SSE streaming, and roadmap-aware prompts.",
      "Smart Resource Recommendation using a curated 47-resource catalog with tag-based relevance scoring.",
    ],
    techStack: [
      "React 19",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Firebase",
      "Gemini",
      "Ollama",
      "Tailwind",
      "Vercel",
    ],
    github: "https://github.com/abhishek5703/CareerCraft",
    demo: "https://career-craft-two.vercel.app/",
  },
  {
    number: "02",
    title: "NestVoyage",
    subtitle: "RENTALS · SEARCH · AI TRAVEL",
    image: "/nestvoyage.png",
    description:
      "An Airbnb-inspired property rental platform rebuilt with React, Express, and MongoDB while preserving its core marketplace functionality.",
    highlights: [
      "Owner-authorized CRUD listings with up to 8 Cloudinary images per listing and review permissions.",
      "Server-driven search, filtering, sorting, pagination, favorites, and recently viewed history.",
      "Gemini/Ollama AI Trip Planner with Firebase/Google sign-in plus Helmet, rate limiting, and Joi validation.",
    ],
    techStack: [
      "React",
      "Express",
      "MongoDB",
      "Firebase",
      "Passport",
      "Cloudinary",
      "Joi",
      "Gemini",
      "Ollama",
    ],
    github: "https://github.com/abhishek5703/NestVoyage-Travel-Platform",
    demo: "https://nest-voyage-travel-platform-9x13.vercel.app/",
  },
  {
    number: "03",
    title: "DocMind",
    subtitle: "RAG · DOCUMENT INTELLIGENCE",
    image: "/docmind.png",
    description:
      "A dependency-light document Q&A assistant that combines retrieval, ranking, and confidence checks to keep answers grounded in uploaded content.",
    highlights: [
      "PDF and notes Q&A using local embeddings and a self-built NumPy vector store.",
      "Hybrid retrieval combining dense similarity and BM25 with Reciprocal Rank Fusion.",
      "Confidence-based fallback that can return an explicit ‘I don't know’ instead of generating an unsupported answer.",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "Groq API",
      "RAG",
      "NumPy",
      "BM25",
      "RRF",
    ],
    github: "https://github.com/abhishek5703/docmind",
    demo: "https://docmind-lhlh3gybhtrbyxwtiprty2.streamlit.app/",
  },
];

const Projects = () => (
  <section id="projects" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-3xl">
        <div className="section-kicker">02 / SELECTED WORK</div>
        <h2 className="section-title mt-4">
          Products, not just <span className="gradient-text">projects.</span>
        </h2>
        <p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
          A focused selection of applications where full-stack engineering, AI
          capabilities, and product thinking come together.
        </p>
      </div>

      <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-7">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
