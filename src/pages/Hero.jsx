import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import myImg from "/abhishek.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center text-white px-6 py-16 overflow-hidden"
    >
      {/* Glowing Background Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse" />

      {/* Typewriter Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-cyan-400 animate-fade-in-up">
        <Typewriter
          options={{
            strings: [
              "Hi, I'm Abhishek Kumar",
              "Full Stack Web Developer",
              "Welcome to My Portfolio",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 40,
          }}
        />
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-center text-gray-300 mb-10 max-w-2xl animate-fade-in-up delay-100">
        I’m a passionate Full Stack Web Developer and a 3rd year B.Tech student at
        <span className="text-cyan-400 font-medium"> Netaji Subhas University of Technology</span>.
        I’ve built several projects that blend functionality with aesthetics.
      </p>

      {/* Image Card with Glow and Glassmorphism */}
      <div className="relative group mb-16 animate-fade-in-up delay-200">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>

        <div className="relative w-64 h-64 p-1 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl overflow-hidden">
          <img
            src={myImg}
            alt="Abhishek Kumar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Floating Social Icons */}
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex gap-6 text-xl text-cyan-400">
          <a href="https://github.com/abhishek5703" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhishekkumar8983/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:abhikumar898307@gmail.com" className="hover:scale-125 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* CTA Button with Hover Effects */}
      <button
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-300 cursor-pointer"
      >
        Let’s Connect 🚀
      </button>
    </div>
  );
};

export default Hero;
