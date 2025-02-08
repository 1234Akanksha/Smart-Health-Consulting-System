import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className='banner'>
            <img src={imageUrl} alt="aboutImg" className='animate' />
            </div>
            <div className='banner'>
                <p>
                    Biography
                </p>
                <br></br>
                <h3>
                    Who We Are
                </h3>
                <br></br>
                <p>
                No more long waits at clinics or hospitals. 
                With SMART Health Consulting System, 
                you can connect with experienced doctors from anywhere, anytime.
                 Our platform is designed to provide timely consultations, 
                 ensuring that your health concerns are addressed promptly.
                </p>
                <p> 
                We prioritize your privacy.
                 All consultations are conducted through secure channels, 
                 ensuring that your medical information remains confidential. 
                 Your health is personal, and we are committed to 
                 maintaining the highest standards of data protection.
                </p>
                <p>
                From routine check-ups to specialist consultations, 
                SMART Health Consulting System offers a wide range of services. 
                You can even get e-prescriptions and follow-up care without leaving your home.
                </p>

                </div>
    </div>
  )
}

export default Biography