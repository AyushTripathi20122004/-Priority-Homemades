import React, { useRef } from 'react'
import CakeVideo from '../CakeImage/VideoProject3.mp4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const AbCakeVideo = () => {
    const VideoRef = useRef(null)
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(VideoRef.current,{
            width:'50%',
            scrollTrigger:{
                trigger:VideoRef.current,
                markers:false,
                start:'top 100%',
                end:'60% 80%',
                scrub:true,
            }
        })
    })
    return (
        <div className='h-screen flex justify-center w-full  mt-[10vw]'>
            <div ref={VideoRef} className=' overflow-hidden h-full w-full'>
                <video loop autoPlay muted className='h-full w-full object-cover' src={CakeVideo}></video>
            </div>
        </div>
    )
}

export default AbCakeVideo
