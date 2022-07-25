import React from 'react'
import Navbar from '../Components/Navbar'
import 'boxicons'
const Generate = () => {
    return (
        <div className='gradient w-full h-screen md:h-full'>
            <Navbar />
            <div className='text-white font-bold font-Josefin text-lg my-7 text-center md:text-4xl lg:text-5xl'>
                Blockchain-based automotive warranty <div className='w-full flex justify-center'>management</div>
                <div className='text-[#CECCD1] font-normal font-Josefin text-xs md:text-sm lg:text-base text-center px-3'>From purchasing product to warranty support, trust can be achieved by transparently managing the records of every product purchase using blockchain technology. </div>
            </div>
            <div className='w-full flex justify-center items-center -my-4 pb-5'>
                <div className='w-[310px] h-[400px] md:w-[400px] md:h-[450px] lg:h-[440px] border rounded border-[#CECCD1]'>
                    <div className='text-white font-bold font-Josefin text-xl md:text-3xl text-center my-2'>Product Details</div>
                    <form className='flex justify-center  items-center flex-col space-y-6'>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Name</label>
                            <input type={"text"} className='rounded md:w-[220px] border border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Id</label>
                            <input type={"text"} className='rounded border md:w-[220px] border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Customer Address</label>
                            <input type={"text"} className='rounded border md:w-[220px] border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Expiry Date</label>
                            <div className='relative'>
                                <input type={"date"} className='rounded border md:w-[220px] border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-7 pl-6' />
                                <div className='absolute top-0 px-0'>
                                    <box-icon name='calendar' color="white" size="22px" ></box-icon>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='bg-[#6200EE] md:w-[220px] text-white rounded px-3 py-1'>GENERATE WARRANTY</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Generate