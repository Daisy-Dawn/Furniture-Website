import Clock from "../components/Clock";
import ScrollSurface from "../components/animationComponents/ScrollSurface";
import ProductList from "../data/ProductsList";

const LimitedOffers = () => {
  const limitedOffer = ProductList.filter(
    (product) => product.feature === "limitedOffer"
  );
  return (
    <>
      {limitedOffer.map((product) => (
        <div
          key={product.id}
          className="grid items-center font-nunito lg:grid-cols-2 grid-cols-1 xl:px-[5rem] md:px-[2rem] px-[1rem] md:my-[4rem] lg:py-[2rem] xl:py-[4rem] py-[1rem]  gap-[3rem]  md:gap-[4rem] bg-lead"
        >
          <ScrollSurface>
            <Clock id={product.id} />
          </ScrollSurface>
          <ScrollSurface>
              <div key={product.id} className="">
                <img
                  className="w-full h-full object-cover rounded-[10px]"
                  src={product.image}
                  alt=""
                />
              </div>
          </ScrollSurface>
        </div>
      ))}
    </>
  );
};

export default LimitedOffers;
