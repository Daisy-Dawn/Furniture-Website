import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HighlightComp = ({ image, heading, paragraph, button }) => {
  return (
    <div className="flex md:flex-row flex-col cursor-pointer   justify-center items-center md:justify-start  highlights1  gap-[2rem] lg:py-[3rem] py-[2rem] md:px-[1rem] px-[0.5rem] rounded-[10px]">
      <div>
        <img className="md:w-[550px] w-[300px] h-[230px] object-cover hover:scale-110" src={image} alt="" />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="mb-6 text-lead text-[25px] font-bold text-center md:text-left"> {heading} </h2>
        <p className="mb-6 text-bGrey text-[16px] text-center md:text-left"> {paragraph} </p>
        <button className="group underline text-lead font-semibold text-[20px] flex flex-row items-center justify-center gap-2">
          <Link className="flex items-center gap-[1rem]" to="/shop">
          {button}
          <span className="group-hover:translate-x-3 duration-500 ease-in-out transform">
            <FaArrowRight />
          </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HighlightComp;
