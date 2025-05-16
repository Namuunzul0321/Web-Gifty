"use client";
import Link from "next/link";
import { useState } from "react";
import { Search } from "../Search";

export const Navigation = () => {
    return (
        <div className="hidden max-md:block w-full h-[60px] fixed z-[101] bottom-0 left-0 bg-[linear-gradient(90deg,_rgb(222,215,255)_0%,_rgb(255,212,241)_50%,_rgb(255,221,226)_100%)] shadow-[0_-5px_10px_rgba(0,0,0,0.2)]">
            <div className="w-screen flex justify-around pt-[4px] pl-[40px] pr-[40px]">
                <Link href={"/"}>
                    <button className="h-[50px] w-[50px] rounded-[10px] flex flex-col items-center cursor-pointer transition duration-200 active:border-b-[2px] active:border-b-[#6D5B67] active:bg-[rgba(0,0,0,0.2)] m-[2px] p-[2px]">
                        <img src="house.svg" className="w-[20px] h-[20px]"></img>
                        <div className="text-[12px] text-[#6D5B67] font-medium mt-[2px]">Нүүр</div>
                    </button>
                </Link>
                <Link href={"/search"}>
                    <button className="h-[50px] w-[50px] rounded-[10px] flex flex-col items-center cursor-pointer transition duration-200 active:border-b-[2px] active:border-b-[#6D5B67] active:bg-[rgba(0,0,0,0.2)] m-[2px] p-[2px]">
                        <img src="magnifyingglass.svg" className="w-[20px] h-[20px]"></img>
                        <div className="text-[12px] text-[#6D5B67] font-medium mt-[2px]">Хайлт</div>
                    </button>
                </Link>
                <Link href={"/search"}>
                    <button className="h-[50px] w-[50px] rounded-[10px] flex flex-col items-center cursor-pointer transition duration-200 active:border-b-[2px] active:border-b-[#6D5B67] active:bg-[rgba(0,0,0,0.2)] m-[2px] p-[2px]">
                        <img src="person.svg" className="w-[20px] h-[20px]"></img>
                        <div className="text-[12px] text-[#6D5B67] font-medium mt-[2px]">Нэвтрэх</div>
                    </button>
                </Link>
            </div>
        </div>
    );
};