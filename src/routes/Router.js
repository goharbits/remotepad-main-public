import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ContactToTeam from '../pages/hireTeam/ContactToTeam'
import CallTimings from '../pages/hireTeam/CallTimings'
import HireTeamLayout from '../pages/hireTeam/HireTeamLayout'
import Blogs from '../pages/Blogs'
import Engagment from '../pages/Engagment'
import Engeniers from '../pages/Engeniers'
import HireMe from '../pages/hireTeam/HireMe'
import HireEngenier from '../pages/HireEngenier'
import DashboardOverView from '../pages/dashboard/DashboardOverView'
import DashboardFaq from '../pages/dashboard/DashboardFaq'
import DashboardWorkType from '../pages/dashboard/DashboardWorkType'
import DashboardWhyUs from '../pages/dashboard/DashboardWhyUs'
import DashboardEngagModels from '../pages/dashboard/DashboardEngagModels'
import LetsConnect from '../pages/LetsConnect'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsAndConditions from '../pages/TermsAndConditions'
import ConnectingSoon from '../pages/hireTeam/connecting-soon/ConnectingSoon'
import NothingPage from '../pages/404-page/NothingPage'
import Login from '../pages/login-register/Login'
import Register from '../pages/login-register/Register'
import SingleBlog from '../pages/single-blog-page/SingleBlog'
import ResumeTemplatePage from '../pages/CVTemplate/ResumeTemplatePage'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/hire-a-team' element={< HireTeamLayout />} />
                    <Route path='/contactTeam' element={< ContactToTeam />} />
                    <Route path='/callTimings' element={< CallTimings />} />
                    <Route path='/blogs' element={< Blogs />} />
                    <Route path='/engagement-models' element={< Engagment />} />
                    <Route path='/resources' element={< Engeniers />} />
                    <Route path='/hireme' element={< HireMe />} />
                    <Route path='/hireEngenier' element={< HireEngenier />} />
                    <Route path='/dashboard' element={< DashboardOverView />} />
                    <Route path='/faqs' element={< DashboardFaq />} />
                    <Route path='/workType' element={< DashboardWorkType />} />
                    <Route path='/whyus' element={< DashboardWhyUs />} />
                    <Route path='/engagmodels' element={< DashboardEngagModels />} />
                    <Route path='/lets-connect' element={< LetsConnect />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
                    <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
                    <Route path='/connecting-soon' element={<ConnectingSoon/>} />
                    <Route path='*' element={<NothingPage/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/single-blog' element={<SingleBlog/>} />
                    <Route path='/resume' element={<ResumeTemplatePage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router