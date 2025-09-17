import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiMysql, SiCplusplus, SiTailwindcss } from "react-icons/si";

export default function SkillsProgress() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" />, level: 80 },
    { name: "MySQL", icon: <SiMysql className="text-yellow-500" />, level: 85 },
    { name: "ReactJS", icon: <FaReact className="text-cyan-400" />, level: 75 },
    { name: "Python", icon: <FaPython className="text-green-500" />, level: 80 },
    { name: "Java", icon: <FaJava className="text-red-500" />, level: 75 },
    { name: "C/C++", icon: <SiCplusplus className="text-blue-400" />, level: 78 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 75 },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center group"
            >
              {/* Circle with Glow */}
              <div className="relative w-28 h-28 mb-4 rounded-full transition-all duration-300 group-hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.6)]">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-gray-300 dark:text-gray-700"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="56"
                    cy="56"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="text-blue-500"
                    fill="transparent"
                    initial={{ strokeDasharray: 314, strokeDashoffset: 314 }}
                    whileInView={{
                      strokeDashoffset: 314 - (314 * skill.level) / 100,
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                {/* Icon & Percentage */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl">{skill.icon}</div>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-1">
                    {skill.level}%
                  </span>
                </div>
              </div>
              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
