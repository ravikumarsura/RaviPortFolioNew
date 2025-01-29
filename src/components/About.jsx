import React from "react";
import { motion } from "framer-motion";
import raviprofile from "../assets/RPhoto.jpg";

function About() {
  return (
    <section id="about" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Animated Image - Centered in Mobile */}
        <motion.div
          className="relative flex justify-center items-center w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl overflow-hidden shadow-lg border-4 border-indigo-500">
            <img src={raviprofile} alt="Ravikumar Sura - React Developer" className="w-full h-auto object-cover" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900 via-indigo-800 to-transparent p-4 text-white text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-lg md:text-xl font-semibold">Ravikumar Sura</h2>
              <p className="text-sm italic">React Developer</p>
            </motion.div>
          </div>
        </motion.div>

        {/* About Content - Centered on Mobile */}
        <motion.div
          className="max-w-xl mx-auto text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed md:leading-loose">
            Hello! I’m <span className="font-bold text-indigo-600">Ravikumar Sura</span>, a 
            professional <span className="font-bold text-indigo-600">React.js</span> and 
            <span className="font-bold text-indigo-600">React Native</span> developer with 
            over 3 years of experience. I specialize in building intuitive, scalable, and 
            performance-driven web and mobile applications. My expertise includes 
            <span className="font-bold text-indigo-600"> JavaScript, HTML, CSS, Tailwind CSS, and Redux</span>.
          </p>

          <div className="space-y-6 mt-6">
            {/* Skills Card */}
            <motion.div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-indigo-600">Technical Skills</h3>
              <p className="text-gray-700 mt-2">
                - Proficient in <span className="font-bold">React.js</span> and <span className="font-bold">React Native</span>.<br />
                - Strong knowledge of <span className="font-bold">JavaScript, HTML, CSS</span>, and <span className="font-bold">Tailwind CSS</span>.<br />
                - Experience with <span className="font-bold">Redux</span> and <span className="font-bold">Context API</span>.<br />
                - Familiar with <span className="font-bold">Git, Webpack</span>, and <span className="font-bold">Postman</span>.
              </p>
            </motion.div>

            {/* Achievements Card */}
            <motion.div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-indigo-600">Professional Achievements</h3>
              <p className="text-gray-700 mt-2">
                - Led multiple client projects, delivering high-performance applications.<br />
                - Developed an inventory dashboard with advanced filtering and data visualization.<br />
                - Optimized a React Native app, improving load times by 30%.<br />
                - Recognized for improving user retention through seamless UI designs.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-indigo-600">Passions and Vision</h3>
              <p className="text-gray-700 mt-2">
                Passionate about web and mobile technologies, I aim to create innovative solutions that make a difference. I thrive in collaborative environments and continuously enhance my skills to contribute effectively to meaningful projects.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
