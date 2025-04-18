"use client";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Boxing({ onNext }) {
  const giftBoxes = [
    { id: 1, name: "Lid and Base", price: 10000, img: "/lid.svg" },
    { id: 2, name: "Magnetic Box", price: 10000, img: "/mag.svg" },
    { id: 3, name: "Heart Lid and Base", price: 10000, img: "/heart.svg" },
    { id: 4, name: "Packaging Box", price: 10000, img: "/pack.svg" },
    { id: 5, name: "Raphe Box", price: 10000, img: "/rap.svg" },
    { id: 6, name: "Drawer Box", price: 10000, img: "/draw.svg" },
    { id: 7, name: "Paper Bag", price: 10000, img: "/paper.svg" },
  ];

  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff66cc", "#000000"];
  const [selectedBox, setSelectedBox] = useState(giftBoxes[6]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const formatPrice = (price) => `${price.toLocaleString()}₮`;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Main cont */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "30px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "70%" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>
              Personalized Gift Boxes
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {giftBoxes.map((box) => (
                <div
                  key={box.id}
                  onClick={() => setSelectedBox(box)}
                  style={{
                    textAlign: "center",
                    border: selectedBox.id === box.id ? "2px solid #5a3d5c" : "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    cursor: "pointer",
                    background: selectedBox.id === box.id ? "#f5e1f7" : "white",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                      height: "120px",
                      backgroundColor: selectedColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={box.img}
                      alt={box.name}
                      style={{
                        width: "100%",
                        maxWidth: "100px",
                        height: "auto",
                        objectFit: "contain",
                      }}
                      onError={(e) => (e.target.src = "/box.svg")}
                    />
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}>
                    {formatPrice(box.price)}
                  </p>
                  <p style={{ fontSize: "14px", color: "#666" }}>{box.name}</p>
                </div>
              ))}
            </div>

            {/* Color Selection */}
            <h3 style={{ fontSize: "18px", margin: "20px 0 10px" }}>Choose a Color</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: color,
                    borderRadius: "50%",
                    cursor: "pointer",
                    border: selectedColor === color ? "3px solid #333" : "1px solid #ddd",
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Sum */}
          <div
            style={{
              width: "25%",
              padding: "20px",
              background: "#f8f8f8",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "16px", marginBottom: "10px" }}>
              Төлбөр: <strong>{formatPrice(selectedBox.price)}</strong>
            </p>
            <p style={{ fontSize: "16px", marginBottom: "10px" }}>
              Тоо ширхэг: <strong>1</strong>
            </p>
            <p style={{ fontSize: "16px", marginBottom: "20px" }}>
              Хүргэлт: <strong>{formatPrice(10000)}</strong>
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Нийт дүн: {formatPrice(selectedBox.price + 10000)}
            </p>
            <button
              onClick={() => onNext(selectedBox, selectedColor)}
              style={{
                width: "100%",
                padding: "12px",
                background: "#5a3d5c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Үргэлжлүүлэх →
            </button>
          </div>
        </div>
      </div>

      {/* Footer in the house */}
      <Footer />
    </div>
  );
}
