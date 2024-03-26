import React from 'react'
import './Hero.css' ;
import dark_arrow from  '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
    <div className="hero-text">
        <h1>Discover The Difference  Where Education Meets Excellence</h1>
        <p>Our cutting-edge curriculum is designed empower students with the knowledge , skills ,and experience needed to 
            exel in the dynamic field of education
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </p>
    </div>

    </div>
  )
}

export default Hero