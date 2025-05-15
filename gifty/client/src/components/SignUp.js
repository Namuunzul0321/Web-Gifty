"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/signUp.css";
import eyeOpen from "../../public/eye.png";
import eyeClosed from "../../public/eye.slash.png";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termCondition, setTermCondition] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Нууц үг таарахгүй байна");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Амжилттай бүртгэгдлээ!");
      } else {
        alert("Алдаа: " + data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="content">
      <img src="logo_text_white.png" alt="Logo" className="logo" />
      <div className="container">
        <form onSubmit={handleSubmit} className="fillOut">
          <div className="fillOut2">
            <div className="header">Welcome</div>
            <div className="inputs">
              <div className="text">Хэрэглэгчийн нэр</div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputs">
              <div className="text">Цахим хаяг</div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="inputs">
              <div className="text">Нууц үг</div>
              <img
                src={showPassword ? "/eye.svg" : "/eye.slash.svg"}
                alt="Toggle Password"
                className="hidePassword"
                onClick={() => setShowPassword(!showPassword)}
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputs">
              <div className="text">Нууц үг баталгаажуулах</div>
              <img
                src={showConfirmPassword ? "/eye.svg" : "/eye.slash.svg"}
                alt="Toggle Password"
                className="hidePassword"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="container-2">
              <div className="termCondition">
                <input
                  type="checkbox"
                  checked={termCondition}
                  onChange={() => setTermCondition(!termCondition)}
                />
                <label>
                  <a href="">Үйлчилгээний нөхцөл</a> зөвшөөрөх
                </label>
              </div>
            </div>
            <button type="submit" className="registerButton">
              Бүртгүүлэх
            </button>
            <div className="loginButton">
              Бүртгэлтэй юу? <a href="/sign-in">Нэвтрэх</a>
            </div>
          </div>
        </form>
        <div className="illustration">
          <img src="Group2.svg" />
        </div>
      </div>
    </div>
  );
};
