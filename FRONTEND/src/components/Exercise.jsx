import React from 'react'

const Exercise = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
          <br>
          </br>
            <h1>{title}</h1>
            <p >
            Moving your body has a host of health benefits, including:
            <br></br><br/>
            boosting your mood<br/>
giving you more energy<br></br>
building muscle<br/>
protecting your bones<br/>
losing or maintaining weight<br/>
helping you get better sleep<br/>
Regular exercise can also help prevent chronic conditions like heart disease, type 2 diabetes, and some types of cancer.
<br></br><br/>
You’ll want to aim for 150–300 minutes of moderate-intensity
 aerobic exercise or 75 minutes of vigorous exercise per week, 
according to the Department of Health and Human Services


            
            </p>
            
        </div>
        <div className='banner'>
            <img src={imageUrl} alt="hero" className='animated-image'/>

        </div>
        
    </div>
  )
}

export default Exercise