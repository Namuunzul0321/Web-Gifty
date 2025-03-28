"use client";
import { useState } from "react";
import Line from "./Line";

export default function Payment({ onNext, onPrev }) {
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
    <div style={{ maxWidth: "800px", margin: "30px auto", padding: "20px" }}>
      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Хүргэлтийн мэдээлэл</h2>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Овог нэр"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Имэйл"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Утасны дугаар"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="city"
          placeholder="Хот / Аймаг"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="district"
          placeholder="Дүүрэг / Сум"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="khoroo"
          placeholder="Хороо"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="address"
          placeholder="Дэлгэрэнгүй хаяг"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="recipientName"
          placeholder="Хүлээн авах хүний нэр"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="what3words"
          placeholder="What3Words"
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      {!showPaymentOptions ? (
        <button
          onClick={handleContinue}
          style={{
            width: "100%",
            padding: "10px",
            background: "#553d4e",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Үргэлжлүүлэх
        </button>
      ) : (
        <div>
          <h3>Төлбөрийн хэлбэр</h3>
          <label>
            <input type="radio" name="payment" value="paypal" /> PayPal
          </label>
          <br />
          <label>
            <input type="radio" name="payment" value="visa" /> Visa
          </label>
          <br />
          <button
            onClick={onNext}
            style={{
              width: "100%",
              padding: "10px",
              background: "#553d4e",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Үргэлжлүүлэх
          </button>
        </div>
      )}
    </div>
  );
}