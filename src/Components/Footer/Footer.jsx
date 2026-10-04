import { ArrowUpIcon } from 'lucide-react';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const CurrentPath = useLocation().pathname
    console.log(CurrentPath);
    return (
        <div className={`bg-black border-t border-white/10  ${CurrentPath == '/' ? 'hidden' : 'block'} w-full p-[2vw] `}>
            <Link to='/' className=' flex items-center '>
                <h1 className='text-[8vw] lg:ml-0 ml-[2.2vw] text-nowrap uppercase text-white'>Priority-Homemades</h1>
            </Link>
            <div className=' flex justify-between items-center mt-[6vw]'>
                <div className='text-white/60 text-[1.5vw]'>
                    &copy; 2026 Priority-Homemades
                </div>
                <div className='group cursor-pointer  '>
                    <div className='text-white/60 lowercase text-[1.6vw]'>
                        PriorityHomemades@gmail.com
                    </div>
                    <div className='h-0.5 w-0 transition-all duration-200 group-hover:w-full bg-white'>

                    </div>
                </div>
                <div className='flex items-center gap-6 text-white/60'>
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' aria-label='Instagram'>
                        <svg className='h-[2vw] w-[2vw]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8'>
                            <rect x='3' y='3' width='18' height='18' rx='5' />
                            <circle cx='12' cy='12' r='4' />
                            <circle cx='17.5' cy='6.5' r='1' fill='currentColor' stroke='none' />
                        </svg>
                    </a>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' aria-label='Facebook'>
                        <svg className='h-[2vw] w-[2vw]' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z' />
                        </svg>
                    </a>
                    <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' aria-label='YouTube'>
                        <svg className='h-[2vw] w-[2vw]' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z' />
                        </svg>
                    </a>
                    <a href='https://wa.me/' target='_blank' rel='noreferrer' aria-label='WhatsApp'>
                        <svg className='h-[2vw] w-[2vw]' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.5 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.9 0-3.2-1.2-6.1-3.4-8.3ZM12.1 21.7c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.9-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.5-4.4 9.9-9.7 9.9Zm5.4-7.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.4 4.8 2 .9 2.8 1 3.8.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z' />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
