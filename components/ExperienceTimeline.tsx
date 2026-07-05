"use client";

import { experienceTimeline } from "@/data";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const ExperienceTimeline = () => {
  return (
    <section className="py-20 w-full" id="experience">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work <span className="text-blue-600">Experience</span>
      </motion.h1>

      <div className="w-full mt-12 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-blue-400/30 to-transparent" />

        {experienceTimeline.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-blue-600 border-2 border-background transform -translate-x-1/2 mt-6 shadow-[0_0_12px_rgba(37,99,235,0.5)]" />

            <div
              className={`ml-10 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <div
                className="p-6 rounded-2xl dark:bg-black-200 bg-white border border-black-300 dark:border-blue-600/10 shadow-lg dark:shadow-blue-600/5 hover:shadow-xl hover:border-blue-600/30 transition-all duration-300 group"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 mb-3">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="/Birouk Mohammed Islam.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C4B5FD_0%,#2563EB_50%,#C4B5FD_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-900 bg-white px-7 text-sm font-medium dark:text-white text-black backdrop-blur-3xl gap-2">
            <FaDownload />
            View My Resume
          </span>
        </a>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
