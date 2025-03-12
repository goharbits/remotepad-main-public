import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'

const HireTeamArrow = ({ step, setStep }) => {

    const navigate = useNavigate();

    const manageBackClick = () => {
        if (step > 1 && step < 4) {
            setStep(step - 1)
        } else {
            navigate(-1)
        }
    };

    return (
        <div className="hire-team-arrow">
            <i className="fa-solid fa-arrow-left" onClick={manageBackClick}></i>
            <h3>Having trouble? <Link to="/lets-connect">Get help</Link></h3>
        </div>
    )
}

export default HireTeamArrow