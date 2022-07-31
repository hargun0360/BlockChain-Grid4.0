import React from 'react'
import 'boxicons'
import { useState } from 'react';
import {getProductDetails } from '../Web3Client';

const Navbar = () => {

    const [productId, setProductId] = useState('');

    const handleProductIdChange = event => {
        setProductId(event.target.value);
        console.log(event.target.value);
      };

      
    const getDetails = ()=>{
        
        getProductDetails(productId).then((res)=>{
            console.log(res);
        })

        if(productId.length != 0){
        }
    }


    return (
        <div className='w-full h-14 flex justify-between items-center px-4'>
            <p className='text-white font-Josefin text-2xl md:text-2.5xl'>
                Trustify
            </p>
            <ul className='flex px-2'>
                <li>
                    <input type={"text"}
                        className="px-2 font-Josefin font-normal rounded py-0.5 border border-[#B6B3BA] text-[#B6B3BA] focus:outline-none gradient1"
                        placeholder='Enter Product Id'
                        onChange={handleProductIdChange}
                    />
                </li>
                <li className='px-1'>
                    <div className='w-8 h-7 bg-[#6200EE] flex justify-center items-center rounded cursor-pointer' onClick={getDetails}>
                        <box-icon name='search' color='white'></box-icon>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar