import React, { useEffect } from 'react'
import Button from '../components/Button'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/productSlice'

const MatchStyles = () => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const matchStyles = products.filter(
    product => product.feature === 'furnitureStyles'
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
      {matchStyles.map(product => (
          <div
            key={product.id}
            className='grid md:grid-cols-2 grid-cols-1 items-center justify-center md:justify-start xl:mx-[5rem] md:mx-[2rem] mx-[1rem] md:my-[4rem] lg:my-[2rem] xl:my-[4rem] my-[1rem] bg-lynx md:p-[3rem]  p-[1rem] gap-[3rem]  md:gap-[4rem] '
          >
            <div className='flex flex-col items-center md:items-start  '>
              <h2 className='text-lead font-bold text-[25px] capitalize'>
                Stylish minimal chair
              </h2>
              <p className='my-[2rem] text-bGrey text-[18px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since.
              </p>
              <Button id={product.id} text='Shop Now' />
            </div>

            <div className='w-full h-[400px]'>
              <img
                className=' w-full h-full object-cover'
                src={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${product.image}`}
                alt={product.name}
              />
            </div>
          </div>
        ))}
    </>
  )
}

export default MatchStyles
