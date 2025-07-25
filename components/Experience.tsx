import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";
const Experience = () => {
  return (
    <div className="py-20 w-full" id="expertise">
      <h1 className="heading">
        My Expertise and Aspirations as a{" "}
        <span className="text-blue-600">Web Developer</span>
      </h1>

      <div className="w-full mt-12 flex flex-col gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={20000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className=" w-full text-black dark:text-white border-neutral-200 dark:border-slate-800 dark:bg-black-200 bg-slate-100"
          >
            <div className="flex w-full lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10">
              <Image
                width={500}
                height={500}
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-black-200 dark:text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
