import React, { useState } from "react";
import { Code } from "lucide-react"; // optional: use another icon if you prefer

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  const navItems = ["home", "about", "projects", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-teal-600/20 shadow-xl">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-1.5 rounded-lg shadow-md animate-pulse">
            <Code className="text-white w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-widest hover:drop-shadow-[0_0_6px_#0ff] transition duration-300">
            Abhishek Kumar
          </h1>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item === "home" ? "hero" : item)}
              className="text-sm uppercase font-medium text-neutral-300 hover:text-teal-400 hover:scale-105 transition-all duration-200 ease-in-out relative group cursor-pointer"
            >
              {item}
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-neutral-300 text-2xl hover:text-teal-400 transition-all"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-md shadow-lg border-t border-neutral-700 px-4 py-4 space-y-3 transition-all duration-300">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item === "home" ? "hero" : item)}
              className="block w-full text-left text-neutral-300 font-medium text-sm hover:text-teal-400 transition-all"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
