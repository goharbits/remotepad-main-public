import React from 'react'
import './style.css'

const HireTeam = () => {
    return (
        <>
            <div className="hire-team-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hireteam-content-box">
                                <h5 className="common-sub-heading">Hire Team</h5>
                                <h1 className="main-heading">Hire Your Perfect Remote
                                    <br />Development Team in <span>3 Easy Steps</span></h1>
                                <p className="common-text">Revolutionize your projects without the hassle of traditional hiring</p>
                            </div>
                        </div>
                    </div>

                    <div className="row reverse-phone mt-5">
                        <div className="col-md-5">
                            <div className="hire-team-text">
                                <h1 className="hire-team-heading">Fill Out Your Requirements and Select Skills to Hire</h1>
                                <p className="common-text">Share your project details, and specify the skills you need. This helps us understand your needs better and match you with the right developers.</p>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="hire-team-box hire-team-line">
                                <h1 className="number-circle">01</h1>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="hire-team-image">
                                <img src="/images/hire-team-one.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">

                        <div className="col-md-5">
                            <div className="hire-team-image">
                                <img src="/images/hireteam2.png" alt="" />
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="hire-team-box hire-team-light">
                                <h1 className="number-circle green-number">02</h1>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="hire-team-text">
                                <h1 className="hire-team-heading">Schedule a Call</h1>
                                <p className="common-text">We'll arrange a call to further discuss your project and ensure we understand all your requirements in detail.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row reverse-phone mt-5">
                        <div className="col-md-5">
                            <div className="hire-team-text">
                                <h1 className="hire-team-heading">Get a Free 14-Day Trial</h1>
                                <p className="common-text">Ready to take the next step? Start with a 14-day free trial period. Dive into your project confidently with the right team by your side.</p>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="hire-team-box">
                                <h1 className="number-circle">03</h1>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="hire-team-image">
                                <img src="/images/hireteam3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HireTeam