import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const AboutHireTeam = () => {


    return (
        <>
            <div className="about-hire-team-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hireteam-content-box">
                                <h5 className="common-sub-heading">Hire Team</h5>
                                <h1 className="main-heading">Let's Partner Together for <span>Success</span></h1>
                                <p className="common-text">Revolutionize your projects without the hassle of traditional hiring</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hire-team-content-area">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-4 h-100">
                            <div className="about-team-content first-box">
                                <h4 className='first-heading'>Talk to One of Our <br /> Industry <span>Experts</span></h4>
                                <h1>01</h1>
                            </div>
                        </div>

                        <div className="col-md-4 h-100">
                            <div className="about-team-content second-box">
                                <h1 className='its-second-circle'>02</h1>
                                <h4 className='its-second-heding'>Work With <span>Hand-<br />Selected</span> Talent</h4>
                            </div>
                        </div>

                        <div className="col-md-4 h-100">
                            <div className="about-team-content third-box">
                                <h4>The <span>Right Fit, <br /></span> Guaranteed</h4>
                                <h1>03</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="/images/lines-image.svg" className='lines-image' alt="" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="call-button">
                            <Link to="/lets-connect" className='hover-btn'>Schedule Free Strategy Call</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHireTeam