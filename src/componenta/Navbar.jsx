import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";


const Navbar = () => {
  return (
    <nav>
        <div className="">
            <div className="max-w-[1320px] mx-auto flex md:h-[14vh] h-[14vh] justify-between items-center">
                <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cify</a>
                <ul className='flex gap-x-15 cursor-pointer '>
                    <li className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Home</li>
                    <li className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</li>
                    <li className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</li>
                    <li className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</li>
                </ul>
                <div className="flex items-center gap-x-5">
                    <div className="flex p-1 border-2 border-orange-500 rounded-full ">
                        <input type="text" name='text' id='text' placeholder='Search' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'> <IoMdSearch/></button>
                    </div>
                    <a href="#" className='text-zinc-800 text-2xl'><GoHeartFill/></a>
                    <a href="#" className='text-zinc-800 text-2xl'><HiShoppingBag/></a>
                    
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar