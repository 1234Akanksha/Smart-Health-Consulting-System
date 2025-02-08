import React from 'react'

const Food = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
          <br>
          </br>
            <h1>{title}</h1>
            <p >
            It’s best to eat mostly nutrient-dense foods. 
            This means limiting highly processed foods, like packaged and frozen foods, 
            that typically have fewer nutrients but more calories, fat, salt, and added sugars. 
            You should also limit your intake of soda, packaged cookies and chips, candy, and sweetened cereals.


            </p>
            <p>
            If you’re having a hard time giving up packaged snacks or fast food, you can try slowly swapping out these processed meals and snacks for whole foods. 
            It’s not a perfect science, and setbacks are a normal part of making big changesTrusted Source in your life.
            </p>
            
        </div>
        <div className='banner'>
            <img src={imageUrl} alt="hero" className='animated-image'/>

        </div>
        
    </div>
  )
}

export default Food