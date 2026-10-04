import { useGSAP } from '@gsap/react'
import React, { useContext, useState } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { MoveLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../GlobleDataContext/GlobalDataContext'
import CakeForm from '../Components/CakeFormSection/CakeForm'

const CakesFormSection = () => {
    gsap.registerPlugin(ScrollTrigger)


    // cake Data from Cakes section 
    const { CakeData, SetData } = useContext(GlobalContext)

    // navigate to previous route
    const Navigate = useNavigate()

    //Image animation
    useGSAP(() => {
        const mediaQuery = gsap.matchMedia()

        mediaQuery.add('(min-width: 768px)', () => {
            gsap.to('.ProductImage', {
                y: '140%',
                scrollTrigger: {
                    trigger: '.FormParant',
                    markers: false,
                    start: 'top 10%',
                    end: 'bottom top',
                    scrub: true,
                },
            }
            )
        })

        return () => mediaQuery.revert()
    })

    return (
        <div className='h-full w-full pb-[10vw] bg-black flex flex-col items-center justify-center'>


            <div className='lg:mt-[5vw] mt-[10vw]'>
                <div className='mb-[1vw]'>
                    <button onClick={() => { Navigate(-1) }} className='rounded-full flex text-[1.5vw] items-center  px-[1vw] py-[0.5vw] gap-[0.5vw] border border-white/10 text-white/80 hover:bg-white transition-all duration-200 hover:text-black'><MoveLeft size={'2vw'} />Back to Cakes</button>
                </div>
                <div className='h-full FormParant flex lg:flex-row flex-col rounded-2xl overflow-hidden border-white/10 w-[80vw]  border'>

                    <div className=' flex-2 relative w-full'>
                        <div className='overflow-hidden h-full w-full  bg-orange-100'>
                            <img
                                src={CakeData?.CakeImage}
                                alt='Decorated chocolate cake'
                                className='h-full shrink-0 w-full object-cover'
                            />
                        </div>
                        <div className='h-full w-full absolute top-0 p-[1vw] backdrop-blur-sm '>
                            <div className=' ProductImage  overflow-hidden rounded-2xl  bg-orange-100'>
                                <a href={CakeData?.CakeImage}>
                                    <img
                                        src={CakeData?.CakeImage}
                                        alt='Decorated chocolate cake'
                                        className='h-full w-full object-cover'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <CakeForm />
                </div>
            </div>
        </div>
    )
}

export default CakesFormSection
