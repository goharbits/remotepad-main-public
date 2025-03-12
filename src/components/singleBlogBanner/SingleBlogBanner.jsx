import React from 'react'
import './style.css'
const SingleBlogBanner = () => {
  return (
    <>
        <div className="single-blog-banner-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="single-banner-content pe-3">
                            <h1>
                                Mastering the Art of Developer Hiring: <span>5 Crucial Factors to Consider</span>
                            </h1>
                            <div className="auth-info">
                                <div className="auth-profile">
                                    <img src="./images/team1.png" alt="profile" />
                                    <p>Shaharyar Zaidi</p>
                                </div>
                                <div className="single-blog-date">
                                    <p>Jul 25, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-banner-img ps-3">
                            <img src="./images/single-banner-img.png" alt="main-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlogBanner
