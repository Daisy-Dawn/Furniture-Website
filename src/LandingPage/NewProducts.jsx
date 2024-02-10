import React, { useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/productSlice'
import ProductsCard from '../components/ProductsCard'
import Surface from '../components/animationComponents/Surface'
import DelayedSurface from '../components/animationComponents/DelayedSurface'

const NewProducts = () => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const newProducts = products.filter(
    product => product.feature === 'newProducts'
  )

  if (loading) {
    return (
      <div className='flex justify-center items-center w-full'>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} />
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center items-center w-full'>
        Error: {error}
      </div>
    )
  }

  return (
    <div className='flex flex-col xl:mx-[5rem] md:mx-[2rem] mx-[1rem] mt-8 xl:py-[2.5rem] py-[3rem] lg:gap-[5rem] gap-[2rem] justify-center'>
      <Surface>
        <div className='flex justify-center items-center gap-5'>
          <div className='md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead'></div>
          <h2 className='md:text-[25px] text-[20px] font-bold text-lead'>
            New products{' '}
          </h2>
          <div className='md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead'></div>
        </div>
      </Surface>

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-4'>
        {newProducts.map((product, index) => (
          <div key={product.id} className='justify-self-center'>
            <DelayedSurface index={index}>
              <ProductsCard
                link={`/shop/${product.id}`}
                product={product}
                id={product.id}
                key={product.id}
                image={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${product.image}`}
                price={product.price}
                description={product.name}
              />
            </DelayedSurface>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewProducts
