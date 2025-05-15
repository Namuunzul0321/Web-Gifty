"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/signIn.css";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // reset error before login
    try {
      const response = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Амжилттай нэвтэрлээ!");
        localStorage.setItem("token", data.token);
        window.location.href = "/"; // Redirect to home or dashboard
      } else {
        setError(data.message || "Нэвтрэхэд алдаа гарлаа");
      }
    } catch (err) {
      console.error(err);
      setError("Сервертэй холбогдож чадсангүй");
    }
  };

  return (
    <div className="content">
      <img src="logo_text_white.png" alt="Logo" className="logo" />
      <div className="container">
        <div className="fillOut">
          <div className="fillOut2">
            <div className="header">Welcome back</div>

            <div className="inputs">
              <div className="text">Цахим хаяг</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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

            <div className="container-2">
              <div className="rememberMe">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  id="remember-Me"
                />
                <label htmlFor="remember-Me">Намайг сана</label>
              </div>
              <a href="/forgot-password">Нууц үг сэргээх</a>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button className="loginButton" onClick={handleLogin}>
              Нэвтрэх
            </button>

            <div className="registerButton">
              Бүртгэлгүй юу? <a href="/sign-up">Бүртгүүлэх</a>
            </div>
          </div>
        </div>

        <div className="illustration">
          <img src="Group.svg" />
        </div>
      </div>
    </div>
  );
};
