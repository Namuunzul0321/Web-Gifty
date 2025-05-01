"use client";

import { useState } from "react";
import Link from "next/link";
import Shipping from "../components/basket/Boxing";
import Payment from "../components/basket/Payment";
import Confirmation from "../components/basket/Confirmation";
import Line from "../components/basket/Line";

export default function sags() {
  const stages = ["Сагс", "Хайрцаг сонгох", "Төлбөрсй", "Баталгаажсан"];
  const [currentStage, setCurrentStage] = useState(1);
  const [selectedItems, setSelectedItems] = useState(Array(9).fill(false));
  const itemPrices = [10000, 20000, 15000, 25000, 30000, 10000, 5000, 40000, 20000];

  const nextStage = () => {
    setCurrentStage((prev) => Math.min(prev + 1, stages.length)); 
  };

  const prevStage = () => {
    setCurrentStage((prev) => Math.max(prev - 1, 1)); 
  };

  const selectAll = () => setSelectedItems(Array(9).fill(true));
  const deselectAll = () => setSelectedItems(Array(9).fill(false));

  const toggleItem = (index) => {
    setSelectedItems((prev) => {
      const newSelection = [...prev];
      newSelection[index] = !newSelection[index];
      return newSelection;
    });
  };

  const totalItems = selectedItems.filter(Boolean).length;
  const totalPrice = selectedItems.reduce((sum, selected, index) => (selected ? sum + itemPrices[index] : sum), 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(111deg, rgba(82,59,224,1) 0%, rgba(255,136,215,1) 50%, rgba(255,89,119,1) 100%)",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, color: "white", fontSize: "24px" }}>GIFTY</h1>
        <Link href="/" style={{ color: "white", fontSize: "18px", fontWeight: "bold", textDecoration: "none" }}>
          ← Back
        </Link>
      </div>

      {/* Progress Line */}
      <Line currentStage={currentStage} />
      {currentStage === 1 && (
        <div style={{ display: "flex", maxWidth: "1200px", margin: "30px auto", padding: "20px", gap: "20px" }}>
          {/* Left */}
          <div style={{ flex: 2 }}>
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "15px 0",
                  backgroundColor: selectedItems[index] ? "#e0e0ff" : "transparent",
                  transition: "background 0.3s",
                  cursor: "pointer",
                }}
                onClick={() => toggleItem(index)}
              >
                <div style={productBoxStyle}>
                  <div style={imageStyle}>IMG</div>
                </div>
                <div style={{ marginLeft: "15px", flexGrow: 1, textAlign: "center" }}>
                  <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>Product {index + 1}</h3>
                </div>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>${itemPrices[index].toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Right*/}
          <div style={{ flex: 1, padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "18px", color: "#333" }}>Нийт үнэ: ${totalPrice.toFixed(2)}</h3>
            <h3 style={{ fontSize: "18px", color: "#333" }}>Нийт тоо: {totalItems}</h3>
            <div style={{ marginBottom: "15px" }}>
              <button onClick={selectAll} style={buttonStyle}>Бүгдийн сонгох</button>
              <button onClick={deselectAll} style={{ ...buttonStyle, marginLeft: "10px" }}>Бүгдийн цуцлах</button>
            </div>
            <button 
              onClick={nextStage} 
              style={{ ...proceedButtonStyle, background: totalItems > 0 ? "#444" : "#ccc" }}
              disabled={totalItems === 0}
            >
              Үргэлжлүүлэх
            </button>
          </div>
        </div>
      )}

      {/* Stages */}
      {currentStage === 2 && <Shipping onNext={nextStage} onPrev={prevStage} />}
      {currentStage === 3 && (
  <Payment 
    onNext={nextStage} 
    onPrev={prevStage} 
    selectedItems={selectedItems} 
    boxPrice={10000} 
  />
)}
      {currentStage === 4 && <Confirmation onRestart={() => setCurrentStage(1)} />}
    </div>
  );
}

/* Button Styles */
const buttonStyle = {
  padding: "10px 15px",
  border: "1px solid #000",
  background: "#fff",
  cursor: "pointer",
  borderRadius: "5px",
  fontWeight: "bold",
};

const productBoxStyle = {
  width: "90px",
  height: "90px",
  padding: "5px",
  background: "#f0f0f0",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  cursor: "pointer",
};

const imageStyle = {
  width: "80px",
  height: "80px",
  background: "#eee",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  color: "#888",
  borderRadius: "10px",
};

const proceedButtonStyle = {
  marginTop: "20px",
  padding: "12px 20px",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: "bold",
};

