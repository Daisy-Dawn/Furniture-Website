import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/addToWishlistSlice";
import { addToCart } from "../features/addToCartSlice";
import { FaHeartCircleXmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import {motion} from "framer-motion";

const WishlistCard = ({ product, image, title, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("item added to cart!");
    dispatch(removeFromWishlist(product));
  };

  const handleRemoveFromWishList = (product) => {
    dispatch(removeFromWishlist(product));
    toast.error("item removed from wishlist!");
  };
  return (
    <motion.div 
      animate={{opacity:1}}
      exit={{opacity:0}}
      className="relative justify-self-center lg:justify-self-start shadow px-4 sm:px-6 md:px-8 py-5 flex items-center gap-4 w-full max-w-[48.4375rem] rounded-[0.625rem]">
      <div className="bg-lynx p-5 w-full max-w-[9rem] h-full  max-h-[9rem]  rounded-[1.25rem]">
        <img
          src={image}
          className=" w-full h-full object-cover rounded-[0.625rem]"
          alt="product Image"
        />
      </div>
      <div>
        <h2 className="text-base md:text-lg text-lead font-semibold">
          {title}
        </h2>
        <p className="text-base md:text-lg text-brown mt-1">${price}</p>
        <button
          className="py-2 px-5 mt-5 rounded-[0.625rem] font-nunito bg-lead hover:bg-stone-600 transition-all duration-300 text-white text-sm md:text-base font-bold text-center flex items-center justify-center"
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
        </button>
      </div>
      <div className="absolute top-2 right-2 ">
        <FaHeartCircleXmark
          onClick={() => handleRemoveFromWishList(product)}
          size={22}
          className="text-bGrey cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default WishlistCard;
