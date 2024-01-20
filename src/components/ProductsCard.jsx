import React, { useState } from "react";
<<<<<<< HEAD
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsCard = ({ image, price, description, link, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconState, setIconState] = useState({
    heart: false,
    cartPlus: false,
    eye: false,
  });

  const toggleIconFill = (icon) => {
    setIconState((prevState) => ({
      ...prevState,
      [icon]: !prevState[icon],
    }));
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };
=======
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link} from "react-router-dom";
import { toast } from 'react-toastify';
import { IoHeart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/addToCartSlice";
import { addToWishlist, removeFromWishlist } from "../features/addToWishlistSlice";

const ProductsCard = ({ image, price, description, link, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [fillHeart, setFillHeart] = useState(false);
  
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

  const handleAddToCartClick = () => {
    toast.success('Item added to Cart!');
    dispatch(addToCart());
  };


>>>>>>> 5fd0534cfade09f218e428fc5caa0623420d0028

  return (
    <div
      key={id}
      className="lg:mb-[3rem] md:mb-[3rem] mb-[2rem] relative flex flex-col items-center lg:items-start rounded-[10px]"
<<<<<<< HEAD
    > 
    {/* to={`shop/${id}`} */}
    <Link className=" flex flex-col justify-center lg:justify-start lg:items-start items-center" to={link} >
      <div
        className={`relative md:w-[300px] w-[250px] md:h-[300px] h-[200px] rounded-[10px] flex items-center justify-center ${
          isHovered ? "hovered" : ""
        }    `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
      >
          <img
            className="w-full h-full object-cover rounded-[10px]"
            src={image}
            alt=""
          />

        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[10px] flex items-center justify-end ">
            <div className=" p-6 h-full flex flex-col items-center justify-between">
              <FaHeart
                onClick={() => toggleIconFill("heart")}
                size={22}
                className={`text-lynx ${
                  iconState.heart ? "fill-red-600" : ""
                } cursor-pointer`}
              />
              <FaEye
                onClick={() => toggleIconFill("eye")}
                size={22}
                className={`text-lynx ${
                  iconState.eye ? "fill-red-600" : ""
                } cursor-pointer`}
              />
              <FaCartPlus
                onClick={() => toggleIconFill("cartPlus")}
                size={28}
                className={`text-lynx ${
                  iconState.cartPlus ? "fill-red-600" : ""
                } cursor-pointer`}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col mt-3 md:mt-0 items-center lg:items-start">
        <p className="text-lead md:text-[18px] text-center lg:text-left text-[15px] font-semibold capitalize">
          {description}
        </p>
        <p className="font-bold md:text-[18px] text-center lg:text-left text-[16px] text-brown">
          {price}
        </p>
      </div>
      </Link>
=======
    >
      <Link className="" to={link}>
        <div
          className={`relative md:w-[300px] w-[250px] md:h-[300px] h-[200px] rounded-[10px] flex items-center justify-center ${
            isHovered ? "hovered" : ""
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
          <div className="flex items-center gap-7">
            <IoHeart
              onClick={toggleIconFill}
              size={22}
              className={`text-white stroke-[40] stroke-red-600 ${fillHeart ? "fill-red-600" : ""} cursor-pointer`}
            />
            <div className="flex gap-3 items-center" onClick={handleAddToCartClick}>
              <FaArrowLeftLong size={22} className=" font-bold" />
              <p className="text-lead cursor-pointer font-semibold text-[18px]">Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 5fd0534cfade09f218e428fc5caa0623420d0028
    </div>
  );
};

export default ProductsCard;
<<<<<<< HEAD
=======

>>>>>>> 5fd0534cfade09f218e428fc5caa0623420d0028
