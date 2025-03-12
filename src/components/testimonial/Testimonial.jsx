import React, { useRef, useState } from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';



const Testimonial = () => {
  return (
    <>
      <div className="main-testimonial-box">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-8">

              <div className="testimonial-slider-box">

                <Swiper
                  slidesPerView={'2'}
                  spaceBetween={0}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="testimonial-slider-card">
                      <img src="/images/testimonial-quote.png" alt="" />
                      <p className="testimonial-text">We're dedicated to ensuring your success above all else. Understanding your needs is our priority, and we deliver tailored solutions that go beyond expectations, driving real business growth We're dedicated to ensuring your success above all else.</p>

                      <div className="testimonial-profile-card">
                        <img src="/images/testimonial-profile-card.jpg" alt="" />
                        <div className="testimonial-user-text">
                          <h2>Dean John</h2>
                          <h6>CEO & Founder</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial-slider-card">
                      <img src="/images/testimonial-quote.png" alt="" />
                      <p className="testimonial-text">We're dedicated to ensuring your success above all else. Understanding your needs is our priority, and we deliver tailored solutions that go beyond expectations, driving real business growth We're dedicated to ensuring your success above all else.</p>

                      <div className="testimonial-profile-card">
                        <img src="/images/testimonial-profile-card.jpg" alt="" />
                        <div className="testimonial-user-text">
                          <h2>Dean John</h2>
                          <h6>CEO & Founder</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial-slider-card">
                      <img src="/images/testimonial-quote.png" alt="" />
                      <p className="testimonial-text">We're dedicated to ensuring your success above all else. Understanding your needs is our priority, and we deliver tailored solutions that go beyond expectations, driving real business growth We're dedicated to ensuring your success above all else.</p>

                      <div className="testimonial-profile-card">
                        <img src="/images/testimonial-profile-card.jpg" alt="" />
                        <div className="testimonial-user-text">
                          <h2>Dean John</h2>
                          <h6>CEO & Founder</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial-slider-card">
                      <img src="/images/testimonial-quote.png" alt="" />
                      <p className="testimonial-text">We're dedicated to ensuring your success above all else. Understanding your needs is our priority, and we deliver tailored solutions that go beyond expectations, driving real business growth We're dedicated to ensuring your success above all else.</p>

                      <div className="testimonial-profile-card">
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

            <div className="col-md-4 h-100">
              <div className="testimonial-content-box">
                <h5 className='common-sub-heading'>Testimonials</h5>
                <h1 className='main-heading'>Hear out what our <br /> <span>clients say’s</span></h1>
                <p className="common-text" style={{ width: '90%' }}>
                  we deliver tailored solutions that go beyond expectations, driving real business growth We're dedicated to ensuring your success above all else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial