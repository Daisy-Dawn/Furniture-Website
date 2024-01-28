
import ProductsCard from "../ProductsCard";

const Main = ({ currentProducts }) => {
  return (
        <>
          {currentProducts.length === 0 ? (
            <div className="my-[4rem] flex flex-col gap-[2rem]">
            <h3 className="lg:text-[20px] sm:text-[16px] text-[13px] font-semibold text-bGrey text-center">Product Not Found</h3>
            <p className="lg:text-[20px] sm:text-[16px] text-[13px] font-semibold text-bGrey text-center">
              We couldn&#39;t find any products matching your search.
            </p>
          </div>
          ) : (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"> 
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
          )}
        </>
  );
};

export default Main;
