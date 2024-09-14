"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import { useState } from "react";
import MagicButton from "./MagicButton";
const RecentProjects = () => {
const [number, setNumber] = useState(6);
const numberOfProjects = projects.length;
const showMoreProjects = () => {
  setNumber(numberOfProjects);
}
const showLessProjects = () => {
  setNumber(6);
}
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-blue-600">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-10 ">
        {projects.slice(0,number).map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <a href={item.link}>
                  <Image
                    width={500}
                    height={500}
                    src={item.img}
                    alt="cover"
                    className="z-10 "
                  />
                </a>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4"
                style={{
                  color: "#979aaf",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full dark:bg-black bg-slate-200 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        width={500}
                        height={500}
                        src={icon}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    className="flex lg:text-xl md:text-xs text-sm text-blue-500"
                  >
                    {item.check}
                  </a>
                  <FaLocationArrow className="ms-3" color="#1f2effe6" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
        
      </div>
      <div className="flex justify-center">
        {number < numberOfProjects ? 
          <MagicButton
            title="Show more"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={showMoreProjects}
          />
           : 
           <MagicButton
          title="Show Less"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={showLessProjects}
        />}
        
      </div>
      
    </section>
  );
};

export default RecentProjects;
