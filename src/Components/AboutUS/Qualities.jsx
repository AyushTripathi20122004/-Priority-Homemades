import React from 'react'
import { QualitiesData } from '../../Data/CommonData'

const Qualities = () => {
  return (
    <div className=' w-full grid lg:grid-cols-3 grid-cols-2 lg:mt-[13vw] mt-[20vw]'>
      {
        QualitiesData.map((elem,idx)=>{
            return(
                <div key={idx} className={`border ${[0, 3].includes(idx) ? 'lg:border-l-0':''} ${[2, 5].includes(idx) ? 'lg:border-r-0':''} p-[3vw] lg:h-[20vw] border-black/10      `}>
                    <h1 className='lg:text-[2vw] text-[6vw] font-medium '>{elem.Title}</h1>
                    <p className='lg:text-[1.25vw] text-[3vw] mt-[2vw] text-black/60 '>{elem.Text}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Qualities
