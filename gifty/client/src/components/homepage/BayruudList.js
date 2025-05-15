"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

// ene ni deer l ajillandaa
export const bayruud = [
  { id: "10", img: "/Halloween.svg", title: "Halloween", subtitle: "Аймшиг дагуулсан шөнө", negTitle: "Сөрөг тал", negText: "Хүүхдүүд айж магадгүй" },
  { id: "11", img: "/Huuhdiin.svg", title: "Хүүхдийн баяр", subtitle: "Хүүхдийн инээмсэглэл", negTitle: "Сөрөг тал", negText: "Эцэг эхчүүд бэлгийн дарамттай" },
  { id: "12", img: "/Lunar.svg", title: "Цагаан сар", subtitle: "Өв уламжлал, хүндэтгэл", negTitle: "Сөрөг тал", negText: "Зардал их" },
  { id: "13", img: "/Mart.svg", title: "Мартын 8", subtitle: "Эмэгтэйчүүдэд зориулав", negTitle: "Сөрөг тал", negText: "Цэцэг үнэ өснө" },
  { id: "14", img: "/Naadam.svg", title: "Наадам", subtitle: "Үндэсний их баяр", negTitle: "Сөрөг тал", negText: "Тээврийн түгжрэл" },
  { id: "15", img: "/NewYear.svg", title: "Шинэ жил", subtitle: "Шинэ оны баяр", negTitle: "Сөрөг тал", negText: "Зарлага ихэсдэг" },
  { id: "16", img: "/soldier_day.svg", title: "Цэргийн баяр", subtitle: "Эрчүүдийн баяр", negTitle: "Сөрөг тал", negText: "Заримд нь хамааралгүй" },
  { id: "17", img: "/valentine.svg", title: "Валентин", subtitle: "Хосуудын баяр", negTitle: "Сөрөг тал", negText: "Ганц бие хүмүүст хэцүү" },
  { id: "18", img: "/christmas.svg", title: "Зул сар", subtitle: "Христийн баяр", negTitle: "Сөрөг тал", negText: "Монголд түгээмэл биш" },
];

const BayruudShops = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const key = "holidayFollowerCounts";
    const stored = JSON.parse(localStorage.getItem(key) || "{}");
    const updated = {};

    bayruud.forEach(({ id }) => {
      const base = 3000;
      const count = stored[id] || base;
      updated[id] = count + Math.floor(Math.random() * 5);
    });

    localStorage.setItem(key, JSON.stringify(updated));
    setCounts(updated);
  }, []);

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-white">
      <Header />

      <div className="w-full h-[300px] bg-gradient-to-r from-pink-200 to-blue-200 flex items-center justify-center">
        <h1 className="text-4xl font-extrabold text-gray-800">🎉 Баярын дэлгүүрүүд</h1>
      </div>

      <div className="w-full max-w-[1400px] px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Баяр бүрийн дэлгүүрүүд</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bayruud.map(({ id, title, img, subtitle }) => (
            <Link key={id} href={`/bayruud/${id}`} passHref>
              <div className="cursor-pointer border rounded-xl p-4 shadow hover:shadow-lg transition">
                <div className="w-full h-[160px] bg-gray-100 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image src={img} alt={title} width={120} height={120} />
                </div>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-600">{subtitle}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {counts[id]?.toLocaleString()} дагагчтай
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1400px] px-4 pb-12">
        <h2 className="text-2xl font-semibold mt-12 mb-6">🎁 Онцлох бүтээгдэхүүнүүд</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-3 shadow hover:shadow-md">
              <div className="w-full h-[140px] bg-gray-100 rounded flex items-center justify-center mb-2">
                <span className="text-sm text-gray-500">Image {i + 1}</span>
              </div>
              <p className="font-medium text-gray-800">Бүтээгдэхүүн {i + 1}</p>
              <p className="text-xs text-gray-500">₮{(5000 + i * 1000).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BayruudShops;
