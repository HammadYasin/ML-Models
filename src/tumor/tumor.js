import React, { useState, useEffect } from "react";
import "./tumor.css";
import background from '../images/Nurse.jpeg';
import background1 from '../images/image.png';
import {IoSearchOutline,IoLogoIonitron } from "react-icons/io5";
import Lottie from 'react-lottie';
import heart1 from '../animations/brain_load.json';
import diabetes_ani from '../animations/Brain.json';
import {useNavigate } from 'react-router-dom';

function Tumor() {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [image, setImage] = useState('');
    const [load, setLoad] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isDialogOpen1, setDialogOpen1] = useState(false);

    const closeDialog = () => {
        setDialogOpen(false);
    };
    const closeDialog1 = () => {
        setDialogOpen1(false);
    };
    const navigateHome = () => {
        navigate('/Home', { replace: true });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result.split(',')[1]; // Remove the prefix
                setImage(base64String); // Store the cleaned base64 string
            };
            reader.readAsDataURL(file);
        }
    };
    

    const checkVals = async () => {
        if (image !== '') {
            setData(null);
            setLoad(true);
            setTimeout(() => {
                setLoad(false);
            }, 3000);
            onPressData();
        } else {
            setDialogOpen1(true);
        }
    };

    const onPressData = async () => {
        fetch("/tumor", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "image": image,
            }),
        })
        .then((res) => res.text())
        .then((data) => {
            try {
                const parsedData = JSON.parse(data);
                setTimeout(() => {
                    setData(parsedData);
                }, 1000);
            } catch (error) {
                console.error("Error parsing the response:", error);
            }
        })
        .catch((error) => {
            console.error("Error in API call:", error);
        });
    };
    const ClearInputs = async () => {
        setDialogOpen(true);
        setData('');
        setImage('');
    };
    useEffect(() => {

    }, [data]);
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: 'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: 35,
        marginBottom: 45,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
                    <IoLogoIonitron />
                    <text style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', fontSize: '3vh' }}>Brain Tumor Detection</text>
                </div>
                <img src={background1} alt="Logo" style={{ height: 60, width: 60, borderRadius: 8 }} />
            </header>
            <header style={{ backgroundColor: 'grey', marginTop: 20, marginBottom: 20, display: 'flex', height: 30, flexDirection: 'row' }}>
                <text onClick={navigateHome} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', cursor: 'pointer', color: 'white', fontSize: 20, paddingInline: 20, marginTop: 3 }}>Home</text>
                <text style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', cursor: 'pointer', color: 'white', fontSize: 20, paddingInline: 20, fontWeight: 'bold', backgroundColor: '#1F3B57' }}>Brain</text>
                <IoSearchOutline style={{ color: 'white', fontSize: 30, backgroundColor: '#1F3B57', marginLeft: 'auto', marginRight: 5 }} />
            </header>
            <div style={myStyle}>
                <div style={{ height: 'auto', backgroundColor: '#FFFFFF', borderWidth: 10, borderRadius: 20, alignSelf: 'center', boxShadow: '1px 2px 9px #000000', padding: '0 10px', width: 'auto', flexWrap: 'wrap', marginTop: 25, marginBottom: 35, maxWidth: '100%', minWidth: '50%', marginLeft: 25, marginRight: 25 }}>
                    <text style={responsiveTextStyles}>Kindly input the necessary information to initiate the Brain tumor prediction process.</text>
                    <div className="container" style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: 20, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 18 }}>
                        <div className="component" style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-evenly', height: '100%', minWidth: 300 }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <input type="file" accept="image/*" onChange={handleImageChange} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', marginBottom: 20 }} />
                            </div>
                            {image && (
                                <img src={`data:image/jpeg;base64,${image}`} alt="Selected" style={{ width: '100%', maxWidth: 300, height: 'auto', marginBottom: 20, borderRadius: 10, border: '2px solid #ccc' }} />
                            )}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Lottie speed={1} options={defaultOptions} style={{ height: 'auto', width: '350', maxWidth: 350 }} />
                            <div style={{ height: 80 }}>
                                {load && <Lottie speed={1} options={defaultOptions1} height={100} width={100} />}
                                {data && (
                                    <div>
                                        <p style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', fontSize: 15 }}>
                                            <strong>Prediction:</strong> {data.prediction}
                                        </p>
                                        <p style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', fontSize: 15 }}>
                                            <strong>Confidence:</strong> {data.confidence}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <button onClick={checkVals} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', height: 'auto', width: 'auto', borderRadius: 20, fontSize: '3vh', color: 'white', backgroundColor: '#2F6398', boxShadow: '1px 1px 2px #000000', cursor: 'pointer', borderWidth: 5, borderColor: '#2F6398', marginBottom: 25 }}>Submit</button>
                                <button onClick={ClearInputs} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', height: 'auto', width: 'auto', borderRadius: 20, fontSize: '2.7vh', color: 'white', backgroundColor: '#394857', boxShadow: '1px 1px 2px #000000', cursor: 'pointer', borderWidth: 5, borderColor: '#394857', marginBottom: 25 }}>Clear Inputs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer style={{ backgroundColor: '#2F6398', height: 30, textAlign: 'center' }}>
                <text style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', fontSize: 20, color: 'white' }}>© ASCEND Solutions 2024.</text>
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
                            <h2>Error!</h2>
                            <p>Input values are empty.</p>
                            <button onClick={closeDialog1}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tumor;
