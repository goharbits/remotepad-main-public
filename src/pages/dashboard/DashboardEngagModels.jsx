import React, { useState } from 'react'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import { Link, useNavigate } from 'react-router-dom';

const DashboardEngagModels = () => {

    const navigate = useNavigate();

    const manageBackClick = () => {
        navigate(-1)
    };

    const [packagesShow, setPackagesShow] = useState(false)


    return (
        <>
            <DashboardHeader />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <i className="fa-solid fa-arrow-left left-back-arrow" onClick={manageBackClick}></i>
                    </div>

                    <div className="col-md-12 mb-4">
                        <h2 className="payment-plane-heading">Engagement Model Packages</h2>
                    </div>

                    <div className="col-md-12 mb-4">
                        <div className="payment-buttons">
                            <span className={`${!packagesShow ? 'active-payment' : ""}`} onClick={() => setPackagesShow(false)}>Packages</span>
                            <span className={`${packagesShow ? 'active-payment' : ""}`} onClick={() => setPackagesShow(true)}>Sprints</span>
                        </div>
                    </div>
                </div>

                {
                    packagesShow ? <div className="row space-bottom-engagemodel mb-5">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="payment-card-box">
                                <h3>Sprint 1</h3>
                                <h1>$1200 <span>/ monthly</span></h1>

                                <ul>
                                    <li>15 Days Money Back Guarantee</li>
                                    <li>Project Completion Time: Short-term projects (up to 1 month)</li>
                                    <li>Trail Period: None</li>
                                    <li>Ideal For: Immediate, short-term projects requiring quick turnaround</li>
                                </ul>

                                <div className='card-button-box'>
                                    <a href="#">Signup for free</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="payment-card-box">
                                <h3>Sprint 2</h3>
                                <h1>$1400 <span>/ monthly</span></h1>

                                <ul>
                                    <li>15 Days Money Back Guarantee</li>
                                    <li>2-Week Free Trial</li>
                                    <li>Project Completion Time: Mid-term projects (up to 3 months) </li>
                                    <li>Additional Support: Better suited for projects that need more time to develop and stabilize</li>
                                    <li>Ideal For: Projects requiring more substantial effort than short-term engagements</li>
                                </ul>

                                <div className='card-button-box'>
                                    <a href="#">Try for free</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="payment-card-box">
                                <h3>Sprint 3</h3>
                                <h1>$2400 <span>/ monthly</span></h1>

                                <ul>
                                    <li>Dedicated Account Manager</li>
                                    <li>2 Interviews: (Human or AI) of 30 minutes each</li>
                                    <li>2-Week Free Trial</li>
                                    <li>Project Completion Time: Long-term projects (up to 6 months)</li>
                                    <li>Additional Support: Enhanced support with a dedicated account manager and additional interview rounds</li>
                                </ul>

                                <div className='card-button-box'>
                                    <a href="#">Contact us</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="payment-card-box custom-sprint">
                                <h3>Custom Sprint</h3>

                                <p className="dashboard-text">Tailor your service experience with our custom package, designed to meet your specific needs and deliver exactly what you require, when you need it. Flexible, personalized, and efficient.
                                    custom description</p>

                                <div className='card-button-box'>
                                    <a href="#">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div> : <div className="row space-bottom-engagemodel mb-5">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="payment-card-box">
                                <h3>Basic</h3>
                                <h1>$3500 <span>/ monthly</span></h1>

                                <ul>
                                    <li>100% Money Back Guarantee</li>
                                    <li>Project Completion Time: Short-term projects (up to 1 month)</li>
                                    <li>Trail Period: None</li>
                                    <li>Ideal For: Immediate, short-term projects requiring quick turnaround</li>
                                </ul>

                                <div className='card-button-box'>
                                    <a href="#">Signup for free</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="payment-card-box">
                                <h3>Gold</h3>
                                <h1>$3300 <span>/ monthly</span></h1>

                                <ul>
                                    <li>100% Money Back Guarantee</li>
                                    <li>After spending 20 hours, if it’s not a fun, 100% money back guaranteed.</li>
                                    <li>Project Completion Time: Mid-term projects (up to 80 hours) </li>
                                    <li>Additional Support: Better suited for projects that need more time to develop and stabilize</li>
                                    <li>Ideal For: Projects requiring more substantial effort than short-term engagements</li>
                                </ul>

                                <div className='card-button-box'>
                                    <a href="#">Try for free</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="payment-card-box">
                                <h3>Daimond</h3>
                                <h1>$3000 <span>/ monthly</span></h1>

                                <ul>
                                    <li>100% Money Back Guarantee</li>
                                    <li>2 Interviews: (Human or AI) of 30 minutes each</li>
                                    <li>After spending 20 hours, if it’s not a fun, 100% money back guaranteed.</li>
                                    <li>Project Completion Time: Long-term projects (up to 120 hours)</li>
                                    <li>Additional Support: Enhanced support with a dedicated account manager and additional interview rounds</li>
                                </ul>

                                <div className='card-button-box'>
                                    <Link to="/lets-connect">Contact us</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="payment-card-box custom-sprint">
                                <h3>Custom Sprint</h3>

                                <p className="dashboard-text">Tailor your service experience with our custom package, designed to meet your specific needs and deliver exactly what you require, when you need it. Flexible, personalized, and efficient.
                                    custom description</p>

                                <div className='card-button-box'>
                                    <Link to="/lets-connect">Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default DashboardEngagModels