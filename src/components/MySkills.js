import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
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
                                <div className="icon">
                                    <FaFire />
                                </div>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                
                            </div>
                        </Link>
                        <Link to='/my-skills' className="MySkills__container-card">
                            <div className="MySkills__container-cardInfo">
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

export default MySkills