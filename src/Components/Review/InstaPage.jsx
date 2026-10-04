import React, { useRef } from 'react'
import InstaDesktopImag from '../../Components/CakeImage/InstaPage.png'
import gsap from 'gsap'

const InstaPage = () => {
    const TextRef = useRef(null);
    const InstapageRef = useRef(null);

    return (
        <div className='px-[2vw] mt-[10vw]'>
            <div
                ref={InstapageRef}
                className='h-full  w-full relative cursor-pointer overflow-hidden'
                onMouseMove={(e) => {
                    const rect = InstapageRef.current.getBoundingClientRect()

                    gsap.to(TextRef.current, {
                        scale:1,
                        x: e.clientX - rect.left - 20,
                        y: e.clientY - rect.top - 20,
                        duration: 0.3,
                    })
                }}
                onMouseDown={() => {
                    gsap.to(TextRef.current, {
                        scale:0.5,
                        ease:'power1'
                    })
                }}
                onMouseLeave={() => {
                    gsap.to(TextRef.current, {
                        scale:0,
                        ease:'power1'
                    })
                }}

            >
                <img className='h-full w-full object-contain' src={InstaDesktopImag} alt="" srcset="" />
                <div ref={TextRef} className=' h-[5vw] text-white text-[0.8vw] text-center rounded-full flex items-center justify-center text-wrap w-[5vw] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 absolute top-0'>
                    Follow On Instagram
                </div>
            </div>
        </div>
    )
}

export default InstaPage
