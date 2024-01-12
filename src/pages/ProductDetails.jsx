import React from 'react'
import ProductList from '../data/ProductsList'
import {useParams} from 'react-router-dom'

const ProductDetails = () => {
  const {id} = useParams();
  const product = ProductList.find((product) => product.id === parseInt(id));
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* ... (other details) */}
    </div>
  )
}

export default ProductDetails