import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const TermsAndConditions = () => {
  return (
    <>
      <Header/>
      <div className="container py-5">
        <h1>Terms & Conditions</h1>

        <h2>Introduction</h2>
        <p>
            Welcome to The Remote Pad! These Terms & Conditions ("Terms") govern your use of our website and services. 
            By accessing or using our website, you agree to comply with these Terms. If you do not agree, please do not use our site.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of The Remote Pad and protected by intellectual property laws. 
            You may not reproduce, distribute, or create derivative works without our express written consent.
        </p>

        <h2>User Responsibilities</h2>
        <p>By using our website, you agree to:</p>
        <ul>
            <li>Provide accurate and up-to-date information</li>
            <li>Maintain the confidentiality of your account details</li>
            <li>Use our website only for lawful purposes</li>
        </ul>
        <p>You agree not to:</p>
        <ul>
            <li>Engage in any activity that may harm or disrupt our website</li>
            <li>Use our content without permission</li>
            <li>Attempt unauthorized access to our systems</li>
        </ul>

        <h2>Order and Payment</h2>
        <p>
            When you place an order on our website, you agree to provide accurate payment information. 
            We reserve the right to refuse or cancel any order if fraud or unauthorized activity is suspected.
        </p>

        <h2>Shipping and Delivery</h2>
        <p>
            We aim to process and ship orders promptly. Delivery times may vary based on location and shipping method. 
            We are not responsible for delays caused by third-party carriers.
        </p>

        <h2>Returns and Refunds</h2>
        <p>
            We offer returns and refunds in accordance with our Return Policy. 
            Items must be returned in their original condition within [X] days of purchase for a refund or exchange.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
            The Remote Pad is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. 
            Our maximum liability is limited to the amount paid by you for the product or service.
        </p>

        <h2>Third-Party Links</h2>
        <p>
            Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites. 
            Accessing third-party links is at your own risk.
        </p>

        <h2>Modification of Terms</h2>
        <p>
            We reserve the right to modify these Terms & Conditions at any time. 
            Changes will be effective immediately upon posting on this page. 
            Continued use of our website signifies your acceptance of the updated Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
            These Terms & Conditions are governed by the laws of [Your Jurisdiction], without regard to its conflict of law principles.
        </p>

      </div>
      <Footer/>
    </>
  )
}

export default TermsAndConditions
