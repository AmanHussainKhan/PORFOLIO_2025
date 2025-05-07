import React from "react";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";

const projects = [
  {
    title: "Real-time Chat Application",
    link: "https://chatapp-2025-socket-io.onrender.com",
    status: "live",
  },
  {
    title: "Image Enhancer using AI",
    link: "https://ai-image-enhancer-alpha.vercel.app",
    status: "live",
  },
  {
    title: "Modern Fitness Planner App ( Vue.js )",
    link: "https://github.com/AmanHussainKhan/ide",
  },
  {
    title: "Javascript code reviewer using AI",
    link: "https://js-ai-code-reviewer-2025-frontend.vercel.app",
    status:"live"
  },
  {
    title: "Job Seeking Application",
    link: "https://github.com/AmanHussainKhan/JobSeeking-App-2025",
  },
  {
    title: "Landing page Project for a Company",
    link: "https://technolithics-project.vercel.app",
  },
];

export default function ProjectPage() {
  return (
    <motion.div
      className=" p-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#1E1E1E] flex flex-col gap-6 items-center mt-6 p-5 shadow-2xl max-w-5xl rounded">
        <h2 className="text-2xl font-semibold border-b-2 border-[#4CAF50] pb-2">
          Projects
        </h2>

        {/* Masonry Grid Layout */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative bg-[#4CAF50] text-[#121212] p-4 border-2 border-[#D4D4D4] hover:bg-[#1E1E1E] hover:text-[#D4D4D4] rounded-md transition-all shadow-md"
            >
              {project.title}
              {project.status === "live" ? (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-0.2 rounded">
                  live
                </div>
              ) : (
                <div className="absolute top-0 right-0 text-gray-800 text-xl px-2 py-1 rounded">
                  <FaGithubSquare />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
