import React from 'react'

const Outdoor = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
          <br>
          </br>
            <h1>{title}</h1>
            <p >
            Being out in nature has a way of putting things in perspective, 
            but it also has proven benefits for your mental health. 
            Not only can soaking up the sun ease symptoms of depression, 
            but it can make you feel more relaxed and focused, 
            particularly when you take notice of your surroundings.

            
            
<br></br><br/>
Getting outside can also ease feelings like worry and sadness and promote happiness, optimism,
 and a sense of connection with the world. Sunlight is also the best source of vitamin D.

            
            </p>
            
        </div>
        <div className='banner'>
            <img src={imageUrl} alt="hero" className='animated-image'/>

        </div>
        
    </div>
  )
}

export default Outdoor