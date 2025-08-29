import React from 'react'
import CategoryPage from '../Categorypage/CategoryPage'
import BgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
        
        <CategoryPage titel='Fruits & Veggies' bgimage={BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits