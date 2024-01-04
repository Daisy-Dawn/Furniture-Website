import React from 'react'
import ProductsCard from './ProductsCard'
import ProductList from '../data/ProductsList'

const NewProducts = () => {
  return (
    <div className='flex flex-col mx-[5rem] py-[4rem] gap-[5rem]  justify-center'>
    <div className="flex justify-center items-center gap-5">
        <div className="w-[50px] h-[3px] bg-lead"></div>
        <h2 className="text-[25px] font-bold text-lead"> New Products</h2>
        <div className="w-[50px] h-[3px] bg-lead"></div>
      </div> 

      <div className='grid grid-cols-4  gap-4'>
      {ProductList.map((product) => (
        <ProductsCard key={product.id} image={product.image} price={product.price} description={product.description} />
      ))}
    </div>
    </div>
  )
}

export default NewProducts
 