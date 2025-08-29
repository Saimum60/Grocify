import React from 'react'
import Button from './Button'
import Fruits from '../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100  bg-no-repeat bg-right bg-contain'style={{backgroundImage: `url(${Fruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1320px] mx-auto px-10 py-20 '>
            <span className='md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div>
                <h3 className='text-zinc-800 md:text-7xl text-4xl font-bold'>First Order Discount</h3>
                <p className='text-zinc-600 my-6'>
                    Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchese.</p>
                <Button content='Discount'/>
            </div>

        </div>
    </section>
  )
}

export default Discount