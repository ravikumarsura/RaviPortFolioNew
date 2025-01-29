import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa";

function Contact() {
  const contacts = [
    { name: "GitHub", icon: FaGithub, link: "https://github.com/ravikumarsura", color: "indigo-400" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/ravikumarsura", color: "blue-400" },
    { name: "Naukri", icon: FaBriefcase, link: "https://www.naukri.com/mnjuser/profile?id=&altresid", color: "green-400" },
    { name: "Email", icon: FaEnvelope, link: "mailto:ravikumarsura.career@gmail.com", color: "red-400" },
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 text-white"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div>
          <motion.h2
            className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Let's connect! Feel free to reach out to me on any of the platforms below.
          </motion.p>
        </div>

        {/* Social Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 text-center"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <contact.icon
                className={`text-5xl text-gray-300 group-hover:text-${contact.color} transition-all duration-300`}
              />
              <span className="text-sm text-gray-400 group-hover:text-white transition-all">
                {contact.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
