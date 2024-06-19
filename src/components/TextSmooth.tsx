"use client";
import { FaBrain, FaLocationArrow } from "react-icons/fa";
import ShimmerButton from "./ui/ShimmerButton";
import { TypewriterEffectSmooth } from "./ui/TypeEffect";
export function TypewriterEffect() {
  const words = [
    {
      text: "Learn",
    },
    {
      text: "better",
    },
    {
      text: "with",
    },
    {
      text: "Erudition Study AI",
      className: "text-[#B4832B] dark:text-[#B4832B]",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 sm:text-base uppercase text-center">
        study long hours but cant remember anything?
      </p>
      <TypewriterEffectSmooth className="" words={words} />
      <div className="flex items-center space-y-0 space-x-5">
      <a href="/chatbot">
        <ShimmerButton 
          title="Use Erudition"
          icon={<FaBrain />}
          position='left'
        />
      </a>
      <a href="/about">
        <ShimmerButton 
          title="Learn More"
          icon={<FaLocationArrow />}
          position='right'
        />
      </a>
      </div>
    </div>
  );
}
