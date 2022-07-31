import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'boxicons'
const NavbarAdmin = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-14 flex justify-between items-center px-4'>
            <p className='text-white font-Josefin text-2xl md:text-2.5xl cursor-pointer lg:text-3xl' onClick={()=>navigate("/")} >
                Trustify
            </p>
            <ul className='flex px-2 space-x-4'>
                <li className='text-white font-Josefin text-base cursor-pointer lg:text-xl ' onClick={()=>navigate("/transfer")}>
                    Transfer
                </li>
                <li className='text-white font-Josefin text-base cursor-pointer lg:text-xl' onClick={()=>navigate("/products")}>
                My Products
                </li>
            </ul>
        </div>
    )
}

export default NavbarAdmin