import React, { useEffect } from 'react'
import ProductsCard from '../components/ProductsCard'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/productSlice'
import DelayedSurface from '../components/animationComponents/DelayedSurface'
import ScrollSurface from '../components/animationComponents/ScrollSurface'

const ProductsOfWeek = () => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const productsOfWeek = products.filter(
    product => product.feature === 'productOfWeek'
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
    <ScrollSurface>
      <div className='flex flex-col xl:mx-[5rem] md:mx-[2rem] mx-[1rem] xl:pt-[5rem] md:pt-[3rem] pt-[5rem]  xl:gap-[5rem] gap-[3rem] justify-center'>
        <div className='flex justify-center items-center gap-5'>
          <div className='md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead'></div>
          <h2 className='md:text-[25px] text-[20px] font-bold text-lead'>
            {' '}
            Products of the week
          </h2>
          <div className='md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead'></div>
        </div>

        <div className='grid xl:grid-cols-4 lg:grid-cols-3 min-[690px]:grid-cols-2 grid-cols-1  gap-4'>
          {productsOfWeek.map((product, index) => (
            <div key={product.id} className='justify-self-center'>
              <DelayedSurface key={product.id} index={index}>
                <ProductsCard
                  link={`/shop/${product.id}`}
                  product={product}
                  id={product.id}
                  image={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${product.image}`}
                  price={product.price}
                  description={product.name}
                />
              </DelayedSurface>
            </div>
          ))}
        </div>
      </div>
    </ScrollSurface>
  )
}

export default ProductsOfWeek
