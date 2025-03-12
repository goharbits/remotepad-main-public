import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import FooterBottom from './FooterBottom';

const Footer = () => {

    const location = useLocation();
    const [footerClass, setfooterClass] = useState(location.pathname === "/" ? "footer-main-box" : "footer-box")

    return (
        <div className={footerClass}>
            <div className="container">
                <div className="row space-bottom-footer">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <Link to='/'>
                            <div className="footer-logo">
                                <img src="/images/logo.png" alt="" />
                            </div>
                        </Link>

                        <ul className="footer-social-links">
                            <li><a href="https://www.facebook.com/theremotepad"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/the-remote-pad/about/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.instagram.com/theremotepad/?igsh=dnhuZG50cndsMGoy"><i className="fab fa-instagram"></i></a></li>
                        </ul>

                        <h2 className="footer-heading">We’re here to help</h2>

                        <p className="footer-text">
                            Find answers to common questions or <br /> contact us directly
                        </p>

                        <Link to="/hire-a-team" className='join-button bg-dark-btn'><span>Join a team</span></Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="footer-content-lists">
                            <h2 className="footer-heading">Popular Roles</h2>

                            <ul>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Frontend Developers</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Backend Developers</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Backend Developers</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Full Stack Developers</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote DevOps Engineer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Web Developers</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Laravel Developers</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-4">
                        <div className="footer-content-lists top-space-links">
                            <ul>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Graphic Designer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Ui/UX Designer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Quality Assurance </Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Automation Engineer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote DevOps Engineer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Product Designer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote  IOS Developers</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-4">
                        <div className="footer-content-lists top-space-links">
                            <ul>
                                <li><Link style={{ whiteSpace: 'nowrap' }}to="/hireEngenier" className='footer-text'>Remote React Native Developer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Flutter Developer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Java Developer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Android Developer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote DevOps Engineer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Kotlin Devellopers</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Rust Developers</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-4">
                        <div className="footer-content-lists top-space-links">
                            <ul>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote AI Engineer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote ML Engineer</Link></li>
                                <li><Link to="/hireEngenier" className='footer-text'>Remote Data Scientist</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <FooterBottom/>
            </div>
        </div>
    )
}

export default Footer