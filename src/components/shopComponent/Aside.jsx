<<<<<<< HEAD
import React, { useState } from "react";
import CategoriesList from "../../data/CategoriesList";
import { ProductColors } from "../../data/CategoriesList";
import Button from '../Button'
import ProductList from "../../data/ProductsList";
import RecentlyViewed from "./RecentlyViewed";

const Aside = () => {
  const recentlyViewedList = ProductList.filter(product => product.feature === "productOfWeek")
  const [selectedColor, setSelectedColor] = useState(null)

  const toggleColor = () => setSelectedColor(!selectedColor)

  return (
    <div className="flex flex-col font-nunito border-steam px-[1rem] border-l-2">
      <h2 className="text-lead text-[20px] font-bold mb-[1rem]">Categories</h2>
      {CategoriesList.map((category, index) => (
        <div key={index} className="flex">
          <h2 className="text-[18px] mb-2 text-bGrey">
            {category.name} ({category.quantity})
          </h2>
        </div>
      ))}

      <h2 className="text-lead text-[20px] font-bold mt-[2rem] mb-[1rem]">
        Color
      </h2>

      {ProductColors.map((color, index) => (
        <div key={index} className={`flex cursor-pointer gap-3 ${selectedColor === color.color ? "selected" : ""}  `}
        onClick={() => setSelectedColor(color.color)}>
          <div className={`w-[20px] h-[20px] mt-[3px] relative rounded-full border-2 border-bGrey`}
          style={{borderColor: selectedColor}}>
            <span className={`w-[10px] h-[10px] absolute mt-1 mx-[3px] rounded-full bg-bGrey   `}
            style={{backgroundColor: selectedColor}}></span>
          </div>
          <p className="text-[18px] mb-2 text-bGrey "
          style={{color: selectedColor}}
          > {color.name} </p>
        </div>
      ))}

        <div className="mb-[3rem]">
          <input className="my-[2rem] w-full " type="range" name="" id="" />
            <div className="flex justify-between  items-center">
              <p className="text-[16px] text-bGrey"> Price $0 -$800 </p>
              <Button text="FILTER" />
            </div>
        </div>

        <div>
          <h2 className="text-lead text-[20px] mb-[1rem] font-bold">Recently Viewed</h2>
          {recentlyViewedList.map(product => (
            <RecentlyViewed key={product.id} image={product.image} name={product.name} price={product.price} />
          ))}


        </div>
      
=======

import React from "react";
import RecentlyViewed from "./RecentlyViewed";
import CategoriesAside from "./CategoriesAside";
import Color from "./Color";
import Price from "./Price";

const Aside = ({handleChange, handleChangePrice}) => {

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-col font-nunito border-steam px-[1rem] border-l-2">
      {/* PRODUCT CATEGORY SELECT */}
      <CategoriesAside handleChange={handleChange} />

      {/* PRODUCT COLOR SELECT */}
      <Color handleChange={handleChange} />

      {/* PRICE SELECT COMPONENT */}
      <div className="mb-[3rem] mt-0 lg:mt-[2rem]">
        <Price handleChange={handleChange} handleChangePrice={handleChangePrice} />
      </div>

      
      {/* RECENTLY VIEWED COMPONENT */}
      <div className="md:col-span-3 lg:block md:grid md:grid-cols-2">
        <RecentlyViewed />
      </div>
>>>>>>> 5fd0534cfade09f218e428fc5caa0623420d0028
    </div>
  );
};

export default Aside;
