import React from 'react'

const Heading = ({hilight,text}) => {
  return (
     <div className="w-fit mx-auto ">
                <h2 className='text-5xl font-bold'><span className='text-orange-500'>{hilight}</span> {text}</h2>
                <div className="w-30 h-1 bg-orange-300 mt-6 ml-auto"></div>
            </div>
  )
}

export default Heading