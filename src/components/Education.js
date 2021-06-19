import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
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
                                <div className="icon">
                                    <FaFire />
                                </div>
                                
                            </div>
                        </Link>
                        <Link to='/education' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                
                            </div>
                        </Link>
                        <Link to='/education' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>
                                
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