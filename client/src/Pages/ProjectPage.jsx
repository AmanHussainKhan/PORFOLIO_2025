import React from "react";
import {motion} from "framer-motion";

const projects = [
  { title: "AI-Powered Code Reviewer", link: "https://github.com/yourusername/ai-code-reviewer" },
  { title: "Blog Website with User Authentication", link: "https://yourblogwebsite.com" },
  { title: "Gym Application + B.M.I Calculator", link: "https://github.com/yourusername/gym-app" },
  { title: "Job Search Platform", link: "https://github.com/yourusername/job-search-platform" },
  { title: "E-commerce Store", link: "https://yourstore.com" },
  { title: "Portfolio Website", link: "https://yourportfolio.com" },
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
      <h2 className="text-2xl font-semibold border-b-2 border-[#4CAF50] pb-2">Projects</h2>

      {/* Masonry Grid Layout */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#4CAF50] text-[#121212] p-4 border-2 border-[#D4D4D4] hover:bg-[#1E1E1E] hover:text-[#D4D4D4] rounded-md transition-all shadow-md"
          >
            {project.title}
          </a>
        ))}
      </div>
    </div>
    </motion.div>
  );
}
