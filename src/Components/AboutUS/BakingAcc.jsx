import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const BakingAcc = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.OwnerImage3',
            {
                y: 30,
            },
            {
                y: 120,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.CourseParant',
                    markers: false,
                    start: 'top 100%',
                    end: 'bottom top',
                    scrub: 2,
                }
            })
        })
return (
    <div className=" mt-[12vw] w-full py-0.5 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-[4vw] lg:h-screen CourseParant lg:items-center justify-between ">
        <div className=" mt-[10vw]">
            <h1 className=" text-[7vw] leading-[8vw] ">Priority Baking Academy</h1>
            <p className="text-[1.25vw] mt-[2vw] text-black/60 leading-[2.2vw] ">
                At Priority Baking Academy, Meenakshi shares her trade secrets and step-by-step techniques with baking enthusiasts, homemakers, and future entrepreneurs. From understanding oven thermodynamics and balancing sponge moistness to perfecting sharp edges with whipped cream and fondant sculpting, our masterclasses provide complete hands-on practical training.

                Classes are held at our Solan studio with small batch sizes to ensure individual attention and hands-on participation.
            </p>
            <button className="px-[4vw] hover:bg-black hover:text-white transition-all duration-200 py-[1vw] text-[1.25vw] mt-[6vw]  rounded-full border ">
                Explore Masterclasses & Courses
            </button>
        </div>
        <div className='h-full lg:ml-[9vw] lg:w-[35vw] mt-[9vw]   overflow-hidden'>
            <img className=' OwnerImage3 h-full scale-135 w-full object-cover' src="https://i.pinimg.com/1200x/9a/64/10/9a6410bbef348bba680c1745dffe080a.jpg" alt="" />
        </div>
    </div>
)
}

export default BakingAcc
