import React, {useRef} from "react";
import {
  bed2,
  cabinet2,
  // flower5,
  sofa2,
  kitchen2,
  // furnitureStyles2,
  bed,
  // flower3,
  kitchen7,
  kitchen8,
} from "../assets/index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import {Carousel} from 'antd'

const Carosel = () => {
  const images = [
    kitchen7,
    kitchen8,
    sofa2,
    kitchen2,
    cabinet2,
    bed,
    bed2,
  ];

  const carouselRef = useRef();

  const prev = () => {
    carouselRef.current.prev();
  }

  const next = () => {
    carouselRef.current.next();
  }

  return (
    <div className="w-full h-auto  overflow-x-hidden relative">
          <Carousel  effect="fade" ref={carouselRef} autoplay>
            {images.map((img, index) => (
            <img
              key={index}
              className="flex-shrink-0 w-full md:h-[650px] h-[400px] object-cover"
              src={img}
              alt={`Slide ${index + 1}`}
            />
          ))}
      </Carousel>

      <div className="absolute top-1/2 flex w-full justify-between transform -translate-y-1/2 md:px-2 lg:px-8 px-2">
        <button
          onClick={prev}
          className="rounded-full bg-steam md:p-2 p-1 hover:bg-slate-300 flex items-center justify-center"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
           onClick={next}
          className="rounded-full bg-steam md:p-2 p-1 hover:bg-slate-300 flex items-center justify-center"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
      <div className="absolute md:top-[33%] top-[7rem] md:left-[4rem] lg:left-[7rem] min-[270px]:left-[3.5rem] min-[350px]:left-[4rem] md:w-[650px] w-2/3 ">
        <div className="bg-white bg-opacity-60 p-5">
          <h2 className="text-lead lg:text-[50px] md:text-[40px] min-[270px]:text-[25px] min-[350px]:text-[30px] font-bold lg:mb-8 md:mb-5 mb-3 leading-[35px] md:leading-[45px] lg:leading-[60px]">
            Creative Home Simplify Your Furniture
          </h2>
          <button className="py-[8px] px-[20px]  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[16px] font-bold text-center flex items-center justify-center ">
            <Link to={`/shop`}> Shop Now </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
