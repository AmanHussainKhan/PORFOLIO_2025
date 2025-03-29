import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import lp from "../assets/lp.jpg";
import resume from "/AHK.pdf";
import { MdSend } from "react-icons/md";
import axios from "axios";

export default function HomePage() {
  const [backendStatus, setBackendStatus] = useState("Checking backend...");
  const [dateTime, setDateTime] = useState(new Date());
  const [visitors, setVisitors] = useState(() => {
    return Number(localStorage.getItem("visitorCount")) || 1;
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setBackendStatus(res.data.message);
      })
      .catch(() => {
        setBackendStatus("Backend is not connected!");
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("visitorCount", visitors + 1);
  }, [visitors]);

  const [message, setMessage] = useState("");

  return (
    <motion.div
      className=" p-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto p-5">
        {/* Date & Time */}
        <div className="text-right text-sm text-gray-400">
          {dateTime.toLocaleString()}
        </div>
       
        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Welcome Card */}

          <h1 className="text-4xl font-bold border-b-2 border-[#4CAF50] pb-2">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg">My name is Aman Hussain Khan</p>

          {/* Visitor Counter */}
          <div className="bg-[#4CAF50] text-[#121212] p-5 shadow-2xl rounded text-center">
            <h2 className="text-3xl font-bold">Visitors</h2>
            <p className="text-2xl mt-2">{visitors}</p>
          </div>

          {/* Skills Showcase */}
          <div className="bg-[#1E1E1E] p-5 shadow-2xl rounded">
            <h2 className="text-3xl font-bold border-b-2 pb-2">Skills</h2>
            <ul className="mt-4 text-lg">
              <li>🔥 React.js</li>
              <li>⚡ JavaScript</li>
              <li>🎨 Tailwind CSS</li>
              <li>🚀 Node.js</li>
            </ul>
          </div>

          {/* Recent Blog */}
          <div className="bg-[#1E1E1E] p-5 shadow-2xl rounded">
            <h2 className="text-3xl font-bold border-b-2 pb-2">Recent Blog</h2>
            <div className="mt-5 flex gap-4 items-center">
              <img
                src={lp}
                alt="Blog"
                className="w-32 h-32 rounded object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Exploring the Future of Tech
                </h3>
                <a href="/blog/latest" className="text-blue-500 mt-2 block">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Projects Highlights */}
          <div className="bg-[#1E1E1E] p-5 shadow-2xl rounded">
            <h2 className="text-3xl font-bold border-b-2 pb-2">Projects</h2>
            <p className="mt-4 text-lg">Check out my latest work:</p>
            <ul className="mt-2 text-[#4CAF50]">
              <li className="hover:cursor-pointer hover:underline ">
                {" "}
                AI-Code Reviewer
              </li>
              <li className="hover:cursor-pointer hover:underline ">
                Indeed like Job Finder
              </li>
              <li className="hover:cursor-pointer hover:underline ">
                Notes App with User Authentication
              </li>
            </ul>
          </div>
          <div className="bg-[#1E1E1E] p-5 shadow-2xl rounded">
            <h2 className="text-3xl font-bold border-b-2 pb-2">Contact</h2>
            <p className="mt-4 text-lg text-left">Check out my latest work:</p>
            <ul className="mt-2 text-blue-300 text-left">
              <a
                href="https://www.linkedin.com/in/amanhussainkhan"
                target="_blank"
              >
                <li className="hover:underline">Linkedin</li>
              </a>
              <li>amanhussainkhan3@gmail.com</li>
              <a href={resume} download="Aman_Hussain_Khan_Resume.pdf">
                <li className="border w-fit px-2 cursor-pointer hover:bg-gray-500">
                  Resume
                </li>
              </a>
            </ul>
          </div>
          <div className="bg-[#1E1E1E] p-5 shadow-2xl rounded grid grid-cols-1 lg:col-span-2">
            <h2 className="text-3xl font-bold border-b-2 pb-2">
              Ask me anything!
            </h2>
            <div className="mt-5">
              <div className="relative">
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="write your message here..."
                  className="border p-2 w-full min-h-[100px]"
                ></textarea>
                {message === "" ? (
                  ""
                ) : (
                  <div className="absolute bottom-4 right-3">
                    <span className="cursor-pointer">
                      <MdSend size={24} />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto p-5">
          <div className="text-right text-sm text-gray-400">
            {backendStatus}
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
}
