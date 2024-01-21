import React from "react";
import ProductsCard from "../ProductsCard";

const Main = ({currentProducts}) => {
  return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"> 
            {currentProducts.map(({ id, image, price, name }) => (
            <ProductsCard
            key={id}
            image={image}
            price={price}
            id={id}
            link={`/shop/${id}`}
            description={name}
             />
          ))}
           
         </div>
  );
};

export default Main;
