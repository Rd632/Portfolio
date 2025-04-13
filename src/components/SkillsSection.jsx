// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaPython } from "react-icons/fa";
import {  useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const SkillsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const skills = [
    {
      name: "React",
      level: 90,
      color: "bg-green-200",
      symbol: <FaReact className="text-cyan-400" />,
    },
    {
      name: "Python",
      level: 85,
      color: "bg-blue-200",
      symbol: <FaPython className="text-yellow-400" />,
    },
    {
      name: "SQL",
      level: 75,
      color: "bg-yellow-200",
      symbol: <FaDatabase className="text-blue-500 " />,
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-6"
    >
      <h3 className="text-xl font-semibold mb-4">Skills</h3>

      {/* Animated Skill Bars */}
      <div className="space-y-4 mb-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <label className="rounded-full font-medium flex items-center gap-2 text-sm">
              {skill.symbol}
              {skill.name}
            </label>

            <div className="w-full bg-gray-600 rounded-full h-2.5 mt-1">
              <motion.div
                className={`${skill.color} h-2.5 rounded-full`}
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  visible: { width: `${skill.level}%` },
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Skill Badges */}
      <div>
        <h4 className="text-md font-semibold mb-2">Languages</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {["C", "C++", "Python", "SQL"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <h4 className="text-md font-semibold mb-2">Web Development</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <h4 className="text-md font-semibold mb-2">Tools & Platforms</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {["GitHub", "VS Code", "PyCharm"].map((tool) => (
            <span
              key={tool}
              className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>

        <h4 className="text-md font-semibold mb-2">Soft Skills</h4>
        <div className="flex flex-wrap gap-2">
          {["Communication", "Problem Solving", "Time Management"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
