import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc/";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 1, 1)}
      >
        I'm a frontend web developer with a passion for creating clean,
        responsive, and user-friendly websites and applications. With almost
        1.5+ years of experience, I am skilled in a range of technologies
        including HTML, CSS, JavaScript, Tailwind CSS, and React. My goal is to
        deliver innovative solutions that exceed my clients' expectations by
        staying ahead of the curve and incorporating the latest industry trends
        and best practices into my work. I'm excited to continue pushing the
        boundaries of what's possible in frontend development, and am always
        looking to learn and expand my skill set.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={`${service.title}`} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
