"use client";

import { useState } from "react";
import Link from "next/link";
import Shipping from "./Boxing";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import Line from "./Line";

export default function Page() {
  const stages = ["Сагс", "Хайрцаг сонгох", "Төлбөр", "Баталгаажсан"];
  const [currentStage, setCurrentStage] = useState(1);
  const [selectedItems, setSelectedItems] = useState(Array(9).fill(false));

  const nextStage = () => {
    if (currentStage < stages.length) {
      setCurrentStage(currentStage + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
    }
  };

  const selectAll = () => {
    setSelectedItems(Array(9).fill(true));
  };

  const deselectAll = () => {
    setSelectedItems(Array(9).fill(false));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh",  }}>
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
        {/* yaj error ni baihgui bolgoh vee */}
        <Link href="/" style={{ color: "white", fontSize: "18px", fontWeight: "bold", textDecoration: "none" }}>
          ← Back
        </Link>
        <h1 style={{ margin: 0, color: "white", fontSize: "24px" }}>GIFTY</h1>
      </div>

      {/* Line */}
      <Line currentStage={currentStage} />

      {/* Main */}
      <div style={{ maxWidth: "1200px", margin: "30px auto", padding: "20px" }}>
        {currentStage === 1 && (
          <div>
            <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Сагс (9)</h2>
            <div style={{ marginBottom: "15px" }}>
              <button onClick={selectAll} style={buttonStyle}>Select All</button>
              <button onClick={deselectAll} style={{ ...buttonStyle, marginLeft: "10px" }}>Deselect All</button>
            </div>
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
                }}
              >
                <div style={productBoxStyle}>
                  <div style={imageStyle}>IMG</div>
                </div>
                <div style={{ marginLeft: "15px", flexGrow: 1, textAlign: "center" }}>
                  <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>Product Title</h3>
                </div>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>$XX.XX</span>
              </div>
            ))}
            <button onClick={nextStage} style={proceedButtonStyle}>
              Proceed to Shipping →
            </button>
          </div>
        )}

        {currentStage === 2 && <Shipping onNext={nextStage} onPrev={prevStage} />}
        {currentStage === 3 && <Payment onNext={nextStage} onPrev={prevStage} />}
        {currentStage === 4 && <Confirmation onRestart={() => setCurrentStage(1)} />}
      </div>
    </div>
  );
}

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
  background: "#000",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: "bold",
};
