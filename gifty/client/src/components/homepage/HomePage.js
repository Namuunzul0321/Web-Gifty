"use client";
import { Angilal } from "@/components/homepage/Angilal";
import { Header } from "@/components/Header";
import { Special } from "@/components/homepage/Special";
import { Bayruud } from "@/components/homepage/Bayruud";
import { SpecialShops } from "@/components/homepage/SpecialShops";

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
    </div>
  );
};
