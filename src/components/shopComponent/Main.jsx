import React from "react";
import ProductsCard from "../ProductsCard";
import ProductList from "../../data/ProductsList";

const Main = () => {
  const shopList = ProductList.filter(product => product.id < 13)
  return (
    <div  className="grid grid-cols-3 gap-[1rem]">
      {shopList.map(product => (
        <ProductsCard key={product.id} image={product.image} price={product.price} id={product.id} link={`/shop/${product.id}`} description={product.name} />
      ))}
        </div>
  );
};

export default Main;
