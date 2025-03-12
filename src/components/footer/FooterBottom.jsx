import React from 'react'
import { Link } from 'react-router-dom'

const FooterBottom = () => {
  return (
    <>
        <div className="footer-bottom ">
            <div className="container ">
                <div className="row top-line-chart">
                    <div className="col-xl-4 col-lg-4 col-md-2">
                        <Link to='/blogs' className="footer-text">Visit Our Blog</Link>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <p className="footer-text text-center m-0">© 2025 TheRemotePad. All rights reserved.</p>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <div className="copy-rights-links">
                            <Link to='/terms-and-conditions' className="footer-text">Terms & Conditions | </Link>
                            <Link to='/privacy-policy' className="footer-text">Privacy Policy</Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </>
  )
}

export default FooterBottom
