import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const roles = ["Web Developer", "Full Stack Developer", "Canva Editor"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <motion.img
            src="syedismail.jpg" // replace with your image
            alt="Profile"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-blue-500 shadow-xl object-cover"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-500">Syed Ismail S</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-12">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            A passionate fresher exploring web development. I love building
            modern, animated, and responsive websites with HTML, CSS, React & Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:bg-blue-600 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
