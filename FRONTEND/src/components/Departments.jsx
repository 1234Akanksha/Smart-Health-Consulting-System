/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'; // Import Link

const Departments = () => {
    const departmentsArray = [
        {
          name: "Cardiology",
          imageUrl: "/department/cardio.jpg",
          link: "/Cardiology", 
        },
        {
          name: "Yoga",
          imageUrl: "/department/yoga.jpg",
          link: "/yoga",
        },
        {
          name: "Dermatologist",
          imageUrl: "/department/derma.jpg",
          link: "/dermatologist",
        },
        {
          name: "Pyschiatrist",
          imageUrl: "/department/psych.jpg",
          link: "/pyschiatrist",
        },
        
        {
          name: "Neurologist",
          imageUrl: "/department/nephra.jpg",
          link: "/neurologist",
        },
        
      ];
    const responsive = {
        extraLarge: {
            breakpoint: { max: 3000, min: 1324 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
          },
          large: {
            breakpoint: { max: 1324, min: 1005 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
          },
          medium: {
            breakpoint: { max: 1005, min: 700 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
          },
          small: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
          },
        };
      

  return (
    <div className='container departments'>
        <h2>Categories</h2>
        <Carousel responsive={responsive} removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "medium",
            "small",
          ]}
          >
            {departmentsArray.map((depart, index) => {
            return (
              <Link to={depart.link} key={index} className="card"> {/* Link to department page */}
                            <div className="depart-name">{depart.name}</div>
                            <img src={depart.imageUrl} alt={depart.name} />
                        </Link>

            );

          })}
        </Carousel>

    </div>
  )
}

export default Departments