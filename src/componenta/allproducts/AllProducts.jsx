import React from 'react'
import CategoryPage from '../Categorypage/CategoryPage'
import BgAll from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
      <CategoryPage titel='All Products' bgimage={BgAll} categories={['All']}/>
    </div>
  )
}

export default AllProducts