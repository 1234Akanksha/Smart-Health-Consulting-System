import React from 'react'

const Drink = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className='banner'>
            <img src={imageUrl} alt="aboutImg" className='animate' />
            </div>
            <div className='banner'>
                
                <h1>
                Reduce sitting and screen time

                </h1>
                <br></br>
                <p>
                In addition to getting your heart pumping,
                 spending less time sitting can improve your overall health.

                </p>
                <p> 
                Prolonged sitting and sedentary behavior have been linked to an 
                increased chance of heart disease, weight gain, and early death. 
                However, regular exercise doesn’t completely balance these effects. So, it’s a good idea to get your workouts in and take breaks from sitting throughout the day. 
                Plus, cutting down your screen time won’t hurt either.
                </p>
                

                </div>
    </div>
  )
}

export default Drink;