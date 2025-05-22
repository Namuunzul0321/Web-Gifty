"use client";

import BayruudList from "@/components/homepage/BayruudList";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-white">
      <Header />

      <div className="w-full mt-8">
        <BayruudList />
      </div>

      <Footer />
    </div>
  );
}
