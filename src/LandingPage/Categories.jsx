import React from "react";
import {
  bedIcon,
  chairIcon,
  cupboardIcon,
  lampIcon,
  sofaIcon,
  tableIcon,
} from "../assets";

const Categories = () => {
  const categories = [
    {
      name: 'Chair',
      image: chairIcon,
    },
    {
      name: 'Bed',
      image: bedIcon,
    },
    {
      name: 'Sofa',
      image: sofaIcon,
    },
    {
      name: 'Table',
      image: tableIcon,
    },
    {
      name: 'Cupboard',
      image: cupboardIcon,
    },
    {
      name: 'Lamp',
      image: lampIcon,
    },

  ]

  return (
    <div className="flex flex-col xl:mx-[5rem] md:mx-[2rem] mx-[1rem] xl:py-[2.5rem] py-[0rem] xl:gap-[5rem] gap-[2rem] justify-center">
      <div className="flex justify-center items-center gap-5">
        <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
        <h2 className="md:text-[25px] text-[20px] font-bold text-lead"> Categories</h2>
        <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-3  justify-between items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-center lg:gap-5 gap-2 items-center flex-col ">
          <div className="flex items-center justify-centerbg-lynx py-[1.5rem] px-[1.5rem]">
            <img src={category.image} alt="" />
          </div>
          <p className="font-semibold text-bGrey text-[17px] mb-3 md:mb-0"> {category.name} </p>
        </div> 
        ))}
      </div>
    </div>
  );
};

export default Categories;
