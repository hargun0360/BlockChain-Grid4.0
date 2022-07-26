import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import 'boxicons'
const Warranty = () => {
    return (
        <div className='gradient w-full h-screen lg:h-full xl:h-screen'>
            <Navbar />
            <div className='text-white font-bold font-Josefin text-lg my-7 text-center md:text-4xl lg:text-5xl'>
                Blockchain-based automotive warranty <div className='w-full flex justify-center'>management</div>
                <div className='text-[#CECCD1] font-normal font-Josefin text-xs md:text-sm lg:text-base text-center px-3'>From purchasing product to warranty support, trust can be achieved by transparently managing the records of every product purchase using blockchain technology. </div>
            </div>
            <div className='w-full flex justify-center items-center -my-4 pb-5'>
                <div className='w-[310px] h-[400px] md:w-[400px] md:h-[400px] lg:h-[410px] border rounded border-[#CECCD1]'>
                    <div className='text-white font-bold font-Josefin text-xl md:text-3xl text-center my-2 pb-2'>Product Details</div>
                    <div className='flex px-10 flex-col space-y-6'>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Name</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>Nike shoes</div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Id</label>
                            <div className='text-white font-Josefin font-medium text-2xl'>3324r3r24r42r</div></div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Customer Address</label>
                            <div className='text-white font-Josefin font-medium text-xl'>address ke liyye yaha dekh</div></div>
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

export default Warranty