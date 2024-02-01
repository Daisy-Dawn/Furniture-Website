import { useEffect, useState} from "react";
import ProductList from "../data/ProductsList";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { toast } from 'react-toastify';
import ProductsCard from "../components/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/addToCartSlice";
import { addToWishlist, removeFromWishlist } from "../features/addToWishlistSlice";
import { addViewedProducts, selectViewedProducts } from "../features/recentlyViewedSlice";
import ProductNotFound from '../components/ProductNotFound';

const ProductDetails = () => {
  const [quantityCount, setQuantityCount] = useState(0);
  const [fillHeart, setFillHeart] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const viewedProducts = useSelector(selectViewedProducts);


  useEffect(() => {
    const product = ProductList.find((product) => product.id === id);
    if (product) {
      dispatch(addViewedProducts(product));
    }
    if (!product) {
      return <ProductNotFound />
    }
  }, [dispatch, id])

  const product = ProductList.find((product) => product.id === id);
  if (!product) {
    return <ProductNotFound />;
  }

  const relatedProducts = ProductList.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const stars = Array.from({ length: product.starRating }, (_, index) => (
    <IoStar className="text-brown" size={18} key={index} />
  ));

  const handleAddToCart = ( product ) => {
    let updatedProduct = {...product}
    updatedProduct.quantity = quantityCount;
    dispatch(addToCart(updatedProduct))
    toast.success("Item Added to Cart!");
  }

  const handleQuantityIncrement = () =>{
    setQuantityCount(quantityCount + 1);
  }

  const handleQuantityDecrement = () =>{
    setQuantityCount(quantityCount - 1);
    
  }

  const toggleHeartIconFill = (product) => {
    setFillHeart(!fillHeart)
    if (!fillHeart) {
      toast.success('Item added to Wishlist!');
      dispatch(addToWishlist(product));
    } else {
      toast.error("Item removed from Wishlist!");
      dispatch(removeFromWishlist(product));
    }
  }

  console.log('productQuantityAfterIncrement:', product.quantity);
  return (
    <div className="flex flex-col font-nunito xl:mx-[5rem] md:mx-[2rem] mx-[1rem]  md:my-12 xl:py-[2.5rem] py-[3rem] lg:gap-[5rem] gap-[2rem] justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-4">
        {/* PRODUCT DETAIL COMPONENT */}
        <section className="flex gap-10 flex-col">
          {/* PRODUCT NAME/HEADER */}
          <h2 className="text-base md:text-lg capitalize font-semibold text-bGrey">
            {" "}
            {product.productName}{" "}
            <span className="text-lead">/ {product.name}</span>{" "}
          </h2>
          <h2 className="text-lead capitalize font-extrabold text-3xl md:text-4xl">
            {" "}
            {product.name}{" "}
          </h2>

          {/* PRODUCT PRICE AND RATING */}
          <div className="flex justify-between items-center gap-1 flex-wrap">
            <div className="flex gap-4 items-center text-brown font-bold">
              <h2 className="text-lg md:text-xl">$ {product.price} </h2>
              <h2 className="text-bGrey text-base line-through">
                {" "}
                {product.formerPrice}{" "}
              </h2>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex gap-1"> {stars} </div>
              <h2 className="text-base md:text-lg text-lead"> {product.starRating} </h2>
              <p className="text-base md:text-lg text-bGrey">
                {" "}
                ({product.peopleRating}){" "}
              </p>
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <p className="text-lg md:text-xl text-lead font-semibold">
            {" "}
            {product.productDetails}{" "}
          </p>

          {/* CART SECTION */}
          <section className="flex flex-wrap gap-4">
            <div className="flex border-2 rounded-[0.625rem] border-brown p-2 gap-6 items-center">
              <button
                onClick={handleQuantityDecrement}
                disabled={quantityCount === 0 ? true : false}
                className={`${quantityCount === 0 ? "text-bGrey cursor-not-allowed" : "text-brown cursor-pointer"} transition-all duration-300`}
              >
                {" "}
                <LuMinus className=" font-bold" size={20} />{" "}
              </button>
              <p className="text-lead font-bold text-base md:text-xl">{quantityCount}</p>
              <button
                onClick={handleQuantityIncrement}
                className="cursor-pointer"
              >
                {" "}
                <LuPlus className="text-brown font-bold" size={20} />{" "}
              </button>
            </div>
            <button 
              onClick={()=> handleAddToCart(product)} 
              className={`${quantityCount === 0 ? "disabled:bg-steam cursor-not-allowed" : "bg-lead"} py-[8px] px-[20px]  rounded-[10px] font-nunito  hover:bg-stone-600 text-white text-base lg:text-xl font-bold text-center flex items-center justify-center transition-all duration-300 `}
              disabled={quantityCount === 0 ? true : false}
            >
              Add To Cart
            </button>
            
          </section>

          <p className="text-lg md:text-xl text-bGrey capitalize font-semibold">
            {" "}
            Category: {product.productName}{" "}
          </p>
          <p className="text-lg md:text-xl text-bGrey capitalize font-semibold">
            {" "}
            Tag: {product.tag}{" "}
          </p>

          <p className="text-lead text-lg md:text-xl capitalize font-semibold">
            free 3-5 day shipping | tool-free assembly | 30-day trial{" "}
          </p>

          <section className="flex gap-4 items-center">
            <button onClick={()=> toggleHeartIconFill(product)} className="text-brown font-semibold">
              {" "}
              <IoHeart size={22} className={`${fillHeart ? "fill-red-700 heartBeatAnimation" : "text-brown"} hover:fill-red-700 transition-all duration-300`} />{" "}
            </button>
            <p className="text-brown text-lg md:text-xl font-semibold">
              {fillHeart ? "Remove from wishlist" : "Add to wishlist"}
            </p>
          </section>
        </section>

        {/* PRODUCT IMAGE SECTION */}
        <section className="flex flex-col items-center gap-12">
          {/* LARGER IMAGE SECTION */}
          <div className="w-full max-w-[34.375rem] h-[40.625rem] rounded-[0.625rem]">
            <img
              className="w-full h-full object-cover rounded-[0.625rem]"
              src={product.image}
              alt=""
            />
          </div>
          {/* SMALLER IMAGE SECTION */}
          <div className="grid gap-2 grid-cols-5">
            <div className="w-full max-w-[8.1875rem] rounded-[0.625rem]">
              <img
                className="w-full h-auto object-cover rounded-[0.625rem]"
                src={product.image}
                alt="an image"
              />
            </div>
            <div className="w-full max-w-[8.1875rem] rounded-[0.625rem]">
              <img
                className="w-full h-auto object-cover rounded-[0.625rem]"
                src={product.image}
                alt="an image"
              />
            </div>
            <div className="w-full max-w-[8.1875rem] rounded-[0.625rem]">
              <img
                className="w-full h-auto object-cover rounded-[0.625rem]"
                src={product.image}
                alt="an image"
              />
            </div>
            <div className="w-full max-w-[8.1875rem] rounded-[0.625rem]">
              <img
                className="w-full h-auto object-cover rounded-[0.625rem]"
                src={product.image}
                alt="an image"
              />
            </div>
            <div className="w-full max-w-[8.1875rem] rounded-[0.625rem]">
              <img
                className="w-full h-auto object-cover rounded-[0.625rem]"
                src={product.image}
                alt="an image"
              />
            </div>
          </div>
        </section>
      </div>

      <section className=" flex flex-col lg:gap-[5rem] gap-[2rem] mt-[1rem] justify-center ">
        <div className="flex justify-center items-center gap-5">
          <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
          <h2 className="md:text-[25px] text-[20px] font-bold text-lead capitalize">
            Related products{" "}
          </h2>
          <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-4">
          {relatedProducts.map((product) => (
            <ProductsCard
              link={`/shop/${product.id}`}
              product={product}
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
