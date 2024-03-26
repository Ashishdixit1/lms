import React from 'react'
import'./About.css'
import about_img from '../../assets/about_img.png'
import play_icon from '../../assets/play_icon.png'
const About = () => {
  return (
<div className="about">
   <div className="about-left">
   <img src={about_img} alt="" className='about-img'/>
   <img src={play_icon} alt="" className='play-icon'/>
   </div>
   <div className="about-right">
    <h3>ABOUT SCHOOL</h3>
        <h2>Choose Education not an option</h2>
        <p>Welcome to Lakshay Modern School, a place where education meets innovation and excellence. Our primary goal at Lakshay Modern School is to provide a nurturing and stimulating learning environment for our students. We are dedicated to unlocking the true potential of each child by focusing on their holistic development. We believe in fostering a love for learning through a well-rounded curriculum that combines academic rigor with creative expression.!</p>
       <p>Our commitment lies in equipping our students with the skills, knowledge, and values necessary to thrive in an ever-changing world. To achieve this, we take pride in our highly qualified and passionate faculty who are devoted to nurturing the unique talents and interests of each student.
       Our teachers provide individual attention, ensuring that personalized support is given to every child to help them reach their full potential. Creating a safe and inclusive environment is of utmost importance to us.</p>
       
       <p>We prioritize the creation of a warm and welcoming atmosphere where every student feels valued and respected. Additionally, we offer various extracurricular activities, sports, and clubs to encourage students to explore their passions and develop their talents beyond the classroom. At Lakshay Modern School, we understand the significance of modern facilities, state-of-the-art technology, and a well-equipped library. We provide our students with the necessary tools to excel academically and beyond. We also emphasize the development of critical thinking, problem-solving, and collaboration skills to prepare our students for future success..</p> </div>
</div>  )
}

export default About