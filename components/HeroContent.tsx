import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const HeroContent = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-violet-500 mt-5 md:[clip-path:ellipse(100%_40%_at_50%_35%)]">
      <div className="flex md:flex-row flex-col items-center md:gap-x-3 xl:gap-x-28 md:justify-around xl:justify-center px-4 py-4">
        <div className="flex flex-col text-center justify-center h-full md:mb-44 md:w-1/2 max-w-[500px]">
          <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white font-bold text-3xl my-5 text-center">
            Welcome to Better Eye Health: Your Solution for Healthy Posture and
            Vision
          </h1>
          <p>
            In today's digital age, our eyes and posture are under constant
            strain from prolonged screen time, leading to potential health
            issues such as eye strain, neck and shoulder pain, and even vision
            problems. Introducing Better Eye Health, your comprehensive software
            solution designed to promote healthy posture and prevent potential
            future blindness.
          </p>

          <div className="flex flex-row justify-center gap-x-3 my-5 ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Live Demo
            </button>
          </div>
        </div>

        <Card className="md:w-1/2 max-w-[480px] h-full ">
          <CardHeader>
            <CardTitle className="text-center">
              Improve your relationship with the screen
            </CardTitle>
            <CardDescription className="text-center ">
              Take frequent breaks{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="animate-[wiggle_1s_ease-in-out_infinite] ease-in-out duration-1000">
            <Image
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 [clip-path:circle(50%_at_50%_50%)]"
              src="/hero.jpg"
              alt="hero"
              width={200}
              height={200}
            />
            <Image
              className="md:relative left-52 bottom-[4.2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 [clip-path:circle(50%_at_50%_50%)]"
              src="/hero2.jpg"
              alt="hero"
              width={200}
              height={200}
            />
            <Image
              className="md:relative bottom-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 [clip-path:circle(50%_at_50%_50%)]"
              src="/hero3.jpg"
              alt="hero"
              width={200}
              height={200}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeroContent;
