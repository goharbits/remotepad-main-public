import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const PrivacyPolicy = () => {
  return (
    <>
        <Header/>
        <div className="container py-5">
            <h1>Privacy Policy</h1>

            <h2>Introduction</h2>
            <p>
                The Remote Pad ("we," "us," or "our") is committed to protecting your personal information and your right to privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or make use of our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect personal information that you provide directly to us when you:</p>
            <ul>
                <li>Register on our website</li>
                <li>Place an order</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
            </ul>
            <p>The personal information we collect may include:</p>
            <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Payment information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect from you to:</p>
            <ul>
                <li>Process transactions and manage orders</li>
                <li>Send you updates, promotions, and newsletters</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except to:
            </p>
            <ul>
                <li>Trusted third parties who assist us in operating our website and services (e.g., payment processors, shipping companies), provided they agree to keep your information confidential.</li>
                <li>Comply with legal obligations or protect our rights.</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can adjust your browser settings to decline cookies if you prefer.
            </p>

            <h2>Third-Party Links</h2>
            <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. 
                We encourage you to read their privacy policies before providing any personal information.
            </p>

            <h2>Data Security</h2>
            <p>
                We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access and update your personal information</li>
                <li>Request the deletion of your personal information</li>
                <li>Opt-out of receiving marketing communications</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be updated at the top.
            </p>
        </div>
        
        <Footer/>
    </>
  )
}

export default PrivacyPolicy
