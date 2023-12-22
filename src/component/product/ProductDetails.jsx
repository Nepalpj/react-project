import React from 'react'
import { useParams } from 'react-router-dom';
import { HomeData } from '../home/HomeData';

const ProductDetails = () => {
    const {productId}=useParams();
    console.log('productId:', productId)
    const product = HomeData.find((e)=> e.id === Number(productId));
    console.log(product)
  return (
    <>
    <div className='justify-center flex mt-3'>
           <img className=' ' src={product.image_url} alt={product.title} />
           </div>
           <div className='my-2 mb-4 '>
            <h1 className=' justify-center flex'>Product: {product.title}</h1>
            <h1 className='font-bold justify-center flex pt-2'>Rs. {product.price}</h1>
           
    </div>
    </>
  )
}

export default ProductDetails