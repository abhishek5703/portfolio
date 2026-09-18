import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-400/30 selection:text-cyan-100">
      <Navbar />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
