import React, { useState } from 'react'
import { reviews } from '../../Data/CommonData'
import GoogleFullScreenRev from './GoogleFullScreenRev'
import { ArrowRight } from 'lucide-react'

const GoogleReview = () => {


    const [openReview, setReview] = useState(false)
    const [ReviewData, SetData] = useState(null)
    console.log(ReviewData);


    return (
        <section className=" px-[2vw] w-full  py-1">
            <GoogleFullScreenRev Data={{ ReviewData, SetData }} Review={{ openReview, setReview }} />

            <div className={`${openReview == false ? 'block' : 'hidden'} pt-[5vw]`}>
                <div className="w-full rounded-[1vw]  py-[1.4vw]">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-[0.8vw]">

                            <span className="text-[1.5vw] font-semibold text-[#202124]">
                                4.7
                            </span>

                            <div className="flex gap-[0.1vw] text-[1.35vw] text-[#fbbc04]">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>

                            <span className="text-[1vw] text-[#202124]">
                                19,713 reviews on
                            </span>

                            <div className="text-[1.5vw] font-medium tracking-[-0.05vw]">
                                <span className="text-[#4285F4]">G</span>
                                <span className="text-[#DB4437]">o</span>
                                <span className="text-[#F4B400]">o</span>
                                <span className="text-[#4285F4]">g</span>
                                <span className="text-[#34A853]">l</span>
                                <span className="text-[#EA4335]">e</span>
                            </div>

                        </div>

                        <button className="rounded-full hover:bg-black px-[2vw] py-[0.8vw] text-[1vw] border   hover:text-white transition-transform duration-300 cursor-pointer">
                            Review us on Google
                        </button>

                    </div>
                </div>
                <div className="columns-3 ">
                    {reviews.map((review, idx) => (
                        <div key={idx} onClick={() => { SetData(review); setReview(true); }} className='rounded-2xl border border-gray-100 bg-white p-[2vw] shadow-sm transition-shadow hover:shadow-md break-inside-avoid mb-[1.5vw] cursor-pointer'>
                            <article key={review.name} className="">
                                <div className="mb-[1vw] flex items-center justify-between gap-[1vw]">
                                    <div className='flex gap-[1vw]'>
                                        <div className={`flex h-[3vw] w-[3vw] shrink-0 overflow-hidden items-center justify-center rounded-full font-bold ${review.avatar}`} aria-hidden="true"><img className='h-full w-full object-cover' src={review.Dp} alt="" srcset="" /></div>
                                        <div className="min-w-0">
                                            <h3 className="truncate text-[1.3vw] font-semibold text-gray-900">{review.name}</h3>
                                            <p className="text-[1vw] text-gray-500">{review.date}</p>
                                        </div>
                                    </div>
                                    <div className='h-[2vw] w-[2vw]'>
                                        <img className='h-full w-full object-cover' src="https://i.pinimg.com/1200x/1a/d2/aa/1ad2aab3d10fd0b2bfdc37a43a3e6e7e.jpg" alt="" srcSet="" />
                                    </div>
                                </div>
                                <div className="mb-[1vw] text-[1vw] tracking-wide text-amber-400" aria-label="5 out of 5 stars">★★★★★</div>
                                <p className="text-[1vw] leading-[1.4vw] text-gray-600">{review.text}</p>
                            </article>

                            <div className={`${review.Images.length > 0 ? 'columns-2' : 'flex'} mt-[2vw] gap-[0.5vw]`}>
                                {review.Images.map((image, idx) => (
                                    <div
                                        key={idx}
                                        className="mb-[0.5vw] w-full overflow-hidden rounded-[0.8vw]">
                                        <img
                                            src={image}
                                            alt=""
                                            className="block h-auto w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-end mt-[2vw]'>
                    <div className='flex items-center gap-[1vw] text-black/60 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-[1.2vw]  border p-[0.5vw] rounded-full'>
                        See More Reviews <ArrowRight size={'1.8vw'} strokeWidth={1} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoogleReview
