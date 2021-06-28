import React from 'react'
// import { Link } from 'react-router-dom'
import './About.css'
import Photo from '../components/images/Photo.jpg'


function About() {
    return (
        <div className='About__Section'>
            <div className="About__wrapper">
                    <h1 className="About__heading">About</h1>
                <div className='About__container'>
                        <div className='About__img'>
                            <img src={Photo} alt='Photos'/>
                        </div>
                        <div className='About__text'>
                            <h1 className='About__name'>Sanjeevmar Kukanur</h1>
                            <p1 className='About__line'>I'm currently based in hubli Karnataka, pursuing internship at sathvik SoftTech on front end development technologies am passionate about secure a challenging position where I can effectively contribute my skills and innovative ideas to propel the organization in achieving its goals and objectives and gain knowledge in a work oriented environment.</p1>

                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default About
