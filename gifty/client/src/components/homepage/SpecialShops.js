"use client";
import React from "react";
import Link from "next/link";
const sShops = [
  {
    id: 1,
    img: "/Store1.svg",
    storeName: "Godivda",
    followerCount: "1000",
  },
  {
    id: 2,
    img: "/Store2.svg",
    storeName: "Gobi",
    followerCount: "1000",
  },
  {
    id: 3,
    img: "/Store3.svg",
    storeName: "Converse",
    followerCount: "1000",
  },
  {
    id: 4,
    img: "/Store4.svg",
    storeName: "Asus",
    followerCount: "1000",
  },
  {
    id: 5,
    img: "/Store5.svg",
    storeName: "Nestle",
    followerCount: "1000",
  },
  {
    id: 6,
    img: "/Store6.svg",
    storeName: "Nike",
    followerCount: "1000",
  },
  {
    id: 7,
    img: "/Store7.svg",
    storeName: "Pandora",
    followerCount: "1000",
  },
  {
    id: 8,
    img: "/Store8.svg",
    storeName: "Golden gobi",
    followerCount: "1000",
  },
];

export const SpecialShops = () => {
  return (
    <div className="flex justify-center items-center h-[300px] mb-[100px]">
      <div className="w-[1300px] ">
        <div className="text-[30px] font-bold mb-[50px]">Онцгой дэлгүүр</div>
        <div className="flex">
          {sShops.map(({ storeName, img, id, followerCount }, index) => {
            return (
              <div key={index} className="w-full">
                <Link href={`/delguuruud/${id}`}>
                  <div className="w-[184px] h-[242px] rounded-[10px] cursor-pointer transition duration-150ms hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:border border-[rgba(109,91,103,0.5)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)] ${className}">
                    <div className="w-full h-[166px] flex justify-center items-center">
                      <div className="w-[136px] h-[136px] border border-[#6D5B67] rounded-full overflow-hidden flex justify-center items-center">
                        {img && <img src={img} />}
                      </div>
                    </div>
                    <div className="w-full h-[76px] flex items-center flex-col">
                      <div className="font-medium text-[20px] mb-[6px]">
                        {storeName}
                      </div>
                      <div className="font-light text-[11px] text-[#6D5B67]">
                        {followerCount}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};