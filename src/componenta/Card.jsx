import React from 'react'
import Button from './Button'

const Card = ({im}) => {
  return (
    
        <div className='max-w-1320px mx-auto bg-amber-100'>
            <img src={im} alt="" className='w-50' />
            <h2>Fruits & Veggies</h2>
            <p>Fresh, organi produce source daily from local farm</p>
            <Button content='See all'/>
        </div>

    
  )
}

export default Card