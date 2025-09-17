import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  // Function for smooth scroll
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 py-8 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Syed Ismail S</h2>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-500 border-t border-gray-300 dark:border-gray-700 pt-4">
        © {new Date().getFullYear()} Syed Ismail S. All Rights Reserved.
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
