
import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    number: "01",
    title: "NestVoyage",
    subtitle: "RENTALS · PROPERTY MARKETPLACE · AI TRAVEL",
    image: "/nestvoyage.png",
    description:
      "An Airbnb-inspired property rental and travel marketplace migrated to a modern React, Express, and MongoDB architecture, featuring secure authentication, intelligent property discovery, and AI-powered trip planning.",
    highlights: [
      "Migrated a legacy rental marketplace with hybrid authentication using Passport-local sessions and Firebase email/Google sign-in, verified server-side.",
      "Implemented owner-authorized CRUD listings, Cloudinary multi-image uploads (up to 8 images per listing), and reviews with author/owner permissions.",
      "Built server-driven search, filtering, sorting, pagination, favorites, recently viewed history, and a Gemini/Ollama AI Trip Planner generating structured day-by-day itineraries.",
      "Added email-OTP password recovery and API security using Helmet, CORS, rate limiting, and Joi validation.",
    ],
    techStack: [
      "React 18",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Passport.js",
      "Firebase Auth",
      "Cloudinary",
      "Joi",
      "Gemini API",
      "Ollama",
    ],
    github:
      "https://github.com/abhishek5703/NestVoyage-Travel-Platform",
    demo:
      "https://nest-voyage-travel-platform-9x13.vercel.app/",
  },
  {
    number: "02",
    title: "MatchWise",
    subtitle: "AI RESUME ANALYZER · NLP · JOB MATCHING",
    image: "/matchwise.png",
    description:
      "An explainable NLP-based resume analyzer that evaluates compatibility between resumes and job descriptions using TF-IDF similarity and skill coverage, providing transparent match scores and actionable skill-gap suggestions.",
    highlights: [
      "Developed a weighted resume–job description matching algorithm combining TF-IDF cosine similarity (45%) with skill coverage (55%), using unigram and bigram features.",
      "Built a 53-skill dictionary with alias normalization and an ambiguity guard to identify matched and missing skills with rule-based improvement suggestions.",
      "Added PDF, DOCX, and TXT resume support, six unit tests, and downloadable analysis reports.",
      "Designed to run entirely locally without relying on external APIs, ensuring lightweight and explainable analysis.",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "scikit-learn",
      "TF-IDF",
      "NLP",
      "Cosine Similarity",
      "pypdf",
      "python-docx",
    ],
    github:
      "https://github.com/abhishek5703/matchwise-resume-analyzer",
    demo:
      "https://matchwise-resume-analyzer.streamlit.app/",
  },
  {
    number: "03",
    title: "DocMind",
    subtitle: "RAG · DOCUMENT INTELLIGENCE · AI",
    image: "/docmind.png",
    description:
      "A personal document question-answering assistant built using Retrieval-Augmented Generation (RAG), enabling users to retrieve relevant information and get context-grounded answers from uploaded PDFs and notes.",
    highlights: [
      "Implemented PDF and notes-based Q&A using local MiniLM embeddings, overlap-aware chunking, and a self-built NumPy vector store with page-level citations.",
      "Developed hybrid retrieval combining dense vector similarity and BM25 through Reciprocal Rank Fusion (RRF) to improve relevant document retrieval.",
      "Added deterministic follow-up query rewriting and confidence-based fallback mechanisms to prevent unsupported answers and return an explicit 'I don't know' when necessary.",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "Groq API",
      "RAG",
      "PyMuPDF",
      "MiniLM Embeddings",
      "NumPy",
      "BM25",
      "RRF",
    ],
    github:
      "https://github.com/abhishek5703/docmind",
    demo:
      "https://docmind-lhlh3gybhtrbyxwtiprty2.streamlit.app/",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
  >
    <div className="mx-auto max-w-6xl">
      <div className="max-w-3xl">
        <div className="section-kicker">02 / SELECTED WORK</div>

        <h2 className="section-title mt-4">
          Products, not just <span className="gradient-text">projects.</span>
        </h2>

        <p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
          A focused selection of applications combining full-stack
          engineering, natural language processing, AI-powered capabilities,
          and practical problem-solving.
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
