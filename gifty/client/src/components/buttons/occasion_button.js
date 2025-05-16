"use client";
import Link from "next/link";

export default function OccasionButton({
    occasionName = "Occasion",
    date = "01.01",
    occasionImg = "",
    link = ""
}) {
  return (
    <Link href={link}>
        <div className="flex-shrink-0 w-[244px] h-[469px] rounded-[10px] relative cursor-pointer transition duration-150ms hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)] max-lg:w-[180px] max-lg:h-[345.9px] max-sm:w-[130px] max-sm:h-[249.8px]">
            <div className="w-[244px] h-[469px] rounded-[10px] bg-gradient-to-l from-[rgba(20,9,33,0)] via-[rgba(20,9,33,0.7)] via-[100%] from-[0%] absolute flex items-center p-[16px] max-lg:w-[180px] max-lg:h-[345.9px] max-sm:w-[130px] max-sm:h-[249.8px]">
              <div className="text-[rgba(255,255,255,0.6)] [writing-mode:vertical-rl] [text-orientation:mixed] text-[20px] tracking-[5px] max-lg:text-[14px] max-lg:tracking-[2px]">{date}</div>
              <div className="text-white transform [writing-mode:vertical-rl] [text-orientation:mixed] text-[48px] uppercase max-lg:text-[30px] max-sm:text-[25px]">{occasionName}</div>
            </div>
            <img src={occasionImg} className="max-lg:w-[180px] max-lg:h-[345.9px] max-sm:w-[130px] max-sm:h-[249.8px]"/>
        </div>
    </Link>
  );
}
