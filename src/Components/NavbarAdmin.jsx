import React from 'react'
import 'boxicons'
const NavbarAdmin = () => {
    return (
        <div className='w-full h-14 flex justify-between items-center px-4'>
            <p className='text-white font-Josefin text-2xl md:text-2.5xl lg:text-3xl'>
                Trustify
            </p>
            <ul className='flex px-2 space-x-4'>
                <li className='text-white font-Josefin text-base cursor-pointer lg:text-xl '>
                    Transfer
                </li>
                <li className='text-white font-Josefin text-base cursor-pointer lg:text-xl'>
                   My Products
                </li>
            </ul>
        </div>
    )
}

export default NavbarAdmin