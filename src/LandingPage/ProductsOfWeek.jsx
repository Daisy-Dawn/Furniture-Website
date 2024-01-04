import React from 'react'
import {ProductOfWeek} from '../data/ProductsList'
import ProductsCard from './ProductsCard'

const ProductsOfWeek = () => {
  return (
    <div className='flex flex-col mx-[5rem] pt-[2rem]  gap-[5rem]  justify-center'>
      <div className="flex justify-center items-center gap-5">
        <div className="w-[50px] h-[3px] bg-lead"></div>
        <h2 className="text-[25px] font-bold text-lead"> Products Of The Week</h2>
        <div className="w-[50px] h-[3px] bg-lead"></div>
      </div> 

      <div className='grid grid-cols-4  gap-4'>
        {ProductOfWeek.map((product) => (
        <ProductsCard key={product.id} image={product.image} price={product.price} description={product.description} />
      ))}
      </div>

    </div>
  )
}

export default ProductsOfWeek