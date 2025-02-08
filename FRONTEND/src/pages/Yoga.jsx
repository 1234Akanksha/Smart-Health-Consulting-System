import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Yoga = () => {
    return (
        <>
        <div className="yoga container">
            <div className='banner'>
                <br></br>
            <h1>
            The attitude of gratitude is the highest yoga
            </h1>
            <p >
            In today's fast-paced world, where physical and mental well-being often take a back seat, 
            yoga emerges as a powerful tool to maintain balance.
             Yoga is not just a physical practice but a holistic system that improves the body, mind, and spirit.
              For those looking to enhance their health in a sustainable and natural way, yoga offers myriad
               benefits tailored to different health concerns.


            </p>
            <p>
            Yoga is a diverse and multifaceted practice that extends far beyond simple physical exercise.
             It offers a range of styles suited to different individuals' needs, health conditions, and fitness levels. 
             Each type of yoga has its unique focus, benefits, 
            and methodology, making it possible to find the one that suits your goals and lifestyle.
            </p>
            <p><h3>Types of Yoga and Their Health Benefits<br/><br/></h3>
            <h6>
            <b>
1.Hatha Yoga: Balance and Stress Reduction
</b><br/></h6>
Hatha yoga is the foundation of all yoga practices. 
It focuses on postures (asanas) and breathing techniques (pranayama) to align the body and mind.
<br/><b>Benefits:</b>
<br/>
Improves flexibility, strength, and posture.<br/>
Enhances concentration and calms the mind.<br/>
Reduces stress and anxiety by promoting relaxation.
<br/><b>Ideal For:</b>
<br/>
Beginners who want to improve their overall health.<br/>
People dealing with anxiety, stress, or sleep issues.

            </p>
            <p><h6><b>
            2.Vinyasa Yoga: Cardiovascular Health and Stamina
            </b></h6>

Vinyasa yoga links breath to movement in a dynamic sequence of postures. 
This flow-based practice builds endurance, strength, and cardiovascular health.
<br/>
<b>
Benefits:
</b>
<br/>
Increases stamina, strength, and endurance.<br/>
Boosts cardiovascular health through continuous movement.<br/>
Enhances coordination and balance.<br/>

<b>Ideal For:</b>
<br/>
Individuals looking for a cardio-focused yoga workout.<br/>
Those seeking weight loss or fat reduction.<br/>
Athletes wanting to improve flexibility and strength.
            </p>

            </div>
            <div className='banner'>
            <img src="yoga2.png" alt="hero" className='animated-image'/>
           
        </div>
        
        </div>
        
        
        

        </>
    );
};


export default Yoga;
