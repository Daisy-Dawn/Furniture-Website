import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { wishlistGroupSelector } from '../features/addToWishlistSlice'
import WishlistCard from '../components/WishlistCard'
import EmptyWishlist from '../components/EmptyWishlist'
import CartHero from '../CartPage/CartHero'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Wishlist = () => {
  const wishListGroup = useSelector(wishlistGroupSelector)
  const [currentPage, setCurrentPage] = useState(1)

  // Pagination
  const containsWishList = wishListGroup.length > 0
  const totalPages = Math.ceil(wishListGroup.length / 4)
  const productsForCurrentWishList = wishListGroup.slice(
    (currentPage - 1) * 4,
    currentPage * 4
  )

  useEffect(() => {
    if (productsForCurrentWishList.length === 0 && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }, [wishListGroup, currentPage, productsForCurrentWishList])

  return (
    <section className='grid py-4'>
      <div className={`${wishListGroup.length !== 0 ? 'block' : 'hidden'}`}>
        <CartHero title='WishList' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 xl:px-[5rem] md:px-[2rem] px-[1rem]  md:py-[3rem] py-[2rem]'>
        {containsWishList ? (
          productsForCurrentWishList.map(product => (
            <WishlistCard
              key={product.id}
              product={product}
              image={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${product.image}`}
              title={product.name}
              price={product.price}
            />
          ))
        ) : (
          <div className='col-span-2 justify-self-center'>
            <EmptyWishlist />
          </div>
        )}
      </div>
      <div
        className={`${
          containsWishList ? 'flex' : 'hidden'
        } gap-12 justify-center`}
      >
        <button
          className='group'
          onClick={() =>
            setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1))
          }
          disabled={currentPage === 1}
        >
          <FaLongArrowAltLeft className='group-disabled:text-bGrey group-disabled:opacity-50 group-disabled:cursor-not-allowed transition-all duration-300 text-2xl md:text-3xl' />
        </button>
        <p className='text-bGrey text-base font-bold'>
          {currentPage} of {totalPages} pages
        </p>
        <button
          className='group'
          onClick={() =>
            setCurrentPage(prevPage =>
              prevPage < totalPages ? prevPage + 1 : totalPages
            )
          }
          disabled={currentPage === totalPages}
        >
          <FaLongArrowAltRight className='group-disabled:text-bGrey group-disabled:opacity-50 group-disabled:cursor-not-allowed transition-all duration-300 text-xl sm:text-2xl md:text-3xl' />
        </button>
      </div>
    </section>
  )
}

export default Wishlist
