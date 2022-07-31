import React from 'react'
import Navbar from '../Components/Navbar'
import 'boxicons';
import { generateWarranty } from '../Web3Client'
import { useState } from 'react'
import HomeNav from '../Components/HomeNav';


const Generate = () => {

    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [expiryDate, setExpiryDate] = useState('');


    const handleProductNameChange = event => {
      setProductName(event.target.value);
      console.log(event.target.value);
    };

    const handleProductIdChange = event => {
        setProductId(event.target.value);
        console.log(event.target.value);
      };
    
    const handleOwnerAddressChange = event => {
        setOwnerAddress(event.target.value);  
        console.log(event.target.value);
      };    

    const handleExpiryDateChange = event => {
        var date = new Date(event.target.value).getTime()/1000;
        console.log(date);
        setExpiryDate(date);
      };


    const generate = (e)=>{
        e.preventDefault();
        // if(productId.length != 0 && productName.length !=0 && ownerAddress.length!=0 && expiryDate.length!=0)
        generateWarranty({productId,productName,ownerAddress,expiryDate});
    }

    return (
        <div className='gradient w-full h-screen lg:h-screen '>
            <HomeNav />
            <div className='text-white font-bold font-Josefin text-lg my-7 text-center md:text-4xl lg:text-5xl'>
                Blockchain-based automated warranty <div className='w-full flex justify-center'>management</div>
                <div className='text-[#CECCD1] font-normal font-Josefin text-xs md:text-sm lg:text-base text-center lg:my-4 lg:py-2 px-3'>From purchasing product to warranty support, trust can be achieved by transparently managing the records of every product purchase using blockchain technology. </div>
            </div>
            <div className='w-full flex justify-center items-center -my-4 pb-5'>
                <div className='w-[310px] h-[400px] md:w-[400px] md:h-[450px] lg:h-[475px] border rounded border-[#CECCD1]'>
                    <div className='text-white font-bold font-Josefin text-xl md:text-3xl text-center my-2'>Product Details</div>
                    <form className='flex justify-center  items-center flex-col space-y-6' onSubmit={generate}>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Name</label>
                            <input type={"text"} className='rounded md:w-[220px] border border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1' 
                            onChange={handleProductNameChange}/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Id</label>
                            <input type={"text"} className='rounded border md:w-[220px] border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1' 
                            onChange={handleProductIdChange}/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Customer Wallet Address</label>
                            <input type={"text"} className='rounded border md:w-[220px] border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-1'
                            onChange={handleOwnerAddressChange} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Expiry Date</label>
                            <div className='relative'>
                                <input type={"date"} className='rounded border md:w-[220px] border-[#CECCD1] bg-transparent text-[#B6B3BA] focus:outline-none px-7 pl-6' 
                                onChange={handleExpiryDateChange}/>
                                <div className='absolute top-2 px-0'>
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