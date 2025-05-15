"use client";
import Link from "next/link";
import React from "react";

export const Bayruud = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap">
      <div className="flex gap-10 min-w-max">
        <Link href="/valentine">
          <img
            src="Valentine2.svg"
            className="h-[400px] object-cover cursor-pointer"
          />
        </Link>
        <Link href="/tsagaanSar">
          <img src="Lunar.svg" className="h-[400px] object-cover" />
        </Link>
        <Link href="/mart">
          <img src="Mart.svg" className="h-[400px] object-cover" />
        </Link>
        <Link href="/tsereg">
          <img src="TsergiinBayr.svg" className="h-[400px] object-cover" />
        </Link>
        <img src="Huuhdiin.svg" className="h-[400px] object-cover" />
        <img src="Naadam.svg" className="h-[400px] object-cover" />
        <img src="Halloween.svg" className="h-[400px] object-cover" />
        <img src="Christmas.svg" className="h-[400px] object-cover" />
        <img src="NewYear.svg" className="h-[400px] object-cover" />
      </div>
    </div>
  );
};
