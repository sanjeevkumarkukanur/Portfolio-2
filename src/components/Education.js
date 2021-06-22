import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import  SIT  from './images/SIT.jpg'
import GPT from './images/GPT.jpeg'
import './Education.css'

function Education() {
    return (
        <IconContext.Provider value={{color: '#fff', size:64}}>
        <div>
            <div className="Education__section">
                <div className="Education__wrapper">
                    <h1 className="Education__heading">Education </h1>
                    <div className="Education__container">
                        <Link to='/education' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="Education__icon">
                                <img src={SIT} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='degree'>Bachelor of Engineering</p3>
                                <p4 className='institute'>Siddaganga Institute of Technology, <span className='be'>Tumakuru</span></p4>
                                
                            </div>
                        </Link>
                        <Link to='/education' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="Education__icon">
                                <img src={GPT} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='degree'>Diploma</p3>
                                <p4 className='institute'>Government Polytechnic Vidyanagar, <span className='diploma'>Hubli</span></p4>
                                
                            </div>
                        </Link>
                        <Link to='/education' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="Education__icon">
                                <img src={GPT} height={120} width={120} alt='SIT'/>
                                </div>
                                <p3 className='degree'>SSLC</p3>
                                <p4 className='institute'>Sadguru Sri Siddarudha Swamy High <span className='sslc'>School, Hubli</span></p4>
                                </div>
                            
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        </IconContext.Provider>
    )
}

export default Education