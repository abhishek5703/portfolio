import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-700 py-8 text-center text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-[#0f0f0f] transition-all duration-300">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/abhishek5703"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Github size={22} className="text-gray-600 dark:text-gray-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishekkumar8983/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
        >
          <Linkedin size={22} className="text-blue-700 dark:text-blue-400" />
        </a>
        <a
          href="mailto:abhikumar898307@gmail.com"
          className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
        >
          <Mail size={22} className="text-red-500 dark:text-red-400" />
        </a>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-medium text-cyan-500">Abhishek Kumar</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
