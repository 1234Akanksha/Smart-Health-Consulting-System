import React from 'react'

const Health = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className='banner'>
            <img src={imageUrl} alt="aboutImg" className='animate' />
            </div>
            <div className='banner'>
               
                <h1>
                Eat nourishing foods

                </h1>
                <br></br>
                <p>
                Our bodies need a variety of foods to give us energy and keep them running. 
                That means eating a balanced diet that contains vitamins, minerals, 
                and fiber, which can be found in fruits and vegetables 
                (with a focus on leafy greens), whole grains, legumes, nuts, lean protein, 
                and low fat dairy, per the NIDDK Trusted Source.

                </p>
                <br></br>
                <p> 
                Of course, it’s OK to have a treat once in a while, 
                but it’s best if the bulk of your everyday meals and snacks 
                contain some of those vital nutrients.
                </p>
               

                </div>
    </div>
  )
}

export default Health;