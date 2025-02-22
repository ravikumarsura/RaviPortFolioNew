import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const Section = ({ id, children }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // className="py-20 px-6"
    >
      {children}
    </motion.section>
  );
};

export default Section;
