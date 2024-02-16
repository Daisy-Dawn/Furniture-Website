import { useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IoHeart } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../features/addToCartSlice'
import {
  addToWishlist,
  removeFromWishlist
} from '../features/addToWishlistSlice'
import { Tooltip } from 'antd'

const ProductsCard = ({ product, image, price, description, link, id }) => {
  const [fillHeart, setFillHeart] = useState(false)
  const [fillCart, setFillCart] = useState(false)

  const dispatch = useDispatch()

  const toggleHeartIconFill = () => {
    setFillHeart(!fillHeart)
    if (!fillHeart) {
      toast.success('Item added to Wishlist!')
      dispatch(addToWishlist(product))
    } else {
      toast.error('Item removed from Wishlist!')
      dispatch(removeFromWishlist(product))
    }
  }

  const toggleCartIconFill = () => {
    setFillCart(!fillCart)
    if (!fillCart) {
      toast.success('Item added to Cart!')
      dispatch(addToCart(product))
    } else {
      toast.error('Item removed from Cart!')
      dispatch(removeFromCart(product))
    }
  }

  return (
    <div
      key={id}
      className='w-[18.75rem] lg:w-full lg:max-w-[18.75rem] lg:mb-[3rem] md:mb-[3rem] mb-[2rem] relative flex flex-col items-center lg:items-start rounded-[10px]'
    >
      <Link className='w-full' to={link}>
        <div className='group transition-all duration-300 relative w-full xl:w-[18.75rem] h-[18.75rem] rounded-[10px] flex items-center justify-center overflow-hidden'>
          {/* <div> */}
          <img
            className='w-full scale-[1.02] skeleton group-hover:scale-100 h-full object-cover rounded-[10px] transition-all duration-300'
            src={image}
            alt={description}
          />
          <div className='absolute inset-0 bg-black bg-opacity-40 rounded-[10px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300'>
            <div className='bg-white px-7 py-2 rounded-[0.425rem]'>
              View Item
            </div>
          </div>
        </div>
      </Link>
      <div className='flex flex-col mt-3 w-full '>
        <p className='text-lead md:text-[18px] h-[60px] text-center lg:text-left text-[15px]  font-semibold capitalize'>
          {description}
        </p>
        <div className='flex items-center w-full justify-between'>
          <p className='font-bold md:text-[18px] text-center lg:text-left text-[16px] text-brown'>
            ${price}
          </p>
          <div className='flex gap-4'>
            <Tooltip
              title={fillHeart ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <IoHeart
                onClick={toggleHeartIconFill}
                size={22}
                className={`text-bGrey hover:text-red-600 transition-all duration-300  ${
                  fillHeart ? 'fill-red-600 heartBeatAnimation' : ''
                } cursor-pointer`}
              />
            </Tooltip>
            <Tooltip
              title={fillCart ? 'Remove from cartlist' : 'Add to cartlist'}
            >
              <MdShoppingCart
                onClick={toggleCartIconFill}
                size={22}
                className={`text-bGrey hover:text-red-600 transition-all duration-300 font-bold ${
                  fillCart ? 'fill-red-600 heartBeatAnimation' : ''
                } cursor-pointer`}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard
