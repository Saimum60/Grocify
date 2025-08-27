import React from 'react'
import Ban from '../assets/grocery.png'
import Button from './Button'

const Hero = () => {
  return (
    <section>
        <div className="max-w-[1320px] mx-auto  flex items-center pt-25">

            <div className="flex-1 ">
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality</span>
                <h1 className='text-7xl/20  fint-bold mt-4'>
                    Testy Organic <br /><span className='text-orange-500'>Fruits</span>  & <span className='text-orange-500'>Veggies</span> <br /> In Your City
                </h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
                    Bred for a high content of beneficial substance. Our products are all fresh and healthy
                </p>
                <Button content='Shop Now'/>


            </div>
            <div className="flex-1 ">

                <img src={Ban} alt="" />
            </div>

        </div>
    </section>
  )
}

export default Hero