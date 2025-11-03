import React from 'react'
import Slider from './components/Slider'
import Catagory from './components/Catagory'
import Offer from './components/Offer'
import BestSelling from './components/BestSelling'
import Footer from './components/Footer'

const Body = () => {
  return (
    <div className='pt-13'>
      <Slider/>
      <Catagory/>
      <Offer/>
      <BestSelling/>
      
    </div>
  )
}

export default Body