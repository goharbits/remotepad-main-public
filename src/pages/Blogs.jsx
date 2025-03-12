import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import TechBannerBlog from '../components/techBannerBlog/TechBannerBlog'
import BlogTabs from '../components/blogTabs/BlogTabs'
import BlogBanner from '../components/blogBanner/BlogBanner'

const Blogs = () => {
    return (
        <>
            <Header />
            <TechBannerBlog />
            <BlogTabs />
            <BlogBanner/>
            <Footer />
        </>
    )
}

export default Blogs