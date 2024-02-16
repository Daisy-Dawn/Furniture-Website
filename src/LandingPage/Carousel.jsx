import { useState, useEffect } from "react";
import {motion} from 'framer-motion';
import {
  bed2,
  flower5,
  sofa2,
  kitchen2,
  furnitureStyles2,
  bed,
  flower3,
} from "../assets/index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Surface from "../components/animationComponents/Surface";

const Carousel = () => {
  const images = [
    bed2,
    flower5,
    sofa2,
    kitchen2,
    furnitureStyles2,
    bed,
    flower3,
  ];
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
        className="flex w-full h-full transition-transform  duration-500 ease-in-out transform "
      >
        {images.map((img, index) => (
          <img
            key={index}
            className="flex-shrink-0 w-full skeleton md:h-[650px] h-[400px] object-cover"
            src={img}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-1/2 flex w-full justify-between transform -translate-y-1/2 md:px-2 lg:px-8 px-2">
        <button
          onClick={prevSlide}
          className="rounded-full bg-steam md:p-2 p-1 hover:bg-slate-300 transition-all duration-300 flex items-center justify-center"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full bg-steam md:p-2 p-1 hover:bg-slate-300 transition-all duration-300 flex items-center justify-center"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
      <motion.div 
        initial={{y:40, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{type:"spring", duration:2}}
        className="absolute md:top-[33%] top-[7rem] md:left-[4rem] lg:left-[7rem] min-[270px]:left-[3.5rem] min-[350px]:left-[4rem] md:w-[650px] w-2/3 ">
        <div className="bg-white bg-opacity-60  p-5 rounded-[0.625rem] backdrop-blur-[1px]">
          <Surface>
            <h2 className="text-lead lg:text-[50px]  md:text-[40px] min-[270px]:text-[25px] min-[350px]:text-[30px] font-bold lg:mb-8 md:mb-5 mb-3 leading-[35px] md:leading-[45px] lg:leading-[60px]">
              Creative Home Simplify Your Furniture
            </h2>
          </Surface>
          <Surface>
            <button className="py-[8px] px-[20px]  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 transition-all duration-300 text-white text-[16px] font-bold text-center flex items-center justify-center ">
              <Link to={`/shop`}> Shop Now </Link>
            </button>
          </Surface>
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
