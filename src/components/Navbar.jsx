import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const items = [
    ["About", "about"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "px-3 pt-3" : "px-0 pt-0"}`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-all duration-500 md:px-7 ${scrolled ? "rounded-2xl border border-white/10 bg-black/70 shadow-2xl shadow-black/30 backdrop-blur-2xl" : "bg-transparent"}`}>
        <button onClick={() => scrollTo("hero")} className="group flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-black text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,.12)]">AK</span>
          <span className="hidden text-sm font-semibold tracking-[0.22em] text-white sm:block">ABHISHEK KUMAR</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {items.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="nav-link text-sm text-zinc-400 transition hover:text-white">
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
            Let&apos;s talk <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-3 mt-2 rounded-2xl border border-white/10 bg-black/90 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
          {items.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="block w-full rounded-xl px-3 py-3 text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-white">{label}</button>
          ))}
          <button onClick={() => scrollTo("contact")} className="mt-2 w-full rounded-xl bg-cyan-300 px-4 py-3 text-sm font-bold text-black">Let&apos;s talk</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
