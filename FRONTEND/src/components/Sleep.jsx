import React from 'react'

const Sleep = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className='banner'>
            <img src={imageUrl} alt="aboutImg" className='animate' />
            </div>
            <div className='banner'>
                
                <h1>
                Drink water and stay hydrated

                </h1>
                <br></br>
                <p>
                Staying hydrated isn’t just about quenching your thirst, 
                it also keeps your body and brain running. 
                Not only can drinking enough water improve your thinking abilities but may also help:
                <br></br>
                <br/>
                improve digestion<br/>
increase your energy<br/>
decrease joint pain<br/>
improve your heart health<br/><br/>
Advice on how much water to drink per day varies, but anywhere between 8 and 13 cups a day is a good target.


                </p>
                

                </div>
    </div>
  )
}

export default Sleep;