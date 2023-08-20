import {Routes, Route, useNavigate} from 'react-router-dom';
import React, { useEffect } from "react";
import Heart from '../heart/heart';
import Diabetes from '../diabetes/diabetes'
import Lottie from 'react-lottie';
import opening from '../animations/opening.json';
import background1 from '../images/image_p.png';
import "./App.css";
export default function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/heart" element={<Heart />} />
          <Route path="/diabetes" element={<Diabetes />} />
        </Routes>
  );
}
function Home(){
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
        navigate('./heart')
      }, 3000)
      setTimeout(() =>{

      },)
}, []);  
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: opening,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const bodyStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        color:'white',
        fontSize:30,
        paddingInline:20
      };
    return(<div className='App' style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',alignSelf:'center',backgroundColor:'#2F6398'}}>
        <text style={bodyStyle}>Machine Learning Models</text>
        <Lottie speed={2}options={defaultOptions} style={{height:'auto',width:'350',maxWidth:350}}/>
        <div style={{display:'flex',flexDirection:'row'}}>
        </div>
        <img src={background1} alt="Logo" style={{ height: 150, width: 150, borderRadius: 40/2 }} />
        </div>
    )
}