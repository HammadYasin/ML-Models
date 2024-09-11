// Importing modules
import React, { useState, useEffect } from "react";
import "./weather.css";
import background from '../images/weather.jpg';
import background1 from '../images/image.png';
// import background2 from './back.png';
import { IoHeartCircleOutline,IoSearchOutline,IoMedkitOutline,IoCloudOutline } from "react-icons/io5";
import Lottie from 'react-lottie';
import heart1 from '../animations/weather_load.json';
import diabetes_ani from '../animations/weather_ani.json'
import {Routes, Route, useNavigate} from 'react-router-dom';

function weather() 
{
    const navigate = useNavigate();
    const [data, setdata] = useState(null);
    const [temp, setTemp] = useState('');
    const [humi, setHumi] = useState('');
    const [winds, setWinds] = useState('');
    const [preci, setPreci] = useState('');
    const [clou, setClou] = useState('');
    const [atmos, setAtmos] = useState('');
    const [uv, setUV] = useState('');
    const [sea, setSea] = useState('');
    const [vis, setVis] = useState('');
    const [loc, setLoc] = useState('');
    const [error, setError] = useState('');
    const [load, setLoad] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isDialogOpen1, setDialogOpen1] = useState(false);
    const [isDialogOpen2, setDialogOpen2] = useState(false);
    const closeDialog = () => {
        setDialogOpen(false);
    };
    const closeDialog1 = () => {
        setDialogOpen1(false);
    };
    const closeDialog2 = () => {
        setError('')
        setDialogOpen2(false);
    };
    const navigateHeart = () => {
        navigate('/heart',{replace:true});
      };
    const navigateDiabetes = () => {
        navigate('/diabetes',{replace:true});
    };
    const navigateHome = () => {
        navigate('/Home',{replace:true});
    };
    const checkVals = async () =>{
        if(temp !== '' &&  humi!== ''&& winds !==''&& preci !==''&& clou !==''&& atmos !==''&& uv !==''&& sea !==''&& vis !==''&& loc !=='')
        {
            if(temp>-51&&temp<56)
            {
                if(humi>0&&humi<101)
                {
                    if(winds>0&&winds<121)
                    {
                        if(preci>0&&preci<101)
                        {
                            if(atmos>980&&atmos<1101)
                                {
                                    if(uv>0&&uv<14)
                                        {
                                            if(vis>0&&vis<20)
                                                {
                                                    setdata(null);
                                                    setLoad(true);
                                                    setTimeout(() => {
                                                      setLoad(false);
                                                    }, 1000)
                                                    onPressData()
                                                }
                                                else
                                                {
                                                    setError('Visibilty')
                                                    setDialogOpen2(true)
                                                }
                                        }
                                        else
                                        {
                                            setError('UV Index')
                                            setDialogOpen2(true)
                                        }
                                }
                                else
                                {
                                    setError('Atmosphere')
                                    setDialogOpen2(true)
                                }
                        }
                        else
                        {
                            setError('Precipitation')
                            setDialogOpen2(true)
                        }
                    }
                    else
                    {
                        setError('Wind Speed')
                        setDialogOpen2(true)
                    }
                }
                else
                {
                    setError('Temperature')
                    setDialogOpen2(true)
                }
            }
            else
            {
                setError('Precipitation')
                setDialogOpen2(true)
            }
        }
        else
        {
            setDialogOpen1(true);
        }
    }
    const onPressData = async () => {
        fetch("/weather", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Temperature": temp,
                "Humidity": humi,
                "Wind Speed": winds,
                "Precipitation (%)": preci,
                "Cloud Cover": clou,
                "Atmospheric Pressure": atmos,
                "UV Index": uv,
                "Season": sea,
                "Visibility (km)": vis,
                "Location": loc
            }),
          })
        .then((res) =>
            res.text().then((data) => {
                setTimeout(() => {
                    setdata(data);
                  }, 1000)
            })
        );
        }
    const ClearInputs = async () => {
        setDialogOpen(true);
        setdata('');
        setTemp('');
        setHumi('');
        setWinds('');
        setPreci('');
        setClou('');
        setAtmos('');
        setUV('');
        setSea('');
        setVis('');
        setLoc('');
        setdata('');
    }      
    useEffect(() => {
        
    }, []);  
    console.log(data)
    const myStyle={
        backgroundImage: `url(${background})`,
        height:'auto',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop:35,
        marginBottom:45,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: diabetes_ani,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: heart1,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const responsiveTextStyles = {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '16px', // Default font size
        '@media (max-width: 768px)': {
          fontSize: '14px', // Adjust font size for smaller screens
        },
        '@media (max-width: 480px)': {
          fontSize: '12px', // Adjust font size for even smaller screens
        },
      };
    return (
        <div className="App">
            <header style={{ backgroundColor: '#2F6398', height: 70, color: '#FFFFFF', fontSize: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IoCloudOutline />
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'3vh'}}>Weather Model</text>
                </div>
                <img src={background1} alt="Logo" style={{ height: 60, width: 60, borderRadius: 8 }} />
            </header>
            <header style={{ backgroundColor: 'grey', marginTop: 20,marginBottom:20, display: 'flex', height: 30 ,flexDirection:'row'}}>
            <text onClick={navigateHome} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',cursor:'pointer',color: 'white', fontSize: 20, paddingInline: 20,marginTop:3}}>Home</text>
                <text onClick={navigateHeart} style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',cursor:'pointer', color: 'white', fontSize: 20, height: 30, paddingInline: 10,marginTop:3 }}>Heart</text>
                <text onClick={navigateDiabetes} style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',cursor:'pointer', color: 'white', fontSize: 20, height: 30, paddingInline: 10,marginTop:3 }}>Diabetes</text>
                <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', cursor:'pointer',color: 'white', fontSize: 20, paddingInline: 20 , fontWeight: 'bold', backgroundColor: '#1F3B57'}}>Weather</text>
                <IoSearchOutline style={{ color: 'white', fontSize: 30, backgroundColor: '#1F3B57', marginLeft: 'auto',marginRight:5 }} />
            </header>
            <div style={myStyle}>
    <div style={{height:'auto',backgroundColor:'#FFFFFF',borderWidth:10,borderRadius:20,alignSelf:'center',boxShadow: '1px 2px 9px #000000',padding: '0 10px',width:'auto',flexWrap:'wrap',marginTop:25,marginBottom:35,maxWidth:'100%',minWidth:'50%',marginLeft:25,marginRight:25}}>
        <text style={responsiveTextStyles}>Kindly input the necessary information to initiate the weather type prediction process.</text>
        <div className="container" style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20,justifyContent:'space-evenly',alignItems:'center',marginLeft:18}}>
            <div className="component"style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'space-evenly',height:'100%',minWidth:300}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>  
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Temperature:</text>
                <input min="0" type='number' pattern="[0-9]*" value={temp} onChange={(event) => setTemp(event.target.value)} className="e-input"  placeholder="Enter Temperature(-50 to 50°C)" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'200%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Humidity:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={humi} onChange={(event) => setHumi(event.target.value)} placeholder="Enter Humidity(0 to 100%)" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text  style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Wind Speed:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={winds} onChange={(event) => setWinds(event.target.value)} placeholder="Enter Wind Speed(0 to 120 km/h)" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Precipitation:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={preci} onChange={(event) => setPreci(event.target.value)} placeholder="Enter Precipitation(0 to 100%)" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Cloud Cover:</text>
                    <select value={clou} onChange={(event) => setClou(event.target.value)} style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%'}}>
                    <option value=''>Select Cloud Cover</option>
                    <option value="cloudy">Cloudy</option>
                    <option value="overcast">Overcast</option>
                    <option value="partly cloudy">Partly Cloudy</option>
                    <option value="clear">Clear</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Season:</text>
                    <select value={sea} onChange={(event) => setSea(event.target.value)} style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%'}}>
                    <option value=''>Select Season</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Location:</text>
                    <select value={loc} onChange={(event) => setLoc(event.target.value)} style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%',height:60}}>
                    <option value=''>Select Location</option>
                    <option value="inland">Inland</option>
                    <option value="coastal">Coastal</option>
                    <option value="mountain">Mountain</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Atmosphere:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={atmos} onChange={(event) => setAtmos(event.target.value)} placeholder="Enter Atmosphere(980 to 1050hPa)" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>UV Index:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={uv} onChange={(event) => setUV(event.target.value)} placeholder="Enter UV Index(0 to 13+)" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',marginRight:7,fontSize:'2vh'}}>Visibility:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={vis} onChange={(event) => setVis(event.target.value)} placeholder="Enter Visibility(0 to 19+km)" style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:'1%vw',width:'100%'}} />
                </div>
            </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <Lottie speed={1}options={defaultOptions} style={{height:'auto',width:'350',maxWidth:350}}/>
        <div style={{height:80}}>
        {load && <Lottie speed={1}options={defaultOptions1} height={50} width={50}/>}
        {data === "Cloudy" ? (
            <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:40,color:'#B0C4DE'}}>{data}</text>
             ) : (
                null
                 )}
        {data === "Rainy" ? (
            <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:40,color:'#4682B4'}}>{data}</text>
             ) : (
                null
                 )}
        {data === "Snowy" ? (
            <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:40,color:'#E0FFFF'}}>{data}</text>
             ) : (
                null
                 )}
        {data === "Sunny" ? (
            <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',fontSize:40,color:'#FFD700'}}>{data}</text>
             ) : (
                null
                 )}
        </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>  
                    <button onClick={checkVals} style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',height:'auto',width:'auto',borderRadius:20,fontSize:'3vh',color:'white',backgroundColor:'#2F6398',boxShadow: '1px 1px 2px #000000',cursor:'pointer',borderWidth:5,borderColor:'#2F6398',marginBottom:25}}>Submit</button>
                    <button onClick={ClearInputs} style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',height:'auto',width:'auto',borderRadius:20,fontSize:'2.7vh',color:'white',backgroundColor:'#394857',boxShadow: '1px 1px 2px #000000',cursor:'pointer',borderWidth:5,borderColor:'#394857',marginBottom:25}}>Clear Inputs</button>
                </div>
        </div>
        </div>
    </div>
            </div>
            <footer style={{ backgroundColor: '#2F6398', height: 30, textAlign: 'center' }}>
                <text style={{fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', fontSize: 20, color: 'white' }}>© ASCEND Solutions 2024.</text>
            </footer>
            {isDialogOpen && (
                <div className="overlay">
                    <div className="dialog">
                        <div className="dialog-content">
                            <h2>Inputs are empty</h2>
                            <p>All Entries Cleared.</p>
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
                            <p>Input values are empty.</p>
                            <button onClick={closeDialog1}>Close</button>
                        </div>
                    </div>
                </div>
            )}
            {isDialogOpen2 && (
                <div className="overlay">
                    <div className="dialog">
                        <div className="dialog-content">
                            <h2>Error !</h2>
                            <p>Invalid {error}.</p>
                            <button onClick={closeDialog2}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default weather;