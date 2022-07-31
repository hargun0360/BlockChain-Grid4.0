import "boxicons"
import React from "react"

const Products = ({productName,productId,expiryDate}) => {

    return(
    <div className='w-full flex justify-center items-center pb-5'>
    <div className='w-[310px] h-[250px] md:w-[400px] md:h-[250px] lg:h-[310px] border rounded border-[#CECCD1] flex items-center'>
        <div className='flex px-10 flex-col space-y-4'>
            <div className='flex flex-col'>
                <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Name</label>
                <div className='text-white font-Josefin font-medium text-2xl'>{productName}</div>
            </div>
            <div className='flex flex-col'>
                <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Id</label>
                <div className='text-white font-Josefin font-medium text-2xl'>{productId}</div></div>
            <div className='flex flex-col'>
                <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Expiry Date</label>
                <div className='text-white font-Josefin font-medium text-2xl'>{
                new Date(expiryDate*1000).toString()
                }</div>  
            </div>
        </div>
    </div>
    </div>
    )
}

export default Products
