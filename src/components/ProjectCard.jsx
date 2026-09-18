import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  number,
  title,
  subtitle,
  description,
  highlights,
  techStack,
  github,
  demo,
  image,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0b] shadow-xl shadow-black/20"
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/[0.035] via-transparent to-violet-500/[0.035] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <div className="relative grid lg:grid-cols-[0.88fr_1.12fr]">
      {/* Project preview */}
      <div className="relative flex items-center justify-center border-b border-white/8 bg-[#070707] p-3 sm:p-4 lg:min-h-[390px] lg:border-b-0 lg:border-r">
        <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[11px] font-bold tracking-wide text-zinc-300 backdrop-blur-md">
          {number}
        </div>

        <div className="w-full overflow-hidden rounded-xl border border-white/8 bg-[#111] shadow-lg shadow-black/30">
          <div className="aspect-[16/10] w-full bg-black/60">
            <img
              src={image}
              alt={`${title} preview`}
              loading="lazy"
              className="h-full w-full object-contain p-1.5 sm:p-2 opacity-95 transition duration-500 group-hover:scale-[1.01] group-hover:opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-9">
        <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300/80 sm:text-[11px]">
          {subtitle}
        </p>

        <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
          {description}
        </p>

        <ul className="mt-4 space-y-2.5 text-[13px] leading-5.5 text-zinc-300">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/8 bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-xs font-semibold text-white transition hover:border-white/20 hover:bg-white/5 sm:text-sm"
          >
            <Github size={15} />
            Source
            <ArrowUpRight
              size={13}
              className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-black transition hover:bg-cyan-200 sm:text-sm"
          >
            Live product
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
