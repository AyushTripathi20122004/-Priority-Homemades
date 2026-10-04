import React from 'react'
import { ChocolateData } from '../../Data/ChocolateData'
import { Heart } from 'lucide-react'

const Chocolates = ({Menu}) => {
    return (
        <div className={`${Menu==2 ?'block':'hidden'} lg:h-full h-screen mt-[5vw]`}>
            <div className='text-[2vw]'>
                Chocolates
            </div>
            <div className='   w-full  grid grid-cols-4 '>
                {ChocolateData.map((elem, idx) => {
                    return (
                        <div key={idx} className='overflow-hidden bg-white/10  p-2 hover:shadow-[0px_0px_2px] shadow-black/20 hover:scale-[101%] flex flex-col h-[35vw]    group relative transition-all duration-300 '>

                            <div className='relative flex-3 h-full  w-full overflow-hidden '>
                                <img className='h-full w-full object-cover' src={elem.Image} alt="" />
                                <div className='absolute right-1 top-1   rounded-full'>
                                    <Heart className='fill-white' stroke={0} />
                                </div>
                            </div>

                            <div className='h-full flex-1  transition-all  duration-150 w-full text-black p-4  flex flex-col'>

                                <div>
                                    <h1 className='text-[1.5vw] font-semibold leading-[2vw]'>{elem.Title}</h1>
                                </div>

                                <div className=''>
                                    <div className='text-pink-500 text-[1vw]'>
                                        Chocolates:{elem.Chocolates}
                                    </div>

                                    <div className='flex text-[1.5vw] mt-[2vw] justify-between items-center'>
                                        <div>₹{elem.Price}</div>
                                        <div className='text-[0.8vw]'>Onwords</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default Chocolates
