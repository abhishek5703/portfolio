import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="flex justify-center gap-6 mb-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 dark:hover:text-blue-400 transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-red-500 transition"
        >
          <Mail size={20} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Abhishek Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
