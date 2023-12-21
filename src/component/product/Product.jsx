import React from 'react'
import { HomeData } from '../home/HomeData'
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'
const Product = () => {
    const {productId} = useParams();
    const product = HomeData.find((e)=> e.id === Number(productId));
  return (
    <div>
        <ProductDetails product={product}/>
    </div>
  )
}

export default Product