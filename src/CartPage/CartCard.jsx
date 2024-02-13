import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/addToCartSlice";
import { toast } from "react-toastify";
import { HiOutlineTrash } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const CartCard = ({ product, image, title, color, quantity, price }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.error("Item has been removed from cart");
  };

  return (
    <div 
      className="cart relative flex items-center gap-2 sm:gap-6 md:gap-8  w-full max-w-[39rem] mx-auto">
      <div className="bg-lynx p-3 sm:p-4 md:p-5 w-full max-w-[9rem] h-[9rem] rounded-[1.25rem]">
        <img
          src={image}
          className="w-full h-full object-cover rounded-[0.625rem]"
          alt="cart item"
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        <div>
          <h2 className="w-full max-w-[20.5625rem] text-base md:text-lg text-lead font-semibold">
            {title}
          </h2>
          <p className="text-base text-bGrey mt-1">
            Color <span className="text-lead ml-1">{color}</span>
          </p>
          <div className="flex border border-solid border-brown rounded-[0.625rem] w-max py-[0.4rem] px-3 mt-2">
            <button
              onClick={() => dispatch(decrementQuantity(product))}
              className="disabled:cursor-not-allowed"
              disabled={quantity === 1 ? true : false}
            >
              <LuMinus
                size={20}
                className={`${
                  quantity !== 1 ? "text-brown" : "text-bGrey"
                } transition-all duration-300`}
              />
            </button>
            <p className="mx-6 font-bold">{quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(product))}>
              <LuPlus size={20} className="text-brown disabled:text-bGrey" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-base md:text-lg font-bold text-brown mt-1">
            ${quantity * price}
          </p>
          <div className="mt-2 bg-lynx rounded-[0.625rem] p-[0.4rem] w-max cursor-pointer">
            <HiOutlineTrash
              size={22}
              onClick={() => handleRemoveFromCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
