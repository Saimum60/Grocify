import React from 'react'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import Button from '../Button';

const Contact = () => {
  return (
    <section className='bg-gradient-to-b from-red-300 to-cyan-600 '>
        <div className='max-w-[1320px] mx-auto  px-80  pt-50'>
            <div className= 'grid grid-cols-0   justify-center items-center  '>
               <form >
                  <label className='flex '> <span className=' text-3xl'><MdDriveFileRenameOutline/></span> Name</label>
            <input className='w-66 h-13 flex  text-xl outline-none border-2 ' type="text" required='text' name='text'  />
               <label className='flex pt-5'> <span className='flex text-3xl'><MdEmail/></span> Email</label>
            <input className='w-66 h-13 text-xl outline-none border-2 ' type="text" required='text' name='text'  />
               <label className='flex pt-5 '> <span className='flex text-3xl'><IoHome/></span> Address</label>
            <input className='w-66 h-13 text-xl outline-none border-2 ' type="text" required='text' name='text'  />
               <label className='flex pt-5'> <span className='flex text-3xl'><FaPhoneSquareAlt /></span>Phone</label>
            <input className='w-66 h-13 text-xl outline-none border-2 ' type="text" required='text' name='text'  />
               </form>
          
            
        </div>
        <div className='pl-70 pt-10 pb-30 justify-center item-center'>
            <Button className='gap-y-5' content='Submit'/>
        </div>
        
        </div>
        
    </section>
  )
}

export default Contact