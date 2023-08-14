import {Routes, Route, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Heart from './heart';
import Diabetes from './diabetes'
import Lottie from 'react-lottie';
import opening from './opening.json';
import background1 from './image.png';
import "./App.css";
export default function App() {
    useEffect(() => {
        setTimeout(() => {
            navigate('./heart')
          }, 3000)
    }, []);  
  const navigate = useNavigate();
  return (
        <Routes>
            <Route path="/" element={<Home />}/>
            
          <Route path="/heart" element={<Heart />} />
          <Route path="/diabetes" element={<Diabetes />} />
        </Routes>
  );
}
function Home(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: opening,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(<div className='App' style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',alignSelf:'center',backgroundColor:'#2F6398'}}>
        <text style={{ color: 'white', fontSize: 30, paddingInline: 20 }}>Machine Learning Models by Ascend</text>
        <Lottie speed={2}options={defaultOptions} height={400} width={400}/>
        <div style={{display:'flex',flexDirection:'row'}}>
        </div>
        <img src={background1} alt="Logo" style={{ height: 150, width: 150, borderRadius: 40/2 }} />
        </div>
    )
}