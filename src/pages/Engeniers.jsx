import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ResoursesBanner from '../components/resoursesBanner/ResoursesBanner'
import EngenierYouCanHire from '../components/engenieryoucanhire/EngenierYouCanHire'
import TrackStack from '../components/trackstack/TrackStack'
import CategoryBox from '../components/categoryBox/CategoryBox'

const Engeniers = () => {
    return (
        <>
            <Header />
            <ResoursesBanner />
            <CategoryBox/>
            <EngenierYouCanHire />
            <TrackStack />
            <Footer />
        </>
    )
}

export default Engeniers