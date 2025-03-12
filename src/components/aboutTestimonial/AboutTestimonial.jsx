import React, { useRef, useCallback } from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const AboutTestimonial = () => {
    const sliderRef = useRef();


    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <div className="about-testimonial-box">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-6 h-100">
                            <div className="center-testimonial-box">
                                <div className="about-testimonial-content-box">
                                    <h1 className='main-heading mb-0'><span>Success</span> Stories Of Our Clients</h1>
                                    <p className="common-text">Our customers say Excellent <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> 4.8 out of 5 based on 1,691 reviews <img src="/images/about-cluth.png" alt="" /> .</p>
                                </div>

                                <div className="client-brand-images">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                                                <div className="clinet-logo-image">
                                                    <img src="/images/client-logo1.png" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-2 col-lg 2 col-md-4 col-sm-4 col-4">
                                                <div className="clinet-logo-image">
                                                    <img src="/images/client-logo4.png" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7 col-lg-7 col-md-4 col-sm-4 col-4">
                                                <div className="clinet-logo-image">
                                                    <img src="/images/client-logo5.png" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                                                <div className="clinet-logo-image">
                                                    <img src="/images/client-logo3.png" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-10 col-lg-10 col-md-4 col-sm-4 col-4">
                                                <div className="clinet-logo-image">
                                                    <img src="/images/client-logo6.png" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                                                <div className="clinet-logo-image">
                                                    <img src="/images/client-logo7.png" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div className="clinet-logo-image">
                                                    <img src="/images/client-logo2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className='about-testimonil-heading'>Client Testimonials</h3>

                                <div className="about-slider-arrow">
                                    <div className="arrow prev-arrow" onClick={handlePrev}><i className="fas fa-chevron-left"></i></div>
                                    <div className="arrow next-arrow" onClick={handleNext} ><i className="fas fa-chevron-right"></i></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 h-100">
                            <div className="center-testimonial-box">
                                <div className="about-testimonial-slider-card">
                                    <Swiper
                                        slidesPerView={'1.3'}
                                        spaceBetween={30}
                                        navigation={false}
                                        modules={[Navigation]}
                                        className="mySwiper"
                                        ref={sliderRef}
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
                                            <div className="about-testimonial-card">
                                                <div className="about-test-profile-card">
                                                    <div className="about-testi-image">
                                                        <img src="/images/testimonial-profile-card.jpg" alt="" />
                                                    </div>

                                                    <div className="about-prof-text">
                                                        <h2>Kathryn Murphy</h2>
                                                        <h6>CEO & Founder</h6>
                                                    </div>
                                                </div>

                                                <div className="brnad-logo-testi">
                                                    <img src="/images/logo1.svg" alt="" />
                                                </div>

                                                <p className="common-text">
                                                    We're dedicated to ensuring your success above all else. Understanding your needs is our priority, and we deliver tailored solutions that go beyond expectations, driving real business growth We're dedicated to ensuring your success above all else.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="about-testimonial-card">
                                                <div className="about-test-profile-card">
                                                    <div className="about-testi-image">
                                                        <img src="/images/testimonial-profile-card.jpg" alt="" />
                                                    </div>

                                                    <div className="about-prof-text">
                                                        <h2>Kathryn Murphy</h2>
                                                        <h6>CEO & Founder</h6>
                                                    </div>
                                                </div>

                                                <div className="brnad-logo-testi">
                                                    <img src="/images/logo1.svg" alt="" />
                                                </div>

                                                <p className="common-text">
                                                    We're dedicated to ensuring your success above all else. Understanding your needs is our priority, and we deliver tailored solutions that go beyond expectations, driving real business growth We're dedicated to ensuring your success above all else.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="about-testimonial-card">
                                                <div className="about-test-profile-card">
                                                    <div className="about-testi-image">
                                                        <img src="/images/testimonial-profile-card.jpg" alt="" />
                                                    </div>

                                                    <div className="about-prof-text">
                                                        <h2>Kathryn Murphy</h2>
                                                        <h6>CEO & Founder</h6>
                                                    </div>
                                                </div>

                                                <div className="brnad-logo-testi">
                                                    <img src="/images/logo1.svg" alt="" />
                                                </div>

                                                <p className="common-text">
                                                    We're dedicated to ensuring your success above all else. Understanding your needs is our priority, and we deliver tailored solutions that go beyond expectations, driving real business growth We're dedicated to ensuring your success above all else.
                                                </p>
                                            </div>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutTestimonial