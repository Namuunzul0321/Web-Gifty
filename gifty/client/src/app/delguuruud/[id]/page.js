import Link from "next/link";
import SpecialShops2 from "@/components/homepage/SpecialShops2";

const BuhDelguur = [
  {
    id: "1",
    title: "Godiva",
    img: "/Store1.svg",
    subtitle: "World-renowned Belgian chocolates, crafted for indulgence.",
    negTitle: "Luxury and Elegance in Every Bite",
    negText: "Discover a premium selection of handcrafted chocolates, truffles, and gifts for every occasion."
  }
  ,
  {
    id: "2",
    title: "Gobi",
    img: "/Store2.svg",
    subtitle: "Premium cashmere and wool garments from the heart of Mongolia.",
    negTitle: "Softness Meets Style",
    negText: "Experience the finest in luxury fashion with Gobi’s exquisite, sustainable cashmere collection."
  }
  ,
  {
    id: "3",
    title: "Converse",
    img: "/Store3.svg",
    subtitle: "Classic sneakers that define culture and comfort.",
    negTitle: "Timeless, Iconic Footwear",
    negText: "Explore Converse's iconic designs, blending style and comfort for every walk of life."
  }
  ,
  {
    id: "4",
    title: "Asus",
    img: "/Store4.svg",
    subtitle: "Innovative technology for smarter, faster living.",
    negTitle: "Pushing the Boundaries of Tech",
    negText: "From laptops to gaming gear, Asus offers cutting-edge technology to enhance your digital experience."
  }
  ,
  {
    id: "5",
    title: "Nestle",
    img: "/Store5.svg",
    subtitle: "Nourishing lives with high-quality food and beverages.",
    negTitle: "From Farm to Table",
    negText: "Explore Nestle’s diverse range of products, designed for health, taste, and sustainability."
  }
  ,
  {
    id: "6",
    title: "Pandora",
    img: "/Store6.svg",
    subtitle: "Exquisite jewelry designed to celebrate every special moment.",
    negTitle: "Crafted with Love and Care",
    negText: "Explore Pandora's timeless collections of charms, bracelets, rings, and more, for every occasion."
  }
  ,
  {
    id: "7",
    title: "Nike",
    img: "/Store7.svg",
    subtitle: "Empowering athletes through innovative sportswear.",
    negTitle: "Just Do It",
    negText: "From performance to lifestyle, Nike combines innovation and style to keep you moving forward."
  }
  ,
  {
    id: "8",
    title: "Golden Gobi",
    img: "/Store8.svg",
    subtitle: "Exclusive high-quality Gobi products from Mongolia.",
    negTitle: "Sustainable & Premium Quality",
    negText: "Explore a wide range of luxury goods that embody Mongolian craftsmanship and eco-friendly practices.",
  }  
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
