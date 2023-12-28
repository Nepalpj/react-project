import React from 'react'
import { Link } from 'react-router-dom'
const Details = (props) => {
  return (
    <div className="bg-{#fff} flex  flex-col items-center p-4 space-y-2">
    <Link to = {`/product/${props.id}`} >
    <img className='w-32 h-32 object-contain flex justify-center  rounded-sm transition duration-500 ease-in-out transform 
                hover:-translate-y-1 hover:scale-105 sm:mb-4 cursor-pointer' src={props.image_url} alt={props.productName}/>
    <h2 className='flex text-justify '>{props.title}</h2>
    <p className='font-bold flex  '>Rs.{props.price}</p>
    </Link>
   </div>
  )
}

export default Details