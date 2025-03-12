import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const AboutWhoWeAre = () => {
    return (
        <>
            <div className="who-we-are-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="who-we-are-image">
                                <img src="/images/whoweare.png" alt="" />
                            </div>

                            {/* <div className="who-we-are-button">
                                <a href="#">Our Team</a>
                            </div> */}
                        </div>

                        <div className="col-md-6">
                            <div className="who-we-are-text">
                                <h1 className="main-heading">Who we are?</h1>

                                <p className="common-text">
                                    <Link to="/">Remotepad</Link> is the ultimate online platform for hiring professional and top remote developers, programmers, coders, and designers.
                                    We specialize in connecting businesses with top-tier talent, ensuring flawless project execution and success.
                                </p>

                                <p className="common-text">
                                    Dedicated to revolutionizing team expansion, we provide tailored solutions to meet your unique needs. With us, you'll find a team committed to your growth and success, ready to bring your projects to life with expertise and efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-vission-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="who-we-are-text">
                                <h1 className="main-heading">Our Vision</h1>

                                <p className="common-text">
                                    <i className="fa-solid fa-quote-right green-quotes-text"></i> To break down geographical barriers and enable seamless collaboration. We aim to empower businesses globally by connecting them with skilled remote developers, transforming team collaboration and project execution, no matter where they are.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="vission-image">
                                <img src="/images/ourvission.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutWhoWeAre