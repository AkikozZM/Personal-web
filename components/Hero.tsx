"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
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
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex flex-row justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-[20px] text-center text-blue-100 max-w-80">
            Geming Zhu Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={
              "Always explore the possibilities, for even the smallest step can lead to the grandest journey."
            }
          />
          <div className="flex items-center justify-center gap-2">
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Geming, a Full-Stack Developer
            </p>
            <HiAcademicCap className="text-lg md:text-xl lg:text-2x mb-4" />
          </div>

          <Link href="#about">
            <MagicButton
              title="Explore More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
