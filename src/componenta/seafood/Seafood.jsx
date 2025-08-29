import React from 'react'
import Banner from '../banner/Banner'
import CategoryPage from '../Categorypage/CategoryPage'
import BgSea from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
       <CategoryPage titel='Meat & SeaFood' bgimage={BgSea} categories={['SeaFood', 'Meat']}/>
    </div>
  )
}

export default Seafood