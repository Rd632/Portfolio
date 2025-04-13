import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-tr from-[#0f2027] via-[#2c5364] to-[#203a43] rounded-2xl text-white w-full max-w-[400px] sm:max-w-full md:w-[300px] lg:w-full p-4 sm:p-6 flex flex-col items-center shadow-2xl mx-auto"
    >
      {/* Profile Image */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src="/images/pic.jpg"
          alt="Profile"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full shadow-lg ring-4 ring-white/30 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Name & Role */}
      <div className="w-full space-y-4 text-center mt-4 sm:mt-6">
        <div className="bg-white/10 p-2 sm:p-3 rounded-xl shadow-inner">
          <h2 className="text-xl sm:text-2xl font-bold">Robba Divija</h2>
        </div>
        <div className="bg-white/10 p-2 rounded-xl">
          <p className="text-base sm:text-lg text-gray-200 font-bold">Aspiring Software Developer</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-full space-y-3 mt-6">
        <div className="bg-white/10 p-3 rounded-xl flex items-center gap-3 shadow-inner">
          <FaEnvelope className="text-blue-100 text-lg" />
          <div>
            <p className="font-semibold text-sm sm:text-base">Email</p>
            <p className="text-gray-100 text-sm break-all">robbadivija@gmail.com</p>
          </div>
        </div>

        <div className="bg-white/10 p-3 rounded-xl flex items-center gap-3 shadow-inner">
          <FaPhone className="text-green-100 text-lg" />
          <div>
            <p className="font-semibold text-sm sm:text-base">Phone</p>
            <p className="text-gray-100 text-sm">+91-9390465988</p>
          </div>
        </div>

        <div className="bg-white/10 p-3 rounded-xl flex items-center gap-3 shadow-inner">
          <FaMapMarkerAlt className="text-red-100 text-lg" />
          <div>
            <p className="font-semibold text-sm sm:text-base">Location</p>
            <p className="text-gray-100 text-sm">Hyderabad, India</p>
          </div>
        </div>

        <div className="bg-white/10 p-3 rounded-xl flex items-center gap-3 shadow-inner">
          <FaGithub className="text-white text-lg" />
          <div>
            <p className="font-semibold text-sm sm:text-base">GitHub</p>
            <a
              href="https://github.com/Rd632"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:underline break-all text-sm"
            >
              github.com/Rd632
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
