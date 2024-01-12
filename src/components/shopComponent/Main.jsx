import React from "react";
import ProductsCard from "../ProductsCard";

const Main = ({id, image, price, name}) => {
  return (
    // <div  className="">
        <ProductsCard key={id} image={image} price={price} id={id} link={`/shop/${id}`} description={name} />
        
        // </div>
  );
};

export default Main;
