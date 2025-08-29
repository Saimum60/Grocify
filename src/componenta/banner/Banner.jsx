import React from 'react'

const Banner = ({titel,bgimage}) => {
  return (
    <div className='h-[50vh] mt-25 bg-zinc-500 flex justify-center items-center bg-center bg-cover relative'
    style={{backgroundImage: `url(${bgimage})`}}>
        <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>{titel}</h2>
        <div className='bg-black/50 absolute inset-0 '></div>
    </div>
  )
}

export default Banner