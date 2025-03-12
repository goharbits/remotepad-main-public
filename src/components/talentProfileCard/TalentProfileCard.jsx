import React, { useEffect } from 'react'
import './style.css'
import { Link, } from 'react-router-dom'

const TalentProfileCard = () => {

    useEffect(() => {
        return () => {
            const modalElement = document.getElementById('exampleModalToggle');
            const modalInstance = window.bootstrap.Modal.getInstance(modalElement);

            if (modalInstance) {
                modalInstance.hide();
            }

            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        };
    }, []);

    return (
        <>
            <div className="talent-card-with-model">
                <div className="talent-card-box">
                    <div className="talnet-profile-image">
                        <img src="/images/testimonial-profile-card.jpg" alt="" />
                        <span data-bs-toggle="modal" href="#exampleModalToggle" role="button"><i className="fa-solid fa-arrow-right"></i></span>
                    </div>

                    <div className="talent-text-box">
                        <h2>Bryan Wiener</h2>
                        <h6>Frontend Developer</h6>
                        <p>Skill score 78%</p>
                    </div>
                </div>

                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ><i className="fa-solid fa-xmark"></i></button>
                            </div>

                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="model-image">
                                                <img src="/images/testimonial-profile-card.jpg" alt="" />
                                            </div>

                                            <div className="model-hire-button">
                                                <h6>Bryan is available for hire</h6>
                                                <button>Resume <i className="fa-solid fa-cloud-arrow-down"></i></button>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="model-content-box">
                                                <div className="model-text-box">
                                                    <div className="dev-name-content">
                                                        <h2>Bryan Wiener</h2>
                                                        <h6>Frontend Developer</h6>
                                                        <p>Skill score 78%</p>
                                                    </div>

                                                    <div className="hire-me-button">
                                                        <Link to="/lets-connect" className='bg-dark-btn'><span>Hire me</span></Link>
                                                    </div>
                                                </div>

                                                <p className="common-text">
                                                    for growth companies and a former equity analyst at Goldman Sachs in NY where he helped lead numerous transactions including Zipcar's $1.1 billion IPO. He was also an equity analyst at Barclays Capital & Lehman Brothers and began his career at a boutique investment bank (M&A, restructuring, debt financings).
                                                </p>

                                                <h2 className='experties-heading'>Expertise in:</h2>

                                                <div className="experties-tags-box">
                                                    <p className="model-tags">ReastJS</p>
                                                    <p className="model-tags">NextJS</p>
                                                    <p className="model-tags">AngularJS</p>
                                                    <p className="model-tags">VueJS</p>
                                                    <p className="model-tags">TestJS</p>
                                                    <p className="model-tags">CSS</p>
                                                    <p className="model-tags">Tailwind</p>
                                                    <p className="model-tags">ReastJS</p>
                                                    <p className="model-tags">NextJS</p>
                                                    <p className="model-tags">AngularJS</p>
                                                    <p className="model-tags">VueJS</p>
                                                    <p className="model-tags">TestJS</p>
                                                    <p className="model-tags">CSS</p>
                                                    <p className="model-tags">Tailwind</p>
                                                    <p className="model-tags">ReastJS</p>
                                                    <p className="model-tags">NextJS</p>
                                                    <p className="model-tags">AngularJS</p>
                                                    <p className="model-tags">VueJS</p>
                                                    <p className="model-tags">TestJS</p>
                                                    <p className="model-tags">CSS</p>
                                                    <p className="model-tags">Tailwind</p>
                                                    <p className="model-tags">ReastJS</p>
                                                    <p className="model-tags">NextJS</p>
                                                    <p className="model-tags">AngularJS</p>
                                                    <p className="model-tags">VueJS</p>
                                                    <p className="model-tags">TestJS</p>
                                                    <p className="model-tags">CSS</p>
                                                    <p className="model-tags">Tailwind</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TalentProfileCard