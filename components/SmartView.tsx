"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaTimes, FaBriefcase, FaBolt, FaGlobe } from "react-icons/fa";

type ViewMode = "full" | "recruiter" | "quick";

const SmartView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<ViewMode>("full");

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");
    const experienceSection = document.getElementById("experience");
    const expertiseSection = document.getElementById("expertise");
    const contactSection = document.getElementById("contact");
    const approachSection = document.querySelector("[data-section='approach']");

    const allSections = [aboutSection, projectsSection, experienceSection, expertiseSection, contactSection, approachSection].filter(Boolean) as HTMLElement[];

    if (activeMode === "full") {
      allSections.forEach((el) => {
        el.style.display = "";
        el.style.opacity = "1";
      });
      return;
    }

    if (activeMode === "recruiter") {
      // Show: about, projects, experience, contact
      // Hide: expertise (skills & interests), approach
      [aboutSection, projectsSection, experienceSection, contactSection].forEach((el) => {
        if (el) {
          el.style.display = "";
          el.style.opacity = "1";
        }
      });
      [expertiseSection, approachSection].forEach((el) => {
        if (el) {
          (el as HTMLElement).style.display = "none";
        }
      });
    }

    if (activeMode === "quick") {
      // Show only about + contact
      [aboutSection, contactSection].forEach((el) => {
        if (el) {
          el.style.display = "";
          el.style.opacity = "1";
        }
      });
      [projectsSection, experienceSection, expertiseSection, approachSection].forEach((el) => {
        if (el) {
          (el as HTMLElement).style.display = "none";
        }
      });
    }

    return () => {
      allSections.forEach((el) => {
        el.style.display = "";
        el.style.opacity = "1";
      });
    };
  }, [activeMode]);

  const modes = [
    {
      id: "full" as ViewMode,
      label: "Full Portfolio",
      icon: <FaGlobe />,
      description: "View everything — all sections visible",
    },
    {
      id: "recruiter" as ViewMode,
      label: "Recruiter View",
      icon: <FaBriefcase />,
      description: "Experience, top projects & contact only",
    },
    {
      id: "quick" as ViewMode,
      label: "Quick Overview",
      icon: <FaBolt />,
      description: "Just who I am & how to reach me",
    },
  ];

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-label="Smart View toggle"
      >
        {isOpen ? <FaTimes size={18} /> : <FaEye size={18} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-[100] w-80 rounded-2xl dark:bg-slate-900/95 bg-white/95 backdrop-blur-xl border border-blue-600/20 shadow-2xl shadow-blue-600/10 p-5"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
              Smart View
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Choose how you want to explore this portfolio
            </p>

            <div className="space-y-2">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => {
                    setActiveMode(mode.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left ${
                    activeMode === mode.id
                      ? "bg-blue-600/10 border border-blue-600/30 text-blue-600 dark:text-blue-400"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent"
                  }`}
                >
                  <span className={`text-lg ${activeMode === mode.id ? "text-blue-600" : "text-muted-foreground"}`}>
                    {mode.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{mode.label}</p>
                    <p className="text-xs text-muted-foreground">{mode.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {activeMode !== "full" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 pt-3 border-t border-border"
              >
                <button
                  onClick={() => setActiveMode("full")}
                  className="text-xs text-blue-600 hover:text-blue-500 font-medium transition-colors"
                >
                  Reset to full view
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SmartView;
