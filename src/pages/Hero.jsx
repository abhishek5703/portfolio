import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[#050505]" />
      <div className="absolute left-[-15%] top-[-10%] -z-10 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute bottom-[-15%] right-[-10%] -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[130px]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-cyan-200">
            <Sparkles size={14} /> FULL STACK · AI · PROBLEM SOLVING
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.6rem]">
            Building digital products that <span className="gradient-text">feel effortless.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I&apos;m <span className="font-semibold text-white">Abhishek Kumar</span>, a B.Tech Electrical Engineering student at NSUT, Delhi, focused on full-stack development, AI-powered applications, and clean product experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => scrollTo("projects")} className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-cyan-200">
              Explore projects <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button onClick={() => scrollTo("contact")} className="rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]">Get in touch</button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {[['GitHub', Github, 'https://github.com/abhishek5703'], ['LinkedIn', Linkedin, 'https://www.linkedin.com/in/abhishekkumar8983/'], ['Email', Mail, 'mailto:abhikumar898307@gmail.com']].map(([label, Icon, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-zinc-400 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-200">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .1 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-10 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="absolute left-7 top-7 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-cyan-200 backdrop-blur">AVAILABLE FOR OPPORTUNITIES</div>
            <img src="/abhishek.png" alt="Abhishek Kumar" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top grayscale-[12%] transition duration-700 hover:scale-[1.025]" />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/65 p-4 backdrop-blur-xl">
              <div className="flex items-end justify-between gap-4"><div><p className="text-xs text-zinc-500">Currently building</p><p className="mt-1 text-sm font-semibold text-white">Full-stack & AI products</p></div><span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" /></div>
            </div>
          </div>
        </motion.div>
      </div>

      <button onClick={() => scrollTo("about")} className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-zinc-500 transition hover:text-white sm:flex">SCROLL TO EXPLORE <ArrowDown size={14} className="animate-bounce" /></button>
    </section>
  );
};

export default Hero;
