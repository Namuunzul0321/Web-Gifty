import Link from "next/link";
import SpecialShops2 from "@/components/homepage/SpecialShops2";

const BuhDelguur = [
  {
    id: "1",
    title: "Godiva",
    img: "/Store1.svg",
    subtitle: za,
    negTitle: mdku,
    negText: aaa,
  },
  {
    id: "2",
    title: "Gobi",
    img: "/Store2.svg",
    subtitle: za,
    negTitle: mdku,
    negText: aaa,
  },
  {
    id: "3",
    title: "Converse",
    img: "/Store3.svg",
    subtitle: za,
    negTitle: mdku,
    negText: aaa,
  },
  {
    id: "4",
    title: "Asus",
    img: "/Store4.svg",
    subtitle: za,
    negTitle: mdku,
    negText: aaa,
  },
  {
    id: "5",
    title: "Nestle",
    img: "/Store5.svg",
    subtitle: za,
    negTitle: mdku,
    negText: aaa,
  },
  {
    id: "6",
    title: "Pandora",
    img: "/Store6.svg",
    subtitle: za,
    negTitle: mdku,
    negText: aaa,
  },
  {
    id: "7",
    title: "Nike",
    img: "/Store7.svg",
    subtitle: za,
    negTitle: mdku,
    negText: aaa,
  },
  {
    id: "8",
    title: "Golden gobi",
    img: "/Store8.svg",
    subtitle: za,
    negTitle: mdku,
    negText: aaa,
  },
];

export default async function Page({ params }) {
  const id = (await params).id;
  const findSpecialShopsById = BuhDelguur.find((el) => el.id === id);

  return (
    <div className="flex flex-col justify-center items-center">
      <SpecialShops2
        title={findSpecialShopsById?.title}
        img={findSpecialShopsById?.img}
        subtitle={findSpecialShopsById?.subtitle}
        negTitle={findSpecialShopsById?.negTitle}
        negText={findSpecialShopsById?.negText}
      />
    </div>
  );
}