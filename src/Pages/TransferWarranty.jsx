import React from 'react'
import NavbarAdmin from '../Components/NavbarAdmin'
import 'boxicons'
import { transfer } from '../Web3Client'
import { useState } from 'react'

const TransferWarranty = () => {

    const [productId, setProductId] = useState('');
    const [receiverAddress, setReceiverAddress] = useState('');


    const handleProductIdChange = event => {
        setProductId(event.target.value);
        console.log(event.target.value);
      };
    
    const handleReceiverAddressChange = event => {
        setReceiverAddress(event.target.value);
        console.log(event.target.value);
      };

    const transferW = ()=>{
        if(productId.length != 0 && receiverAddress.length!=0)
            transfer(productId,receiverAddress)
    }


    return (
        <div className='gradient w-full h-screen xl:h-screen '>
            <NavbarAdmin />
            <div className='text-white font-bold font-Josefin text-2xl my-7 text-center md:text-5xl lg:text-5xl'>
            Transfer warranty
                <div className='text-[#CECCD1] font-normal font-Josefin text-xs md:text-base lg:text-base text-center px-3 my-2'>From purchasing product to warranty support, trust can be achieved by transparently managing the records of every product purchase using blockchain technology. </div>
            </div>
            <div className='w-full flex justify-center items-center my-14 pb-5'>
                <div className='w-[310px] h-[240px] md:w-[380px] md:h-[280px] lg:h-[295px] border rounded border-[#CECCD1]'>
                    <div className='text-white font-bold font-Josefin text-xl md:text-3xl lg:pt-2 text-center pt-1 my-2 pb-2'>Enter product detail</div>
                    <form className='flex justify-center  items-center flex-col space-y-5 '>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product ID</label>
                            <input type={"text"} className='rounded md:w-[220px] border border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1' 
                            onChange={handleProductIdChange}/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>To Address</label>
                            <input type={"text"} className='rounded md:w-[220px] border border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1' 
                            onChange={handleReceiverAddressChange}/>
                        </div>
                        <button type='submit' className='bg-[#6200EE] md:w-[145px] text-white rounded px-3 py-1 text-sm w-[145px] my-7'
                        onClick={transferW}>TRANSFER</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TransferWarranty