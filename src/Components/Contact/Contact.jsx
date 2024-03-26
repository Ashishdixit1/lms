import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png' 
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'

const Contact = () => {
  return (
<div className="contact">
<div className="contact-col">
<h3>"Your message matters. Let's connect and make magic together!" <img src={msg_icon} alt="" />
</h3>
<p>
Please don't hesitate to contact us through the contact form provided below or find our contact information listed. We highly value your feedback, inquiries, and suggestions as we continuously strive to deliver exceptional service to our School community.
</p>
<ul>
<li><img src={mail_icon} alt="" /> lms@gmail.com </li>
<li> <img src={phone_icon} alt="" /> +91 941100000*</li>
<li><img src={location_icon}alt="" /> Village Biharipur Post Bhanpura Tahseel Tilhar , <br/>Pincode 242303,( Shahjahanpur, Uttar Pradesh )</li>

</ul>   

   
   
    </div>
    <div className="contact-col">
    <form >
        <label >Your Name</label>
        <input type="text" name='name' placeholder='Enter ypou name' required />
        <label >Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
        <label >Write your message here </label>
        <textarea name="message"  rows="5" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit now </button>
    </form>
   <span></span>
</div>
</div>  )
}

export default Contact