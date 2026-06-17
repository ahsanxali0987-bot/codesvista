import React from 'react'
import Hero from '../components/HeroSection/Hero'
import ReverseSwiper from '../components/BrandSwiper/ReverseSwiper'
import ForwardSwiper from '../components/BrandSwiper/ForwardSwiper'

const Home = () => {
  return (
    <div>
      <Hero />
      <ForwardSwiper />
      <ReverseSwiper />
    </div>
  )
}

export default Home
