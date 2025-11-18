import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Chat-Assistant",
      description: "Built a full‑stack AI chat assistant with React/Vite frontend interface, chat history, custom branding and a Node.js/Express API (OpenRouter GPT‑4o‑mini) deployed on Render and Vercel.",
      tech: ["React", "Vite", "Node.js", "Express", "OpenRouter", "Render", "Vercel"],
      link: "https://chat-assistant-gilt.vercel.app/",
      github: "https://github.com/anujk-devl/chat-assistant"
    },
    {
      title: "Styleora",
      description: "Built a full‑stack e‑commerce web app for luxury wearables (Styleora) with a React/Vite frontend, Node.js/Express API, MongoDB Atlas database, JWT auth, and a deployed architecture using Render (backend) and Vercel (frontend)..",
      tech: ["React", "Vite", "Node.js", "Express", "MongoDB Atlas", "Render", "Vercel"],
      link: "https://styleora-lemon.vercel.app/",
      github: "https://github.com/anujk-devl/styleora"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-600/50 rounded-full text-xs text-white">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.link} className="flex items-center space-x-1 text-purple-400">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a href={project.github} className="flex items-center space-x-1 text-purple-400">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}