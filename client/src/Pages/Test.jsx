import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-white h-full w-full"></div>

      {/* Moving Clouds */}
      <motion.div
        className="absolute top-20 left-0 w-98 h-44 bg-white opacity-70 rounded-full"
        style={{
          filter: "blur(10px)",
          boxShadow: "30px 10px 50px white, -30px 10px 50px white",
        }}
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
      />

      <motion.div
        className="absolute top-40 left-0 w-64 h-32 bg-white opacity-60 rounded-full"
        style={{
          filter: "blur(12px)",
          boxShadow: "40px 15px 60px white, -40px 15px 60px white",
        }}
        initial={{ x: "-120%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      />
       <motion.div
        className="absolute top-20 left-0 w-98 h-44 bg-white opacity-70 rounded-full"
        style={{
          filter: "blur(10px)",
          boxShadow: "30px 10px 50px white, -30px 10px 50px white",
        }}
        initial={{ x: "+100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
      />
        <motion.div
        className="absolute top-40 left-0 w-64 h-32 ml-5 bg-white opacity-60 rounded-full"
        style={{
          filter: "blur(12px)",
          boxShadow: "40px 15px 60px white, -40px 15px 60px white",
        }}
        initial={{ x: "+120%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      />
    </div>
  );
};

export default Test;
