import React from "react";
import { motion } from "framer-motion";
import {
  FileCode,
  Paintbrush,
  CodeSquare,
  Atom,
  Server,
  Database,
  GitBranch,
} from "lucide-react";

const tech = [
  { name: "HTML", icon: <FileCode className="text-orange-500 w-6 h-6" /> },
  { name: "CSS", icon: <Paintbrush className="text-blue-500 w-6 h-6" /> },
  { name: "JavaScript", icon: <CodeSquare className="text-yellow-400 w-6 h-6" /> },
  { name: "React", icon: <Atom className="text-cyan-400 w-6 h-6" /> },
  { name: "Node.js", icon: <Server className="text-green-600 w-6 h-6" /> },
  { name: "MongoDB", icon: <Database className="text-emerald-600 w-6 h-6" /> },
  { name: "Git", icon: <GitBranch className="text-red-500 w-6 h-6" /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 animate-shimmer">
          About Me
        </h2>

        <p className="mt-6 text-lg md:text-xl font-medium text-gray-300 max-w-3xl mx-auto font-mono animate-typing overflow-hidden whitespace-nowrap border-r-2 border-teal-400">
          I'm Abhishek Kumar, a 3rd year B.Tech student at NSUT, passionate about full-stack web development, problem solving, and building real-world products.
        </p>

        <p className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
          My toolkit includes <span className="text-teal-400 font-semibold">HTML</span>, <span className="text-blue-400 font-semibold">CSS</span>, <span className="text-yellow-300 font-semibold">JavaScript</span>, <span className="text-cyan-400 font-semibold">React</span>, <span className="text-green-400 font-semibold">Node.js</span>, <span className="text-emerald-400 font-semibold">Express</span>, and databases like <span className="text-green-500 font-semibold">MongoDB</span> & <span className="text-blue-300 font-semibold">MySQL</span>. I'm also proficient in C++, Python, Git, GitHub, Vercel, Render, and Cloudinary.
        </p>

        <h3 className="mt-16 text-2xl md:text-3xl font-bold text-teal-400 shimmer-text">
          Tech Stack I Work With
        </h3>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {tech.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 bg-neutral-900 hover:scale-105 transition-transform p-4 rounded-2xl shadow-md shadow-cyan-700/20"
            >
              <div>{t.icon}</div>
              <span className="text-sm text-gray-300">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
