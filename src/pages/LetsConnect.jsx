import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LetsConnect = () => {

    const navigate = useNavigate();

    const manageBackClick = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="contact-team-box">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <Link to='/'>
                                <div className="sidebar-logo second-header-logo">
                                    <img src="/images/logo.png" alt="" />
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hire-team-contact">
                                <h3>Having trouble? <Link to="/lets-connect">Get help</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sidebar-connect-screen">

                                <div className="hire-team-arrow">
                                    <i className="fa-solid fa-arrow-left" onClick={manageBackClick}></i>
                                </div>

                                <h3>Let’s Connect</h3>

                                <p className="dashboard-text">
                                    At Remotepad, our team is committed to understanding your needs and finding the perfect match for your business objectives.
                                </p>

                                <p className="dashboard-text">
                                    Share your details, and our team will reach out to schedule a personalised discussion about your requirements. Let's find the perfect solution for your business.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <form action="" className='team-experience-box container-fluid lets-connect-form p-0 mt-4'>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" placeholder='Enter Full Name' id="exampleFormControlInput1" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="profemail" className="form-label">Professional Email</label>
                                            <input type="email" className="form-control" placeholder='Enter Full Name' id="profemail" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="comName" className="form-label">Company Name:</label>
                                            <input type="text" className="form-control" placeholder='Enter Full Company Name' id="comName" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="industry" className="form-label">Industry</label>
                                            <input type="text" className="form-control" placeholder='Enter Full Industry' id="industry" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="skypeId" className="form-label">Skype ID</label>
                                            <input type="text" className="form-control" placeholder='Enter Your Skype ID' id="skypeId" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="locaition" className="form-label">Location</label>
                                            <input type="text" className="form-control" placeholder='Enter Full Location' id="locaition" />
                                        </div>
                                    </div>

                                    {/* <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="destination" className="form-label">Destination</label>
                                            <input type="text" className="form-control" id="destination" />
                                        </div>
                                    </div> */}

                                    <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="comment" className="form-label">Brief Details</label>
                                            <textarea className="form-control" placeholder='Enter Brief Details Of Your Project or Query' id="comment" rows={3} defaultValue={""} />
                                        </div>
                                    </div>

                                    {/* <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="meetingDate" className="form-label">Meeting Date</label>
                                            <input type="date" className="form-control" placeholder='Enter Your Skype ID' id="meetingDate" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="team-experience-form">
                                            <label htmlFor="meetingTime" className="form-label">Meeting Time</label>
                                            <input type="time" className="form-control" placeholder='Enter Your Skype ID' id="meetingTime" />
                                        </div>
                                    </div> */}

                                    <div className="col-md-12">
                                        <div className="form-button-box">
                                            <Link to='/contactTeam' className='hover-btn'>Submit</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LetsConnect