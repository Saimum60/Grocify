import React, { useState } from 'react'
import Heading from './Heading'
import ProductsList from './productlist/ProductList'

const Products = () => {

     const categories = ['All', 'Fruits', 'Vegetables', 'Dairy','SeaFood']
     const[activeTab, setActiveTab] = useState('All');

  return (
    <section>
        <div className="max-w-[1320px] mx-auto px-10 py-20 ">
            <Heading hilight='Our' text='Product'/>

            <div className='flex gap-3 justify-center mt-10'>
                {categories.map(category=>{
                    return( 
                        <button key={category} 
                        className={` px-5 py-2 text-lg rounded-lg  ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white ': 'bg-zinc-100'} `} onClick={()=>setActiveTab(category)}>
                            {category}
                        </button>
                    )
                })}
            </div>


        </div>
    </section>
  )
}

export default Products