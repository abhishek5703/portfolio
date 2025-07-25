// File: src/App.jsx
import React from "react";
import { Toaster } from "react-hot-toast"; // ✅ import toaster
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-[#0f0f0f] text-black dark:text-white transition-all duration-300">
      <Navbar />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} /> {/* ✅ Toaster here */}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-20">
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
