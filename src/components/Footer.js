import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { GiFigurehead } from 'react-icons/gi';
import { FiGithub } from 'react-icons/fi'


function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-link-wrapper'>

          {/* <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div> */}
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <div className='footer-link-items-list'>
            <Link to='https://github.com/sanjeevkumarkukanur'>Github</Link>
            <Link to='/'>Instagram</Link>
            {/* <Link to='/'>Facebook</Link>  */}
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            </div>
          </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <GiFigurehead className='navbar-icon' />
              Sandy
            </Link>
          </div>
          <small className='website-rights'>Sandy © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='https://github.com/sanjeevkumarkukanur'
              target='_blank'
              aria-label='Github'
            >
              <FiGithub />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            {/* <Link
              className='social-icon-link'
                to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link> */}
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;