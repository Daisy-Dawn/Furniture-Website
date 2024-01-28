import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { IoHeart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/addToCartSlice";
import { addToWishlist, removeFromWishlist } from "../features/addToWishlistSlice";
import { FaCartShopping } from "react-icons/fa6";

const ProductsCard = ({ image, price, description, link, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [fillHeart, setFillHeart] = useState(false);
  const [fillCart, setFillCart] = useState(false)

  const dispatch = useDispatch();

  const toggleIconFill = () => {
    setFillHeart(!fillHeart)
    if (!fillHeart) {
      toast.success('Item added to Wishlist!');
      dispatch(addToWishlist())
    } else {
      toast.error("Item removed from Wishlist!");
      dispatch(removeFromWishlist())
    }
  }

  const toggleCartFill = () => {
    setFillCart(!fillCart)
    if(!fillCart) {
      toast.success('Item added to Cart!');
      dispatch(addToCart());
    } else {
      toast.error("Item removed from Cart!");
      dispatch(removeFromCart());
    }
  }

  return (
    <div
      key={id}
      className="lg:mb-[3rem] md:mb-[3rem] mb-[2rem] relative flex flex-col items-center lg:items-start rounded-[10px]"
    >
      <Link className="" to={link}>
        <div
          className={`relative md:w-[300px] w-[250px] md:h-[300px] h-[200px] rounded-[10px] flex items-center justify-center ${isHovered ? "hovered" : ""
            }    `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* <div> */}

          <img
            className="w-full  h-full object-cover rounded-[10px]"
            src={image}
            alt={description}
          />

          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[10px] flex items-center justify-end "></div>
          )}
        </div>
      </Link>

      <div className="flex flex-col mt-3 md:mt-0 items-center lg:items-start w-[90%]">
        <p className="text-lead md:text-[18px] h-[60px] text-center lg:text-left text-[15px] font-semibold capitalize">
          {description}
        </p>
        <div className="flex items-center w-full justify-between">
          <p className="font-bold md:text-[18px] text-center lg:text-left text-[16px] text-brown">
            ${price}
          </p>
          <div className="flex items-center gap-12">
            <IoHeart
              onClick={toggleIconFill}
              size={22}
              className={`text-white stroke-[40] stroke-red-600 ${fillHeart ? "fill-red-600" : ""} cursor-pointer`}
            />
            <FaCartShopping
              onClick={toggleCartFill}
              size={22}
              className={`text-white stroke-[40] ${fillCart ? "stroke-red-600" : "stroke-black"} ${fillCart ? "fill-red-600" : ""} cursor-pointer`}
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;