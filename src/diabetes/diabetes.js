// Importing modules
import React, { useState, useEffect } from "react";
import "./diabetes.css";
import background from '../images/Nurse.jpeg';
import background1 from '../images/image.png';
// import background2 from './back.png';
import { IoHeartCircleOutline,IoSearchOutline,IoMedkitOutline } from "react-icons/io5";
import Lottie from 'react-lottie';
import heart1 from '../animations/heart1.json';
import diabetes_ani from '../animations/diabetes.json'
import {Routes, Route, useNavigate} from 'react-router-dom';

function diabetes() 
{
    const navigate = useNavigate();
    const [data, setdata] = useState(null);
    const [age, setAge] = useState('');
    const [gender, setGen] = useState('');
    const [bmi, setBmi] = useState('');
    const [hyper, setHyp] = useState('');
    const [hba, setHba] = useState('');
    const [smoking, setSmo] = useState('');
    const [glucose, setGlu] = useState('');
    const [hea, setHea] = useState('');
    const [load, setLoad] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isDialogOpen1, setDialogOpen1] = useState(false);
    const closeDialog = () => {
        setDialogOpen(false);
    };
    const closeDialog1 = () => {
        setDialogOpen1(false);
    };
    const navigateHeart = () => {
        navigate('/heart');
      };
    const checkVals = async () =>{
        if(age !== '' &&  gender!== ''&& bmi !==''&& hyper !==''&& hba !==''&& smoking !==''&& glucose !==''&& hea !=='')
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
        fetch("/diabetes", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              gender: gender,
              age: age,
              hypertension:hyper,
              heart_disease:hea,
              smoking_history:smoking,
              bmi:bmi,
              HbA1c_level:hba,
              blood_glucose_level:glucose,
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
        setBmi('');
        setHyp('');
        setHba('');
        setSmo('');
        setGlu('');
        setHea('');
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
                    <IoMedkitOutline />
                    <text style={{fontSize:'3vh'}}>Diabetes Model</text>
                </div>
                <img src={background1} alt="Logo" style={{ height: 60, width: 60, borderRadius: 8 }} />
            </header>
            <header style={{ backgroundColor: 'grey', marginTop: 20,marginBottom:20, display: 'flex', height: 30 }}>
                <text onClick={navigateHeart} style={{cursor:'pointer', color: 'white', fontSize: 20, height: 30, paddingInline: 10, marginLeft: 50 }}>Heart</text>
                <text style={{ cursor:'pointer',color: 'white', fontSize: 20, paddingInline: 20 , fontWeight: 'bold', backgroundColor: '#1F3B57'}}>Diabetes</text>
                <IoSearchOutline style={{ color: 'white', fontSize: 30, backgroundColor: '#1F3B57', marginLeft: 'auto', marginRight: 20 }} />
            </header>
            <div style={myStyle}>
    <div style={{height:'auto',backgroundColor:'#FFFFFF',borderWidth:10,borderRadius:20,alignSelf:'center',boxShadow: '1px 2px 9px #000000',padding: '0 10px',width:'auto',flexWrap:'wrap',marginTop:25,marginBottom:35,maxWidth:'100%',minWidth:'50%',marginLeft:25,marginRight:25}}>
        <text style={responsiveTextStyles}>Kindly input the necessary information to initiate the diabetes prediction process.</text>
        <div className="container" style={{display:'flex',flexDirection:'row',width:'100%',marginTop:20,justifyContent:'space-evenly',alignItems:'center',marginLeft:18}}>
            <div className="component"style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'space-evenly',height:'100%',minWidth:300}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>  
                    <text style={{marginRight:7,fontSize:'2vh'}}>Age:</text>
                <input min="0" type='number' pattern="[0-9]*" value={age} onChange={(event) => setAge(event.target.value)} className="e-input"  placeholder="Enter Age" style={{fontSize:'1%vw',width:'200%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:'2vh'}}>BMI:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={bmi} onChange={(event) => setBmi(event.target.value)} placeholder="Enter BMI in kg/m²" style={{fontSize:'1%vw',width:'100%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text  style={{marginRight:7,fontSize:'2vh'}}>HbA1c:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={hba} onChange={(event) => setHba(event.target.value)} placeholder="Enter hbA1c in mmol/mol" style={{fontSize:'1%vw',width:'100%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:'2vh'}}>Glucose:</text>
                <input className="e-input" min="0" type='number' pattern="[0-9]*" value={glucose} onChange={(event) => setGlu(event.target.value)} placeholder="Enter Blood Glucose Level" style={{fontSize:'1%vw',width:'100%'}} />
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:'2vh'}}>Gender:</text>
                    <select value={gender} onChange={(event) => setGen(event.target.value)} style={{fontSize:'1%vw',width:'100%'}}>
                    <option value=''>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:'2vh'}}>Hypertension:</text>
                    <select value={hyper} onChange={(event) => setHyp(event.target.value)} style={{fontSize:'1%vw',width:'100%'}}>
                    <option value=''>Select Hypertension</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>
                    <text style={{marginRight:7,fontSize:'2vh'}}>Smoking History:</text>
                    <select value={smoking} onChange={(event) => setSmo(event.target.value)} style={{fontSize:'1%vw',width:'100%',height:60}}>
                    <option value=''>Select Smoking History</option>
                    <option value="current">Current</option>
                    <option value="ever">Ever</option>
                    <option value="former">Former</option>
                    <option value="never">Never</option>
                    <option value="No Info">No Info</option>
                    <option value="not current">Not Current</option>
                    </select>  
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:15}}>  
                    <text style={{marginRight:7,fontSize:'2vh'}}>Heart Disease:</text>
                    <select value={hea} onChange={(event) => setHea(event.target.value)} style={{fontSize:'1%vw',width:'100%',height:55}}>
                    <option value=''>Select Heart Disease</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                    </select>  
                </div>
            </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <Lottie speed={3}options={defaultOptions} style={{height:'auto',width:'350',maxWidth:350}}/>
        <div style={{height:80}}>
        {load && <Lottie speed={1}options={defaultOptions1} height={50} width={50}/>}
        {data === "No Diabetes" ? (
            <text style={{fontSize:40,color:'green'}}>{data}</text>
             ) : (
                null
                 )}
        {data === "Diabetes" ? (
            <text style={{fontSize:40,color:'red'}}>{data}</text>
             ) : (
                null
                 )}
        </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>  
                    <button onClick={checkVals} style={{height:'auto',width:'auto',borderRadius:20,fontSize:'3vh',color:'white',backgroundColor:'#2F6398',boxShadow: '1px 1px 2px #000000',cursor:'pointer',borderWidth:5,borderColor:'#2F6398',marginBottom:25}}>Submit</button>
                    <button onClick={ClearInputs} style={{height:'auto',width:'auto',borderRadius:20,fontSize:'2.7vh',color:'white',backgroundColor:'#394857',boxShadow: '1px 1px 2px #000000',cursor:'pointer',borderWidth:5,borderColor:'#394857',marginBottom:25}}>Clear Inputs</button>
                </div>
        </div>
        </div>
    </div>
            </div>
            <footer style={{ backgroundColor: '#2F6398', height: 30, textAlign: 'center' }}>
                <text style={{ fontSize: 20, color: 'white' }}>© ASCEND Solutions 2023.</text>
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
 
export default diabetes;