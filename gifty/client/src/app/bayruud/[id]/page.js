"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

// Holiday data
const bayruud = [
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

const BayruudPage = () => {
  const params = useParams();
  const id = params?.id;

  const [holiday, setHoliday] = useState(null);

  useEffect(() => {
    if (id) {
      const match = bayruud.find((item) => item.id === id);
      setHoliday(match || null);
    }
  }, [id]);

  if (!holiday) return <div className="text-center p-10">Баяр олдсонгүй...</div>;

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-white">
      <Header />
      <div className="w-full h-[200px] relative">
        <Image src={holiday.img} alt="banner" fill style={{ objectFit: "cover" }} priority />
      </div>
      <div className="w-full max-w-[1400px] px-8 mt-[-50px] z-10 relative">
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-6">
          <div className="w-[120px] h-[120px] rounded-full border border-gray-300 overflow-hidden relative">
            <Image src={holiday.img} alt="holiday logo" fill style={{ objectFit: "cover" }} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{holiday.title}</h1>
            <p className="text-gray-600 text-sm mt-1">{holiday.subtitle}</p>
            <div className="mt-2 text-red-600 text-sm font-semibold">
              {holiday.negTitle}: <span className="font-normal">{holiday.negText}</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BayruudPage;
