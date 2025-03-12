import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AboutUsBanner from '../components/aboutBanner/AboutUsBanner'
import AboutTestimonial from '../components/aboutTestimonial/AboutTestimonial'
import AboutHireTeam from '../components/aboutHireTeam/AboutHireTeam'
import AboutWhoWeAre from '../components/aboutWhoWeAre/AboutWhoWeAre'
import OurMission from '../components/ourMission/OurMission'
import OurCoreValue from '../components/ourCoreValue/OurCoreValue'

const About = () => {
    return (
        <>
            <Header />
            <AboutUsBanner />
            <AboutTestimonial />
            <AboutHireTeam />
            <AboutWhoWeAre />
            <OurMission />
            <OurCoreValue/>
            <Footer />
        </>
    )
}

export default About