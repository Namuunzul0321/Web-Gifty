"use client";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [activePanel, setActivePanel] = useState("");
  return (
    <div className="bg-[linear-gradient(90deg,_rgb(222,215,255)_0%,_rgb(255,212,241)_50%,_rgb(255,221,226)_100%)] w-full h-[70px] fixed shadow-[0_5px_10px_rgba(0,0,0,0.2)] z-[101]">

      {/* <div className="w-[25px] h-[25px] absolute top-[32%] left-[26px] cursor-pointer flex justify-center" onClick={() => setActivePanel(activePanel === "menu" ? "" : "menu")}>
        <img src="line.3.horizontal.svg" className="w-[19px]"/>
      </div> */}

      <Link href={"/"}>
        <img src="logo_text.png" className="absolute top-[15%] left-[30px] w-[147px] h-auto cursor-pointer"/>
      </Link>

      <div className="w-[27.81%] h-[45px] border border-[#6D5B67] rounded-full flex absolute top-[15%] left-1/2 -translate-x-1/2">
        <button className="border-none bg-none px-[15px] cursor-pointer flex items-center">
          <img src="magnifyingglass.svg" className="w-[18px] h-[18px]"/>
        </button>
        <input type="text" id="search" placeholder="Эндээс бэлгээ хайна уу" className="text-[16px] w-[500px] bg-none border-none focus:outline-none"></input>
      </div>

      <div className="absolute top-[15%] right-[20px]">
        <Link href={"/sags"}>
          <button className="w-[131px] h-[45px] text-[#6D5B67] bg-black/0 text-[16px] border border-[#6D5B67] rounded-full cursor-pointer transition duration-100 relative mx-[7px] hover:bg-black/10 active:bg-black/20">
            <div className="absolute top-[9px] right-[27px]">
              <div className="flex">
                Сагс (<div className="font-bold text-black">0</div>)
              </div>
            </div>
            <img src="cart.svg" className="absolute left-[18px] top-[14px] w-[20px] h-[18px]"/>
          </button>
        </Link>
        <Link href={"/sign-in"}>
          <button className="w-[133px] h-[45px] text-[#6D5B67] bg-black/0 text-[16px] border border-[#6D5B67] rounded-full cursor-pointer transition duration-100 relative mx-[7px] hover:bg-black/10 active:bg-black/20">
            <div className="absolute top-[9px] right-[20px]">
              Нэвтрэх
            </div>
            <img src="person.svg" className="absolute left-[18px] top-[14px] w-[15px] h-[16px]"/>
          </button>
        </Link>
      </div>

      {/* Panel for menu
      <div className={`absolute top-[70px] left-0 w-[300px] h-[880px] bg-[rgb(57,50,104)] shadow-md p-4 z-[100] transform transition-transform duration-300 ease-in-out ${activePanel === "menu" ? "translate-x-0" : "-translate-x-full"}`}> */}
        
      {/* </div> */}


    </div>
  );
};
