"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    return (
      <footer style={footerWrapper}>
        <div style={footerInner}>
          <div>
            <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Сэтгэлтэй Хүн<br />болгонд зориулагдсан
            </h3>
            <ul style={footerList}>
              <li>Home</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
  
          <div style={{ maxWidth: "300px" }}>
            <p>Бид бол хүн бүрийн амьдралыг сайжруулах зорилготой хүсэл тэмүүлэлтэй хүмүүсийн баг юм. Манай үйлчилгээ нь иргэдийн сэтгэл ханамжаас шалтгалдаг тул хүсэлтээ сайжруулахад зориулагдсан.</p>
            <p>📞 +976 jinken neg utas olondoo</p>
            <p>✉️ info@GIFTY.com/info</p>
          </div>
  
          <div style={iconRow}>
            <span style={iconCircle}>F</span>
            <span style={iconCircle}>X</span>
            <span style={iconCircle}>📸</span>
          </div>
        </div>
        <p style={footerBottomNote}>© 2025 Company Gifty. All rights reserved.</p>
      </footer>
    );
  }
  const footerWrapper = {
    width: "100%",
    background: "#6a4a78",
    color: "white",
    padding: "40px 20px 20px 20px",
    marginTop: "60px",
    boxSizing: "border-box",
  };
  
  const footerInner = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  };
  
  const footerList = {
    listStyle: "none",
    padding: 0,
    marginTop: "10px",
  };
  
  const iconRow = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  };
  
  const iconCircle = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#fff",
    color: "#553d4e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "16px",
  };
  
  const footerBottomNote = {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "14px",
    color: "#ddd",
  };
  