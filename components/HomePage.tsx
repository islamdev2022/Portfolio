"use client";

import React, { Suspense, lazy } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import RecentProjects from "@/components/RecentProjects";
import SmartView from "@/components/SmartView";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Approach = lazy(() => import("@/components/Approach"));

const HomePage = () => {
  return (
    <main className="relative bg-slate-50 dark:bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <ExperienceTimeline />
        <Education />
        <Experience />
        <Suspense fallback={null}>
          <Approach />
        </Suspense>
        <Footer />
      </div>
      <SmartView />
    </main>
  );
};

export default HomePage;
