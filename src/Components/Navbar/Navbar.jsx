import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  const [sticky ,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>590? setSticky(true):setSticky(false);
    })
  },[]);
  const[mobileMenu , setMobileMenu]=useState(false);
const toggleMenu=()=>{
  mobileMenu?setMobileMenu(false):setMobileMenu(true);

}

  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
      <div className='loggo'>
      <img src={logo} alt="" className='logo'/>
      <h1>LMS</h1>
      </div>
    
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} >Program</Link></li>
        <li><Link to='about'smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' >Contact us</Link></li>
    </ul>
     <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar