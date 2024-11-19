import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Further from './components/Further'
import Blog from './components/Blog'
import Ourteam from './components/Ourteam'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
const page = () => {
  return (
    <div className='md-[768px]'>
<Header/>
<HeroSection/>
<Further/>
<Blog/>
<Ourteam/>
<Testimonials/>
<Footer/>
      
    </div>
  )
}

export default page




