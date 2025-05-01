"use client";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-[linear-gradient(90deg,_rgb(222,215,255)_0%,_rgb(255,212,241)_50%,_rgb(255,221,226)_100%)] w-full h-[70px] fixed z-[101]">
      <div className="w-[25px] h-[25px] absolute top-[32%] left-[26px] cursor-pointer flex justify-center">
        <img src="line.3.horizontal.svg" className="w-[19px]"/>
      </div>
      <Link href={"/page"}>
        <img src="logo_text.png" className="absolute top-[15%] left-[75px] w-[147px] h-auto cursor-pointer"/>
      </Link>
      <div className="w-[534px] h-[45px] border border-[#6D5B67] rounded-full flex absolute top-[15%] left-1/2 -translate-x-1/2">
        <button className="border-none bg-none px-[15px] cursor-pointer flex items-center">
          <img src="magnifyingglass.svg" className="w-[18px] h-[18px]"/>
        </button>
        <input type="text" id="search" placeholder="Эндээс бэлгээ хайна уу" className="text-[16px] w-[500px] bg-none border-none focus:outline-none"></input>
      </div>
      <div className="absolute top-[15%] right-[20px]">
        <button className="w-[131px] h-[45px] text-[#6D5B67] bg-black/0 text-[16px] border border-[#6D5B67] rounded-full cursor-pointer transition duration-100 relative mx-[7px] hover:bg-black/10 active:bg-black/20">
          <div className="absolute top-[9px] right-[27px]">
            <div className="flex">
              Сагс (<div className="font-bold text-black">0</div>)
            </div>
          </div>
          <img src="cart.svg" className="absolute left-[18px] top-[14px] w-[20px] h-[18px]"/>
        </button>
        <button className="w-[133px] h-[45px] text-[#6D5B67] bg-black/0 text-[16px] border border-[#6D5B67] rounded-full cursor-pointer transition duration-100 relative mx-[7px] hover:bg-black/10 active:bg-black/20">
          <div className="absolute top-[9px] right-[20px]">
          Нэвтрэх
          </div>
          <img src="person.svg" className="absolute left-[18px] top-[14px] w-[15px] h-[16px]"/>
        </button>
      </div>
    </div>
  );
};
