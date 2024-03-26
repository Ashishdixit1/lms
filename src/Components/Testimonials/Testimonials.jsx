import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider =useRef()
        let tx=0;
        
    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    
    }

    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    
    }


  return (
  <div className="testimonials">
  <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
  <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
  <div className="slider">
    <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Shreshth Katiha </h3>
                        <span>Hyderabad, In</span>
                    </div>
                </div>
                <p>The school has provided an excellent learning environment for my child. The teachers are dedicated and supportive, and my child has shown tremendous growth.
</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Goswami Harsh</h3>
                        <span>Gurugama ,In</span>
                    </div>
                </div>
                <p>I am impressed with the quality of education at Lakshay Modern School. The curriculum is well-designed, and the school encourages extracurricular activities for a well-rounded development of students.</p>
            </div>
        </li><li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Ashish Dixit</h3>
                        <span> bengaluru ,In</span>
                    </div>
                </div>
                <p>I highly recommend Lakshay Modern School.The faculty is experienced and knowledgeable, and the school emphasizes both academics and character-building.</p>
            </div>
        </li><li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Yash raj</h3>
                        <span>Agra,In</span>
                    </div>
                </div>
                <p>I appreciate the efforts of the teachers at Lakshay Modern School in imparting knowledge effectively. They make learning fun and engaging for the students.</p>
            </div>
        </li>
       
    </ul>
  </div>
  </div>
    )
}

export default Testimonials