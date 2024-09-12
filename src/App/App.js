import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Heart from "../heart/heart";
import Diabetes from "../diabetes/diabetes";
import Weather from "../weather/weather";
import Tumor from "../tumor/tumor";
import Home from "../Home/Home";
import Login from "../login/login";
import background1 from "../images/logo_s.png";
import "./App.css";

export default function App() {
  const location = useLocation();
  const data = location.state;
  useEffect(() => {}, [data]);
  return (
    <Routes>
      <Route exact path="/" element={<Splashscreen />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/heart" element={<Heart />} />
      <Route exact path="/diabetes" element={<Diabetes />} />
      <Route exact path="/weather" element={<Weather />} />
      <Route exact path="/tumor" element={<Tumor />} />
    </Routes>
  );
}

function Splashscreen() {
  const location = useLocation();
  const data = location.state;
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  setTimeout(() => {
    setIsVisible(false);
  }, 1000);
  setTimeout(() => {
    if (data === true) {
      navigate("/Home");
    } else {
      navigate("/login");
    }
  }, 1400);
  const imageStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    height: 150,
    width: 150,
  };
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <img src={background1} alt="Logo" style={imageStyle} />
    </div>
  );
}
