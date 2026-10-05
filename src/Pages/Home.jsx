import React from 'react'
import HomeVideo from '../../src/Components/CakeImage/VideoProject4.mp4'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="h-screen relative  overflow-hidden  w-screen">
            <video loop autoPlay muted className="h-full scale-[115%] w-full object-cover "
                src={HomeVideo}></video>
            <div className="absolute h-full w-full top-0">
                <div className="w-full flex justify-center  lg:mt-[6vw] md:mt-[40vw] mt-[75vw]">
                    <h1 className="text-white text-center font-medium lg:w-[80vw] lg:leading-[9vw] leading-[15vw] text-[15vw]  lg:text-[10vw] uppercase mix-blend-difference">Sw33tness Reim4gin3d</h1>
                </div>
                <div className="text-white  flex justify-end  lg:mt-[5vw] md:mt-[10vw]  mt-[10vw] lg:text-[1vw] text-[2vw]">
                    <div className=''>
                        <p className="lg:w-[20vw] w-[40vw] mr-[2vw] leading-[4vw] lg:leading-[1.6vw] uppercase">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Choose a design,
                            customize its flavor, frosting color, weight, and instantly preview your personalized cake with
                            your written message before ordering!
                        </p>
                        <div className='flex justify-center'>
                            <Link to='/contactUs' className="  mt-[1vw] ">
                                <button className="text-white uppercase font-medium  border-2 rounded-full lg:text-[1vw] lg:py-2 py-1 px-2">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <Link to='/Sweeten-your-day' className="  lg:mt-[1vw] md:mt-[10vw] mt-[10vw] ">
                        <button className="text-white  uppercase font-medium border-white border-2 rounded-full lg:text-[4vw] text-[6vw] py-2 px-2">
                            Sweeten your day
                        </button>
                    </Link>
                </div>

                <div className="text-white text-[2vw] fixed right-[5vw] group bottom-[3vw]">
                    <i className="bi bi-chat-fill"></i>
                </div>
            </div>
        </div>
    )
}

export default Home
