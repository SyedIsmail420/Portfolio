import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "3+" },
    { label: "Technologies Learned", value: "8+" },
    { label: "Certifications", value: "2+" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        About <span className="text-blue-500">Me</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center"
        >
          <img
            src="ismail.jpg"
            alt="Profile"
            className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h3 className="mt-4 text-2xl font-bold">Syed Ismail</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            I am a passionate fresher web developer with a strong foundation in
            <span className="text-blue-500 font-semibold"> HTML, CSS, JavaScript, React,</span> 
            and modern UI frameworks like <span className="text-blue-500 font-semibold">TailwindCSS</span>.  
            I love learning new technologies, building projects, and solving
            real-world problems through coding.
          </p>

          {/* CV Button */}
          <a
            href="/cv.pdf"
            download
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300"
          >
            📄 Download CV
          </a>
        </motion.div>

        {/* Stats & Career Goals */}
        <div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center"
              >
                <h4 className="text-2xl font-bold text-blue-500">{stat.value}</h4>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Career Goals */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Career Goals
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              As a fresher, my goal is to join a dynamic team where I can 
              apply my technical skills, learn from industry professionals, 
              and grow into a full-stack developer. I am eager to contribute 
              with my creativity, dedication, and problem-solving mindset.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
