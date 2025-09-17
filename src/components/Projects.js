import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio with React, TailwindCSS, and animations.",
      img: "portfolio.png", // replace with your image
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "#",
    },
    {
      title: "Student Conduct Management",
      desc: "This system aims to improve efficiency, elimate paper works & provide a structured approch to handling students related issues within a department.",
      img: "SCM-Project.png",
      tags: ["HTML","CSS", "PHP", "MySQL"],
      github: "#",
    },

  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-blue-500">Projects</span></h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group relative"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  💻 GitHub
                </a>
              </div>
            </div>

            {/* Overlay Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
              className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}


