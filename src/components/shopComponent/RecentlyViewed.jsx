
import { useSelector } from 'react-redux'
import { selectViewedProducts } from '../../features/recentlyViewedSlice'

const RecentlyViewed = () => {
  const viewedProducts = useSelector(selectViewedProducts);

  return (
    <>
      <h2 className="text-lead sm:text-center md:col-span-2 md:mt-3 lg:mt-0  lg:text-left text-[16px] lg:text-[20px] mb-[1rem] font-bold">
        Recently Viewed
      </h2>

      {viewedProducts.map(product => (
        <div key={product.id} className='flex xl:grid grid-cols-2 xl:gap-2 cursor-pointer flex-col md:flex-row lg:flex-col items-center mb-[1.5rem] gap-[1rem]'>
          <div className='max-w-[130px] h-[100px] flex justify-center items-center'>
            <img className='w-full h-full object-cover rounded-[10px]' src={product.image} alt="" />
          </div>

          <div className='flex flex-wrap  flex-col'>
            <h2 className='text-lead text-[13px] text-center xl:text-left lg:text-[15px] font-semibold'> {product.name} </h2>
            <p className='font-bold text-brown text-center xl:text-left text-[13px] lg:text-[15px]'> {product.price} </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default RecentlyViewed