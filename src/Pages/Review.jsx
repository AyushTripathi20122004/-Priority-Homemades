import React from 'react'
import GoogleReview from '../Components/Review/GoogleReview'
import InstaPage from '../Components/Review/InstaPage'
import Youtube from '../Components/Review/Youtube'

const Review = () => {
  return (
    <div className='mb-[10vw] lg:mt-0 mt-[5vw]'>
      <GoogleReview />
      <InstaPage />
      <Youtube />
    </div>
  )
}

export default Review
