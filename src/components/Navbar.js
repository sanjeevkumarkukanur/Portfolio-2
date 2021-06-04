import React, { useState} from 'react'
import { DiBlackberry } from 'react-icons/di'
import { Link } from 'react-router-dom';
import { FaTimes, FaBars} from 'react-icons/fa'
import './Navbar.css';


function Navbar() {

    const [click ,setClick] = useState(false);


    const handlerClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)



    return (
        <>
         <div className="navbar">
             <div className="navbar-container container">
                 <Link to='/' className="nav-logo">
                     <DiBlackberry className='navbar-icon' />Sandy
                 </Link>
                 <div className="menu-icon" onClick={handlerClick}>
                     {click ? <FaTimes /> : <FaBars />}
                 </div>
                 <ul className={click ? 'nav-menu active':'nav-menu'}>
                     <li className="nav-items">
                         <Link to="/" onClick={closeMobileMenu} className='nav-link'>About</Link>
                     </li>
                     <li className='nav-items'>
                         <Link to="/education" onClick={closeMobileMenu} className='nav-link'>Education</Link>
                     </li>
                     <li className='nav-items'>
                         <Link to="/may-skills" onClick={closeMobileMenu} className='nav-link'>My Skills</Link>
                     </li>
                     <li className='nav-items'>
                         <Link to="/contect-us" onClick={closeMobileMenu} className='nav-link'>Contect Us</Link>
                     </li>
                     <li className='nav-items'>
                         <Link to="/more" onClick={closeMobileMenu} className='nav-link'>More</Link>
                     </li>
                 </ul>
             </div>

             </div>   
        </>
    )
}

export default Navbar;
