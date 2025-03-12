import React, { useState } from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link, useLocation } from 'react-router-dom';

const TrackStack = () => {

    const location = useLocation();
    const [trackStackClass, setFooterClass] = useState(location.pathname === "/" ? true : false)

    return (
        <>
            <div className="track-stack-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hireteam-content-box">
                                <h5 className='common-sub-heading'>Teck Stack</h5>
                                <h1 className='main-heading'>Build Your Global Team of Developers
                                    <br />in Any <span>Tech Stack!</span></h1>
                                <p className="common-text">Remotepad offers skilled engineers, developers, and programmers in all tech stacks to meet your diverse tech needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-12">
                            <div className="stack-slider-box">

                                <Swiper
                                    slidesPerView={'5'}
                                    spaceBetween={10}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                    breakpoints={{
                                        // When window width is >= 320px
                                        425: {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                        375: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        320: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        756: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        1280: {
                                            slidesPerView: 5,
                                            spaceBetween: 10,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="stack-box">
                                            <img src="/images/stack1.png" alt="" />
                                            <h3>Node.js</h3>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="stack-box">
                                            <img src="/images/stack2.png" alt="" />
                                            <h3>Python</h3>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="stack-box">
                                            <img src="/images/stack3.png" alt="" />
                                            <h3>React Js</h3>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="stack-box">
                                            <img src="/images/stack4.png" alt="" />
                                            <h3>Graphic Design</h3>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="stack-box">
                                            <img src="/images/stack5.png" alt="" />
                                            <h3>Cloud Engineer </h3>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="stack-box">
                                            <img src="/images/stack1.png" alt="" />
                                            <h3>Node.js</h3>
                                        </div>
                                    </SwiperSlide>


                                    <SwiperSlide>
                                        <div className="stack-box">
                                            <img src="/images/stack2.png" alt="" />
                                            <h3>Python</h3>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        {
                            trackStackClass ? <div className="col-md-12">
                                <div className="looking-remot-box">
                                    <div className="logo-image-remot">
                                        <img src="/images/remot-logo.png" alt="" />
                                        <h2>Looking for a remote developer?</h2>
                                        <h6>Let our experts get you the best deal.</h6>

                                        <div className="remot-button">
                                            <Link to="/lets-connect">Book a Demo <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackStack