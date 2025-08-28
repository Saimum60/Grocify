import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from './Button'

const Card = () => {
  return (
    <div>
        <div>
            <span>
                <FaHeart/>
            </span>
            <button>
                <FaPlus/>
            </button>
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h3>titel</h3>
            <p>3.00</p>
            <Button content='Shop Now'/>
        </div>
    </div>
  )
}

export default Card