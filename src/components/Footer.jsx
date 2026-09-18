import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => (
  <footer className="border-t border-white/[0.06] bg-[#050505] px-5 py-8 sm:px-8 lg:px-12">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-zinc-600 sm:flex-row">
      <p>© {new Date().getFullYear()} Abhishek Kumar. Built with React.</p>
      <div className="flex items-center gap-2"><a href="https://github.com/abhishek5703" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-white/5 hover:text-white"><Github size={16}/></a><a href="https://www.linkedin.com/in/abhishekkumar8983/" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-white/5 hover:text-white"><Linkedin size={16}/></a><a href="mailto:abhikumar898307@gmail.com" className="rounded-full p-2 hover:bg-white/5 hover:text-white"><Mail size={16}/></a></div>
    </div>
  </footer>
);
export default Footer;
