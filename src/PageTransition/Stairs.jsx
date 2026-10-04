import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';


const Stairs = (props) => {
    const CurrentPath = useLocation().pathname

    const MainParantRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.set(MainParantRef.current, {
            display: 'none'
        })
        
        tl.set('.Stairparant', {
            display: 'grid'
        })

        tl.from('.upStair', {
            y: '-100%',
            stagger: 0.15,
        }, 'start')

        tl.from('.downStair', {
            y: '100%',
            stagger: 0.15,
        }, 'start')

        tl.set(MainParantRef.current, {
            display: 'block'
        })

        tl.to('.upStair', {
            y: '-100%',
            stagger: 0.15,
        }, 'out')

        tl.to('.downStair', {
            y: '100%',
            stagger: 0.15,
        }, 'out')

        tl.set('.Stairparant', {
            display: 'none'
        })

        tl.set('.upStair,.downStair',{
            y:0
        })

        return () => {
            tl.kill()
        }

    }, [CurrentPath])

    return (
        <div className=''>
            <div className=' h-screen  w-screen  grid-rows-2 hidden  Stairparant  fixed top-0 z-999'>
                <div className='w-full h-full flex '>
                    <div className='w-full upStair bg-black h-full'></div>
                    <div className='w-full upStair bg-black h-full'></div>
                    <div className='w-full upStair bg-black h-full'></div>
                    <div className='w-full upStair bg-black h-full'></div>
                    <div className='w-full upStair bg-black h-full'></div>
                </div>
                <div className='w-full h-full flex '>
                    <div className='w-full downStair bg-black h-full'></div>
                    <div className='w-full downStair bg-black h-full'></div>
                    <div className='w-full downStair bg-black h-full'></div>
                    <div className='w-full downStair bg-black h-full'></div>
                    <div className='w-full downStair bg-black h-full'></div>
                </div>
            </div>

            <div ref={MainParantRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs
