import React, { useState, useEffect } from "react";
import ProductList from "../data/ProductsList";
import { useParams, useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import ProductsCard from "../components/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { addViewedProducts } from "../features/recentlyViewedSlice";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cartCount, setCartCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = ProductList.find((product) => product.id === id);
    if (!product) {
      return navigate("/productNotFound");
    } else {
      dispatch(addViewedProducts(product));
    }
  }, [dispatch, id]);

  const product = ProductList.find((product) => product.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

    //shuffle product list
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledProducts = shuffleArray(ProductList)

  const relatedProducts = shuffledProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const stars = Array.from({ length: product.starRating }, (_, index) => (
    <IoStar className="text-brown" size={18} key={index} />
  ));

  return (
    <div className="flex flex-col font-nunito xl:mx-[5rem] md:mx-[2rem] mx-[1rem] my-[1rem] lg:my-[3rem] xl:py-[2.5rem] py-[1rem] lg:py-[3rem] lg:gap-[5rem] gap-[2rem] justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[1rem]">
        {/* PRODUCT DETAIL COMPONENT */}
        <section className="flex gap-[1.5rem] lg:gap-[2.5rem] flex-col">
          {/* PRODUCT NAME/HEADER */}
          <h2 className="lg:text-[18px] text-[12px] capitalize font-semibold text-bGrey">
            {product.productName}
            <span className="text-lead"> / {product.name}</span>
          </h2>
          <h2 className="text-lead capitalize font-extrabold text-[20px] lg:text-[35px]">{product.name}
          </h2>

          {/* PRODUCT PRICE AND RATING */}
          <div className="flex  justify-between items-center ">
            <div className="flex gap-4 items-center text-brown font-bold text-[20px]">
              <h2 className="lg:text-[23px] text-[17px]"> {product.price} </h2>
              <h2 className="text-bGrey lg:text-[23px] text-[17px] line-through">
                {product.formerPrice}
              </h2>
            </div>
            <div className="flex lg:gap-3 gap-2 items-center">
              <div className="flex lg:text-[23px] size-[13] gap-1"> {stars} </div>
              <h2 className=" lg:text-[23px] text-[15px] text-lead"> {product.starRating} </h2>
              <p className=" lg:text-[23px] text-[15px] text-bGrey">({product.peopleRating})
              </p>
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <p className="lg:text-[20px] text-[14px] text-lead font-semibold">{product.productDetails}
          </p>

          {/* CART SECTION */}
          <section className="flex gap-[3rem]">
            <div className="flex border-2 rounded-[10px] border-brown p-2 gap-2 lg:gap-6 items-center">
              <span
                onClick={() => setCartCount(cartCount - 1)}
                className="cursor-pointer"
              >
                
                <FaMinus className="text-bGrey size-[15] lg:size-[20] font-bold"  />
              </span>
              <p className="text-lead font-bold text-[14px] lg:text-[20px]"> {cartCount} </p>
              <span
                onClick={() => setCartCount(cartCount + 1)}
                className="cursor-pointer"
              >
                
                <FaPlus className="text-brown size-[15] lg:size-[20] font-bold" />
              </span>
            </div>
            <Button text="Add To Cart" />
          </section>

          <p className="text-[16px] lg:text-[20px] text-bGrey capitalize font-semibold">Category: {product.productName}
          </p>
          <p className="text-[16px] lg:text-[20px] text-bGrey capitalize font-semibold">Tag: {product.tag}
          </p>

          <p className="text-lead text-[16px] lg:text-[20px] capitalize font-semibold">
            free 3-5 day shipping | tool-free assembly | 30-day trial
          </p>

          <section className="flex gap-[1rem] lg:gap-[2rem] items-center">
            <span className="text-brown font-semibold">
              
              <FaRegHeart className=" size-[15] lg:size-[20]" size={20} />
            </span>
            <p className="text-brown text-[18px] lg:text-[20px] font-semibold">Add to wishlist
            </p>
          </section>
        </section>

        {/* PRODUCT IMAGE SECTION */}
        <section className="flex flex-col items-center gap-[3rem]">
          {/* LARGER IMAGE SECTION */}
          <div className="lg:w-[550px] w-full flex justify-center h-full lg:h-[650px]">
            <img
              className="w-full h-full object-cover"
              src={product.image}
              alt=""
            />
          </div>
          {/* SMALLER IMAGE SECTION */}
          <div className="grid gap-[1rem] grid-cols-3 lg:grid-cols-5">
            <div className="w-[115px] hidden lg:block h-[115px]">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div className="w-[115px] hidden lg:block h-[115px]">
              <img
                className="w-full  h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div className="lg:w-[115px] w-[95px] h-[100px] lg:h-[115px]">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div className="lg:w-[115px] w-[95px] h-[100px] lg:h-[115px]">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div className="lg:w-[115px] w-[95px] h-[100px] lg:h-[115px]">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>

      <section className=" flex flex-col lg:gap-[5rem] gap-[2rem] mt-[1rem] justify-center ">
        <div className="flex justify-center items-center gap-5">
          <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
          <h2 className="md:text-[25px] text-[20px] font-bold text-lead capitalize">
            Related products
          </h2>
          <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-4">
          {relatedProducts.map((product) => (
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
      </section>
    </div>
  );
};

export default ProductDetails;
