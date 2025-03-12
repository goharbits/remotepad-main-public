import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const EngagmentBanner = () => {
    return (
        <>
            <div className="engagment-banner-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about-banner-text">
                                <h1>Engagement Models</h1>
                                <p>Welcome to The Remotepad, We are transforming the tech hiring process by sourcing, screening, and preparing top-tier tech talent worldwide.</p>

                                <div className="hire-dev-button header-buttons">
                                    <Link to="/lets-connect" className='hover-btn'><span>Work With Us</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-heading-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hireteam-content-box">
                                <h1 className="main-heading">Scope, People, and <span>Time</span></h1>
                                <p className="common-text">The fixed price model works best for small project scopes. For this model to work for your project, it requires in-depth planning and clear project requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EngagmentBanner