import React, { useState } from 'react'
import './style.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation();
    const pathName = location.pathname;

    const [showTopHeader, setShowTopHeader] = useState(true)

    return (
        <>
            {
                pathName === '/' || pathName === '/login' ? showTopHeader ? <div className="header-top-bar">
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-xl-4 col-lg-4 col-md-4"></div>
                            <div className="col-xl-4 col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
                                <div className="top-header-text-box">
                                    <h2>Hello TheRemotePad!</h2>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-3">
                                <div className="top-header-button">
                                    <Link to="/contactTeam" className='bg-dark-btn'><span>Book a demo</span></Link>
                                </div>
                            </div>

                            <div className="col-xl-1 col-lg-1 col-md-1 flex-start-cross-box">
                                <div className="top-header-button">
                                    <i className="fa-solid fa-xmark" onClick={() => setShowTopHeader(false)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : "" : ""
            }

            <nav className="navbar pt-3 pb-3 navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img width={200} src="/images/logo.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i class="fa-solid fa-bars bars-icon"></i>
                            <i class="fa-solid fa-xmark cross-icon"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav header-links mb-2 mb-lg-0">
                            <div className='flex-box-links'>
                                <li className="nav-item">
                                    <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to='/about-us' className={({ isActive }) => isActive ? 'active-link' : ''}>About us</NavLink>
                                </li>

                                <li className="nav-item mega-menu-main-box">
                                    <NavLink to='/resources' className={({ isActive }) => isActive ? 'active-link' : ''}>Resources</NavLink>

                                    <div className="mega-menu-cover-box">
                                        <div className="mege-menu-box">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-xl-2 col-lg-2 col-md-4">
                                                        <ul className='mega-menu-list'>
                                                            <li><Link to="/hireEngenier">Frontend Developer</Link></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-xl-2 col-lg-2 col-md-4">
                                                        <ul className='mega-menu-list'>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-xl-2 col-lg-2 col-md-4">
                                                        <ul className='mega-menu-list'>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-xl-2 col-lg-2 col-md-4">
                                                        <ul className='mega-menu-list'>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-xl-2 col-lg-2 col-md-4">
                                                        <ul className='mega-menu-list'>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-xl-2 col-lg-2 col-md-4">
                                                        <ul className='mega-menu-list'>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                            <li><a href="#">Frontend Developer</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <NavLink to='/engagement-models' className={({ isActive }) => isActive ? 'active-link' : ''}>Engagement models</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to='/blogs' className={({ isActive }) => isActive ? 'active-link' : ''}>Blogs</NavLink>
                                </li>
                            </div>


                            <div className="header-buttons">
                                <Link to="/hire-a-team" className='hover-btn'><span>Hire a team</span></Link>
                                <Link to="/lets-connect" className='ms-2 bg-dark-btn'><span>Let’s talk</span></Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header