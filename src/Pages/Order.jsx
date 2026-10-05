import { MoveLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {

    // navigation to previous route
    const Navigate = useNavigate()

    const Orders = localStorage.getItem("OrdersData")
    const OrdersArray = JSON.parse(Orders)

    return (
        <div className={` ${OrdersArray.length<=2 ? 'h-screen': 'h-full'}  w-full lg:mt-[5vw] mb-[10vw] lg:mt-[10vw] mt-[15vw] px-[2vw]`}>
            <div className='lg:mb-[1vw] mb-[4vw]'>
                <button onClick={() => { Navigate(-1) }} className='rounded-full flex lg:text-[1.5vw] items-center  px-[1vw] py-[0.5vw] gap-[0.5vw] border border-black/10 text-black hover:bg-black hover:text-white transition-all duration-200 hover:text-black'><MoveLeft size={'2vw'} />Back to Prev</button>
            </div>

            <div>
                {
                    OrdersArray.map((elem, idx) => {
                        return (
                            <div key={idx} className='lg:h-[10vw] rounded-lg hover:shadow-xs shadow-black/50 transition-all duration-300 hover:-translate-y-0.5 w-full bg-white/10 mb-[2vw] p-4 flex  gap-[2vw] lg:gap-[1vw] border border-black/10 '>
                                <div className='lg:h-[8vw]  w-[23vw] lg:w-[8vw] overflow-hidden'>
                                    <img className='h-full w-full object-cover' src={elem.cakeImage} alt="" srcset="" />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col gap-[1vw]'>
                                        <div>
                                            <h1 className='lg:text-[1.5vw]'>{elem.title}</h1>
                                            <span className='text-black/60 lg:text-[1vw]'>Quantity: {elem.quantity}</span>
                                        </div>
                                        <span className='border w-fit lg:px-[1vw] px-[1.5vw]  lg:text-[1.2vw] rounded-full bg-black text-white'>
                                            ₹{elem.price}
                                        </span>
                                    </div>
                                    <div className='flex items-end'>
                                        <span onClick={() => {
                                            localStorage.removeItem(Orders[idx])
                                        }} className='border w-fit text-nowrap px-[1vw] py-[0.2vw] rounded-full hover:bg-black hover:text-white cursor-pointer'>
                                            Order Cancel
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Order
