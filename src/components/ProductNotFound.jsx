
import { Link } from 'react-router-dom';
import { NoShopping } from '../assets/index'

const ProductNotFound = () => {
  return (
    <div className='font-nunito flex flex-col md:flex-row justify-center items-center gap-8 my-12 lg:py-[3rem] py-[1rem] xl:px-[4rem] lg:px-[3rem] px-[1rem]'>
      <div className='w-full max-w-[30.875rem]'>
        <img className='w-full h-full object-cover rounded-[0.625rem]' src={NoShopping} alt="" />
      </div>
      <div>
        <h1 className='text-lead font-bold my-[1rem] text-xl lg:text-3xl text-center md:text-left uppercase'>Product Not Found</h1>
        <p className='text-bGrey max-w-[34rem] font-semibold lg:text-xl text-[0.9375rem] text-center md:text-left capitalize mb-[0.75rem] lg:mb-[2rem]'> Don&#39;t fret if the furniture you&#39;re looking for isn&#39;t here - our shop is overflowing with other stunning designs ready to catch your eye. </p>
        <button className='lg:py-3 py-2 lg:px-5 px-[0.625rem] rounded-[0.625rem] block mx-auto md:mx-0 font-nunito bg-lead transform hover:scale-[1.02] transition-all duration-300 text-white text-[0.9375rem] lg:text-[1.375rem] font-bold text-center'>
          <Link to='/shop' > Continue shopping </Link>
        </button>
      </div>
    </div>
  )
}

export default ProductNotFound;