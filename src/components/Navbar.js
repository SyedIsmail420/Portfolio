import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle function
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Syed Ismail S
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-800 dark:text-gray-300">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-yellow-300 transition"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>
    </nav>
  );
}
