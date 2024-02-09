import { cn } from "@/lib/utils";
import React from "react";

const Badges = ({ className }: any) => {
  return (
    <div
      className={cn(
        className,
        " text-black flex flex-col items-center justify-center md:gap-x-4 gap-y-4 text-xl font-semibold bg-gradient-to-r from-purple-500 to-purple-50 "
      )}
    >
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
        Our Solution is{" "}
      </h1>

      <div className="flex flex-col md:flex-row gap-x-4 mt-5 font-semibold">
        <div className="flex flex-col gap-y-5">
          <h3 className="text-center font-bold"> User friendly </h3>
          <ul className="flex flex-col gap-y-5"> 
            <p> Simple to use ✅</p>
            <p> Intuitive layout ✅ </p>
            <p> Tested on many Screen Sizes ✅ </p>
          </ul>
        </div>
        <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-indigo-500 opacity-100 dark:opacity-50" />

        <div className="flex flex-col gap-y-5">
          <h3 className="text-center font-bold"> Efficient and Accurate </h3>
          <ul className="flex flex-col gap-y-5 max-w-[300px] items-center"> 
            <p> Utilize low resources on CPU✅</p>
            <p> ~95% Detection Accuracy ✅ </p>
          </ul>
        </div>
        <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-indigo-500 opacity-100 dark:opacity-50" />
        <div className="flex flex-col gap-y-5">
          <h3 className="text-center font-bold"> Why use our Software? </h3>
          <ul className="flex flex-col gap-y-5 max-w-[300px] items-center"> 
            <p> Maintain healthy levels of screen time ✅</p>
            <p> Visualize your screen time habits with custom AI recommendations ✅ </p>
            <p> Keep seeing a better future ✅</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Badges;
