import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HighlightComp = ({ image, heading, paragraph, button }) => {
  return (
    <div className="flex items-center highlights1  gap-[2rem] py-[3rem] px-[3rem] rounded-[10px]">
      <div>
        <img className="w-[550px] h-[230px] object-cover" src={image} alt="" />
      </div>
      <div className="">
        <h2 className="mb-6 text-lead text-[25px] font-bold"> {heading} </h2>
        <p className="mb-6 text-bGrey text-[16px]"> {paragraph} </p>
        <button className="group underline text-lead font-semibold text-[20px] flex items-center justify-center gap-2">
          <Link to="/shop">
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
