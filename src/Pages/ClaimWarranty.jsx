import React from 'react'
import NavbarAdmin from '../Components/NavbarAdmin'
import 'boxicons'
import { claimWarranty } from '../Web3Client'
import { useState } from 'react'

const ClaimWarranty = () => {

    const [productId, setProductId] = useState('');

    const handleProductIdChange = event => {
        setProductId(event.target.value);
        console.log(event.target.value);
      };

      const claim = ()=>{
        if(productId.length != 0 )
        claimWarranty({productId});
    }

    return (
        <div className='gradient w-full h-screen '>
            <NavbarAdmin />
            <div className='text-white font-bold font-Josefin text-xl my-7 text-center md:text-4xl lg:text-5xl'>
                Blockchain-based automated warranty <div className='w-full flex justify-center'>management</div>
                <div className='text-[#CECCD1] font-normal font-Josefin text-xs md:text-sm lg:text-base text-center px-3 my-2'>From purchasing product to warranty support, trust can be achieved by transparently managing the records of every product purchase using blockchain technology. </div>
            </div>
            <div className='w-full flex justify-center items-center my-14 pb-5'>
                <div className='w-[310px] h-[190px] md:w-[380px] md:h-[200px] lg:h-[200px] border rounded border-[#CECCD1]'>
                    <div className='text-white font-bold font-Josefin text-xl md:text-3xl text-center pt-1 my-2 pb-2'>Enter product detail</div>
                    <form className='flex justify-center  items-center flex-col '>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product ID</label>
                            <input type={"text"} className='rounded md:w-[220px] border border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1'
                            onChange={handleProductIdChange} />
                        </div>
                        <button type='submit' className='bg-[#6200EE] md:w-[220px] text-white rounded px-3 py-1 text-sm w-[195px] my-5'
                        onClick={claim}>CLAIM WARRANTY</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ClaimWarranty