import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import EngagmentBanner from '../components/engagmentmodelbanner/EngagmentBanner'
import EngagmentBmodel from '../components/engagmentBmodel/EngagmentBmodel'
import EngagmentButton from '../components/engagmentButton/EngagmentButton'

const Engagment = () => {

    const data = {
        title: 'B2C Model',
        icon: 'engagmenticon1.png',
        benefits: ['Finalized Pricing', 'Defined Deadlines', 'Predictability of Development', 'No management on your side'],
        includes: ['15 Days Money Back Guarantee', '2-Week Free Trial', 'Additional Support for projects that need more time to develop and stabilize', '30-day Warranty Guarantee Period Once Your Project is Delivered'],
        howItWorks: 'Continuous work and ongoing payment. As our client, you will play a greater role in the development process.',
        whereToUse: 'Ideal for projects requiring more substantial effort than short-term engagements. This model works best for mid-term projects (up to 3 months). For this model to work for your project, it requires in-depth planning and clear project requirements.',
        workflow: ['Dynamic Demands', 'Unclear Project', 'Flexibility Required', 'Manage the Project', 'Long-Term Projects'],
    };

    const data2 = {
        title: 'B2C Model',
        icon: 'engagmenticon2.png',
        benefits: ['Finalized Pricing', 'Defined Deadlines', 'Predictability of Development', 'No management on your side'],
        includes: ['15 Days Money Back Guarantee', '2-Week Free Trial', 'Additional Support for projects that need more time to develop and stabilize', '30-day Warranty Guarantee Period Once Your Project is Delivered'],
        howItWorks: 'Continuous work and ongoing payment. As our client, you will play a greater role in the development process.',
        whereToUse: 'Ideal for projects requiring more substantial effort than short-term engagements. This model works best for mid-term projects (up to 3 months). For this model to work for your project, it requires in-depth planning and clear project requirements.',
        workflow: ['Dynamic Demands', 'Unclear Project', 'Flexibility Required', 'Manage the Project', 'Long-Term Projects'],
    };

    const data3 = {
        title: 'B2C Model',
        icon: 'engagmenticon3.png',
        benefits: ['Finalized Pricing', 'Defined Deadlines', 'Predictability of Development', 'No management on your side'],
        includes: ['15 Days Money Back Guarantee', '2-Week Free Trial', 'Additional Support for projects that need more time to develop and stabilize', '30-day Warranty Guarantee Period Once Your Project is Delivered'],
        howItWorks: 'Continuous work and ongoing payment. As our client, you will play a greater role in the development process.',
        whereToUse: 'Ideal for projects requiring more substantial effort than short-term engagements. This model works best for mid-term projects (up to 3 months). For this model to work for your project, it requires in-depth planning and clear project requirements.',
        workflow: ['Dynamic Demands', 'Unclear Project', 'Flexibility Required', 'Manage the Project', 'Long-Term Projects'],
    };

    return (
        <>
            <Header />
            <EngagmentBanner />
            <EngagmentBmodel data={data} />
            <EngagmentBmodel data={data2} />
            <EngagmentBmodel data={data3} />
            <EngagmentButton/>
            <Footer />
        </>
    )
}

export default Engagment