import React from "react";
import { motion } from "framer-motion";
// import mypic from ".././myPic.png";
import resume from "/AHK.pdf";

function AboutPage({setPage}) {
  const handlePageChange = ()=>{
    setPage("contact");
  }
  return (
    <div>
      <div className="flex flex-col gap-6 items-center mt-6 ">
        {/* <motion.img
          src={mypic}
          alt="Aman Hussain Khan"
          className="border-2 border-[#4CAF50] w-1/4 rounded shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        /> */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold border-b-2 border-[#4CAF50] pb-2">
            About Me
          </h2>
          <p className="text-lg mt-2 mb-4">
            name: <strong>AMAN HUSSAIN KHAN</strong>
          </p>
          <p className="text-md">Raipur ⋄ Chhattisgarh</p>
          <p className="text-md mt-2">
            amanhussainkhan3@gmail.com ⋄{" "}
            <a
              href="https://www.linkedin.com/in/amanhussainkhan"
              target="_blank"
              className="text-blue-500 underline"
            >
              LinkedIn
            </a>{" "}
            ⋄{" "}
            <a
              href="https://github.com/AmanHussainKhan"
              target="_blank"
              className="text-blue-500 underline"
            >
              GitHub
            </a>{" "}
          </p>
          <h3 className="text-xl font-semibold mt-4 text-[#4CAF50]">
            Career Objective
          </h3>
          <p>
            Dedicated Front-end Developer (MERN), crafting scalable solutions
            with JavaScript technologies.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-[#4CAF50]">Skills</h3>
          <p>
            HTML, CSS, JavaScript, Typescript, Java, React, Node.js, MongoDB,
            Express, Selenium, Tailwind, MUI.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-[#4CAF50]">
            Experience
          </h3>
          <p className="mt-2">
            <strong>
              React JS Developer Intern (Shyena Tech Yarn Gen. AI)
            </strong>{" "}
            [ Sep2024-Nov2024 ]
          </p>
          <p className="mt-3">
            • Built react component using Tailwindcss and MUI library for
            Dashboard
          </p>
          <p>• Mapped all the data from APIs in the component.</p>
          <p>• Built Pie Chart and Bar Graph using ApexChart and ShadCn</p>
          <p>
            • Optimize the state flow over the application using ContextAPI.
          </p>
          <p>• Built interactive data visualizations.</p>
          <p className="mt-2">
            <strong>Front-end Developer Intern (Scalefull Technology)</strong> [
            July2024-Dec2024 ]
          </p>
          <p>• Developed UI components for financial dashboards.</p>
          <p>• Created Form for the client using MUI and Tailwindcss.</p>
          <p>
            • Worked on Embedded Javascript and Node js for Data Integration.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-[#4CAF50]">
            Education
          </h3>
          <p className="mt-2">
            B.Tech in Information Technology, Shri Shankaracharya Technical
            Campus
          </p>
          <p>PCM, Delhi Public School, Balco.</p>
          <div className="flex">

          {/* <a href={resume} download="Aman_Hussain_Khan_Resume.pdf">
            <button className="px-4 py-2 bg-[#D4D4D4] text-[#121212] font-semibold rounded-md hover:bg-[#61AFEF] transition-all duration-300 mt-4 w-[100px]">
              resume
            </button>
          </a> */}
          <p className="mt-5 ml-2">*for updated resume request 
            <span className="underline text-blue-700 ml-3 cursor-pointer" onClick={handlePageChange}>here</span> in contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
