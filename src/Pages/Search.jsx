import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import 'boxicons'
import { getProductDetails } from '../Web3Client'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [productId, setProductId] = useState('');
    const [arr, setArr] = useState([]);
    const navigate = useNavigate();

    const handleProductIdChange = event => {
        setProductId(event.target.value);
        console.log(event.target.value);
    };


    const getDetails = () => {
        getProductDetails(productId).then((res) => {
            setArr(res);
            console.log(res);
        });
    }

    return (
        <div className='gradient w-full h-screen lg:h-full xl:h-screen'>
            <div className='w-full h-14 flex justify-between items-center px-4'>
                <p className='text-white font-Josefin text-2xl cursor-pointer md:text-2.5xl' onClick={()=>navigate("/")}>
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
            <div className='text-white font-bold font-Josefin text-lg my-5 text-center md:text-4xl lg:text-5xl'>
                Blockchain-based automated warranty <div className='w-full flex justify-center'>management</div>
                <div className='text-[#CECCD1] font-normal font-Josefin text-xs lg:py-4 md:text-sm lg:text-base text-center px-3'>From purchasing product to warranty support, trust can be achieved by transparently managing the records of every product purchase using blockchain technology. </div>
            </div>
            <div className='w-full flex justify-center items-center -my-4 pb-5'>
                <div className='w-[310px] h-[400px] md:w-[550px] md:h-[400px] lg:h-[450px] border rounded border-[#CECCD1]'>
                    {
                        arr.length ? <>
                            <div className='text-white font-bold font-Josefin text-xl md:text-3xl text-center my-2 pb-2'>
                                Product Details</div>
                            <div className='flex px-10 flex-col space-y-6'>
                                <div className='flex flex-col'>
                                    <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Name</label>
                                    <div className='text-white font-Josefin font-medium text-2xl'>{arr[2]}</div>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Product Id</label>
                                    <div className='text-white font-Josefin font-medium text-2xl'>{arr[1]}</div>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Customer Address</label>
                                    <div className='text-white font-Josefin font-medium text-xl'>{arr[3]}</div>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[#CECCD1] font-Josefin font-light text-sm md:text-lg'>Expiry Date</label>
                                    <div className='text-white font-Josefin font-medium text-2xl'>{
                                        new Date(arr[4] * 1000).toString()
                                    }</div>
                                </div>
                            </div>
                        </> : null}
                </div>
            </div>
        </div>
    )
}

export default Search