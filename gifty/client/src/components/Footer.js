"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-1  mt-[250px] pt-[20px] ">
      <div className="flex justify-center  pl-[20px] w-[1300px] h-[200px] gap-[150px]">
        <div>
          <img
            src="WebLogo.svg"
            alt="Website Logo"
            style={{ marginLeft: "20px" }}
          />
        </div>
        <div>
          <div className="font-bold mb-[15px] underline">Үндсэн цэс</div>
          <div className="text-sm mb-[10px]">Салбарууд</div>
          <div className="text-sm mb-[10px]">Бидний тухай</div>
          <div className="text-sm mb-[10px]">Холбоо барих</div>
        </div>
        <div>
          <div className="font-bold mb-[15px] underline">Туслах цэс</div>
          <div className="text-sm mb-[10px]">Мэдээ, мэдээлэл</div>
          <div className="text-sm mb-[10px]">Санал хүсэлт, гомдол</div>
          <div className="text-sm mb-[10px]">Тусламж</div>
        </div>
        <div>
          <div className="font-bold mb-[15px] underline">Холбоо барих</div>
          <div className="text-sm mb-[10px]">+976 99996666</div>
          <div className="text-sm mb-[10px]">gifty_prime@mail.com</div>
          <div className="text-sm mb-[10px]">Компьютер ландын ард ХАА-н</div>
        </div>
      </div>
      <div className="pt-[10px] bg-black text-white h-[100px] w-full flex justify-center gap-[10px] text-sm">
        <div>GiFTY.MN</div>
        <div>© 2025 Зохиогчийн эрх хамгаалагдсан</div>
      </div>
    </div>
  );
}
