import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId}=useParams
    const product = HomeData.find((e)=> e.id === Number(productId));
    console.log(product)
  return (
    <div>
            <img src='product.image_url'/>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
    </div>
  )
}

export default ProductDetails