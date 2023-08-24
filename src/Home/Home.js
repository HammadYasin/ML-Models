import {Routes, Route, useNavigate,useLocation} from 'react-router-dom';
import React, { useEffect,useState } from "react";
import Heart from '../heart/heart';
import Diabetes from '../diabetes/diabetes'
import Lottie from 'react-lottie';
import opening from '../animations/opening.json';
import background from '../images/loginback.jpg';
import background1 from '../images/logo_t.png';
import { IoHeartCircleOutline,IoSearchOutline,IoLogInOutline,IoAnalyticsOutline } from "react-icons/io5";
import "./Home.css";

function Home(){
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data)
    const navigateDiabetes = () => {
      navigate('/diabetes',{replace:true});
    };
    const navigateHeart = () => {
      navigate('/heart',{replace:true});
    };
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
        const head = {
          alignItems: 'center',
          justifyContent: 'center',
          alignContent:'center',
          display:'flex',
          flexDirection:'column',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 5000,
          backgroundColor: '#033258',
          width: 170,
          height: 30,
          opacity: 0.9,
          fontSize:16,
          fontFamily:'-apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight:'bold',
          letterSpacing:0.25,
          color:'white',
          marginTop:5
        };
        const text = {
          fontFamily:'-apple-system, BlinkMacSystemFont, sans-serif',
          marginTop:10,
          cursor:'pointer',
        };
      return(<div className='App' style={{backgroundImage: `url(${background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                    <header style={{height: 160, color: '#FFFFFF', fontSize: 50, display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IoAnalyticsOutline style={{color:'black'}}/>
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'3vh',alignSelf:'center',color:'black'}}>Home</text>
                </div>
                <img src={background1} alt="Logo" style={{ height: 170, width: 170 }} />
            </header>
        <div style={{height:'auto',backgroundColor:'#2F6398',borderWidth:10,borderRadius:20,alignSelf:'center',boxShadow: '1px 2px 9px #000000',padding: '0 10px',width:'auto',flexWrap:'wrap',marginTop:20,marginBottom:90,maxWidth:'100%',minWidth:'50%',marginLeft:25,marginRight:25}}>
        <text style={{fontSize:20,color:'white',fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',}}>Advanced Analytics Use-Cases</text>
          <div className="container" style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20,justifyContent:'space-evenly',alignItems:'center',marginLeft:18}}>
              <div className="component"style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'space-evenly',height:'100%',minWidth:300}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                  <div style={{backgroundColor:'#FFFFFF',height:180,width:'auto',boxShadow: '1px 2px 9px #000000',padding: '0 10px',borderWidth:10,borderRadius:20,display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div style={head}><text>Machine Learning</text></div>
                    <text style={text}>Chance of Rain</text>
                    <text style={text}>Forecasting Example</text>
                    <text onClick={navigateHeart} style={{color:'blue',fontWeight:'bold',marginTop:5,cursor:'pointer'}}>Heart Attack Prediction </text>
                    <text onClick={navigateDiabetes}style={{color:'blue',fontWeight:'bold',marginTop:5,cursor:'pointer'}}>Diabetes Prediction</text>
                  </div>
                  <div style={{backgroundColor:'#FFFFFF',height:180,width:'auto',boxShadow: '1px 2px 9px #000000',padding: '0 10px',borderWidth:10,borderRadius:20,display:'flex',flexDirection:'column',alignItems:'center',marginTop:15}}>
                    <div style={head}><text>Image Classification</text></div>
                    <text style={text}>X-Ray Pneumonia Detection</text>
                    <text style={text}>Potato Plan Disease</text>
                    <text style={text}>Garbage Bins Cleanliness</text>
                  </div>
                </div>
              </div>
              <div className="component"style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'space-evenly',height:'100%',minWidth:300}}>
              <div style={{display:'flex',flexDirection:'column'}}>
                  <div style={{backgroundColor:'#FFFFFF',height:180,width:'auto',boxShadow: '1px 2px 9px #000000',padding: '0 10px',borderWidth:10,borderRadius:20,display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div style={head}><text>Anomaly Detection</text></div>
                    <text style={text}>To be determined..</text>
                  </div>
                  <div style={{backgroundColor:'#FFFFFF',height:180,width:'auto',boxShadow: '1px 2px 9px #000000',padding: '0 10px',borderWidth:10,borderRadius:20,display:'flex',flexDirection:'column',alignItems:'center',marginTop:15}}>
                    <div style={head}><text>Video Analytics</text></div>
                    <text style={text}>People Counter</text>
                    <text style={text}>People In and Out</text>
                    <text style={text}>Cars Counter</text>
                  </div>
                </div>
              </div>
              <div className="component"style={{display:'flex',flexDirection:'column',width:'100%'}}>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Lottie speed={1}options={defaultOptions} style={{height:'auto',width:'350',maxWidth:350,minWidth:200}}/>
                  </div>
              </div>
          </div>
        </div>
        <footer style={{ backgroundColor: '#2F6398', height: 30, textAlign: 'center' }}>
          <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', fontSize: 20, color: 'white' }}>© ASCEND Solutions 2023.</text>
        </footer>
        </div>
      )
  }

  export default Home;