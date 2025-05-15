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
    <div className="w-screen flex justify-center">
      <div className="w-[1575px]">
        <div className="font-bold text-[32px] w-full h-[50px] mb-[15px] max-sm:flex max-sm:justify-center">
          Онцгой дэлгүүр
        </div>
        <div className="flex w-full flex-wrap justify-center">
          {sShops.map(({ storeName, followerCount, img, id }, index) => {
            return (
              <div key={index}>
                <Link href={`/delguuruud/${id}`}>
                  <div className="w-[184px] h-[242px] rounded-[10px] cursor-pointer transition duration-150ms hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:border border-[rgba(109,91,103,0.5)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)] ${className} max-md:w-[140px] max-md:h-[184.1px] max-sm:w-[100px] max-sm:h-[131.5px]">
                    <div className="w-full h-[166px] flex justify-center items-center max-md:h-[120px] max-sm:h-[80px]">
                      <div className="w-[136px] h-[136px] border border-[#6D5B67] rounded-full overflow-hidden flex justify-center items-center max-md:w-[100px] max-md:h-[100px] max-sm:w-[70px] max-sm:h-[70px]">
                        {img && <img src={img} />}
                      </div>
                    </div>
                    <div className="w-full h-[76px] flex items-center flex-col">
                      <div className="font-medium text-[20px] mb-[6px] max-md:text-[16px] max-sm:text-[12px]">
                        {storeName}
                      </div>
                      <div className="font-light text-[11px] text-[#6D5B67] max-md:text-[10px] max-sm:text-[9px]">
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
