import React from 'react'
import { QualitiesData } from '../../Data/CommonData'

const Qualities = () => {
  return (
    <div className=' w-full grid grid-cols-3 mt-[13vw]'>
      {
        QualitiesData.map((elem,idx)=>{
            return(
                <div key={idx} className={`border ${[0, 3].includes(idx) ? 'border-l-0':''} ${[2, 5].includes(idx) ? 'border-r-0':''} p-[3vw] h-[20vw]`}>
                    <h1 className='text-[2vw] font-medium '>{elem.Title}</h1>
                    <p className='text-[1.25vw] mt-[2vw] text-black/60 '>{elem.Text}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Qualities
