import React from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const OurTopDeveloper = () => {
    return (
        <>
            <div className="our-top-developers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hireteam-content-box">
                                <h1 className="main-heading">Get access to the top-notch global tech talent pool <br /> from anywhere in the <span>world</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="swiper-box-main">

                <Swiper
                    slidesPerView={'3.5'}
                    spaceBetween={30}
                    navigation={false}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        425: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1.7,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 3.5,
                            spaceBetween: 10,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="top-developers-card">
                            <div className="top-dev-profile-box">
                                <img src="/images/testimonial-profile-card2.jpg" alt="" />

                                <div className="top-dev-text-section">
                                    <h3 className='blue-heading'>Mathew Warketin</h3>
                                    <div className="top-dev-text">
                                        <div className="top-dev-text-verify-icon">
                                            <img src="/images/verify-icon.png" alt="" />
                                        </div>
                                        <h6>Verified Expert in Engineering</h6>
                                    </div>

                                    <p className="common-text">Python Developer</p>

                                    <div className="top-dev-experience">
                                        <h1>Exp. <span className='experience'>5 Years</span> <span className='score'>/ Score 78%</span></h1>
                                    </div>
                                </div>
                            </div>

                            <p className="common-text top-dev-text-box">Experienced web developer with a passion for creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various web development projects</p>

                            <div className='hire-me-buttons'>
                                <div className="hire-me-button">
                                    <a href="#" className='button-hire-engenire bg-dark-btn'><span>Hire me <i className="fa-solid fa-arrow-right"></i></span></a>
                                </div>

                                <div className='download-resume-button'>
                                    <a href='#'>Resume <i className="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="top-developers-card">
                            <div className="top-dev-profile-box">
                                <img src="/images/testimonial-profile-card2.jpg" alt="" />

                                <div className="top-dev-text-section">
                                    <h3 className='blue-heading'>Mathew Warketin</h3>
                                    <div className="top-dev-text">
                                        <div className="top-dev-text-verify-icon">
                                            <img src="/images/verify-icon.png" alt="" />
                                        </div>
                                        <h6>Verified Expert in Engineering</h6>
                                    </div>

                                    <p className="common-text">Python Developer</p>

                                    <div className="top-dev-experience">
                                        <h1>Exp. <span className='experience'>5 Years</span> <span className='score'>/ Score 78%</span></h1>
                                    </div>
                                </div>
                            </div>

                            <p className="common-text top-dev-text-box">Experienced web developer with a passion for creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various web development projects</p>

                            <div className='hire-me-buttons'>
                                <div className="hire-me-button">
                                    <a href="#" className='button-hire-engenire bg-dark-btn'><span>Hire me <i className="fa-solid fa-arrow-right"></i></span></a>
                                </div>

                                <div className='download-resume-button'>
                                    <a href='#'>Resume <i className="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="top-developers-card">
                            <div className="top-dev-profile-box">
                                <img src="/images/testimonial-profile-card2.jpg" alt="" />

                                <div className="top-dev-text-section">
                                    <h3 className='blue-heading'>Mathew Warketin</h3>
                                    <div className="top-dev-text">
                                        <div className="top-dev-text-verify-icon">
                                            <img src="/images/verify-icon.png" alt="" />
                                        </div>
                                        <h6>Verified Expert in Engineering</h6>
                                    </div>

                                    <p className="common-text">Python Developer</p>

                                    <div className="top-dev-experience">
                                        <h1>Exp. <span className='experience'>5 Years</span> <span className='score'>/ Score 78%</span></h1>
                                    </div>
                                </div>
                            </div>

                            <p className="common-text top-dev-text-box">Experienced web developer with a passion for creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various web development projects</p>

                            <div className='hire-me-buttons'>
                                <div className="hire-me-button">
                                    <a href="#" className='button-hire-engenire bg-dark-btn'><span>Hire me <i className="fa-solid fa-arrow-right"></i></span></a>
                                </div>

                                <div className='download-resume-button'>
                                    <a href='#'>Resume <i className="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="top-developers-card">
                            <div className="top-dev-profile-box">
                                <img src="/images/testimonial-profile-card2.jpg" alt="" />

                                <div className="top-dev-text-section">
                                    <h3 className='blue-heading'>Mathew Warketin</h3>
                                    <div className="top-dev-text">
                                        <div className="top-dev-text-verify-icon">
                                            <img src="/images/verify-icon.png" alt="" />
                                        </div>
                                        <h6>Verified Expert in Engineering</h6>
                                    </div>

                                    <p className="common-text">Python Developer</p>

                                    <div className="top-dev-experience">
                                        <h1>Exp. <span className='experience'>5 Years</span> <span className='score'>/ Score 78%</span></h1>
                                    </div>
                                </div>
                            </div>

                            <p className="common-text top-dev-text-box">Experienced web developer with a passion for creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various web development projects</p>

                            <div className='hire-me-buttons'>
                                <div className="hire-me-button">
                                    <a href="#" className='button-hire-engenire bg-dark-btn'><span>Hire me <i className="fa-solid fa-arrow-right"></i></span></a>
                                </div>

                                <div className='download-resume-button'>
                                    <a href='#'>Resume <i className="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="top-developers-card">
                            <div className="top-dev-profile-box">
                                <img src="/images/testimonial-profile-card2.jpg" alt="" />

                                <div className="top-dev-text-section">
                                    <h3 className='blue-heading'>Mathew Warketin</h3>
                                    <div className="top-dev-text">
                                        <div className="top-dev-text-verify-icon">
                                            <img src="/images/verify-icon.png" alt="" />
                                        </div>
                                        <h6>Verified Expert in Engineering</h6>
                                    </div>

                                    <p className="common-text">Python Developer</p>

                                    <div className="top-dev-experience">
                                        <h1>Exp. <span className='experience'>5 Years</span> <span className='score'>/ Score 78%</span></h1>
                                    </div>
                                </div>
                            </div>

                            <p className="common-text top-dev-text-box">Experienced web developer with a passion for creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various web development projects</p>

                            <div className='hire-me-buttons'>
                                <div className="hire-me-button">
                                    <a href="#" className='button-hire-engenire bg-dark-btn'><span>Hire me <i className="fa-solid fa-arrow-right"></i></span></a>
                                </div>

                                <div className='download-resume-button'>
                                    <a href='#'>Resume <i className="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default OurTopDeveloper