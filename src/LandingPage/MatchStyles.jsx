import React from "react";
import Button from "../components/Button";
import ProductList from "../data/ProductsList";

const MatchStyles = () => {
  const matchStyles = ProductList.filter(
    (product) => product.feature === "furnitureStyles"
  );
  return (
    <>
      {matchStyles.map((product) => (
        <div
          key={product.id}
          className="grid md:grid-cols-2 grid-cols-1 items-center justify-center md:justify-start xl:mx-[5rem] md:mx-[2rem] mx-[1rem] md:my-[4rem] lg:my-[2rem] xl:my-[4rem] my-[1rem] bg-lynx md:p-[3rem]  p-[1rem] gap-[3rem]  md:gap-[4rem] "
        >
          <div className="flex flex-col items-center md:items-start  ">
            <h2 className="text-lead font-bold text-[25px] capitalize">
              Stylish minimal chair
            </h2>
            <p className="my-[2rem] text-bGrey text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <Button id={product.id} text="Shop Now" />
          </div>

          <div className="w-full h-[400px]">
            <img
              className=" w-full h-full object-contain"
              src={product.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MatchStyles;
