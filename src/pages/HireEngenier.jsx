import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import TrackStack from '../components/trackstack/TrackStack'
import SuccessFullProjects from '../components/successfullProjects/SuccessFullProjects'
import HireEngenierBanner from '../components/hireengenierBanner/HireEngenierBanner'
import OurTopDeveloper from '../components/ourTopDeveloper/OurTopDeveloper'

const HireEngenier = () => {
    return (
        <>
            <Header />
            <HireEngenierBanner />
            <div className="space-top-none">
                <SuccessFullProjects />
            </div>
            <OurTopDeveloper/>
            <TrackStack />
            <Footer />
        </>
    )
}

export default HireEngenier