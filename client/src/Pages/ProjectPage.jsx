import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Image Enhancer using AI",
    link: "https://ai-image-enhancer-alpha.vercel.app",
  },
  {
    title: "Blog Website with User Authentication",
    link: "https://yourblogwebsite.com",
  },
  {
    title: "Javascript code reviewer using AI",
    link: "https://ai-code-reviewer-frontend-steel.vercel.app",
  },
  {
    title: "Rent a Hotel Website",
    link: "https://rental-brown.vercel.app",
  },
  {
    title: "Restaurant seat resevation website",
    link: "https://restaurant-seat-app.vercel.app",
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
