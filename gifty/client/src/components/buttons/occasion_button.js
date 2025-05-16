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
        <div className="flex-shrink-0 w-[244px] h-[469px] rounded-[10px] relative cursor-pointer transition duration-150ms hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)]">
            <div className="w-[244px] h-[469px] rounded-[10px] bg-gradient-to-l from-[rgba(20,9,33,0)] via-[rgba(20,9,33,0.7)] via-[100%] from-[0%] absolute flex items-center p-[16px]">
              <div className="text-[rgba(255,255,255,0.6)] [writing-mode:vertical-rl] [text-orientation:mixed] text-[20px] tracking-[5px]">{date}</div>
              <div className="text-white transform [writing-mode:vertical-rl] [text-orientation:mixed] text-[48px] uppercase">{occasionName}</div>
            </div>
            {occasionImg && <img src={occasionImg}/>}
        </div>
    </Link>
  );
}
