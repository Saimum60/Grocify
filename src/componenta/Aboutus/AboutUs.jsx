import React from 'react'
import Banner from '../banner/Banner'
import About from '../../assets/re.jpg'

const AboutUs = () => {
    return (
        <section className=''>
            <div className='max-w-[1320px] mx-auto px-10  '>
                <div>
                    <img src={About} alt="" className='w-full' />
                </div>
                <div >
                    <h4 className='text-4xl font-bold pt-5'>Our History</h4>
                    <p className='text-lg text-zinc-700 pt-5'>After returning from a trip to Europe, Ray Berry and his wife Beverly were inspired to bring the charm and essence of an open, European-style food market to America.  They wanted to offer a more intimate and personalized shopping experience than the warehouse-type supermarkets popular at the time.

                        Leaving his job at The Southland Co. overseeing 3,600 7-Eleven stores, the Berry’s poured their life savings into their dream: creating a warm and inviting shopping experience filled with the freshest produce, meats hand-trimmed by butchers in-store, fresh-cut flowers, and the finest foods and ingredients from around the world.


                        While searching for the ideal place to make their dream a reality, the Berry’s fell in love with the quaint community of Greensboro, North Carolina.  On March 5, 1982, the first The Fresh Market store opened in Greensboro on Lawndale Drive, where a store still stands today. Everything about this small, boutique specialty grocery store was designed to enhance the food shopping experience.

                        The initial 14,000-square-foot store differentiated itself from conventional supermarkets with a farmer’s market atmosphere, complete with locally-grown produce, bins of freshly roasted coffee, an old-world style butcher shop and fish market, in-store bakery, fresh cheeses and cured meats, and floral stands.

                        The original store became the blueprint for other locations to follow. Today, with 166 locations in 22 states, The Fresh Market is still committed to our original values of providing guests with inspiring, fresh food to make everyday eating extraordinary.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs