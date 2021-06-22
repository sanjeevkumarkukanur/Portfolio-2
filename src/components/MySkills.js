import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import Cpra from './images/C.png'
import Node from './images/node-js.png'
import react from './images/C.png'
import js from './images/js.png'
import css from './images/logo-css.jpeg'
import html from './images/logo-html-5.png'
import './MySkills.css'

function MySkills() {
    return (
        <IconContext.Provider value={{color: '#fff', size:64}}>
        <div>
            <div className="MySkills__section">
                <div className="MySkills__wrapper">
                    <h1 className="MySkills__heading">My Skills</h1>
                    <div className="MySkills__container">
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="MySkills__icon">
                                <img src={Cpra} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='Course'>C Programming</p3>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="MySkills__icon">
                                <img src={react} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='Course'>React</p3>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="MySkills__icon">
                                <img src={Node} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='Course'>Node</p3>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="MySkills__icon">
                                <img src={js} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='Course'>JS</p3>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="MySkills__icon">
                                <img src={css} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='Course'>CSS</p3>
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="MySkills__icon">
                                <img src={html} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='Course'>HTML</p3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        </IconContext.Provider>
    )
}

export default MySkills