"use client";

import { education } from "@/data";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-20 w-full" id="education">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-blue-600">Education</span>
      </motion.h1>

      <div className="w-full mt-12 flex flex-col md:flex-row gap-6 justify-center">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex-1 max-w-md p-6 rounded-2xl dark:bg-black-200 bg-white border border-black-300 dark:border-blue-600/10 shadow-lg hover:shadow-xl hover:border-blue-600/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                <FaGraduationCap className="text-blue-600" size={18} />
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {item.period}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">{item.degree}</h3>
            <p className="text-sm text-muted-foreground">{item.school}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
