import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ProjectsSection from "./Projects";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import { FaUserAstronaut } from "react-icons/fa";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';




const RightSection = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const sections = {
    about: (
      <motion.div
        key="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
      {/* Left: About Text */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
          <FaUserAstronaut className="text-white animate-bounce text-2xl" />
          <h2 className="text-2xl text-gray-300 font-bold">About Me</h2>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 text-white shadow-lg">
          <p className="mb-4">
          Hi! I'm a recent graduate with a Bachelor's degree from NIT Silchar,
          passionate about building my career in tech.
          </p>
          <p className="mb-4">
          I have hands-on experience in software development through various
            projects and internships, and I enjoy creating responsive,
            accessible, and visually appealing websites. Skilled in C++, Python,
            DBMS, SQL, Computer Networking, and full-stack web development using
            modern tools like React, Tailwind CSS, and the MERN stack, I'm eager
            to apply my programming knowledge in a dynamic software role.
          </p>
          <p>
          Currently, I'm looking for exciting opportunities where I can
          contribute, learn, and grow as a developer.
          </p>
        </div>
      </div>

      {/* Right: Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/9f13cfe6-8047-49b1-98c0-1bf63f0da34f/DrRpUwgPLm.lottie"
          loop
          autoplay
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
        />
      </div>
    </div>
      </motion.div>
    ),

    projects: <ProjectsSection />,
    resume: (
      <motion.div
        key="resume"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl text-gray-300 font-bold mb-6">Resume</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">🎓 Education</h3>
          <div className="space-y-3 text-white">
            <div>
              <p className="font-semibold">
                NIT Silchar — B.Tech in Civil Engineering
              </p>
              <p>CGPA: 9.06 | Dec 2020 - June 2024</p>
            </div>
            <div>
              <p className="font-semibold">Tirumala Mahila Junior Kalasala — MPC</p>
              <p>CGPA: 10 | 2017 - 2019</p>
            </div>
            <div>
              <p className="font-semibold">Sri Prakash VidyaNiketan — SSC</p>
              <p>CGPA: 10 | 2016 - 2017</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">💼 Internship</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-gray-300">
            <p className="font-semibold">JP Morgan Chase & Co — Software Intern</p>
            <p className="italic text-sm mb-2">Remote | Nov 2023 - Dec 2023</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Set up local development environment with required tools</li>
              <li>Debugged repo files to ensure correct output of web app</li>
              <li>Built a live graph for real-time data feed monitoring</li>
            </ul>
          </div>
        </div>

        <SkillsSection />
      </motion.div>
    ),
    contact: <ContactSection />,
  };

  return (
    <div className="flex-1 bg-black text-white min-h-screen px-4 py-6 sm:px-6 md:px-10 font-poppins">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-black flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 py-4 mb-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`px-4 py-2 rounded-full transition ${
              activeSection === item.id
                ? "active-button"
                : "inactive-button"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Animated Content */}
      <div className="w-full max-w-6xl mx-auto p-4 bg-gradient-to-tr from-[#0f2027] via-[#2c5364] to-[#203a43] text-white rounded-lg shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">{sections[activeSection]}</AnimatePresence>
      </div>
    </div>
  );
};

export default RightSection;
