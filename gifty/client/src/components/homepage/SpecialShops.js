"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Shop list
const sShops = [
  { id: 1, img: "/Store1.svg", storeName: "Godiva" },
  { id: 2, img: "/Store2.svg", storeName: "Gobi Cashmere" },
  { id: 3, img: "/Store3.svg", storeName: "Converse" },
  { id: 4, img: "/Store4.svg", storeName: "ASUS" },
  { id: 5, img: "/Store5.svg", storeName: "Nestle" },
  { id: 6, img: "/Store6.svg", storeName: "NIKE" },
  { id: 7, img: "/Store7.svg", storeName: "Pandora" },
  { id: 8, img: "/Store8.svg", storeName: "Golden Gobi" },
];

export const SpecialShops = () => {
  const [followerCounts, setFollowerCounts] = useState({});

  useEffect(() => {
    const storageKey = "shopFollowerCounts";
    const storedCounts = JSON.parse(localStorage.getItem(storageKey) || "{}");

    const updatedCounts = {};

    sShops.forEach((shop) => {
      const base = 6451;
      const previousCount = storedCounts[shop.id] || base;
      const increment = Math.floor(Math.random() * 10) + 1; // +1 to +10
      updatedCounts[shop.id] = previousCount + increment;
    });

    localStorage.setItem(storageKey, JSON.stringify(updatedCounts));
    setFollowerCounts(updatedCounts);
  }, []);

  return (
    <div className="w-screen h-[292px] flex justify-center">
      <div className="w-full h-full">
        <div className="font-bold text-[32px] w-full h-[50px] mb-[15px]">
          Онцгой дэлгүүр
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {sShops.map(({ storeName, img, id }) => (
            <div key={id} className="w-[184px] flex-shrink-0">
              <Link href={`/delguuruud/${id}`}>
                <div className="w-[184px] h-[242px] rounded-[10px] cursor-pointer transition duration-150 hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:border border-[rgba(109,91,103,0.5)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)]">
                  <div className="w-full h-[166px] flex justify-center items-center">
                    <div className="w-[136px] h-[136px] border border-[#6D5B67] rounded-full overflow-hidden flex justify-center items-center">
                      {img && <img src={img} alt={storeName} />}
                    </div>
                  </div>
                  <div className="w-full h-[76px] flex items-center flex-col">
                    <div className="font-medium text-[20px] mb-[6px]">{storeName}</div>
                    <div className="font-light text-[11px] text-[#6D5B67]">
                      {followerCounts[id]?.toLocaleString("en-US")} Дагагчтай
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
