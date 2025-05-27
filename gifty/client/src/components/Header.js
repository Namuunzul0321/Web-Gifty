"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleClickSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 z-[101] w-full h-[70px] bg-[linear-gradient(90deg,_rgb(222,215,255)_0%,_rgb(255,212,241)_50%,_rgb(255,221,226)_100%)] shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
        <Link href="/">
          <img src="/logo_text.png" alt="Logo" className="absolute top-[15%] left-[30px] w-[147px] h-auto cursor-pointer" />
        </Link>

        {/* Search Bar */}
        <div className="w-[30%] h-[45px] border border-[#6D5B67] rounded-full flex items-center absolute top-[15%] left-1/2 -translate-x-1/2 max-md:hidden">
          <button onClick={handleClickSearch}>
            <img src="/magnifyingglass.svg" className="w-[20px] h-[20px] m-[10px]" alt="Search" />
          </button>
          <input
            type="text"
            placeholder="Эндээс бэлгээ хайна уу"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            className="text-[16px] w-[500px] bg-transparent border-none focus:outline-none"
          />
        </div>

        {/* Cart & Sign-in */}
        <div className="absolute top-[15%] right-[20px] flex items-center">
          <Link href="/sags">
            <button className="relative w-[131px] h-[45px] text-[#6D5B67] border border-[#6D5B67] rounded-full transition duration-100 mx-[7px] hover:bg-black/10 active:bg-black/20 max-lg:w-[45px] max-md:border-none">
              <div className="absolute top-[9px] right-[27px] max-lg:hidden">
                Сагс (<span className="font-bold text-black">0</span>)
              </div>
              <img src="/cart.svg" alt="Cart" className="absolute left-[18px] top-[14px] w-[20px] h-[18px] max-lg:left-[11px] max-md:w-[25px] max-md:h-[25px] max-md:left-[10px] max-md:top-[12px]" />
            </button>
          </Link>

          <Link href="/sign-in">
            <button className="relative w-[133px] h-[45px] text-[#6D5B67] border border-[#6D5B67] rounded-full transition duration-100 mx-[7px] hover:bg-black/10 active:bg-black/20 max-lg:w-[45px] max-md:hidden">
              <div className="absolute top-[9px] right-[20px] max-lg:hidden">Нэвтрэх</div>
              <img src="/person.svg" alt="Sign-in" className="absolute left-[18px] top-[14px] w-[15px] h-[16px] max-lg:left-[14px]" />
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Mobile Nav */}
      <div className="hidden max-md:block fixed bottom-0 left-0 z-[101] w-full h-[60px] bg-[linear-gradient(90deg,_rgb(222,215,255)_0%,_rgb(255,212,241)_50%,_rgb(255,221,226)_100%)] shadow-[0_-5px_10px_rgba(0,0,0,0.2)]">
        <div className="w-full flex justify-around pt-[4px] px-[40px]">
          {[
            { href: "/", icon: "house", label: "Нүүр" },
            { href: "/search", icon: "magnifyingglass", label: "Хайлт" },
            { href: "/sign-in", icon: "person", label: "Нэвтрэх" }
          ].map(({ href, icon, label }) => (
            <Link key={href} href={href}>
              <button className="h-[50px] w-[50px] rounded-[10px] flex flex-col items-center m-[2px] p-[2px] transition duration-200 cursor-pointer active:border-b-[2px] active:border-b-[#6D5B67] active:bg-[rgba(0,0,0,0.2)]">
                <img src={`/${icon}.svg`} alt={label} className="w-[20px] h-[20px]" />
                <div className="text-[12px] text-[#6D5B67] font-medium mt-[2px]">{label}</div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
