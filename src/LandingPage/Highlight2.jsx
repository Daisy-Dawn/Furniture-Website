// import React from "react";
import Button from "../components/Button";
import ScrollSurface from "../components/animationComponents/ScrollSurface";
import Surface from "../components/animationComponents/Surface";
import ProductList from "../data/ProductsList";

const Highlight2 = () => {
  const highlighProducts2 = ProductList.filter(
    (product) => product.feature === "highlights2"
  );
  return (
    <>
      {highlighProducts2.map((product) => (
        <ScrollSurface key={product.id}>
          <div
            key={product.id}
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center md:justify-start xl:mx-[5rem] md:mx-[2rem] mx-[1rem] lg:py-[4rem] py-[0rem] xl:gap-[4rem] md:gap-[2rem] gap-[0.5rem]"
          >
            <div key={product.id} className="lg:col-span-2  h-[500px]  ">
                    <img
                      className="rounded-[10px] w-full h-full object-cover"
                      src={product.image}
                      alt=""
                    />
            </div>
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
              <Surface>
                <h2 className="text-lead font-bold text-[25px] capitalize text-center md:text-left">
                  Match Furniture Styles
                </h2>
              </Surface>
              <Surface>
                <p className="lg:my-[2rem] my-[1rem] text-bGrey text-[18px] text-center md:text-left">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry standard dummy text
                  ever since.
                </p>
              </Surface>
              <Surface>
                <div className="w-1/2 md:w-full mt-2 md:mt-0">
                  <Button id={product.id} text="Shop Now" />
                </div>
              </Surface>
            </div>
          </div>
        </ScrollSurface>
      ))}
    </>
  );
};

export default Highlight2;
