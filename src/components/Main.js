import React from 'react'
import './Main.css'
import './Navbar.css'
import Profile from '../components/images/Profile.JPG'

function Main() {
    return (
        <>
            <div className="container-sec">
                <div className="container-main">
                    <div className="name-section">
                        <h1 className="name-head">SanjeevKumar Kukanur</h1>
                        <p1 className="name-pra">I'm Full Stack <span>Developer</span></p1>
                    </div>
                    <div className="name-img">
                        <div className="img-sev">
                            <img src={Profile} alt="Profile"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
