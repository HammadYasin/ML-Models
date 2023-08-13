// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import background from './Nurse.jpeg';
import background1 from './image.png';
// import background2 from './back.png';
import { IoHeartCircleOutline,IoSearchOutline } from "react-icons/io5";
import Lottie from 'react-lottie';
import heart from './heart_ani';
import heart1 from './heart1';
import { Alert,Dialog } from '@mui/material';

function App() 
{
    const [data, setdata] = useState(null);
    const [age, setAge] = useState('');
    const [gender, setGen] = useState('');
    const [cp, setCp] = useState('');
    const [trtbps, setTrt] = useState('');
    const [chol, setChol] = useState('');
    const [fbs, setFbs] = useState('');
    const [restecg, setRes] = useState('');
    const [thalachh, setTha] = useState('');
    const [exng, setExn] = useState('');
    const [oldpeak, setOld] = useState('');
    const [slp, setSlp] = useState('');
    const [caa, setCaa] = useState('');
    const [thall, setThall] = useState('');
    const [load, setLoad] = useState(false);
    const [temp,setTemp] = useState('');
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isDialogOpen1, setDialogOpen1] = useState(false);
    const closeDialog = () => {
        setDialogOpen(false);
    };
    const closeDialog1 = () => {
        setDialogOpen1(false);
    };
    const checkVals = async () =>{
        if(age !== '' &&  gender!== ''&& cp !==''&& trtbps !==''&& chol !==''&& fbs !==''&& restecg !==''&& thalachh !==''&& exng !==''&& oldpeak !==''&& slp !==''&& caa !==''&& thall !=='')
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
            setDialogOpen1(true);
        }
    }
    const onPressData = async () => {
        fetch("/items", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              age: age,
              sex: gender,
              cp: cp,
              trtbps: trtbps,
              chol: chol,
              fbs: fbs,
              restecg: restecg,
              thalachh: thalachh,
              exng: exng,
              oldpeak: oldpeak,
              slp: slp,
              caa: caa,
              thall: thall,
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
        setAge('');
        setGen('');
        setCp('');
        setTrt('');
        setChol('');
        setFbs('');
        setRes('');
        setTha('');
        setExn('');
        setOld('');
        setSlp('');
        setCaa('');
        setThall('');
        setdata('');
    }      
    useEffect(() => {
        
    }, []);  
    console.log(data)
    const myStyle={
        backgroundImage: `url(${background})`,
        height:700,
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop:35,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: heart,
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
    return (
        <div className="App">
            <header style={{ backgroundColor: '#2F6398', height: 70, color: '#FFFFFF', fontSize: 50, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IoHeartCircleOutline />
                    <text style={{ marginLeft: 20 }}>Heart Attack Model</text>
                </div>
                <img src={background1} alt="Logo" style={{ height: 60, width: 60, borderRadius: 8 }} />
            </header>
            <header style={{ backgroundColor: 'grey', marginTop: 20, display: 'flex', height: 40 }}>
                <text style={{ color: 'white', fontSize: 30, height: 40, backgroundColor: '#1F3B57', paddingInline: 10, fontWeight: 'bold', marginLeft: 50 }}>Home</text>
                <text style={{ color: 'white', fontSize: 30, paddingInline: 20 }}>About</text>
                <IoSearchOutline style={{ color: 'white', fontSize: 40, backgroundColor: '#1F3B57', marginLeft: 'auto', marginRight: 20 }} />
            </header>
            <div style={myStyle}>
    <div style={{height:580,width:1500,backgroundColor:'#FFFFFF',borderWidth:10,borderRadius:20,alignSelf:'center',boxShadow: '1px 2px 9px #000000',padding: '0 10px' }}>
        <text style={{fontSize:20}}>Kindly input the necessary information to initiate the heart attack prediction process.</text>
        <div style={{display:'flex',flexDirection:'row',margin:30,width:'100vh'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{display:'flex',flexDirection:'column',marginTop:40,marginLeft:30,width:500}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>  
                    <text style={{marginRight:7,fontSize:20}}>Age:</text>
                <input min="0" type='number' pattern="[0-9]*" value={age} onChange={(event) => setAge(event.target.value)} className="e-input"  placeholder="Enter Age" style={{fontSize:20,width:'100vh'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>BP:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={trtbps} onChange={(event) => setTrt(event.target.value)} placeholder="Enter Blood Pressure  (mm Hg)" style={{fontSize:20,width:'100vh'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>Cholestoral:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={chol} onChange={(event) => setChol(event.target.value)} placeholder="Enter Cholestrol  (mg/dl)" style={{fontSize:20,width:'100vh'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>Pulse:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={thalachh} onChange={(event) => setTha(event.target.value)} placeholder="Enter Heart Rate Maximum (BPM)" style={{fontSize:20,width:'100vh'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>Vessels:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={caa} onChange={(event) => setCaa(event.target.value)} placeholder="Enter Number of Major Vessels" style={{fontSize:20,width:'100vh'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>Oldpeak:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={oldpeak} onChange={(event) => setOld(event.target.value)} placeholder="Enter Previous peak" style={{fontSize:20,width:'100vh'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:85,justifyContent:'space-between'}}>  
                    <button onClick={checkVals} style={{height:80,width:220,borderRadius:20,fontSize:30,color:'white',backgroundColor:'#2F6398',boxShadow: '1px 1px 2px #000000',cursor:'pointer',borderWidth:5,borderColor:'#2F6398'}}>Submit</button>
                    <button onClick={ClearInputs} style={{height:80,width:220,borderRadius:20,fontSize:30,color:'white',backgroundColor:'#394857',boxShadow: '1px 1px 2px #000000',cursor:'pointer',borderWidth:5,borderColor:'#394857'}}>Clear Inputs</button>
                </div>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:20,marginLeft:30,width:500}}>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>Gender:</text>
                    <select value={gender} onChange={(event) => setGen(event.target.value)} style={{fontSize:20,width:'100vh'}}>
                    <option value=''>Select Gender</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>Chest:</text>
                    <select value={cp} onChange={(event) => setCp(event.target.value)} style={{fontSize:20,width:'100vh'}}>
                    <option value=''>Select Chest Type</option>
                    <option value="0">Typical Angina</option>
                    <option value="1">Atypical Angina</option>
                    <option value="2">Non-anginal Pain</option>
                    <option value="3">Asymptomatic</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>
                    <text style={{marginRight:7,fontSize:20}}>Fasting Sugar {'>'} 120 mg/dl:</text>
                    <select value={fbs} onChange={(event) => setFbs(event.target.value)} style={{fontSize:20,width:'100vh',height:70}}>
                    <option value=''>Select Fasting</option>
                    <option value="1">True</option>
                    <option value="0">False</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>ECG:</text>
                    <select value={restecg} onChange={(event) => setRes(event.target.value)} style={{fontSize:20,width:'100vh'}}>
                    <option value=''>Select ECG</option>
                    <option value="0">Normal</option>
                    <option value="1">ST-T wave normality</option>
                    <option value="2">Left ventricular hypertrophy</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>Exercise induced angina:</text>
                    <select value={exng} onChange={(event) => setExn(event.target.value)} style={{fontSize:20,width:'100vh',height:70}}>
                    <option value=''>Select Exercise induced angina</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>Thalium Stress:</text>
                    <select value={thall} onChange={(event) => setThall(event.target.value)} style={{fontSize:20,width:'100vh',height:60}}>
                    <option value=''>Select Thalium Stress</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:20}}>ST/HR slope:</text>
                    <select value={slp} onChange={(event) => setSlp(event.target.value)} style={{fontSize:20,width:'100vh',height:60}}>
                    <option value=''>Select Thalium Stress</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    </select>  
                </div>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <Lottie speed={3}options={defaultOptions} height={400} width={400}/>
        {load && <Lottie speed={1}options={defaultOptions1} height={50} width={50}/>}
        {data === "No Heart Attack" ? (
            <text style={{fontSize:50,color:'green'}}>{data}</text>
             ) : (
                null
                 )}
        {data === "Heart Attack" ? (
            <text style={{fontSize:50,color:'red'}}>{data}</text>
             ) : (
                null
                 )}
        </div>
        </div>
    </div>
            </div>
            <footer style={{ backgroundColor: '#2F6398', height: 30, textAlign: 'center' }}>
                <text style={{ fontSize: 20, color: 'white' }}>© ASCEND Healthcare Solutions 2023.</text>
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
        </div>
    );
}
 
export default App;