import React from 'react'
import Heading from './Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Bas from "../assets/basket-full-vegetables.png"

const Values = () => {

      const leftvalues = value.slice(0,2).map(item=>{
        return(
            <div key={item.id}  className="flex  md:flex-row-reverse items-center gap-7">
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-orange-500 w-15 h-15 rounded-full'> {item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.titel}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
      })


      const rightvalues = value.slice(2).map(item=>{
        return(
            <div key={item.id} className="flex items-center gap-7 ">
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-orange-500 w-15 h-15 rounded-full'> {item.icon}</span>
                </div>
                <div className=''>
                    <h3 className='text-zinc-800 text-3xl  font-bold'>{item.titel}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
      })

  return (
    <section>
        <div className='max-w-[1320px] mx-auto px-10 py-20'>
            <Heading hilight='Our' text='Values'/>

            <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">

                <div className="md:min-h-100 gap-15 flex flex-col justify-between ">
                    {leftvalues}

                </div>


                <div className='md:flex w-1/2 hidden'>
                    <img src={Bas} alt="" />
                </div>

                <div className="md:min-h-100 gap-15 flex flex-col justify-between">
                    {rightvalues}

                </div>

            </div>

        </div>
    </section>
  )
}

export default Values

const value =[
    {
        id:1,
        titel:'Trust',
        para:'It is a long established fast that a reander will be distracted by the readable',
        icon: <FaHeart/>

    },
    {
        id:2,
        titel:'Always Fresh',
        para:'It is a long established fast that a reander will be distracted by the readable',
        icon: <FaLeaf/>

    },
    {
        id:3,
        titel:'Food Safety',
        para:'It is a long established fast that a reander will be distracted by the readable',
        icon: <FaShieldAlt/>

    },
    {
        id:4,
        titel:'100% Organic',
        para:'It is a long established fast that a reander will be distracted by the readable',
        icon: <FaSeedling/>

    },
]