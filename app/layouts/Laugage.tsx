'use client'
import React, { useEffect, useState } from 'react' // Added useEffect and useState
import Laugages from '../components/Laugages'
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const image = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703634/user_eherio.svg'
const description = 'Visiteurs/jour'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/rating_ylbwat.svg'
const description1 = 'Experts Juridiques'

const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/suitcase_a52tzl.svg'
const description2 = 'Travaux réalisés'

const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703622/handshake_zmnlxy.svg'
const description3 = 'Travaux réalisés'

const Laugage = () => {
  const [count1, setCount1] = useState(0); // State for title1
  const [count2, setCount2] = useState(0); // State for title2
  const [count3, setCount3] = useState(0); // State for title3
  const [count4, setCount4] = useState(0); // State for title4

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 15000) {
        setCount1(prev => prev + 100); // Increment for title1
      } else {
        clearInterval(interval1); // Stop counting when limit is reached
      }
    }, 40);
    
    const interval2 = setInterval(() => {
      if (count2 < 100) {
        setCount2(prev => prev + 1); // Increment for title2
      } else {
        clearInterval(interval2); // Stop counting when limit is reached
      }
    }, 5);
    
    const interval3 = setInterval(() => {
      if (count3 < 1200) {
        setCount3(prev => prev + 40); // Increment for title3
      } else {
        clearInterval(interval3); // Stop counting when limit is reached
      }
    }, 40);
    
    const interval4 = setInterval(() => {
      if (count4 < 3150) {
        setCount4(prev => prev + 40); // Increment for title4
      } else {
        clearInterval(interval4); // Stop counting when limit is reached
      }
    }, 40);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [count1, count2, count3, count4]); // Dependencies to re-run effect

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []); // Run once on mount

  return (
    <div className='px-8 md:w-9/12 m-auto grid md:flex gap-4 justify-center md:justify-between text-white pt-8 pb-16 mt-24'>
        <div data-aos="fade-up"> {/* Add AOS animation to each div */}
            <Laugages image={image} description={description} title={count1.toString()} /> {/* Convert to string */}
        </div>
        <div data-aos="fade-up"> {/* Add AOS animation to each div */}
            <Laugages image={image1} description={description1} title={count2.toString()} /> {/* Convert to string */}
        </div>
        <div data-aos="fade-up"> {/* Add AOS animation to each div */}
            <Laugages image={image2} description={description2} title={count3.toString()} /> {/* Convert to string */}
        </div>
        <div data-aos="fade-up"> {/* Add AOS animation to each div */}
            <Laugages image={image3} description={description3} title={count4.toString()} /> {/* Convert to string */}
        </div>
    </div>
  )
}

export default Laugage