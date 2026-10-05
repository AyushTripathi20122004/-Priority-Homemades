import { X } from 'lucide-react'
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../GlobleDataContext/GlobalDataContext'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const FullScrenNav = () => {
    const { OpenNav, SetNav } = useContext(GlobalContext)
    const NavRoutes = [
        {
            Name: 'Explore Products',
            Route: '/Sweeten-your-day',
            Image: 'https://i.pinimg.com/736x/26/d8/90/26d890f3a65360ec0e6e2bb3a894c59d.jpg',
        },
        {
            Name: 'About Us',
            Route: '/aboutUs',
            Image: 'https://i.pinimg.com/1200x/9a/64/10/9a6410bbef348bba680c1745dffe080a.jpg'
        },
        {
            Name: 'Reviews',
            Route: '/review',
            Image: 'https://i.pinimg.com/1200x/12/c7/b7/12c7b7df233bcb0c1e744b157bb4c3ec.jpg',
        },
        {
            Name: 'Contact US',
            Route: '/contactUs',
            Image: 'https://i.pinimg.com/1200x/71/9d/76/719d7697798e9c5c490d1b48fd5628c2.jpg',
        },
    ]

    const FullScreenNavRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.set('.Stairparant2', {
            display: 'grid'
        })

        tl.from('.upStair1', {
            y: '-100%',
            stagger: 0.15,
        }, 'start')

        tl.from('.downStair1', {
            y: '100%',
            stagger: 0.15,
        }, 'start')

        tl.from(FullScreenNavRef.current, {
            opacity: 0,
        })

    }, [OpenNav])

    return (
        <div className={` ${OpenNav == true ? 'block' : 'hidden'} fixed top-0 h-screen w-full z-999`}>
            {/* stairs for animation */}
            <div className=' h-screen   w-screen hidden  grid-rows-2  Stairparant2 '>
                <div className='w-full h-full flex  '>
                    <div className='w-full upStair1 bg-black h-full'></div>
                    <div className='w-full upStair1 bg-black h-full'></div>
                    <div className='w-full upStair1 bg-black h-full'></div>
                    <div className='w-full upStair1 bg-black h-full'></div>
                    <div className='w-full upStair1 bg-black h-full'></div>
                </div>

                <div className='w-full  h-full flex '>
                    <div className='w-full downStair1 bg-black h-full'></div>
                    <div className='w-full downStair1 bg-black h-full'></div>
                    <div className='w-full downStair1 bg-black h-full'></div>
                    <div className='w-full downStair1 bg-black h-full'></div>
                    <div className='w-full downStair1 bg-black h-full'></div>
                </div>
            </div>

            <div ref={FullScreenNavRef} className='w-full absolute flex flex-col justify-between h-screen top-0'>

                <div className='flex justify-between items-start px-[2vw]  '>
                    <Link onClick={() => { SetNav(false) }} to='/' className='flex lg:pt-0 pt-[2vw] items-center gap-2 '>
                        <div className='lg:h-[2.5vw] md:h-[2.5vw]  h-[4vw]  lg:w-[2.5vw] md:w-[2.5vw] w-[4vw] overflow-hidden  rounded-full'><img src="https://priorityhomemades.in/icon.jpg" alt="" srcSet="" /></div>
                        <h1 className='lg:text-[2vw] md:text-[2vw] text-white text-[4vw] uppercase'>Priority-Homemades</h1>
                    </Link>
                    <div onClick={() => { SetNav(false) }} className='h-[10vw] flex justify-between w-[15vw]  border-white'>
                        <div className='h-full w-[0.1vw] origin-top -rotate-45 translate-y-[2vw] translate-x-[4vw] bg-white'>

                        </div>
                        <div className='h-full w-[0.1vw] origin-top rotate-45 translate-y-[2vw] translate-x-[-4vw] bg-white'>

                        </div>
                    </div>
                </div>

                <div className='NavigationLinks '>
                    {
                        NavRoutes.map((elem, idx) => {
                            return (
                                <Link onClick={() => { SetNav(false) }} to={elem.Route} key={idx} className='lg:text-[4vw] text-[10vw] group relative text-center border-y border-white py-2 block'>

                                    <div className='text-white'>{elem.Name}</div>

                                    <div className={` hidden group-hover:block absolute ${idx > 1 ? 'top-[-10vw]' : 'top-0'} left-1/2 h-[30vw] z-20 transition-all duration-200  w-[25vw]`}>

                                        <img className='h-full w-full object-cover' src={elem.Image} alt="" />

                                    </div>

                                </Link>
                            )
                        })
                    }
                </div>

                <div className=' flex justify-between px-2  '>
                    <div className='group'>
                        <div className='text-white lowercase lg:text-[2vw] text-[4vw]'>
                            PriorityHomemades@gmail.com
                        </div>
                        <div className='h-1 w-0 transition-all duration-200 group-hover:w-full bg-white'>

                        </div>
                    </div>
                    <div className='flex items-center gap-6 text-white/60'>
                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' aria-label='Instagram'>
                            <svg className='lg:h-[2vw] h-[4vw] lg:w-[2vw] w-[4vw]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8'>
                                <rect x='3' y='3' width='18' height='18' rx='5' />
                                <circle cx='12' cy='12' r='4' />
                                <circle cx='17.5' cy='6.5' r='1' fill='currentColor' stroke='none' />
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' aria-label='Facebook'>
                            <svg className='lg:h-[2vw] h-[4vw] lg:w-[2vw] w-[4vw]' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z' />
                            </svg>
                        </a>
                        <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' aria-label='YouTube'>
                            <svg className='lg:h-[2vw] h-[4vw] lg:w-[2vw] w-[4vw]' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z' />
                            </svg>
                        </a>
                        <a href='https://wa.me/' target='_blank' rel='noreferrer' aria-label='WhatsApp'>
                            <svg className='lg:h-[2vw] h-[4vw] lg:w-[2vw] w-[4vw]' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.5 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.9 0-3.2-1.2-6.1-3.4-8.3ZM12.1 21.7c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.9-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.5-4.4 9.9-9.7 9.9Zm5.4-7.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.4 4.8 2 .9 2.8 1 3.8.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z' />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default FullScrenNav
