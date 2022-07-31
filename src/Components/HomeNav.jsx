import React from 'react'
import 'boxicons'
import { useNavigate } from 'react-router-dom'
const HomeNav = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-14 flex justify-between items-center px-4'>
            <p className='text-white font-Josefin text-2xl cursor-pointer md:text-2.5xl lg:text-3xl' onClick={()=>navigate("/")}>
                Trustify
            </p>
            <ul className='flex px-2 space-x-4'>
                <li className='text-white font-Josefin text-base cursor-pointer lg:text-xl '>
                    <a href='/search'>Search</a>
                </li>
            </ul>
        </div>
    )
}

export default HomeNav