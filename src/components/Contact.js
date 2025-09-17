import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Contact <span className="text-blue-500">Me</span></h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <FaEnvelope className="text-blue-500 text-3xl" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">syedsheerin05@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <FaPhoneAlt className="text-green-500 text-3xl" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600 dark:text-gray-300">+91 6380905063</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600 dark:text-gray-300">Madurai, Tamil Nadu, India</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

