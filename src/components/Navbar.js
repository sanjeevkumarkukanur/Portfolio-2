import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DiCisco} from 'react-icons/di'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'


function Navbar() {
  const [click, setClick]= useState(false);


  const handlerClick = ()=> setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960){
      setClick(false)
    }else{
      setClick(true)
    }
  }
  useEffect(()=>{
    showButton()
  },[]);

  window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
        <div className="navbar">
           <div className="navbar-container container">
             <Link to="/" className="navbar-logo">
               <DiCisco className="navbar-icon" />
               Sandy
             </Link>
             <div  className="menu-icon" onClick={handlerClick}>
             {click ? <FaTimes /> : <FaBars /> }
             </div>
             <ul className={click ? 'nav-menu active': 'nav-menu'}>
               <li className="nav-item">
               <Link to="/about" onClick={closeMobileMenu} className="nav-links">About</Link>
               </li>
               <li className="nav-item">
               <Link to="/education" onClick={closeMobileMenu} className="nav-links">Education</Link>
               </li>
               <li className="nav-item">
               <Link to="/my-skills" onClick={closeMobileMenu} className="nav-links">My Skills</Link>
               </li>
               <li className="nav-item">
               <Link to="/contack-us" onClick={closeMobileMenu} className="nav-links">Contact Us</Link>
               </li>
               <li className="nav-item">
               <Link to='/more' onClick={closeMobileMenu} className='nav-links'>More</Link>
               </li>
            </ul> 
           </div>
          </div>  
          </IconContext.Provider>
        </>
    )
}

export default Navbar;