import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../GlobleDataContext/GlobalDataContext';

const CakeForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [quantity, setQuantity] = useState('500g')
    const [flavour, setFlavour] = useState('Chocolate')
    const [uploadedImage, setUploadedImage] = useState(null) // show reference image in the form when user upload the image
    const [WeightPrice, setWeighPrice] = useState(0)
    const [cakeColor, setCakeColor] = useState('#2A1D07')
    const [birthdayName, setBirthdayName] = useState('')
    const [mobile, setMobileNumber] = useState('')
    const [address, setAddress] = useState('')
    const [deliveryDate, setDeliveryDate] = useState('')
    const [deliveryTime, setDeliveryTime] = useState('')
    const [customization, setCustomization] = useState('')

    // cake Data from Cakes section 
    const { CakeData, SetData } = useContext(GlobalContext)

    // order data to store in the local storage
    const { OrdersData, SetOrdersData } = useContext(GlobalContext)

    // email js to send the form data to the email
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const orderData = {
                service_id: "service_gkdvf1h",
                template_id: "template_5uqiraa",
                user_id: "uKQiWNoaMHE-YJJ0p",

                template_params: {
                    name: name,
                    email: email,
                    cakeImage: CakeData?.CakeImage,
                    title: CakeData?.Title,
                    description: CakeData?.Description,
                    quantity: quantity,
                    flavour: flavour,
                    cakeColor: cakeColor,
                    birthdayName: birthdayName,
                    mobile: mobile,
                    address: address,
                    deliveryDate: deliveryDate,
                    deliveryTime: deliveryTime,
                    // uploadedImage: uploadedImage,
                    Customization: customization,
                    price: Number(CakeData?.Price || 0) + Number(WeightPrice || 0)
                }
            };

            const response = await fetch(
                "https://api.emailjs.com/api/v1.0/email/send",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(orderData)
                }
            );

            console.log("STATUS:", response.status);

            const result = await response.text();

            console.log("EMAILJS RESPONSE:", result);

            if (response.ok) {

                SetOrdersData((prevOrders) => [
                    ...prevOrders,
                    orderData.template_params
                ]);

                alert("Order sent successfully");
            } else {
                alert("Failed to send order");
            }
        } catch (error) {
            console.error("Error sending order:", error);
        }
    }

    return (
        <div className=' flex-2 p-[2vw] '>

            <div className='flex gap-[2vw]  '>
                <div>
                    <h1 className='text-[3vw] font-bold text-white'>{CakeData?.Title}</h1>
                    <p className='text-[1vw] text-white/60'>{CakeData?.Discription}</p>
                </div>
            </div>

            <form className='space-y-5 mt-[2vw]' onSubmit={handleSubmit}>
                <div>
                    <p className='text-[1.2vw] text-white/70'>Quantity</p>
                    <div className='mt-[1vw] flex gap-2'>
                        {['500g', '1kg', '2kg'].map((item) => (
                            <button type='button' key={item}
                                onClick={() => {
                                    setQuantity(item);
                                    if (item === '1kg') {
                                        setWeighPrice(100);
                                    } else if (item === '2kg') {
                                        setWeighPrice(200);
                                    } else {
                                        setWeighPrice(0);
                                    }
                                }

                                }

                                className={`rounded-full border border-white/10 px-[1vw] text-[1.2vw] py-[0.5vw]
                                            ${quantity === item ? 'bg-white text-black' : 'bg-transparent text-white/70'}`}>

                                {item}

                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className='text-[1.2vw] text-white/70'>Flavour</p>
                    <div className='mt-[1vw] flex flex-wrap gap-2'>
                        {CakeData?.Flavours.map((item) => (
                            <button type='button' key={item} onClick={() => setFlavour(item)} className={`rounded-full border border-white/10 px-[1vw] text-[1.2vw] py-[0.5vw] ${flavour === item ? 'bg-white text-black' : 'bg-transparent text-white/70'}`}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='grid gap-4 sm:grid-cols-2'>

                    <label className='text-[1.2vw] flex flex-col gap-[1vw] text-white/70'>
                        Your Name

                        <input
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            required
                            placeholder='Enter your name'
                            className='h-[3.7vw] px-[1vw] w-full rounded-lg border border-white/10 bg-transparent text-white'
                        />
                    </label>

                    <label className='text-[1.2vw] flex flex-col gap-[1vw] text-white/70'>
                        Your Email

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            required
                            placeholder='Enter your email'
                            className='h-[3.7vw] px-[1vw] w-full rounded-lg border border-white/10 bg-transparent text-white'
                        />
                    </label>

                    <label className='text-[1.2vw] text-white/70 flex flex-col gap-[1vw]'>Cake color
                        <input onChange={(e) => setCakeColor(e.target.value)} type='color' defaultValue='#2A1D07' className='h-[3.7vw] w-full rounded border border-white/10' />
                    </label>

                    <label className='text-[1.2vw] flex flex-col gap-[1vw] text-white/70'>Birthday name
                        <input onChange={(e) => setBirthdayName(e.target.value)} type='text' required placeholder='Name on cake' className='h-[3.7vw] px-[1vw] w-full rounded-lg border border-white/10 bg-transparent text-white ' />
                    </label>

                    <label className='text-[1.2vw] flex flex-col gap-[1vw] text-white/70'>Delivery date
                        <input onChange={(e) => setDeliveryDate(e.target.value)} type='date' required className='h-[3.7vw] px-[1vw] w-full rounded-lg border border-white/10 bg-transparent text-white' />
                    </label>

                    <label className='text-[1.2vw] flex flex-col gap-[1vw] text-white/70'>Delivery time
                        <input onChange={(e) => setDeliveryTime(e.target.value)} type='time' required className='h-[3.7vw] px-[1vw] w-full rounded-lg border border-white/10 bg-transparent text-white' />
                    </label>

                    <label className='text-[1.2vw] flex flex-col gap-[1vw] text-white/70'>Mobile Number
                        <input onChange={(e) => setMobileNumber(e.target.value)} type='text' required className='h-[3.7vw] px-[1vw] w-full rounded-lg border border-white/10 bg-transparent text-white' />
                    </label>

                </div>

                <label className='block text-[1.2vw] text-white/70'>
                    Delivery address
                    <textarea onChange={(e) => setAddress(e.target.value)} required rows='3' placeholder='Enter complete address' className='mt-1 w-full rounded-lg border border-white/10 bg-transparent p-3 resize-none text-white ' />
                </label>

                <label className='block cursor-pointer rounded-lg border-2 border-dashed border-white/10 bg-transparent p-[1vw] text-[1.2vw] text-white/70'>
                    Upload reference image
                    <input type='file' accept='image/*'
                        onChange={(e) => {
                            const file = e.target.files?.[0];

                            if (file) {
                                setUploadedImage(file);
                            }
                        }}
                        className='mt-2 w-full' />
                    {uploadedImage && <span className='mt-1 block text-orange-600'>
                        Image uploaded successfully!
                    </span>
                    }
                </label>

                <textarea onChange={(e) => setCustomization(e.target.value)} placeholder='Any customization or special instructions?' rows='2' className='w-full rounded-lg border border-white/10 bg-transparent p-3 resize-none text-white' />

                <div className='flex items-center justify-between border-t border-white/10 pt-4'>
                    <p className='text-xl font-bold text-white'>Total: {CakeData?.Price + WeightPrice} </p>
                    <button type='submit' className='rounded-full px-6 py-3 border border-white/10 text-white/80 hover:bg-white transition-all duration-200 hover:text-black'>Place Order</button>
                </div>

            </form>

        </div>
    )
}

export default CakeForm
