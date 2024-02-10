import React, { useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/productSlice'
import HighlightComp from '../components/HighlightComp'
import ScrollSurface from '../components/animationComponents/ScrollSurface'

const Highlight = () => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const highlighProducts = products.filter(
    product => product.feature === 'highlights'
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
      <div className='flex xl:flex-row flex-col xl:px-[5rem] md:px-[2rem] px-[1rem] items-center  xl:py-[5rem] md:py-[3rem] py-[2rem] gap-0 md:gap-5'>
        {highlighProducts.map(product => (
          <HighlightComp
            id={product.id}
            key={product.id}
            image={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${product.image}`}
            heading={product.name}
            paragraph={product.description}
            button='Shop Now'
          />
        ))}
      </div>
    </ScrollSurface>
  )
}

export default Highlight
