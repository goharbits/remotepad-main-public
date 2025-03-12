import React from 'react'
import './style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const SuccessFullProjects = () => {
    return (
        <div className="successfullProjects-box">
            <div className="container">
                <div className="row">

                    <Swiper
                        spaceBetween={0}
                        slidesPerView={5}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            // When window width is >= 320px
                            425: {
                                slidesPerView: 2,
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
                            780: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                    >

                        <SwiperSlide>
                            <div className="logo-box-projects">
                                <img src="/images/logo1.svg" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="logo-box-projects">
                                <img src="/images/logo2.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="logo-box-projects">
                                <img src="/images/logo3.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="logo-box-projects">
                                <img src="/images/logo1.svg" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="logo-box-projects">
                                <img src="/images/logo2.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="logo-box-projects">
                                <img src="/images/logo3.png" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default SuccessFullProjects