import { Link } from "react-router-dom";
import { IoIosHeartHalf } from "react-icons/io";
const EmptyWishlist = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="bg-lynx rounded-[50%] p-4 w-max">
            <IoIosHeartHalf size={45} fill="#644321"/>
        </div>
        <h2 className="font-bold text-base md:text-lg my-3">You haven&apos;t saved an item yet!</h2>
        <p className="w-full max-w-[28rem] text-base text-center text-bGrey">Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here.</p>
        <button className='mt-4 py-[8px] px-[20px]  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[14px] lg:text-[16px] font-bold text-center flex items-center justify-center transition-all duration-300'>
            <Link to="/shop">Continue Shopping</Link>
        </button>
    </div>
  )
}

export default EmptyWishlist;