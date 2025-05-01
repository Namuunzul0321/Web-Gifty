"use client";
import Link from "next/link";

export default function ProductButtonSimple({
    storeImg = "",
    link = ""
}) {
  return (
    <Link href={link}>
        <button className="w-[782px] h-[310px] border flex justify-center">
            <img src="{storeImg}"></img>
        </button>
    </Link>
  );
}
