"use client";
import React from "react";
import { CategoryHusnegt } from "./CategoryHusnegt";

export const Category2 = () => {
  return (
    <div className="flex justify-center items-center h-[300px] mt-[300px]">
      <div className="w-[1300px] ">
        <div className="text-[30px] font-bold mb-[50px]">Category</div>
        <div className="flex gap-[20px] flex-wrap justify-center">
          <CategoryHusnegt
            storeName="Best Shop"
            category="Shoes"
            productName="Nike Air Max"
            price="$120"
            rating={4}
            image={
              <img src="/nike.png" alt="Nike" className="h-full w-[600px]" />
            }
          />
          <CategoryHusnegt
            storeName="Best Shop"
            category="Shoes"
            productName="Nike Air Max"
            price="$120"
            rating={4}
            image={
              <img src="/nike.png" alt="Nike" className="h-full w-[600px]" />
            }
          />
        </div>
      </div>
    </div>
  );
};
