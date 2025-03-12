import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import BlogBanner from '../../components/blogBanner/BlogBanner'
import SingleBlogBanner from '../../components/singleBlogBanner/SingleBlogBanner'
import SingleBlogContent from '../../components/singleBlogContent/SingleBlogContent'

const SingleBlog = () => {
  return (
    <>
    <Header/>
    <SingleBlogBanner/>
    <SingleBlogContent/>
    <BlogBanner/>
    <Footer/>
    </>
  )
}

export default SingleBlog
