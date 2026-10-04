import React from 'react'
import CakesCards from './CakesCards'

// Import thte cake data 
import { AniversaryCake } from '../../Data/CakeData'
import { BirthDayCake } from '../../Data/CakeData'
import { WeddingCakes } from '../../Data/CakeData'
import { BabyShowerCake } from '../../Data/CakeData'

const CakesSection = ({Menu}) => {

    return (
        <div className={`${Menu==0 ?'block':'hidden'}`}>
            <CakesCards cakeData={AniversaryCake} Title={'CakesCards Cakes'} />
            <CakesCards cakeData={BirthDayCake} Title={'Birthday Cakes'} />
            <CakesCards cakeData={WeddingCakes} Title={'Wedding Cakes'} />
            <CakesCards cakeData={BabyShowerCake} Title={'Baby Shower Cakes'} />
        </div>
    )
}

export default CakesSection
