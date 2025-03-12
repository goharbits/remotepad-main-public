import React from 'react'
import DashboardLayout from './DashboardLayout'

const DashboardWhyUs = () => {
    return (
        <>
            <DashboardLayout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h2 className="dashboard-heading">Why Us?</h2>

                            <div className="content-box-why-us">
                                <p className="dashboard-text">Many businesses  from startups to large enterprises face challenges in finding the right talent for their projects. From ensuring candidate qualifications, managing team dynamics, to maintaining budget constraints, these issues can be daunting. Remotepad offers a unique solution to address all of these concerns, providing a streamlined, efficient, and cost-effective way to hire elite engineering talent and build successful teams.</p>
                            </div>
                        </div>

                        <div className="col-md-12 mb-4">
                            <h2 className="dashboard-heading">Our Unique Approach</h2>

                            <div className="content-box-why-us">
                                <p className="dashboard-text">At TheRemotepad, we understand that every business has unique needs when it comes to building their engineering team. Our approach is tailored to ensure we meet those specific needs effectively:</p>

                                <p className="dashboard-text"><span>Personalized Matching:</span> We use advanced algorithms to match you with candidates who not only have the right skills but also fit your company culture.</p>

                                <p className="dashboard-text"><span>Comprehensive Vetting:</span> Every candidate goes through a rigorous vetting process, including technical assessments and behavioral interviews, ensuring they meet your high standards.</p>

                                <p className="dashboard-text"><span>Ongoing Support:</span> Our relationship doesn't end once a candidate is hired. We provide continuous support to ensure smooth integration and long-term success.</p>
                            </div>
                        </div>

                        <div className="col-md-12 mb-4">
                            <h2 className="dashboard-heading">Proven Track Record</h2>

                            <div className="content-box-why-us">
                                <p className="dashboard-text">Choosing TheRemotepad means partnering with a company that has a proven track record of success:</p>

                                <p className="dashboard-text"><span>Client Satisfaction:</span> Our clients range from innovative startups to established enterprises, all of whom have experienced significant improvements in their hiring processes.</p>

                                <p className="dashboard-text"><span>Successful Placements:</span> We've successfully placed hundreds of top-tier engineers in roles where they've thrived and contributed to our clients' growth.</p>

                                <p className="dashboard-text"><span>Industry Recognition:</span> Our commitment to excellence has earned us recognition in the industry, including awards for innovation in talent acquisition.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default DashboardWhyUs