import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Pyschiatrist = () => {
    return (
        <>
        <div className="cardiology container">
            <div className='banner'>
                <br></br>
            <h1>
            Your Trusted Psychiatrist
            </h1>
            <p >
            We are committed to supporting individuals facing emotional 
            distress by providing effective skills to manage their challenges with a positive outlook.


            </p>
            <p>
            We offer personalised care to patients facing psychological, emotional, 
            or social difficulties through an array of thoughtfully-designed 
            inpatient and outpatient programs. Our unwavering commitment to compassion, respect, dignity, sensitivity, 
            and empathy ensures that even the most intricate issues are addressed with the utmost care

            </p>
            <p>
            Our medical advice is based on the latest advancements in medical science and is ethically sound, 
            providing patients with trustworthy and accurate opinions.

            </p>
            

            </div>
            <div className='banner'>
            <img src="py.png" alt="hero" className='animated-image'/>

        </div>
        
        </div>
        <div className='container'>
            <div className='banner'>
        <h1>Meet Our Doctors</h1>
        <br></br>

        <div className='image-row'>
        <img src="doc7.jpg" alt="doc1" className='image'></img>
        <p className='image-text'>Dr.Rohit Kumar<br/>Consultant,Psychiatrist</p>

        <img src="doc8.jpg" alt="doc1" className='image'></img>
        <p className='image-text'>Dr.Nitya Gupta<br/>Consultant,Psychiatrist</p>

       
        
</div>
        </div>
        
        </div>

        </>
    );
};


export default Pyschiatrist;
