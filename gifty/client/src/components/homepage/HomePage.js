"use client";
import { Angilal } from "@/components/homepage/Angilal";
import { Header } from "@/components/Header";
import { Special } from "@/components/homepage/Special";
import { Bayruud } from "@/components/homepage/Bayruud";
import { SpecialShops } from "@/components/homepage/SpecialShops";
import { Category } from "./Category";
import { Category2 } from "./Category2";
import { Category3 } from "./Category3";
import Footer from "../Footer";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <Angilal />
      <Special />
      <Bayruud />
      <SpecialShops />
      <Category />
      <Category2 />
      <Category3 />
      <Footer />
    </div>
  );
};
