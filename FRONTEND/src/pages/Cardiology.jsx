/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Cardiology = () => {
    return (
        <>
        <div className="cardiology container">
            <div className='banner'>
                <br></br>
            <h1>
                An Integrated Approach to Cardiac Care
            </h1>
            <p >
            Asian Heart Institute is a leading institution with a team of highly qualified 
            and experienced Cardiologists who excel in diagnosing and treating a wide range of heart conditions.

            </p>
            <p>
            Our renowned Cardiology Department offers a comprehensive suite of services, 
            encompassing consultations and state-of-the-art procedures 
            such as Echo Cardiography and Cathlab treatments for complex Cardiac conditions. 
            From Non-Invasive Diagnostic tests to groundbreaking interventional procedures like 
            Angioplasty, Rotablator, FFR, and non-surgical closure of heart defects, 
            we provide advanced solutions tailored to our patients’ needs.

            </p>
            <p>
            At Asian Heart Institute, our dedicated team of senior Cardiologists in Mumbai, 
            India is committed to providing personalised treatment and meticulous care that 
            caters to your specific requirements. 
            We prioritise your well-being and uphold the highest standards of honesty, ethics, 
            and scientific correctness in offering the latest medical knowledge for informed decision-making.

            </p>
            <p>
            Combining our integrated approach to healthcare,
             all our doctors work harmoniously to ensure the best possible pre-operative and 
             post-operative care alongside exceptional surgical outcomes.
            </p>

            </div>
            <div className='banner'>
            <img src="cardiology.png" alt="hero" className='animated-image'/>

        </div>
        
        </div>
        <div className='container'>
            <div className='banner'>
        <h1>Meet Our Doctors</h1>
        <br></br>

        <div className='image-row'>
        <img src="doc2.jpg" alt="doc1" className='image'></img>
        <p className='image-text'>Dr.Mahira Sharma<br/>Consultant,Cardiology</p>

        <img src="doc3.jpg" alt="doc1" className='image'></img>
        <p className='image-text'>Dr.Wasiyeeullah Shaikh<br/>Consultant,Cardiology</p>

       
        
</div>
        </div>
        
        </div>

        </>
    );
};


export default Cardiology;
