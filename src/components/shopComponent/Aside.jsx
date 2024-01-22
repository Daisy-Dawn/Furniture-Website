
// import React from "react";
import RecentlyViewed from "./RecentlyViewed";
import CategoriesAside from "./CategoriesAside";
import Color from "./Color";
import Price from "./Price";

const Aside = ({ handleChange, handleChangePrice }) => {

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
    </div>
  );
};

export default Aside;
