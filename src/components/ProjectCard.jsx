import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ number, title, subtitle, description, highlights, techStack, github, demo, image }) => (
  <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .6 }} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/30">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.035] via-transparent to-violet-500/[0.035] opacity-0 transition duration-500 group-hover:opacity-100" />
    <div className="grid lg:grid-cols-[1.03fr_.97fr]">
      <div className="relative min-h-[280px] overflow-hidden bg-black lg:min-h-[480px]">
        <div className="absolute left-6 top-6 z-10 rounded-full border border-white/10 bg-black/65 px-3 py-1.5 text-xs font-bold text-zinc-300 backdrop-blur">{number}</div>
        <img src={image} alt={`${title} preview`} className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <p className="text-xs font-bold tracking-[0.2em] text-cyan-300/80">{subtitle}</p>
        <h3 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{title}</h3>
        <p className="mt-5 text-sm leading-7 text-zinc-400">{description}</p>
        <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-300">{highlights.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{item}</li>)}</ul>
        <div className="mt-7 flex flex-wrap gap-2">{techStack.map((tech) => <span key={tech} className="rounded-full border border-white/8 bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-zinc-400">{tech}</span>)}</div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={github} target="_blank" rel="noreferrer" className="group/btn flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/5"> <Github size={16} /> Source <ArrowUpRight size={14} className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" /></a>
          <a href={demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-200">Live product <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </div>
  </motion.article>
);
export default ProjectCard;
