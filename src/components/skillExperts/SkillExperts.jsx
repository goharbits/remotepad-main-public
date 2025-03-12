import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const SkillExperts = () => {

    const [activeTab, setActiveTab] = useState('Frontend');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="skill-experts-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hireteam-content-box">
                                <h5 className='common-sub-heading'>Skilled Experts</h5>
                                <h1 className='main-heading'>Empower Your Business with <span>Skilled Experts</span></h1>
                                <p className="common-text">
                                    Achieve new heights with our pool of skilled experts ready to propel your business forward.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="links-boxes">
                                <ul className="links-boxes-lists">
                                    <li
                                        className={activeTab === 'Database' ? 'active' : ''}
                                        onClick={() => handleTabClick('Database')}
                                    >
                                        Database
                                    </li>

                                    <li
                                        className={activeTab === 'Backend' ? 'active' : ''}
                                        onClick={() => handleTabClick('Backend')}
                                    >
                                        Backend
                                    </li>

                                    <li
                                        className={activeTab === 'Mobile' ? 'active' : ''}
                                        onClick={() => handleTabClick('Mobile')}
                                    >
                                        Mobile
                                    </li>

                                    <li
                                        className={activeTab === 'Frontend' ? 'active' : ''}
                                        onClick={() => handleTabClick('Frontend')}
                                    >
                                        Frontend
                                    </li>

                                    <li
                                        className={activeTab === 'Frameworks' ? 'active' : ''}
                                        onClick={() => handleTabClick('Frameworks')}
                                    >
                                        Frameworks
                                    </li>

                                    <li
                                        className={activeTab === 'Cloud' ? 'active' : ''}
                                        onClick={() => handleTabClick('Cloud')}
                                    >
                                        Cloud
                                    </li>

                                    <li
                                        className={activeTab === 'DevOps' ? 'active' : ''}
                                        onClick={() => handleTabClick('DevOps')}
                                    >
                                        DevOps
                                    </li>

                                    <li
                                        className={activeTab === 'Ecommerce' ? 'active' : ''}
                                        onClick={() => handleTabClick('Ecommerce')}
                                    >
                                        Ecommerce
                                    </li>

                                    <li
                                        className={activeTab === 'CMS' ? 'active' : ''}
                                        onClick={() => handleTabClick('CMS')}
                                    >
                                        CMS
                                    </li>

                                    <li
                                        className={activeTab === 'Platforms' ? 'active' : ''}
                                        onClick={() => handleTabClick('Platforms')}
                                    >
                                        Platforms
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content-box">
                                {activeTab === 'Database' && <div>Database Content</div>}
                                {activeTab === 'Backend' && <div>API Content</div>}
                                {activeTab === 'Mobile' && <div>Settings Content</div>}
                                {activeTab === 'Frontend' && <div>
                                    <div className="frontend-tabs-box">
                                        <div className="icon-text-box">
                                            <img src="/images/icon1.png" alt="" />
                                            <h1>Angular JS</h1>
                                        </div>

                                        <div className="icon-text-box">
                                            <img src="/images/icon2.png" alt="" />
                                            <h1>JavaScript</h1>
                                        </div>

                                        <div className="icon-text-box">
                                            <img src="/images/icon3.png" alt="" />
                                            <h1>React JS</h1>
                                        </div>

                                        <div className="icon-text-box">
                                            <img src="/images/icon4.png" alt="" />
                                            <h1>Vue JS</h1>
                                        </div>

                                        <div className="icon-text-box">
                                            <img src="/images/icon5.png" alt="" />
                                            <h1>Tez JS</h1>
                                        </div>

                                        <div className="icon-text-box width-70">
                                            <img src="/images/icon6.png" alt="" />
                                            <h1>CSS3</h1>
                                        </div>

                                        <div className="icon-text-box width-70">
                                            <img src="/images/icon7.png" alt="" />
                                            <h1>HTML5</h1>
                                        </div>
                                    </div>

                                    <div className="sheduel-button-individual">
                                        <Link to="/lets-connect" className='bg-dark-btn'><span>Schedule a free call</span></Link>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillExperts