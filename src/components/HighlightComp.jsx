import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Surface from "./animationComponents/Surface";

const HighlightComp = ({ image, heading, paragraph, button, id }) => {
  return (
    <div className="flex md:flex-row flex-col cursor-pointer   justify-center items-center md:justify-start  highlights1  gap-[2rem] lg:py-[3rem] py-[2rem] md:px-[1rem] px-[0.5rem] rounded-[10px]">
        <div className="rounded-[0.625rem] overflow-hidden group">
          <img className="md:w-[550px] w-[300px] h-[230px] object-cover transform group-hover:scale-105 rounded-[0.625rem] transition-all duration-300" src={image} alt="" />
        </div>
      <div className="flex flex-col items-center md:items-start">
        <Surface>
          <h2 className="mb-4 text-lead text-[25px] font-bold text-center md:text-left"> {heading} </h2>
        </Surface>
        <Surface>
          <p className="mb-4 text-bGrey text-[16px] text-center md:text-left"> {paragraph} </p>
        </Surface>
        <Surface>
          <div>
            <button className="group underline text-lead font-semibold text-[20px] flex flex-row items-center justify-center gap-2">
              <Link className="flex items-center gap-[1rem]" to={`shop/${id}`}>
              {button}
              <span 
                className="group-hover:translate-x-2 duration-500 ease-in-out transform">
                <FaArrowRight />
              </span>
              </Link>
            </button>
          </div>
        </Surface>
      </div>
    </div>
  );
};

export default HighlightComp;
