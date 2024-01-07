import React, { useState } from "react";
import {  FaEye, FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

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

  return (
    <div key={id} className="mb-[5rem] relative flex flex-col rounded-[10px]">
      <div 
      className={`relative w-[300px] h-[300px] rounded-[10px]   flex items-center justify-center ${isHovered ? "hovered" : ""}    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <img className="w-full h-full object-cover rounded-[10px]" src={image} alt="" />

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

      <div className="">
        <p className="text-lead text-[18px] font-semibold capitalize">
          {description}
        </p>
        <p className="font-bold text-[18px] text-brown">{price}</p>
      </div>
    </div>
  );
};

export default ProductsCard;
