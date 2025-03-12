import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <>
            <div className="banner-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-banner-box">
                                <h1 className='banner-main-heading'>Hire the top <br />
                                    remote <span>developers.</span></h1>

                                <p className="common-text">Empower your projects with a handpicked team of <span>top-tier</span> remote software developers, including <span className='blue-text'>AI/ML experts</span>. Our global network ensures you get the right talent.</p>

                                <div className="banner-button">
                                    <Link to="/lets-connect" className='bg-dark-btn'><span>Schedule a free call</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="banner-image">
                                <img src="/images/banner-men-left.svg" alt="" />
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-4">
                            <div className="banner-btn-arrow-content">
                                <h3>Make up your mind</h3>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="banner-image image-right-top">
                                <img src="/images/banner-men-right.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner