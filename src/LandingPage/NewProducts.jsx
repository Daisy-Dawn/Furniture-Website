import React from "react";
import ProductsCard from '../components/ProductsCard';
import ProductList from "../data/ProductsList";

const NewProducts = () => {
  const newProducts = ProductList.filter(product => product.feature === "newProducts")
  return (
    <div className="flex flex-col xl:mx-[5rem] md:mx-[2rem] mx-[1rem] xl:py-[2.5rem] py-[3rem] lg:gap-[5rem] gap-[2rem] justify-center">
      <div className="flex justify-center items-center gap-5">
        <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
        <h2 className="md:text-[25px] text-[20px] font-bold text-lead">New products </h2>
        <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-4">
        {newProducts.map((product) => (
          <ProductsCard
            link={`/shop/${product.id}`}
            id={product.id}
            key={product.id}
            image={product.image}
            price={product.price}
            description={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
