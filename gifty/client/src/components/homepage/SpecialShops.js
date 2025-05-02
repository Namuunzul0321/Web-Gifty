"use client";
import React from "react";
import Link from "next/link";

const sShops = [
  {
    id: 1,
    img: "/Store1.svg",
    storeName: "Godiva",
    followerCount: "6451 Дагагчтай",
  },
  {
    id: 2,
    img: "/Store2.svg",
    storeName: "Gobi Cashmere",
    followerCount: "6451 Дагагчтай",
  },
  {
    id: 3,
    img: "/Store3.svg",
    storeName: "Converse",
    followerCount: "6451 Дагагчтай",
  },
  {
    id: 4,
    img: "/Store4.svg",
    storeName: "ASUS",
    followerCount: "6451 Дагагчтай",
  },
  {
    id: 5,
    img: "/Store5.svg",
    storeName: "Nestle",
    followerCount: "6451 Дагагчтай",
  },
  {
    id: 6,
    img: "/Store6.svg",
    storeName: "NIKE",
    followerCount: "6451 Дагагчтай",
  },
  {
    id: 7,
    img: "/Store7.svg",
    storeName: "Pandora",
    followerCount: "6451 Дагагчтай",
  },
  {
    id: 8,
    img: "/Store8.svg",
    storeName: "Golden Gobi",
    followerCount: "6451 Дагагчтай",
  },
];

export const SpecialShops = () => {
  return (
    <div className="w-screen h-[292px] flex justify-center">
      <div className="w-full h-full">
        <div className="font-bold text-[32px] w-full h-[50px] mb-[15px]">
          Онцгой дэлгүүр
        </div>
        <div className="flex">
          {sShops.map(({ storeName, followerCount, img, id }, index) => {
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
