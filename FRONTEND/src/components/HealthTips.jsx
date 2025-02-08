import React from 'react'

const HealthTips = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
          <br>
          </br>
            <h1>{title}</h1>
            <p >
            When it comes to knowing what’s healthy, 
            even qualified experts often seem to hold opposing opinions. 
            This can make it difficult to figure out what you should actually 
            be doing to optimize your health.

            </p>
            <p>
            Yet, despite all the disagreements, 
            a number of wellness tips are well supported by research.

            </p>
            <p>
            Here are health and nutrition tips that are based on scientific evidence.
            </p>
            
        </div>
        <div className='banner'>
            <img src={imageUrl} alt="hero" className='animated-image'/>

        </div>
        
    </div>
  )
}

export default HealthTips;