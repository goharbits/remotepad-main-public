import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


const OurSuccessStories = () => {
    return (
        <>
            <div className="success-stories-box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="success-content-box">
                                <h1 className='main-heading'>Case Studies</h1>
                                <p>Our customers say Excellent <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> 4.8 out of 5 based on 1,691 reviews <img className='clutch-image' src="/images/clutch.svg" alt="" /></p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <Swiper
                                slidesPerView={'1.8'}
                                spaceBetween={0}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                                breakpoints={{
                                    // When window width is >= 320px
                                    425: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    375: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    780: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    1280: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 10,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="success-stories-slider">
                                        <img src="/images/logo2.png" alt="" />
                                        <p>“We're dedicated to ensuring your success above all else. Understanding your needs is our priority”</p>

                                        <div className="testimonial-profile-card success-profile-text">
                                            <img src="/images/testimonial-profile-card.jpg" alt="" />
                                            <div className="testimonial-user-text">
                                                <h2>Dean John</h2>
                                                <h6>CEO & Founder</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="success-stories-slider">
                                        <img src="/images/logo2.png" alt="" />
                                        <p>“We're dedicated to ensuring your success above all else. Understanding your needs is our priority”</p>

                                        <div className="testimonial-profile-card success-profile-text">
                                            <img src="/images/testimonial-profile-card.jpg" alt="" />
                                            <div className="testimonial-user-text">
                                                <h2>Dean John</h2>
                                                <h6>CEO & Founder</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="success-stories-slider">
                                        <img src="/images/logo2.png" alt="" />
                                        <p>“We're dedicated to ensuring your success above all else. Understanding your needs is our priority”</p>

                                        <div className="testimonial-profile-card success-profile-text">
                                            <img src="/images/testimonial-profile-card.jpg" alt="" />
                                            <div className="testimonial-user-text">
                                                <h2>Dean John</h2>
                                                <h6>CEO & Founder</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="success-stories-slider">
                                        <img src="/images/logo2.png" alt="" />
                                        <p>“We're dedicated to ensuring your success above all else. Understanding your needs is our priority”</p>

                                        <div className="testimonial-profile-card success-profile-text">
                                            <img src="/images/testimonial-profile-card.jpg" alt="" />
                                            <div className="testimonial-user-text">
                                                <h2>Dean John</h2>
                                                <h6>CEO & Founder</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSuccessStories