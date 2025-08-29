import React from 'react'
import Heading from './Heading'
import Fruits from '../assets/fruits-and-veggies.png'
import Seafood from '../assets/meat-and-seafood.png'
import Dairy from '../assets/dairy-and-eggs.png'
import Button from './Button'
import { Link } from 'react-router-dom'


const Category = () => {

    const renderCard = category.map(card=>{
        return(
            <div className="flex-1 basis-[300px]" key={card.id}>
                <div className="w-full min-h-[30vh] relative mb-10  ">
                    <img src={card.image} className='absolute bottom-0' />
                </div>
                <div className="bg-zinc-100 pt-17 p-8 rounded-xl ">
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scal-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className="max-w-[1320px] mx-auto px-10 py-30">
                <Heading hilight='Shop' text='by Category' />

                <div className='flex flex-wrap gap-10 md:mt-15 '>
                    {renderCard}
                </div>
            </div>
        </section>
    )
}

export default Category

const category =[
    {
        id:1,
        title:'Fruits & Veggies',
        description:'Fresh, organi produce source daily from local farm. Explor awide range of seasonal fruits and crisp vegetable',
        image: Fruits,
        path: '/fruits'
    },
    {
        id:2,
        title:'Meat & Seafood',
        description:'Fresh, organi produce source daily from local farm. Explor awide range of seasonal fruits and crisp vegetable',
        image: Seafood,
        path: '/seafood'
    },
    {
        id:3,
        title:'Dairy & Eggs',
        description:'Fresh, organi produce source daily from local farm. Explor awide range of seasonal fruits and crisp vegetable',
        image: Dairy,
        path: '/dairy'
    },
]