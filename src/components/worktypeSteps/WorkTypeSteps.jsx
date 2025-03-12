import React from 'react'
import './style.css'

const WorkTypeSteps = ({ workTypeNumber, setWorkTypeNumber }) => {


    return (
        <>
            <div className="work-type-steps-box">
                <h3>Select your work type</h3>

                <div className="container">
                    {
                        workTypeNumber === 1 ? <div className="row">
                            <div className="col-md-12">
                                <form action="">
                                    <div className="select-boxes">
                                        <div className="radio-group">
                                            <input type="radio" id="option1" name="options" className="radio-input" />
                                            <label htmlFor="option1" className="radio-label">
                                                <img src="/images/option-icon1.png" alt="" />
                                                <h4>Team Based</h4>
                                            </label>

                                            <input type="radio" id="option2" name="options" className="radio-input" />
                                            <label htmlFor="option2" className="radio-label">
                                                <img src="/images/option-icon2.png" alt="" />
                                                <h4>Project Based</h4>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="next-button-box">
                                        <a href="#" className='hover-btn' onClick={() => setWorkTypeNumber(workTypeNumber + 1)}>Next <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </form>
                            </div>
                        </div> : ""
                    }

                    {
                        workTypeNumber === 2 ? <div className="row">
                            <div className="col-md-12">
                                <form action="">
                                    <div className="select-boxes">
                                        <div className="radio-group">
                                            <input type="radio" id="option7" name="options3" className="radio-input" />
                                            <label htmlFor="option7" className="radio-label">
                                                <img src="/images/wticon4.png" alt="" />
                                                <h4>AI/ML Experts</h4>
                                            </label>

                                            <input type="radio" id="option8" name="options3" className="radio-input" />
                                            <label htmlFor="option8" className="radio-label">
                                                <img src="/images/wticon3.png" alt="" />
                                                <h4>Project Managers</h4>
                                            </label>

                                            <input type="radio" id="option9" name="options3" className="radio-input" />
                                            <label htmlFor="option9" className="radio-label">
                                                <img src="/images/wticon2.png" alt="" />
                                                <h4>Full Stack Dev</h4>
                                            </label>

                                            <input type="radio" id="option10" name="options3" className="radio-input" />
                                            <label htmlFor="option10" className="radio-label">
                                                <img src="/images/wticon1.png" alt="" />
                                                <h4>Quality Assurance</h4>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="next-button-box">
                                        <a href="#" className='hover-btn' onClick={() => setWorkTypeNumber(workTypeNumber + 1)}>Next <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </form>
                            </div>
                        </div> : ""
                    }

                    {
                        workTypeNumber === 3 ? <div className="row">
                            <div className="col-md-12">
                                <form action="">
                                    <div className="select-boxes">
                                        <div className="radio-group">
                                            <input type="radio" id="option3" name="options2" className="radio-input" />
                                            <label htmlFor="option3" className="radio-label">
                                                <img src="/images/worktypeicon4.png" alt="" />
                                                <h4>Web Developers</h4>
                                            </label>

                                            <input type="radio" id="option4" name="options2" className="radio-input" />
                                            <label htmlFor="option4" className="radio-label">
                                                <img src="/images/worktypeicon3.png" alt="" />
                                                <h4>App Development</h4>
                                            </label>

                                            <input type="radio" id="option5" name="options2" className="radio-input" />
                                            <label htmlFor="option5" className="radio-label">
                                                <img src="/images/worktypeicon2.png" alt="" />
                                                <h4>CyberSecurity</h4>
                                            </label>

                                            <input type="radio" id="option6" name="options2" className="radio-input" />
                                            <label htmlFor="option6" className="radio-label">
                                                <img src="/images/worktypeicon.png" alt="" />
                                                <h4>Designers</h4>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="next-button-box">
                                        <a href="#" className='hover-btn' onClick={() => setWorkTypeNumber("stepsComplete")}>Next <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </form>
                            </div>
                        </div> : ""
                    }


                </div>
            </div>
        </>
    )
}

export default WorkTypeSteps