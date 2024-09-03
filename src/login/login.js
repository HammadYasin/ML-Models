// Importing modules
import React, { useState, useEffect } from "react";
import "./login.css";
import background from '../images/loginback.jpg';
import background1 from '../images/logo_t.png';
import { IoLogInOutline,IoPersonOutline,IoKeyOutline } from "react-icons/io5";
import Lottie from 'react-lottie';
import login_ani from '../animations/login1.json';
import {Routes, Route, useNavigate} from 'react-router-dom';

function login() 
{
    const navigate = useNavigate();
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isDialogOpen1, setDialogOpen1] = useState(false);
    const [log, setLog] = useState(false);
    const [user,setUser] = useState('');
    const [pass,setPass] =useState('');
    const [isShown, setIsSHown] = useState(false);
    const navigateHome = () => {
        setLog(true)
        setTimeout(() => {
            navigate('/',{state:true});
          }, 500)
      };
      const checkVals = async () =>{
        if(user !== '' &&  pass!== '')
        {
            if(user=='cmc-analytics'&& pass=='Ascend#2023')
            {
                navigateHome();
                navigateHome();
            }
            else
            {
                setDialogOpen1(true)
            }
        }
        else
        {
            setDialogOpen(true)
        }
      }
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    const closeDialog = () => {
        setDialogOpen(false);
    };
    const closeDialog1 = () => {
        setDialogOpen1(false);
    };
    const myStyle={
        // backgroundImage: `url(${background})`,
        height:'auto',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: login_ani,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const responsiveTextStyles = {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        color:'white',
        fontSize: '46px', // Default font size
        '@media (max-width: 768px)': {
          fontSize: '14px', // Adjust font size for smaller screens
        },
        '@media (max-width: 480px)': {
          fontSize: '12px', // Adjust font size for even smaller screens
        },
      };
    return (
        <div className="App" style={{backgroundImage: `url(${background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
            <header style={{height: 160, color: '#FFFFFF', fontSize: 50, display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IoLogInOutline style={{color:'black'}}></IoLogInOutline>
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'3vh',alignSelf:'center',color:'black'}}>Login</text>
                </div>
                <img src={background1} alt="Logo" style={{ height: 170, width: 170 }} />
            </header>
            <div style={myStyle}>
    <div style={{height:'auto',backgroundColor:'#2F6398',borderWidth:10,borderRadius:20,alignSelf:'center',boxShadow: '1px 2px 9px #000000',padding: '0 10px',width:'auto',flexWrap:'wrap',marginTop:20,marginBottom:90,maxWidth:'100%',minWidth:'30%',marginLeft:25,marginRight:25}}>
        <text style={responsiveTextStyles}>Login</text>
        <div className="container" style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20,justifyContent:'space-evenly',alignItems:'center',marginLeft:10}}>
            <div className="component"style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'space-evenly',height:'100%',minWidth:300}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <IoPersonOutline style={{color:'white',fontSize:80}}></IoPersonOutline>
                <input min="0" value={user} onChange={(event) => setUser(event.target.value)} className="e-input"  placeholder="Enter User" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'200%',height:40,fontSize:20,borderRadius:10}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>
                <IoKeyOutline style={{color:'white',fontSize:40}}></IoKeyOutline>
                <input className="e-input" type={isShown ? "text" : "password"} pattern="[0-9]*" value={pass} onChange={(event) => setPass(event.target.value)} placeholder="Enter Password" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%',height:40,fontSize:20,borderRadius:10}} />
                </div>
                <div className="checkbox-container">
                    <label htmlFor="checkbox" style={{color:'white',fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'}}>Show password?</label>
                    <input
                         id="checkbox"
                         type="checkbox"
                         checked={isShown}
                         onChange={togglePassword}
                    />
                 </div>
                 <div style={{height:50}}>
                 {log && (                 
                 <Lottie speed={1} options={defaultOptions} style={{width:'auto',maxWidth:120}}/>
                     )}
                 </div>
                 <button onClick={checkVals} style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',height:'auto',width:'auto',borderRadius:20,fontSize:'2.7vh',color:'white',backgroundColor:'#394857',boxShadow: '1px 1px 2px #000000',cursor:'pointer',borderWidth:5,borderColor:'#394857',marginBottom:25}}>Log in</button>
            </div>
        </div>
    </div>
            </div>
            <footer style={{ backgroundColor: '#2F6398', height: 30, textAlign: 'center' }}>
                <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', fontSize: 20, color: 'white' }}>© ASCEND Solutions 2023.</text>
            </footer>
            {isDialogOpen && (
                <div className="overlay">
                    <div className="dialog">
                        <div className="dialog-content">
                            <h2>Error !</h2>
                            <p>Input values are empty.</p>
                            <button onClick={closeDialog}>Close</button>
                        </div>
                    </div>
                </div>
            )}
                        {isDialogOpen1 && (
                <div className="overlay">
                    <div className="dialog">
                        <div className="dialog-content">
                            <h2>Error !</h2>
                            <p>Invalid user and password</p>
                            <button onClick={closeDialog1}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default login;