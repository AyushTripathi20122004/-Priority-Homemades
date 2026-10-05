import React from 'react'

const EmailForm = () => {
    return (
        <div className=' lg:flex items-center h-full  justify-center lg:mt-[8vw] mt-[10vw] w-full lg:h-[40vw]'>
            <div className='lg:grid  lg:grid-cols-2 h-full ' >
                <div className='h-full lg:border lg:border-l-0 lg:border-r-0 lg:py-0 py-[10vw] overflow-hidden'>
                    <h1 className='lg:text-[7.5vw] text-[12vw] leading-[10vw] lg:w-full w-[80vw] lg:leading-[8vw]'>
                        Share Your Thoughts With US
                    </h1>
                    <p className='lg:text-[1.25vw] text-[2.5vw] text-black/60 lg:w-[35vw] w-[70vw] mt-[2vw]'>
                        We'd love to herr from  you and learn more about your thoughts. Wheather you have a question, feedback, or simple want to connect, feel free to reach out to use. We're always happy to start a meaningfull conversation with you
                    </p>
                </div>
                <form className='h-full border lg:border-r-0  flex flex-col'>
                    <div className='flex lg:h-[5vw]  '>
                        
                        <input type="text" placeholder='Name' className='border-[0.1vw] px-[1vw] border-l-0 border-t-0 focus:outline-none  w-full lg:text-[1.7vw] text-[4vw] text-black/60   lg:py-[0.7vw] py-[1vw]' id="name" name="name" required />
                        
                        <input type="email" placeholder='Email' className='border-[0.1vw] px-[1vw] focus:outline-none  border-r-0 border-l-0 border-t-0 w-full lg:text-[1.7vw] text-[4vw] text-black/60 lg:py-[0.7vw] py-[1vw]' id="email" name="email" required />
                    </div>

                    <div className='w-full flex items-center lg:h-[5vw] '>                        
                        <input type="text" placeholder='Subject' className=' border-0 px-[1vw] focus:outline-none  w-full lg:text-[1.7vw] text-[4vw] text-black/60 lg:py-[0.7vw] py-[1vw]' id="subject" name="subject" required />
                    </div>

                    <div className='w-full '>
                        <textarea id="thoughts" placeholder='Write the Thoughts' className='border-[0.1vw] border-r-0 border-l-0   resize-none  focus:outline-none p-[1vw] lg:h-[24vw] w-full lg:text-[1.7vw] text-[4vw] text-black/60    ' name="thoughts" rows='13'  required />
                    </div>

                    <div className='w-full flex items-center px-[1vw] lg:mt-[0.8vw] lg:mb-0 mb-[1.5vw] '>
                        <button className='hover:bg-black rounded-full transition-all duration-300 px-[6vw] border lg:text-[1.7vw] text-[4vw] hover:text-white py-[0.2vw]' type="submit">Connect</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmailForm
