import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Code2, Database, GitBranch, Globe2, Layers3, Server, Trophy } from "lucide-react";

const groups = [
  { icon: Code2, title: "Languages", items: "C++ · JavaScript · Python" },
  { icon: Layers3, title: "Frontend", items: "React · HTML5 · CSS3 · Tailwind · Bootstrap" },
  { icon: Server, title: "Backend", items: "Node.js · Express · REST APIs · JWT · Firebase Auth" },
  { icon: Database, title: "Data & Cloud", items: "MongoDB · MySQL · Cloudinary · Vercel · Render" },
  { icon: BrainCircuit, title: "AI Engineering", items: "RAG · Embeddings · BM25 · RRF · LLM Integration" },
  { icon: GitBranch, title: "Workflow", items: "Git · GitHub · Postman · Testing · Agile" },
];

const About = () => (
  <section id="about" className="relative border-y border-white/[0.06] bg-[#080808] px-5 py-24 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
        <div className="section-kicker">01 / ABOUT</div>
        <div className="mt-5 grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div><h2 className="section-title">Engineer by mindset. <span className="gradient-text">Builder by choice.</span></h2></div>
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>I enjoy turning ambiguous ideas into reliable, polished software — from authentication and APIs to AI retrieval pipelines and responsive interfaces.</p>
            <p>My current toolkit spans the MERN ecosystem, modern frontend systems, cloud deployment, and practical LLM engineering. I care about architecture, usability, and the small details that make a product feel finished.</p>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, items }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }} className="premium-card group p-6">
            <div className="mb-6 flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-200"><Icon size={19} /></span><span className="text-xs text-zinc-600">0{i + 1}</span></div>
            <h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500 group-hover:text-zinc-400">{items}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="premium-card flex items-center gap-5 p-6"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-300/10 text-amber-200"><Trophy size={21} /></div><div><p className="text-2xl font-black text-white">500+</p><p className="text-sm text-zinc-500">LeetCode problems solved · 1500+ contest rating</p></div></div>
        <div className="premium-card flex items-center gap-5 p-6"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-300/10 text-violet-200"><Globe2 size={21} /></div><div><p className="text-2xl font-black text-white">2-Star</p><p className="text-sm text-zinc-500">CodeChef · plus Top 4 finalist in Axis Bank MOVES</p></div></div>
      </div>
    </div>
  </section>
);

export default About;
