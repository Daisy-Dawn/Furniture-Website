const WishlistCard = ({image, title, price}) => {
  return (
    <div className='justify-self-center lg:justify-self-start shadow px-4 sm:px-6 md:px-8 py-5 flex items-center gap-4 w-full max-w-[48.4375rem] rounded-[0.625rem]'>
        <div className='bg-lynx p-5 max-w-[9rem] max-h-[9rem] rounded-[1.25rem]'>
            <img src={image} alt="product Image" />
        </div>
        <div>
            <h2 className='text-base md:text-lg text-lead font-semibold'>{title}</h2>
            <p className='text-base md:text-lg text-brown mt-1'>${price}.00</p>
            <button className='py-2 px-5 mt-5 rounded-[0.625rem] font-nunito bg-lead hover:bg-stone-600 transition-all duration-300 text-white text-sm md:text-base font-bold text-center flex items-center justify-center '>
                Add To Cart
            </button>
        </div>

    </div>
  )
}

export default WishlistCard;