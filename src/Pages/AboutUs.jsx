import React from 'react'
import Intro from '../Components/AboutUS/Intro'
import AbCakeVideo from '../Components/AboutUS/AbCakeVideo'
import Qualities from '../Components/AboutUS/Qualities'
import BakingAcc from '../Components/AboutUS/BakingAcc'
import Location from '../Components/AboutUS/Location'


const AboutUs = () => {
  return (
    <div className='lg:px-[2vw] px-[4vw] mb-[10vw]'>
      <Intro />
      <Qualities />
      <AbCakeVideo />
      <BakingAcc />
      <Location />
    </div>
  )
}

export default AboutUs
