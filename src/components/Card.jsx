import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Image } from "@nextui-org/react";

export default function Card({ imgUrl, skill }) {
  return (
    <div className="max-w-xs w-full">
      <BackgroundGradient className="flex flex-col items-center justify-center h-44 w-full rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={imgUrl}
          alt="skill-img"
          height={80}  // Set a fixed height
          width={80}   // Set a fixed width
          className="object-contain" />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {skill}
        </p>
      </BackgroundGradient>
    </div>
  );
}
