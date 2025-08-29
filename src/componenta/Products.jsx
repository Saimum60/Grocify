import React, { useState } from 'react'
import Heading from './Heading'
import ProductList from './productlist/ProductList'
import Card from './Card'
import Button from './Button'
import { Link } from 'react-router-dom'

const Products = () => {

     const categories = ['All', 'Fruits', 'Vegetables', 'Dairy','SeaFood']
     const[activeTab, setActiveTab] = useState('All');


     let filterdItems = activeTab === 'All'
     ? ProductList : ProductList.filter(item=>item.category === activeTab);


     const renderCard= filterdItems.slice(0,8).map(product=>{
        return(
            <Card image={product.image} name={product.name} price={product.price}/>
        )
     })

  return (
    <section>
        <div className="max-w-[1320px] mx-auto px-10 py-20 ">
            <Heading hilight='Our' text='Product'/>

            <div className='flex flex-wrap gap-3 justify-center mt-10'>
                {categories.map(category=>{
                    return( 
                        <button key={category} 
                        className={` px-5 py-2 text-lg rounded-lg  ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white ': 'bg-zinc-100'} `} onClick={()=>setActiveTab(category)}>
                            {category}
                        </button>
                    )
                })}
            </div>

            <div className='grid grid-col-1 md:grid-cols-4 gap-9 mt-20'>
                {renderCard}
            </div>

            <div className='mt-15 mx-auto w-fit'>
                <Link to='/allproducts' className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scal-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>View All </Link>
            </div>


        </div>
    </section>
  )
}

export default Products