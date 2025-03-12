import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/mainbanner/Banner'
import Testimonial from '../components/testimonial/Testimonial'
import SuccessFullProjects from '../components/successfullProjects/SuccessFullProjects'
import HireTeam from '../components/hireTeam/HireTeam'
import SkillExperts from '../components/skillExperts/SkillExperts'
import WhyRemotPad from '../components/whyRemotePad/WhyRemotPad'
import BussinessModel from '../components/bussinesModel/BussinessModel'
import OurSuccessStories from '../components/oursuccessstories/OurSuccessStories'
import OurrTalentBox from '../components/ourtalent/OurrTalentBox'
import TrackStack from '../components/trackstack/TrackStack'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Testimonial />
            <SuccessFullProjects />
            <HireTeam />
            <SkillExperts />
            <WhyRemotPad />
            <BussinessModel />
            <OurSuccessStories />
            <OurrTalentBox />
            <TrackStack />
            <Footer />
        </>
    )
}

export default Home