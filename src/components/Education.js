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
                    <h1 className="Education__heading">Education</h1>
                    <div className="Education__container">
                        <Link to='/sign-up' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$90.00</h4>
                                <p>per month</p>
                                <ul className="Education__container-features">
                                <li>100 Transactions</li>
                                <li>2% Cash Back</li>
                                <li>$10,000 Limit</li>    
                                </ul> 
                                <button className='btn-sec'>Choose Plan</button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$29.00</h4>
                                <p>per month</p>
                                <ul className="Education__container-features">
                                <li>1000 Transactions</li>
                                <li>3.5% Cash Back</li>
                                <li>$100,000 Limit</li>    
                                </ul> 
                                <button className='btn-sec'>Choose Plan</button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$69.00</h4>
                                <p>per month</p>
                                <ul className="Education__container-features">
                                <li>Unlimited Transactions</li>
                                <li>5% Cash Back</li>
                                <li>Unlimited Spinding</li>    
                                </ul> 
                                <button className='btn-sec'>Choose Plan</button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$90.00</h4>
                                <p>per month</p>
                                <ul className="Education__container-features">
                                <li>100 Transactions</li>
                                <li>2% Cash Back</li>
                                <li>$10,000 Limit</li>    
                                </ul> 
                                <button className='btn-sec'>Choose Plan</button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$29.00</h4>
                                <p>per month</p>
                                <ul className="Education__container-features">
                                <li>1000 Transactions</li>
                                <li>3.5% Cash Back</li>
                                <li>$100,000 Limit</li>    
                                </ul> 
                                <button className='btn-sec'>Choose Plan</button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="Education__container-card">
                            <div className="Education__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$69.00</h4>
                                <p>per month</p>
                                <ul className="Education__container-features">
                                <li>Unlimited Transactions</li>
                                <li>5% Cash Back</li>
                                <li>Unlimited Spinding</li>    
                                </ul> 
                                <button className='btn-sec'>Choose Plan</button>
                            </div>
                        </Link>x`
                    </div>
                </div>
            </div>

        </div>
        </IconContext.Provider>
    )
}

export default Education