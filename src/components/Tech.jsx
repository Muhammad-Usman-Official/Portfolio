import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tilt from "react-tilt";

const MobileSkillCards = ({ icon, name }) => {
  return (
    <Tilt className="w-full">
      <div className="w-full p-[1px] rounded-[20px] shadow-card ">
        <div
          className="bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col "
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
        </div>
      </div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <section className="space-y-7">
      <h2 className="underline mx-auto text-indigo-100 w-fit underline-offset-4 font-bold text-3xl md:hidden ">
        Expertise in
      </h2>
      <div className="md:flex md:flex-wrap md:justify-center grid grid-cols-3 sm:grid-cols-4 gap-4">
        {technologies.map((technology, index) => (
          <>
            <div
              index={index}
              key={technology.name}
              className="w-28 h-28 hidden md:block"
            >
              <BallCanvas icon={technology.icon} />
            </div>
            <div className="md:hidden">
              <MobileSkillCards
                key={technology.name}
                icon={technology.icon}
                index={index}
                name={technology.name}
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
//
export default SectionWrapper(Tech, "");
