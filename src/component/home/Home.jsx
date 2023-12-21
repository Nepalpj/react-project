import React from 'react'
import Carousell from './Carousel'
import { HomeData } from './HomeData'
import Details from '../details/Details'

const Home = () => {
  return (
    <>
    <Carousell/>
    
    <div className="container bg-{#f5f5f5} mx-auto py-8 ">
      <strong className='mx-4 text-2xl text-gray-500'>Top Picks</strong>
     
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {HomeData.map((value,i)=>(
            <>
             <Details key={i} id={value.id} title={value.title} image_url={value.image_url} price={value.price}/>

            </>
        ))}
      </div>
        </>
     </div>
    </>
  )
}

export default Home