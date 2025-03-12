import React from 'react'
import './style.css'
import EngenierCard from '../engenierCard/EngenierCard';

const EngenierYouCanHire = () => {

    const developerData = {
        name: 'Mathew Warketin',
        experience: 5,
        verifiedExpert: true,
        skills: 'Python Developer',
        description: 'Experienced web developer with a passion for creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various web',
        buttonText: 'Hire me',
    };

    return (
        <>
            <div className="engenier-you-can-hire">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hireteam-content-box">
                                <h5 className="common-sub-heading">Our Talent</h5>
                                <h1 className="main-heading">Engineers you can <span>hire.</span></h1>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <EngenierCard developerData={developerData} />
                        <EngenierCard developerData={developerData} />
                        <EngenierCard developerData={developerData} />
                        <EngenierCard developerData={developerData} />
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="view-all-button">
                                <a href="#" className='hover-btn'>View more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EngenierYouCanHire