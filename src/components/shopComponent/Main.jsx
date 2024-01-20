import React from "react";
import ProductsCard from "../ProductsCard";
<<<<<<< HEAD
import ProductList from "../../data/ProductsList";

const Main = () => {
  const shopList = ProductList.filter(product => product.id < 13)
  return (
    <div  className="grid grid-cols-3 gap-[1rem]">
      {shopList.map(product => (
        <ProductsCard key={product.id} image={product.image} price={product.price} id={product.id} link={`/shop/${product.id}`} description={product.name} />
      ))}
        </div>
=======

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
>>>>>>> 5fd0534cfade09f218e428fc5caa0623420d0028
  );
};

export default Main;
