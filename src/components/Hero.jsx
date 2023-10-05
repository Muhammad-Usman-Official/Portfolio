"use client";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { heroIllustrationSvg } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] lg:top-[120px] container mx-auto ${styles.paddingX} flex flex-col 2xl:flex-col lg:flex-row items-start gap-x-5 overflow-y-hidden`}
      >
        <div
          className={`flex flex-row items-start mx-auto ${styles.paddingX} gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-60 md:h-40 h-52 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm M. <br className="block md:hidden" />
              <span className="text-[#915EFF] inline-block">Usman.</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              I develop stunning full stack | <br /> MERN stack web
              applications.
            </p>
          </div>
        </div>
        <div className="mx-auto block">
          <img
            className="2xl:absolute 2xl:w-[20vw] 2xl:left-[30%] 2xl:top-[30%] w-[20rem] lg:w-[30rem] animate-pulse md:w-[28rem] aspect-square"
            src={heroIllustrationSvg}
            alt="Illustration failed to load!"
          />
        </div>
      </div>
      <div className="absolute bottom-10 sm:bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
