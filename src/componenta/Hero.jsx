import React from 'react'
import Ban from '../assets/grocery.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
        <div className=" min-h-screen max-w-[1320px] md:px-0 px-10 mx-auto  flex md:flex-row flex-col items-center md:pt-25 pt-35">

            <div className="flex-1 ">
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality</span>
                <h1 className='md:text-7xl/20 text-5xl/14 fint-bold mt-4'>
                    Testy Organic <br /><span className='text-orange-500'>Fruits</span>  & <span className='text-orange-500'>Veggies</span> <br /> In Your City
                </h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
                    Bred for a high content of beneficial substance. Our products are all fresh and healthy
                </p>
                <Link to='/allproducts' className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scal-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>Shop Now</Link>


            </div>
            <div className="flex-1 ">

                <img src={Ban} alt="" />
            </div>

        </div>
    </section>
  )
}

export default Hero