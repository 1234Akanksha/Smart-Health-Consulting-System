/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Neurologist = () => {
    return (
        <>
        <div className="cardiology container">
            <div className='banner'>
                <br></br>
            <h1>
            Your Trusted Choice for the Best Neurologist
            </h1>
            <p >
            The Neurology Department is dedicated to providing exceptional care for adult patients grappling 
            with Neurological 
            and Psychiatric disorders. 
            We house a team of highly qualified neurologists, 
            ensuring you receive expert care for your neurological concerns.

            </p>
            <p>
            Central to our approach is a patient-focused model, designed to accommodate 
            distinct conditions and their individualistic requisites. 
            Our comprehensive approach guarantees that patients receive optimal 
            care required to manage the condition and enhance their quality of life.
            </p>
            <p>
            We acknowledge that each patient is distinct, and our personalised treatment plans reflect that. 
            Our team works in tandem with patients to develop a tailored treatment 
            plan that caters to individual needs and ensures maximum efficacy.


            </p>
            <p>
            We operate on ethical principles and remain current with the latest medical knowledge,
             guaranteeing scientifically-sound medical advice and opinions.
             <br></br>

If you need the best neurologist , SMH is the place to go. We offer expert care with kindness 
and understanding.
            </p>

            </div>
            <div className='banner'>
            <img src="nu.png" alt="hero" className='animated-image'/>

        </div>
        
        </div>
        <div className='container'>
            <div className='banner'>
        <h1>Meet Our Doctors</h1>
        <br></br>

        <div className='image-row'>
        <img src="doc9.jpg" alt="doc1" className='image'></img>
        <p className='image-text'>Dr.Swati Tendulkar <br/>Consultant,Neurologist</p>

        <img src="doc10.jpg" alt="doc1" className='image'></img>
        <p className='image-text'>Dr.Tanu Singh <br/>Consultant,Neurologist</p>

       
        
</div>
        </div>
        
        </div>

        </>
    );
};


export default Neurologist;
