import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'


const Intro = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.IntroParant',
                markers: false,
                start: 'top top',
                end: 'bottom top',
                scrub: 2,
            }
        })
        tl.to('.OwnerImg1', {
            y: 27,
            ease: 'none',
        },'start')

        tl.to('.OwnerImg2', {
            y: 35,
            ease: 'none',
        },'start')
    })
    return (
        <div className=" grid IntroParant items-center gap-10  py-16 grid-cols-2">
            <div className=" flex flex-col justify-center mt-[6vw] gap-[2vw]">
                <h1 className="text-[7vw] leading-[6vw]   text-gray-900">
                    Our Journey & Inspiration
                </h1>
                <p className="w-[34vw] mt-[2vw] flex flex-col gap-[0.5vw] text-[1.25vw] leading-[2vw] text-gray-600">
                    <span> Priority Homemades was born from a love for authentic, oven-fresh baking in the hills of Solan, Himachal Pradesh.</span>
                    <span>Our motto is simple: “Meri Kitchen Se” — straight from my kitchen to yours.</span>
                    <span>Every cake is freshly baked to order using wholesome ingredients, premium butter, real chocolate, and seasonal flavours. From birthdays and anniversaries to weddings and celebrations, we put heart into every creation.</span>
                </p>
            </div>

            <div className="flex relative gap-4 py-0.5  h-full w-full">
                <div className='absolute  overflow-hidden top-[10vw]  z-10 h-[35vw] w-[25vw]'>
                    <img
                        src="https://i.pinimg.com/736x/24/37/98/243798ff03dd17e64c22113a33deaeb6.jpg"
                        alt="Decorated chocolate cake"
                        className=" OwnerImg1 scale-[110%] h-full w-full object-cover" />
                </div>
                <div className='absolute overflow-hidden top-0 right-0 h-[35vw] w-[25vw]'>
                    <img
                        src="https://i.pinimg.com/736x/b0/66/8a/b0668ae1a13b60fac82999d490883ac2.jpg"
                        alt="Freshly baked donuts"
                        className=" OwnerImg2 scale-[110%] h-full w-full object-cover" />
                </div>
            </div>
        </div>

    )
}

export default Intro
