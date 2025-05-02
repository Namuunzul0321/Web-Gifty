"use client";
import Link from "next/link";

export default function ProductButtonSimple({
    storeImg = "",
    link = ""
}) {
  return (
    <Link href={link}>
        <button className="w-[782px] h-[310px] border flex justify-center cursor-pointer transition duration-150ms hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)]">
            <img src="{storeImg}"></img>
        </button>
    </Link>
  );
}
