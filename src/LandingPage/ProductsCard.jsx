import React, { useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsCard = ({ image, price, description, id }) => {
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

  return (
<<<<<<< HEAD
    <div
      key={id}
      className="lg:mb-[5rem] md:mb-[3rem] mb-[2rem] relative flex flex-col items-center lg:items-start rounded-[10px]"
    >
    <Link to={`/shop/${id}`}>
      <div
        className={`relative md:w-[300px] w-[250px] md:h-[300px] h-[200px] rounded-[10px]   flex itemx-center justify-center ${
          isHovered ? "hovered" : ""
        }    `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
=======
    <div key={id} className="lg:mb-[5rem] md:mb-[3rem] mb-[2rem] relative flex flex-col items-center lg:items-start rounded-[10px]">
      <div 
      className={`relative w-[300px] h-[300px] rounded-[10px]   flex itemx-center justify-center ${isHovered ? "hovered" : ""}    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // onTouchStart={handleTouchStart}
      // onTouchEnd={handleTouchEnd}
>>>>>>> 3995f8768083d00466c0dd96fc05b2c2fd5fd94e
      >
        {/*  */}
          <img
            className="w-full h-full object-cover rounded-[10px]"
            src={image}
            alt=""
          />
        {/* </Link> */}

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
        <p className="text-lead md:text-[18px] text-[15px] font-semibold capitalize">
          {description}
        </p>
        <p className="font-bold md:text-[18px] text-[16px] text-brown">
          {price}
        </p>
      </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
