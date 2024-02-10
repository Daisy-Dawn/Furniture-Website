import React, { useEffect } from 'react'
import Clock from '../components/Clock'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/productSlice'

const LimitedOffers = () => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const limitedOffer = products.filter(
    product => product.feature === 'limitedOffer'
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
    <>
      {limitedOffer.map(product => (
        <div
          key={product.id}
          className='grid items-center font-nunito lg:grid-cols-2 grid-cols-1 xl:px-[5rem] md:px-[2rem] px-[1rem] md:my-[4rem] lg:py-[2rem] xl:py-[4rem] py-[1rem]  gap-[3rem]  md:gap-[4rem] bg-lead'
        >
          <Clock id={product.id} />
          <div key={product.id} className=''>
            <img
              className='w-full h-full object-cover rounded-[10px]'
              src={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${product.image}`}
              alt={product.name}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default LimitedOffers
