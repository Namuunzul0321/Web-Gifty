"use client";
import { useState, useEffect } from "react";

export default function Payment({ onNext, onPrev, selectedItems, boxPrice }) {
  const [formData, setFormData] = useState({
    lastName: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    khoroo: "",
    address: "",
    recipientName: "",
    what3words: "",
  });

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const itemPrices = [10000, 20000, 15000, 25000, 30000, 10000, 5000, 40000, 20000];
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum = selectedItems.reduce(
      (sum, selected, index) => (selected ? sum + itemPrices[index] : sum),
      boxPrice
    );
    setTotalPrice(sum);
  }, [selectedItems, boxPrice]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.city &&
      formData.district &&
      formData.khoroo &&
      formData.address &&
      formData.recipientName
    ) {
      setShowPaymentOptions(true);
    }
  };

  return (
    <div style={pageWrapper}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Хүргэлтийн мэдээлэл</h2>

        {/* Form Inputs */}
        <div style={formGrid}>
          <input name="lastName" placeholder="Овог нэр *" onChange={handleChange} style={inputStyle} />
          <input name="phone" placeholder="Утас *" onChange={handleChange} style={inputStyle} />

          <input name="email" placeholder="Имэйл *" onChange={handleChange} style={inputStyle} />
          <input name="city" placeholder="Хот / Аймаг *" onChange={handleChange} style={inputStyle} />

          <input name="district" placeholder="Дүүрэг / Сум *" onChange={handleChange} style={inputStyle} />
          <input name="khoroo" placeholder="Хороо *" onChange={handleChange} style={inputStyle} />

          <input name="address" placeholder="Дэлгэрэнгүй хаяг *" onChange={handleChange} style={fullInputStyle} />
          <input name="recipientName" placeholder="Хүлээн авах хүний нэр *" onChange={handleChange} style={fullInputStyle} />
          <input name="what3words" placeholder="What3Words" onChange={handleChange} style={fullInputStyle} />
        </div>

        {/* Sum */}
        <div style={summaryContainerStyle}>
          <h3 style={summaryTitleStyle}>Таны захиалга</h3>
          <p style={summaryTextStyle}>Барааны нийт үнэ: ${totalPrice - boxPrice}</p>
          <p style={summaryTextStyle}>Хайрцагны үнэ: ${boxPrice}</p>
          <hr style={{ border: "1px solid #ddd" }} />
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>Нийт төлөх дүн: ${totalPrice}</p>
        </div>

        {!showPaymentOptions ? (
          <button onClick={handleContinue} style={buttonStyle}>Үргэлжлүүлэх</button>
        ) : (
          <div>
            <h3 style={{ marginBottom: "10px" }}>Төлбөрийн хэлбэр</h3>
            <label style={radioLabelStyle}>
              <input type="radio" name="payment" value="paypal" style={radioStyle} /> PayPal
            </label>
            <label style={radioLabelStyle}>
              <input type="radio" name="payment" value="visa" style={radioStyle} /> Visa
            </label>
            <button onClick={onNext} style={buttonStyle}>Үргэлжлүүлэх</button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={footerWrapper}>
        <div style={footerInner}>
          <div>
            <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>Сэтгэлтэй Хүн<br />болгонд зориулагдсан</h3>
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
    </div>
  );
}

// Layout Styles
const pageWrapper = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const containerStyle = {
  maxWidth: "1000px",
  margin: "30px auto",
  padding: "20px",
  flex: 1,
};

const headingStyle = { fontSize: "24px", marginBottom: "20px", fontWeight: "bold" };
const formGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
  marginBottom: "20px",
};
const inputStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "16px",
};
const fullInputStyle = {
  gridColumn: "1 / -1",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "16px",
};
const summaryContainerStyle = {
  padding: "15px",
  background: "#f8f8f8",
  borderRadius: "8px",
  marginBottom: "20px",
};
const summaryTitleStyle = { fontSize: "18px", fontWeight: "bold", marginBottom: "10px" };
const summaryTextStyle = { fontSize: "16px", marginBottom: "5px" };
const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#553d4e",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};
const radioLabelStyle = { display: "block", margin: "8px 0", fontSize: "16px" };
const radioStyle = { marginRight: "10px" };

// Footer Styles
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
