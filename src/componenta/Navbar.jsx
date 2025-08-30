import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { TbMenu2,TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const [isScrolled,setIsScrolled] = useState(false)

    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }

    useEffect(()=>{
        const handleScroll =()=>{
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll)
    })

  return (
    <nav>
        <div className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.08)] ': ''}`}>
            <div className="max-w-[1320px] md:px-0 px-10 mx-auto flex md:h-[14vh] h-[12vh] justify-between items-center">
                <Link to='/' className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cify</Link>
                <ul className='md:flex gap-x-15 cursor-pointer hidden '>
                   <Link to='/' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Home</Link>
                   <Link to='/about' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</Link>
                   <Link to='/' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</Link>
                   <Link to='/contact' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact</Link>
                    
                </ul>
                <div className="flex items-center gap-x-5">
                    <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
                        <input type="text" name='text' id='text' placeholder='Search' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'> <IoMdSearch/></button>
                    </div>
                    <a href="#" className='text-zinc-800 text-2xl'><GoHeartFill/></a>
                    <a href="#" className='text-zinc-800 text-2xl'><HiShoppingBag/></a>
                    <a href="#" className='text-zinc-800 text-3xl md:hidden 'onClick={toggleMenu}>{showMenu ? <TbMenu3/>:<TbMenu2/>}</a>
                    
                </div>
                 <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 gap-x-15 cursor-pointer md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ?'left-1/2' : ""}`}>
                    <Link to='/' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Home</Link>
                   <Link to='/' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</Link>
                   <Link to='/' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</Link>
                  <Link to='/contact' className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact</Link>

                      <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
                        <input type="text" name='text' id='text' placeholder='Search' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'> <IoMdSearch/></button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar