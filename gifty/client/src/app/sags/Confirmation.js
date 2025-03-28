"use client";
import Line from "./Line";

export default function Confirmation({ onRestart, productImage }) {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <img
        src={productImage}
        alt="Product Image"
        style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px", marginBottom: "20px" }}
      />
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>ХУДАЛДАН АВАЛТ ХИЙСЭНД БАЯРЛАЛАА.</h2>
      <p style={{ fontSize: "16px" }}>
        Таны захиалгын дугаар: <strong>0000000001</strong>
      </p>
      <p style={{ fontSize: "14px", color: "#666" }}>
        Бид захиалгын баталгаа дэлгэрэнгүй болон хяналтын мэдээлэл бүхий имэйлийг илгээнэ.
      </p>
      <button
        onClick={onRestart}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#ddd",
          color: "#000",
          border: "none",
          cursor: "pointer",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Үргэлжлүүлэн худалдан авалт хийх
      </button>
    </div>
  );
}