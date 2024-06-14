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
      text: "Erudition Study AI",
      className: "text-[#B4832B] dark:text-[#B4832B]",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-[50px] sm:text-base  ">
        Need to study?
      </p>
      <TypewriterEffectSmooth className="text-xl" words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-bra border-transparent text-white text-[18px]">
          Use Erudition
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-[18px]">
          Learn More
        </button>
      </div>
    </div>
  );
}
