"use client";
import { useState } from "react";
import Line from "../basket/Line";
import Footer from "@/components/Footer";


export default function Payment({ onNext, onPrev }) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Төлбөрийн мэдээлэл
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <label style={{ fontSize: "18px", fontWeight: "500" }}>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            style={{ marginRight: "10px" }}
          />
          Карт (Credit/Debit)
        </label>

        <label style={{ fontSize: "18px", fontWeight: "500" }}>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            style={{ marginRight: "10px" }}
          />
          PayPal
        </label>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={onPrev}
          style={{
            padding: "12px 18px",
            background: "#ccc",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ← Буцах
        </button>
        <button
          onClick={onNext}
          style={{
            padding: "12px 18px",
            background: "#5225cc",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Үргэлжлүүлэх →
        </button>
      </div>
    </div>
  );
}
