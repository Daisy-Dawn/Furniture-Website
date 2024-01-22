// import React from "react";
// import ProductsCard from "../ProductsCard";
// import { Link } from "react-router-dom";

// const Main = ({currentProducts, productNotFound}) => {
//   return (
//    <>
//      { productNotFound ?  
//      ( <div className="my-[4rem]">
//            <h3 className="lg:text-[20px] sm:text-[16px] text-[13px] font-semibold text-bGrey text-center">Product Not Found</h3>
//            <p className="lg:text-[20px] sm:text-[16px] text-[13px] font-semibold text-bGrey text-center">
//              We couldn't find any products matching your search.{" "}
//              <Link className="" to="/shop">
//              Go back to the shop
//              </Link>.
//            </p>
//          </div>) :
//          (<div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"> 
//             {currentProducts.map(({id, image, price, name}) => (
//               <ProductsCard
//               key={id}
//               image={image}
//               price={price}
//               id={id}
//               link={`/shop/${id}`}
//               description={name}
//                />
//             ))}
//           </div>)
//     }
//    </>
//   );
// };

// export default Main;


import React from "react";
import ProductsCard from "../ProductsCard";
import { Link } from "react-router-dom";

const Main = ({currentProducts}) => {
  return (
        <>
          {currentProducts.length === 0 ? (
            <div className="my-[4rem] flex flex-col gap-[2rem]">
            <h3 className="lg:text-[20px] sm:text-[16px] text-[13px] font-semibold text-bGrey text-center">Product Not Found</h3>
            <p className="lg:text-[20px] sm:text-[16px] text-[13px] font-semibold text-bGrey text-center">
              We couldn't find any products matching your search.
            </p>
          </div>
          ) : (
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
          )}
        </>
  );
};

export default Main;
