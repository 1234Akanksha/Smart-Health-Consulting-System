/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Dermatologist = () => {
    return (
        <>
        <div className="cardiology container">
            <div className='banner'>
                <br></br>
            <h1>
            Integrated Approach to Medical Care
            </h1>
            <p >
            We ensure that each patient receives the highest-quality Cardiac Care, 
            from pre-operative testing through recovery.
            </p>
            <p>
            Our Dermatology Department specialises in addressing Skin, Hair, and Nail Disorders, 
            including those related to Systemic Illnesses.

            </p>
            <p>
            Our expert Dermatologists provide trustworthy opinions and 
            treatment plans based on the latest scientific knowledge and ethical principles.
            </p>
            

            </div>
            <div className='banner'>
            <img src="dermo2.png" alt="hero" className='animated-image'/>

        </div>
        
        </div>
        <div className='container'>
            <div className='banner'>
        <h1>Meet Our Doctors</h1>
        <br></br>

        <div className='image-row'>
        <img src="doc5.jpg" alt="doc1" className='image'></img>
        <p className='image-text'>Dr.Saima Shaikh<br/>Consultant,Dermatologist</p>

        <img src="doc6.jpg" alt="doc1" className='image'></img>
        <p className='image-text'>Dr.Ayesha Diwakar<br/>Consultant,Dermatologist</p>

       
        
</div>
        </div>
        
        </div>

        </>
    );
};


export default Dermatologist;
