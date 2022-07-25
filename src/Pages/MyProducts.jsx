import React from 'react'
import Navbar from '../Components/Navbar'
import 'boxicons'
const MyProducts = () => {
    return (
        <div className='gradient w-full h-full'>
            <Navbar />
            <div className='text-white font-bold font-Josefin text-2xl my-7 text-center md:text-4xl lg:text-5xl'>
            Your Product Details
                <div className='text-[#CECCD1] font-normal font-Josefin text-xs md:text-sm lg:text-base text-center px-3'>From purchasing product to warranty support, trust can be achieved by transparently managing the records of every product purchase using blockchain technology. </div>
            </div>
            <div className='w-full flex justify-center items-center pb-5'>
                <div className='w-[310px] h-[250px] md:w-[400px] md:h-[250px] lg:h-[250px] border rounded border-[#CECCD1] flex items-center'>
                    <div className='flex px-10 flex-col space-y-4'>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Name</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>Nike shoes</div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Id</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>3324r3r24r42r</div></div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Expiry Date</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>22/10/2000</div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center pb-5'>
                <div className='w-[310px] h-[250px] md:w-[400px] md:h-[250px] lg:h-[250px] border rounded border-[#CECCD1] flex items-center'>
                    <div className='flex px-10 flex-col space-y-4'>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Name</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>Nike shoes</div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Id</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>3324r3r24r42r</div></div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Expiry Date</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>22/10/2000</div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center pb-5'>
                <div className='w-[310px] h-[250px] md:w-[400px] md:h-[250px] lg:h-[250px] border rounded border-[#CECCD1] flex items-center'>
                    <div className='flex px-10 flex-col space-y-4'>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Name</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>Nike shoes</div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Id</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>3324r3r24r42r</div></div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Expiry Date</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>22/10/2000</div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProducts