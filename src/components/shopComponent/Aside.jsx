
import React, { useState } from "react";
import Button from "../Button";
import {ProductsList, BedFrameList, ChairList, CupboardList, TableList, StoolList, KitchenList, SofaList, CabinetList, LightsList, FlowerVaseList, FurnitureStyles} from "../../data/index";
import RecentlyViewed from "./RecentlyViewed";
import { Radio } from "antd";
import { Slider } from "antd";
import {useDispatch} from 'react-redux'
import { setCategory } from "../../features/CategorySlice";
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

      {/* SLIDER COMPONENT */}
      <div className="mb-[3rem] mt-[2rem]">
        <Price handleChange={handleChange} handleChangePrice={handleChangePrice} />
      </div>

      
      {/* RECENTLY VIEWED COMPONENT */}
      {/* <div className="md:col-span-3 lg:block md:grid md:grid-cols-2">
        <h2 className="text-lead sm:text-center md:col-span-2 md:mt-3 lg:mt-0   lg:text-left text-[16px] lg:text-[20px] mb-[1rem] font-bold">
          Recently Viewed
        </h2>
        {recentlyViewedList.map((product) => (
          <RecentlyViewed
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Aside;
