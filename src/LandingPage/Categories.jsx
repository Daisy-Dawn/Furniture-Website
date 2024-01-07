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
    <div className="flex flex-col mx-[5rem] py-[2.5rem] gap-[5rem]  justify-center">
      <div className="flex justify-center items-center gap-5">
        <div className="w-[50px] h-[3px] bg-lead"></div>
        <h2 className="text-[25px] font-bold text-lead"> Categories</h2>
        <div className="w-[50px] h-[3px] bg-lead"></div>
      </div>

      <div className="grid grid-cols-6   justify-between items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-center gap-5 items-center flex-col ">
            <div className="flex items-center justify-centerbg-lynx py-[1.5rem] px-[1.5rem]">
              <img src={category.image} alt="" />
            </div>
            <p className="font-semibold text-bGrey text-[17px]"> {category.name} </p>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Categories;
