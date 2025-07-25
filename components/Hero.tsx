import { FaLocationArrow } from "react-icons/fa6";
import { ModeToggle } from "./ToggleTheme";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/flip-words";
const Hero = () => {
  return (
    <div className="h-screen flex justify-center">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-slate-900 bg-slate-200 dark:bg-grid-white/[0.03] bg-grid-black-200/[0.09]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-evenly">
          <TextGenerateEffect
            words="Crafting web solutions — Beautiful Front & Robust Core."
            className="text-center text-[35px] md:text-5xl lg:text-6xl"
          />
          <ModeToggle />
          <h1 className="text-center md:tracking-wider mb-4 text-md font-medium md:text-lg lg:text-2xl">
            Hi! I&apos;m Birouk Mohammed Islam, a
            <FlipWords
              words={["Web", "Frontend", "Software", "Fullstack"]}
              duration={1500}
            />
            Developer based in Jijel/Algeria.
          </h1>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
