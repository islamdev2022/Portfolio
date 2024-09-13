'use client'
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const Frontend = ["HTML", "CSS","SCSS", "JavaScript", "ReactJS","NextJS", "Typescript", "TailwindCSS","Shadcn" , "Aceternity UI", "Material tailwindcss"
  ];
  const Backend =[ "NodeJS", "Express","NextJS", "MongoDB", "MySQL", "Prisma ORM","Drizzle ORM","REST API",  "Supabase"];

  const Others = [
    "C", "Python" ,"Java","Electron JS", "Git","Github","XAMPP" , "Postman" , "Visual Studio code" , "Vercel", "Railway" , "Onrender" 
  ]

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "islam.birouk.2004@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl  dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "dark:bg-black-200 bg-slate-100 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento shadow-2xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
              width={500}
              height={500}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={500}
              height={500}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 7 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-8 "
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div
            className={`font-sans rounded-lg ${
              id === 3 || id === 4 || id === 5
                ? ""
                : "bg-slate-600 text-[#C1C2D3]"
            } bg-opacity-40 pl-2 w-fit md:text-xs lg:text-base text-xs  z-10 pr-1 mix-blend-exclusion`}
          >
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className=" flex flex-col justify-center gap-1 lg:gap-5 w-fit mt-8 ">
              {/* tech stack lists */}
              <div className="flex flex-wrap justify-center sm:justify-center gap-3 md:gap-3 lg:gap-8">
                {Frontend.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-slate-300 "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 4 && (
            <div className=" flex flex-col justify-center gap-1 lg:gap-5 w-fit mt-8 ">
              {/* tech stack lists */}
              <div className="flex flex-wrap justify-center sm:justify-center gap-3 md:gap-3 lg:gap-8">
                {Backend.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 5 && (
            <div className=" flex flex-col justify-center gap-1 lg:gap-5 w-fit mt-8 ">
              {/* tech stack lists */}
              <div className="flex flex-wrap justify-center sm:justify-center gap-3 md:gap-3 lg:gap-8">
                {Others.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 7 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!text-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
