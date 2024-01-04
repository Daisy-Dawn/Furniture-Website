import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  bed,
  bedroom,
  image,
  image2,
  image3,
  image4,
  room7,
} from "../assets/index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../components/Button";

const Carousel = () => {
  const images = [room7,image3, bedroom,  image4, image, image2, bed];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoplayInterval);
  }, [currentSlide]);

  return (
    <div className="w-full h-auto  overflow-x-hidden relative">
      <div
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        className="flex w-full h-full transition-transform duration-500 ease-in-out transform "
      >
        {images.map((img, index) => (
          <img
            key={index}
            className="flex-shrink-0 w-full h-[650px] object-cover"
            src={img}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-1/2 flex w-full justify-between transform -translate-y-1/2 px-8">
        <button
          onClick={prevSlide}
          className="rounded-full bg-steam p-2 hover:bg-slate-300 flex items-center justify-center"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full bg-steam p-2 hover:bg-slate-300 flex items-center justify-center"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
      <div className="absolute top-[33%] left-[8rem] w-[650px] ">
        <div className="bg-white bg-opacity-60 p-5">
          <h2 className="text-lead text-[50px] font-bold mb-8 leading-[60px]">
            Creative Home Simplify Your Furniture
          </h2>
          <Button text="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
