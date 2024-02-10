import React, { useEffect } from 'react'
import Button from '../components/Button'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/productSlice'

const Highlight2 = () => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const highlighProducts2 = products.filter(
    product => product.feature === 'highlights2'
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
      {highlighProducts2.map(product => (
        <div
          key={product.id}
          className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center md:justify-start xl:mx-[5rem] md:mx-[2rem] mx-[1rem] lg:py-[4rem] py-[0rem] xl:gap-[4rem] md:gap-[2rem] gap-[0.5rem]'
        >
          <div key={product.id} className='lg:col-span-2  h-[500px]  '>
            <img
              className='rounded-[10px] w-full h-full object-cover'
              src={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${product.image}`}
              alt={product.name}
            />
          </div>

          <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
            <h2 className='text-lead font-bold text-[25px] capitalize text-center md:text-left'>
              Match Furniture Styles
            </h2>
            <p className='lg:my-[2rem] my-[1rem] text-bGrey text-[18px] text-center md:text-left'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since.
            </p>
            <div className='w-1/2 md:w-full mt-2 md:mt-0'>
              <Button id={product.id} text='Shop Now' />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Highlight2
