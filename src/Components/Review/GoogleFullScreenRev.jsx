import React from 'react'
import { ArrowRight, X } from 'lucide-react'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const GoogleFullScreenRev = ({ Data, Review }) => {
    console.log(Data.ReviewData);

    return (
        <div className={`${Review.openReview == true ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-screen overscroll-y-none   z-999 bg-white`}>
            <div className=' w-full flex justify-end'>
                <X size={60} strokeWidth={1} onClick={() => { Review.setReview(false) }} />
            </div>

            <div className='px-[10vw] h- flex justify-center  '>
                <div className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md break-inside-avoid mb-[1.5vw] h-full   w-[60vw]  '>

                    <article key={Data?.ReviewData?.name} className="">
                        <div className="mb-[1vw] flex items-center justify-between gap-[1vw]">
                            <div className='flex gap-[1vw]'>
                                <div className={`flex h-[4vw] w-[4vw] shrink-0 items-center justify-center rounded-full font-bold overflow-hidden `} aria-hidden="true"><a href={Data?.ReviewData?.Dp}><img src={Data?.ReviewData?.Dp} alt="" srcset="" /></a></div>
                                <div className="min-w-0">
                                    <h3 className="truncate text-[1.3vw] font-semibold text-gray-900">{Data?.ReviewData?.name}</h3>
                                    <p className="text-[1vw] text-gray-500">{Data?.ReviewData?.date}</p>
                                </div>
                            </div>
                            <div className='h-[2vw] w-[2vw]'>
                                <img className='h-full w-full object-cover' src="https://i.pinimg.com/1200x/1a/d2/aa/1ad2aab3d10fd0b2bfdc37a43a3e6e7e.jpg" alt="" srcSet="" />
                            </div>
                        </div>
                        <div className="mb-[1vw] text-[1vw] tracking-wide text-amber-400" aria-label="5 out of 5 stars">★★★★★</div>
                        <p className="text-[1vw] leading-[1.4vw] text-gray-600">{Data?.ReviewData?.text}</p>
                    </article>

                    <div className="mt-[2vw] bg-black h-[30vw] w-full overflow-hidden rounded-[0.8vw]">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            direction="horizontal"
                            navigation
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            scrollbar={{ draggable: true }}
                            className="h-full w-full"
                        >
                            {Data?.ReviewData?.Images?.map((image, idx) => (
                                <SwiperSlide
                                    key={idx}
                                    className="h-full cursor-grab w-full overflow-hidden rounded-[0.8vw]"
                                >
                                    <a href={image} >
                                        <img
                                            src={image}
                                            alt=""
                                            className="h-full w-full object-contain"
                                        />
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GoogleFullScreenRev
