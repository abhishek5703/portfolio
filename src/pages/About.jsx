import React from "react";
import { motion } from "framer-motion";
import {
  FileCode, Paintbrush, CodeSquare, Atom, Server, Database, GitBranch,
  Terminal, Feather, Settings2, Network, Github, Cloud, PackageSearch
} from "lucide-react";

const tech = [
  { name: "HTML", icon: <FileCode className="text-orange-500 w-6 h-6" /> },
  { name: "CSS", icon: <Paintbrush className="text-blue-500 w-6 h-6" /> },
  { name: "JavaScript", icon: <CodeSquare className="text-yellow-400 w-6 h-6" /> },
  { name: "C++", icon: <Terminal className="text-gray-400 w-6 h-6" /> },
  { name: "Python", icon: <Feather className="text-yellow-500 w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <Paintbrush className="text-cyan-400 w-6 h-6" /> },
  { name: "Bootstrap", icon: <Paintbrush className="text-purple-600 w-6 h-6" /> },
  { name: "Node.js", icon: <Server className="text-green-600 w-6 h-6" /> },
  { name: "Express.js", icon: <Settings2 className="text-gray-600 w-6 h-6" /> },
  { name: "REST API", icon: <Network className="text-indigo-500 w-6 h-6" /> },
  { name: "MongoDB", icon: <Database className="text-emerald-600 w-6 h-6" /> },
  { name: "MySQL", icon: <Database className="text-blue-800 w-6 h-6" /> },
  { name: "Git", icon: <GitBranch className="text-red-500 w-6 h-6" /> },
  { name: "GitHub", icon: <Github className="text-black dark:text-white w-6 h-6" /> },
  { name: "Vercel", icon: <Cloud className="text-gray-700 w-6 h-6" /> },
  { name: "Render", icon: <Cloud className="text-purple-700 w-6 h-6" /> },
  { name: "Cloudinary", icon: <PackageSearch className="text-teal-500 w-6 h-6" /> },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20 px-4 sm:px-6 bg-white dark:bg-gradient-to-b dark:from-black dark:to-neutral-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
          About Me
        </h2>

        <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Hey there! I'm{" "}
          <span className="font-bold text-black dark:text-white font-pacifico text-xl">
            Abhishek Kumar
          </span>
          , a 3rd-year B.Tech student at{" "}
          <span className="text-teal-600 dark:text-teal-400 font-semibold">
            NSUT, Delhi
          </span>{" "}
          🇮🇳. I’m passionate about building impactful digital experiences and solving real-world problems with clean, efficient code.
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          With a solid foundation in both frontend and backend technologies, I craft full-stack solutions using tools like{" "}
          <span className="text-cyan-500 font-semibold">HTML, CSS, JavaScript, Tailwind, React, Node.js</span> and databases like{" "}
          <span className="text-emerald-500 font-semibold">MongoDB & MySQL</span>. I love working with cloud platforms like{" "}
          <span className="text-purple-400 font-semibold">Vercel</span> and{" "}
          <span className="text-indigo-400 font-semibold">Render</span> to deploy seamless apps.
        </p>

        <h3 className="mt-12 mb-6 text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
          Tech Stack I Work With
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 place-items-center">
          {tech.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 bg-white/30 dark:bg-white/5 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-neutral-800 w-full"
            >
              <div>{t.icon}</div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

  );
};

export default About;
