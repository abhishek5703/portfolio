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
    <section id="about" className="py-20 px-6 bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400">
          About Me
        </h2>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          I'm <span className="font-semibold text-black dark:text-white">Abhishek Kumar</span>, a full-stack web developer with a deep love for problem solving and product building.
          I enjoy turning ideas into scalable digital experiences and constantly learning the latest in tech.
        </p>

        <h3 className="mt-12 text-xl font-semibold text-gray-800 dark:text-white">
          Tech Stack I Work With
        </h3>

        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {tech.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-xl shadow-md">
                {t.icon}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
