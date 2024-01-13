import React, { useState } from "react";
import CategoriesList from "../../data/CategoriesList";
import Button from "../Button";
import ProductList from "../../data/ProductsList";
import RecentlyViewed from "./RecentlyViewed";
import { Radio } from "antd";
import { Slider } from "antd";

const Aside = () => {
  const recentlyViewedList = ProductList.filter(
    (product) => product.feature === "productOfWeek"
  );
  const chairCategoryList = ProductList.filter(product => product.category === 'chair');
  const cupboardCategoryList = ProductList.filter(product => product.category === 'cupboard');
  const tableCategoryList = ProductList.filter(product => product.category === 'table');
  const BedFrameCategoryList = ProductList.filter(product => product.category === 'bedFrame');
  const StoolCategoryList = ProductList.filter(product => product.category === 'stool');
  const KitchenCategoryList = ProductList.filter(product => product.category === 'kitchen');
  const sofaCategoryList = ProductList.filter(product => product.category === 'sofa');
  const cabinetCategoryList = ProductList.filter(product => product.category === 'cabinet');
  const lightsCategoryList = ProductList.filter(product => product.category === 'lights');
  const flowervaseCategoryList = ProductList.filter(product => product.category === 'flowervase');
  const furnitureStylesCategoryList = ProductList.filter(product => product.category === 'furnitureStyles');

  const [color, setColor] = useState(1);
  const [sliderValue, setSliderValue] = useState(60);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setColor(e.target.value);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleFilterButtonClick = () => {
    // Implement filtering logic based on the slider value
    console.log(`Filtering products with price up to $${sliderValue}`);
  };



  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-col font-nunito border-steam px-[1rem] border-l-2">
      {/* PRODUCT CATEGORY SELECT */}
      <div>
      <h2 className="text-lead lg:text-[20px] text-[16px] font-bold mb-[1rem]">Categories</h2>
      <div className="flex flex-col">
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Chair ({chairCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Cupboard ({cupboardCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Dining Table ({tableCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Bed Frames ({BedFrameCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Bar Stool ({StoolCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Kitchen Furniture ({KitchenCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Sofa ({sofaCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Cabinet ({cabinetCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Lights ({lightsCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Flower Vase ({flowervaseCategoryList.length}) </h2>
      <h2 className="text-[13px] lg:text-[18px] mb-2 text-bGrey"> Furniture Styles ({furnitureStylesCategoryList.length}) </h2>
      </div>
      </div>

      {/* PRODUCT COLOR SELECT */}
      <div>
      <h2 className="text-lead text-[16px] lg:text-[20px] font-bold mt-[2rem] sm:mt-0 lg:mt-[2rem] mb-[1rem]">
        Color
      </h2>

      <div className={`flex cursor-pointer gap-3`}>
        <Radio.Group
          className="flex flex-col"
          onChange={onChange}
          value={color}
        >
          <Radio className="text-[13px] lg:text-[18px] mb-2 text-bGrey" value={1}>
            Purple
          </Radio>
          <Radio className="text-[13px] lg:text-[18px] mb-2 text-bGrey" value={2}>
            Red
          </Radio>
          <Radio className="text-[13px] lg:text-[18px] mb-2 text-bGrey" value={3}>
            Blue
          </Radio>
          <Radio className="text-[13px] lg:text-[18px] mb-2 text-bGrey" value={4}>
            Green
          </Radio>
          <Radio className="text-[13px] lg:text-[18px] mb-2 text-bGrey" value={5}>
            Yellow
          </Radio>
          <Radio className="text-[13px] lg:text-[18px] mb-2 text-bGrey" value={6}>
            Grey
          </Radio>
          <Radio className="text-[13px] lg:text-[18px] mb-2 text-bGrey" value={7}>
            White
          </Radio>
          <Radio className="text-[13px] lg:text-[18px] mb-2 text-bGrey" value={8}>
            Black
          </Radio>
        </Radio.Group>
      </div>
      </div>

      {/* SLIDER COMPONENT */}
      <div className="mb-[3rem] mt-[2rem]">
        <Slider
          defaultValue={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={800}
          keyboard
        />
        <div className="flex xl:flex-row flex-col justify-between gap-2 xl:gap-0  items-center">
          <p className="text-[16px] text-bGrey">Price ${sliderValue} - $800</p>
          <Button text="FILTER" onClick={handleFilterButtonClick} />
        </div>
      </div>

      
      {/* RECENTLY VIEWED COMPONENT */}
      <div className="md:col-span-3 lg:block md:grid md:grid-cols-2">
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
      </div>
    </div>
  );
};

export default Aside;
