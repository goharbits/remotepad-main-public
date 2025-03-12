import React from 'react'
import './style.css'

const OurMission = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='main-heading text-center'>Our Mission</h1>
                    </div>
                </div>
            </div>

            <div className="our-mission-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pe-xl-0 pe-lg-0">
                            <div className="our-mission-image">
                                <img src="/images/mission-image-one.png" alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 ps-xl-0 ps-lg-0">
                            <div className="mission-text mt-xl-5 mt-lg-5">
                                <h2>Our Inspiring <span>Vision</span></h2>
                                <p>Our mission is to become the premier destination for businesses seeking professional remote developers/teams. We are committed to facilitating successful project outcomes by providing top-tier talent tailored to meet the unique needs of each client.
                                    With expertise, efficiency, and dedication to focus on our client's growth, we aim to reshape the landscape of remote team expansion.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row space-top-mission">
                        <div className="col-md-6 pe-xl-0">
                            <div className="mission-text text-2-side">
                                <h2>Our Impactful <span>Mission</span></h2>
                                <p>Our mission is to become the premier destination for businesses seeking professional remote developers/teams. We are committed to facilitating successful project outcomes by providing top-tier talent tailored to meet the unique needs of each client. With expertise, efficiency, and dedication to focus on our client's growth, we aim to reshape the landscape of remote team expansion.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="our-mission-image mission-second-image">
                                <img src="/images/misson-image2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurMission