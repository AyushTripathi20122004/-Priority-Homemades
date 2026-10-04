import { ArrowRight, EllipsisVertical } from 'lucide-react'
import React from 'react'

const Youtube = () => {
    const videos = [
        { image: 'https://i.pinimg.com/1200x/b4/2c/77/b42c776ebc6a97408ff847e5a455433a.jpg', title: 'The sweetest treats you need to try this weekend', details: '12K views · 2 days ago' },
        { image: 'https://i.pinimg.com/736x/95/49/fb/9549fb462b76c069d6daf21bcd0f23cf.jpg', title: 'How we create our signature celebration cakes', details: '8.4K views · 1 week ago' },
        { image: 'https://i.pinimg.com/736x/55/43/93/554393b96eb248922aa92da6b3aff34b.jpg', title: 'Behind the scenes at Sweetness ReImagined', details: '5.7K views · 2 weeks ago' },
        { image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80', title: 'Behind the scenes at Sweetness ReImagined', details: '5.7K views · 2 weeks ago' },
    ]

    return (
        <section className=" px-[2vw] mt-[10vw] py-[0.5vw] ">

            <header className="mb-[1vw] flex justify-between gap-5   rounded-2xl bg-white p-[1vw]">
                <div className="flex items-center gap-4 overflow-hidden">
                    <div className='h-[3vw] w-[3vw]'>
                        <img className=" h-full w-full object-contain " src="https://priorityhomemades.in/icon.jpg" alt="Sweetness ReImagined channel" />
                    </div>
                    <div>
                        <h2 className="text-[1.5vw] font-bold text-gray-900">Priority Homemades</h2>
                        <p className="mt-[0.25vw] text-[1vw] text-gray-500">@priorityhomemades · 24.6K subscribers · 38 Videos · 10M Views</p>
                    </div>
                </div>
                <button type="button" className="rounded-full  px-[4vw] py-[0.5vw] text-[1.2vw] border  hover:text-white transition hover:bg-red-700 ">Subscribe</button>
            </header>

            <div className="grid gap-[2vw] grid-cols-3">
                {videos.map((video) => (
                    <article className="overflow-hidden rounded-[1vw] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg h-[27vw] flex flex-col" key={video.title}>
                        <div className="relative flex-2 aspect-video overflow-hidden bg-black">
                            <img className="h-full w-full object-contain transition duration-300 hover:scale-105" src={video.image} alt={video.title} />
                            <span className="absolute bottom-3 left-3 flex h-[3vw] w-[3vw] items-center justify-center rounded-full bg-red-600 text-sm text-white text-[1vw] shadow-lg" aria-label="Play video">▶</span>
                        </div>
                        <div className="w-full flex flex-col justify-between py-[2vw] px-[0.5vw]">
                            <div className='flex  justify-between mb-[1vw]'>
                                <h3 className="line-clamp-2 text-[1.5vw]  text-base font-semibold leading-[2vw] text-black">
                                    {video.title}
                                </h3>
                                <div className='text-black/50 text-[1vw]'>
                                    <EllipsisVertical size={'2vw'} />
                                </div>
                            </div>
                            <p className="mt-2 text-[1vw] text-black/50">{video.details}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div className='flex justify-end mt-[2vw]'>
                <div className='flex items-center gap-[1vw] text-black/60 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-[1.2vw]  border p-[0.5vw] rounded-full'>
                    See More Videos <ArrowRight size={'1.8vw'} strokeWidth={1} />
                </div>
            </div>
        </section>
    )
}

export default Youtube
