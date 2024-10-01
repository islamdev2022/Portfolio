"use client"
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Head from "next/head"; // Import Head for SEO
const Home = () => {
  return (
    <>
      <Head>
        <title>Birouk Med Islam | Portfolio</title>
        <meta
          name="description"
          content="This is my portfolio website built with Next.js and Tailwind CSS. that showcases my projects and skills."
        />
        <meta
          name="keywords"
          content="Birouk Mohammed islam, web developer, portfolio, Next.js, Tailwind CSS, React"
        />
        <meta property="og:title" content="Your Name | Portfolio" />
        <meta
          property="og:description"
          content="Showcasing the projects and skills of Birouk Islam"
        />
        <meta
          property="og:image"
          content="/Portfolio_Logo-removebg-preview.png"
        />
        <meta property="og:url" content="https://islambirouk.space" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://islambirouk.space" />
      </Head>
      <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          {/* <Clients /> */}
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
