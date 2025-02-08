import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
          <br>
          </br>
            <h1>{title}</h1>
            <p ><i>
            Access healthcare services from anywhere, at any time, 
            without the need to travel to a clinic or hospital.<br/>
            No more long waiting lines. Get instant consultations 
            and prescriptions within minutes.
            </i></p>
            <p>
            In today's fast-paced world, your health should never take a back seat. 
            Our platform is designed to bring healthcare closer to you, 
            offering an innovative and convenient way for patients to consult with doctors from 
            the comfort of their homes


            
                </p>
                <p>
                Connect with doctors and specialists through secure, high-quality video calls.
                 Whether it’s for a routine check-up, 
                a second opinion, or a specific health concern, 
                you can consult certified healthcare professionals remotely.
                </p>
                <p>
                Have quick questions? Use our chat feature to message 
                healthcare providers and get instant answers 
                to your health queries without needing an appointment.
                </p>
                <p>
                Effortlessly schedule follow-up consultations,  
                routine check-ups through the  smart appointment scheduling system, 
                which also offers reminders to ensure you never miss a consultation.
                </p>
        </div>
        <div className='banner'>
            <img src={imageUrl} alt="hero" className='animated-image'/>

        </div>
        
    </div>
  )
}

export default Hero