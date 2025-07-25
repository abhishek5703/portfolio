import React from "react";
import Typewriter from "typewriter-effect";
import myImg from "/abhishek.png"; // Use your actual image path

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center text-white px-6 py-16">
      {/* Typewriter Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-cyan-400">
        <Typewriter
          options={{
            strings: ["Hi, I'm Abhishek Kumar", "I'm a Full Stack Developer", "Welcome to my Portfolio"],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 40,
          }}
        />
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-center text-gray-300 mb-10 max-w-2xl">
        I build modern web apps with sleek UIs and smooth UX. Let's craft your digital presence together.
      </p>

      {/* Glassmorphism Image Card with Glow */}
      <div className="relative group mb-12">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>

        <div className="relative w-64 h-64 p-1 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl overflow-hidden">
          <img
            src={myImg}
            alt="Abhishek Kumar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
      >
        Let’s Connect 🚀
      </button>

    </div>
  );
};

export default Hero;
