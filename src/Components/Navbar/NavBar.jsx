import React, { useContext, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { Menu, ShoppingBag } from 'lucide-react';
import { GlobalContext } from '../../GlobleDataContext/GlobalDataContext';

const NavBar = () => {
    const RouteLocation = useLocation().pathname;

    const MenuRef = useRef(null)
    const { OpenNav, SetNav } = useContext(GlobalContext)

    const { OrdersData } = useContext(GlobalContext);

    const TotalOrder = OrdersData.length;

    return (
        <div className={`  fixed flex justify-between ${RouteLocation == '/' ? 'text-white' : 'text-black backdrop-blur-xs'} ${RouteLocation == '/cakeOrder' ? 'text-white backdrop-blur-xs' : 'text-black'} lg:px-[2vw] px-[4vw]  py-2  z-20 top-0 w-full `}>
            <Link to='/' className='  flex items-center gap-2'>
                <div className='lg:h-[2.5vw] md:h-[2.5vw]  h-[4vw]  lg:w-[2.5vw] md:w-[2.5vw] w-[4vw] overflow-hidden  rounded-full'><img src="https://priorityhomemades.in/icon.jpg" alt="" srcSet="" /></div>
                <h1 className='lg:text-[2vw] md:text-[2vw] text-[4vw] uppercase'>Priority-Homemades</h1>
            </Link>
            <div className='flex  lg:gap-[2vw] gap-[4vw] items-center'>
                <Link to='/Orders' className='relative'>
                    <ShoppingBag className='lg:h-[3vw] lg:w-[3vw]' />
                    <div className='absolute -top-1 -right-1 lg:text-[1vw] text-[2vw] bg-black text-white rounded-full lg:h-[1.2vw] lg:w-[1.2vw] h-[2vw] w-[2vw] flex items-center justify-center'>
                        {TotalOrder}
                    </div>
                </Link>
                <div onClick={() => {
                    SetNav(true)
                }} className='flex flex-col lg:gap-[1vw] gap-[1.2vw] lg:w-[5vw] w-[10vw]'>
                    <div className={`lg:h-[0.2vw] h-[0.6vw] w-full ${RouteLocation == '/' || RouteLocation == '/cakeOrder' ? 'bg-white' : 'bg-black'}`}></div>
                    <div className={`lg:h-[0.2vw] h-[0.6vw] w-full ${RouteLocation == '/' || RouteLocation == '/cakeOrder' ? 'bg-white' : 'bg-black'}`}></div>
                    <div className={`lg:h-[0.2vw] h-[0.6vw] w-full ${RouteLocation == '/' || RouteLocation == '/cakeOrder' ? 'bg-white' : 'bg-black'}`}></div>
                </div>

            </div>
        </div>
    )
}

export default NavBar
