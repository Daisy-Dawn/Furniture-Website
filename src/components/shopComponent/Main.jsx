import React from "react";
import ProductsCard from "../ProductsCard";

const Main = ({currentProducts}) => {
  return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"> 
            {currentProducts.map((product) => (
            <ProductsCard
              key={product.id}
              product={product}
              image={product.image}
              price={product.price}
              id={product.id}
              link={`/shop/${product.id}`}
              description={product.name}
             />
          ))}
           
         </div>
  );
};

export default Main;
