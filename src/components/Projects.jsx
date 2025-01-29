import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import { motion } from "framer-motion";

const projects = [
 
  {
    title: "Examination Cell",
    description:
      "A centralized system for managing exam schedules, student registrations, and result declarations with real-time updates.",
    technologies: ["React.js", "React Native", "Javascript","Redux"],
    link: "https://example.com",
    image:
      "https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?t=st=1737996853~exp=1738000453~hmac=68a8788b653bc9ac547ba2cdbcd2551f2c9df3b6fd93b651b753a3440c00e90a&w=2000",
  },
  {
    title: "ERP System",
    description:
      "An enterprise resource planning system for managing business processes like accounting, HR, and inventory in one platform.",
    technologies: ["React.js", "Redux", "Tailwind CSS","Javascript"],
    link: "https://example.com",
    image:
      "https://img.freepik.com/free-photo/enterprise-resource-planning-holographic-interface_23-2149092251.jpg?t=st=1737996919~exp=1738000519~hmac=26427c03653ab21aec8e4eb2a6c652fce342f2510ac77003c4f1d29a922b53a9&w=2000",
  },
  {
    title: "NIRF Dashboard",
    description:
      "A dashboard to track and analyze NIRF (National Institutional Ranking Framework) data, providing insightful reports and comparisons.",
    technologies: ["React.js", "Node js", "Express","Tailwind CSS"],
    link: "https://example.com",
    image:
      "https://img.freepik.com/free-vector/business-diagram-template-with-information-numbers-infographic_1284-41044.jpg?t=st=1737996993~exp=1738000593~hmac=8e38903c5abd1decf047d277bcae85ce1d8ec2e4097576b61a545cf7731000fc&w=1480",
  },
  {
    title: "OBE (Outcome-Based Education)",
    description:
      "A web application designed for managing Outcome-Based Education (OBE) data, tracking student performance, and aligning with academic outcomes.",
    technologies: ["React.js", "Node.js", "MongoDB","HTML & CSS"],
    link: "https://example.com",
    image:
      "https://img.freepik.com/free-photo/city-committed-education-collage-concept_23-2150062214.jpg?t=st=1737997046~exp=1738000646~hmac=26e2890e18121c19931b920acf8b5feacb2158f75060040bad1ff2e87c9d262e&w=2000",
  },
  {
    title: "Academic Time Table Creator",
    description:
      "Developed a component with dynamic dropdowns for days and periods, fetching period values via GET and ensuring user-friendly data entry.",
    technologies: ["React.js", "Ant Design","Material UI","Bootstrap"],
    link: "https://example.com",
    image:
      "https://img.freepik.com/free-vector/school-timetable-template_1308-32702.jpg?t=st=1737996607~exp=1738000207~hmac=675a6ed5aa5f75702b455cfa74173f11395f2373dc5f395324c1a37ffd8a2a6f&w=2000",
  },
  {
    title: "Mock Interview Platform",
    description:
      "A platform for conducting mock interviews, simulating real-world interview scenarios, with feedback and performance tracking.",
    technologies: ["React.js", "Node.js", "Socket.io"],
    link: "https://example.com",
    image:
      "https://img.freepik.com/free-vector/flat-university-concept-background_23-2148189717.jpg?t=st=1737996881~exp=1738000481~hmac=05a43fa4e96ad8c57b645329aeb62050ffe3d2267731913e2785d0fb07aed2c3&w=1480",
  },
];

function Projects() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white transform transition-all hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Swiper className="mb-4 rounded-lg overflow-hidden">
                <SwiperSlide>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 object-cover rounded-lg"
                  />
                </SwiperSlide>
              </Swiper>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-200 text-sm sm:text-base mb-4">
                {project.description}
              </p>
              <div>
                <h4 className="font-semibold text-gray-100">Technologies:</h4>
                <ul className="flex flex-wrap gap-2 text-gray-200 text-xs sm:text-sm">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx} className="bg-gray-800 px-2 py-1 rounded-lg">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="flex justify-between items-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300 hover:text-yellow-500 transition-transform hover:translate-x-1"
                >
                  <FaExternalLinkAlt className="inline mr-1" /> View
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-400 transition-transform hover:translate-x-1"
                >
                  <FaGithub className="inline mr-1" /> GitHub
                </a>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
