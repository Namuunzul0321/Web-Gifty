"use client";
import React from "react";
import { CiStar } from "react-icons/ci";

export const CategoryHusnegt = ({
  storeName,
  category,
  productName,
  price,
  rating,
  image,
}) => {
  return (
    <div className="h-[300px] border-1 rounded-xl">
      <div className="border-b-1 h-[60px] w-full flex items-center">
        <div className="rounded-3xl border-1 h-[50px] w-[50px] ml-[10px] mr-[10px]"></div>
        <div>
          <div>{storeName}</div>
          <div className="text-sm">{category}</div>
        </div>
      </div>
      <div className="h-[190px] w-full flex justify-center items-center">
        {image || "IMG"}
      </div>
      <div className="border-t-1 h-[50px] w-full flex">
        <div className="ml-[10px]">
          <div className="text-sm">{productName}</div>
          <div className="text-sm">{price}</div>
        </div>
        <div className="flex mt-[25px] ml-[10px]">
          {[...Array(5)].map((_, i) => (
            <CiStar
              key={i}
              className={i < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
