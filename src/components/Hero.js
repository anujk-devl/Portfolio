import React from "react";
import { Code } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center max-w-4xl mx-auto relative">
        {/* Glowing background blob for 3D depth */}
        <div className="absolute -inset-16 bg-purple-600/30 blur-3xl rounded-full -z-10" />

        {/* Circular 3D icon container */}
        <div
          className="
            w-32 h-32 mx-auto
            bg-gradient-to-br from-purple-400 to-pink-600
            rounded-full flex items-center justify-center
            shadow-2xl shadow-purple-900/60
            border border-white/30
            mb-8
          "
        >
          <Code className="w-16 h-16 text-white" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Full-Stack Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Building modern web applications with cutting-edge technologies.
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="
              px-8 py-3
              bg-purple-600 hover:bg-purple-700
              text-white rounded-full font-semibold
              shadow-lg shadow-purple-900/40
              hover:shadow-purple-500/60
              transition-all
            "
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="
              px-8 py-3
              bg-transparent
              border-2 border-purple-400
              text-white
              hover:bg-purple-400/10
              rounded-full font-semibold
              transition-all
            "
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
