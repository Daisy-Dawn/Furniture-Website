import React from 'react'
import {ProductOfWeek} from '../data/ProductsList'
import ProductsCard from './ProductsCard'

const ProductsOfWeek = () => {
  return (
    <div className='flex flex-col xl:mx-[5rem] md:mx-[2rem] mx-[1rem] xl:pt-[2rem] pt-[4rem]  xl:gap-[5rem] gap-[3rem] justify-center'>
      <div className="flex justify-center items-center min-[270px]:gap-2 min-[350px]:gap-5">
        <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
        <h2 className="md:text-[25px] min-[270px]:text-[18px] min-[350px]:text-[20px] font-bold text-lead capitalize">Products of the Week </h2>
        <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
      </div>

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4'>
        {ProductOfWeek.map((product) => (
        <ProductsCard key={product.id} image={product.image} price={product.price} description={product.description} />
      ))}
      </div>

    </div>
  )
}

export default ProductsOfWeek