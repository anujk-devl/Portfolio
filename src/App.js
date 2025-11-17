import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen text-white bg-slate-950">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center bg-slate-900 text-gray-400 border-t border-white/10">
        <p>© 2025 Your Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
