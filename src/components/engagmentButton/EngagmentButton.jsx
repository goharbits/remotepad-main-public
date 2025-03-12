import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const EngagmentButton = () => {
    return (
        <>
            <div className="engagment-button-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="engagment-button header-buttons">
                                <Link to="/lets-connect" className='hover-btn'><span>Get Started Now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EngagmentButton