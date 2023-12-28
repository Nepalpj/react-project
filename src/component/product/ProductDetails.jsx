import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { HomeData } from '../home/HomeData';

const ProductDetails = () => {
    const {productId}=useParams();
    console.log('productId:', productId)
    const product = HomeData.find((e)=> e.id === Number(productId));
    console.log(product)
  return (
    <>
    <div className=' flex justify-center mt-3'>
    <ReactImageMagnify {...{
    smallImage: {
        alt: product.title,
        isFluidWidth: true,
        src: product.image_url,
       

    },
    largeImage: {
        src: product.image_url,
        width: 800,
        height: 1000,
        marginleft:200
      
    },
    
}} /> 
           </div>
           <div className='my-2 mb-4 '>
            <h1 className='  flex justify-center'>Product: {product.title}</h1>
            <h1 className='font-bold  flex justify-center pt-2'>Rs. {product.price}</h1>
           
    </div>
    </>
  )
}

export default ProductDetails