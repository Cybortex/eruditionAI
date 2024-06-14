"use client";
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
      text: "Erudition",
      className: "text-blue-500 dark:text-blue-500",
    },
    
    {
        text: " Study AI",
        className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-base  ">
        Need to study?
      </p>
      <TypewriterEffectSmooth className="text-xl" words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Use Erudition
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
