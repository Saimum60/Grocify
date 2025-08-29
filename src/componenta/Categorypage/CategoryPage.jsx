import React from 'react'
import Banner from '../banner/Banner'
import ProductList from '../productlist/ProductList'
import Card from '../Card'

const CategoryPage = ({titel,bgimage,categories=[]}) => {

    let filteredItems = categories.includes('All')
    ?ProductList
    :ProductList.filter(item=> categories.includes(item.category))


  const renderProduct = filteredItems.map(product=>{
    return(
        <Card image={product.image} name={product.name} price={product.price}/>
    )
  })

  return (
    <div className=''>
        <Banner titel={titel} bgimage={bgimage}/>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1320px] mx-auto px-10'>
            {renderProduct}
        </div>
    </div>
  )
}

export default CategoryPage