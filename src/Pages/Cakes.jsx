import React, { useState } from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Pastry from '../Components/Pastry/Pastry'
import Chocolates from '../Components/Chocolates/Chocolates'
import CakesForm from './CakesFormSection'
import CakesSection from '../Components/Cakes/CakesSection'


gsap.registerPlugin(ScrollTrigger)


const Cakes = () => {

    // for Choose the Menu
    const [Menu, SetMenu] = useState(0)
    const Menus = ['Cake', 'Pastry', 'Chocolats', 'Gifts']

    return (
        <div className='relative mb-[10vw]'>
            <div className='px-[2vw]'>
                <div className=' text-[7vw] uppercase mt-[8vw] font-semibold'>
                    Expl0re Cak3s
                </div>

                {/* Quizine menu */}
                <div className='flex mt-[10vw] w-full   mb-[2vw] h-[2vw] items-center text-center justify-between'>
                    {
                        Menus.map((ele, idx) => {
                            return (
                                <div key={idx} onClick={() => { SetMenu(idx) }} className={` ${Menu == idx ? ' border-b-2 bg-black/4' : ' border-b-0'} w-full py-2 cursor-pointer`}>{ele}</div>
                            )
                        })
                    }
                </div>

                {/* Cakes */}
                <CakesSection Menu={Menu} />
                <Pastry Menu={Menu} />
                <Chocolates Menu={Menu} />
            </div>
        </div>
    )
}

export default Cakes
