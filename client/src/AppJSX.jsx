import React, { useState } from "react";
import { motion } from "framer-motion";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectPage from "./Pages/ProjectPage";
import StarryBackground from "./Features/StarryBackground";
import ExplorePage from './Pages/ExplorePage';

function AppJSX() {
      const [page, setPage] = useState("home");
    
  return (
    <div className="bg-[#121212] text-[#D4D4D4] font-mono text-center p-5 min-h-screen flex flex-col items-center">
    <StarryBackground/>
    <nav className="w-full bg-[#1E1E1E] text-[#D4D4D4] p-3 border-b-2 border-[#4CAF50] mb-5 flex justify-around shadow-lg">
      <button
        className="px-4 py-1 transition-all duration-300 hover:bg-[#4CAF50] cursor-pointer hover:text-[#121212] rounded"
        onClick={() => setPage("home")}
      >
        Home
      </button>
      <button
        className="px-4 py-1 transition-all duration-300 cursor-pointer hover:bg-[#4CAF50] hover:text-[#121212] rounded"
        onClick={() => setPage("about")}
      >
        About
      </button>
      <button
        className="px-4 py-1 transition-all duration-300 cursor-pointer hover:bg-[#4CAF50] hover:text-[#121212] rounded"
        onClick={() => setPage("projects")}
      >
        Projects
      </button>
      
      <button
        className="px-4 py-1 transition-all duration-300 cursor-pointer hover:bg-[#4CAF50] hover:text-[#121212] rounded"
        onClick={() => setPage("explore")}
      >
        Explore
      </button>
      <button
        className="px-4 py-1 transition-all duration-300 cursor-pointer hover:bg-[#4CAF50] hover:text-[#121212] rounded"
        onClick={() => setPage("contact")}
      >
        Contact
      </button>
    </nav>
    {/* <div className="w-4/5 border-2 border-[#4CAF50] bg-[#1E1E1E] p-5 shadow-2xl max-w-4xl rounded"> */}
    <div>
      {page === "home" && <HomePage />}
      {page === "explore" && <ExplorePage/>}
      {page === "about" && <AboutPage setPage={setPage}/>}
      {page === "projects" && <ProjectPage/>}
      {page === "contact" && <ContactPage/>}
    </div>
  </div>
  )
}

export default AppJSX