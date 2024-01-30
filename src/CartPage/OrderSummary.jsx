import { useEffect, useState } from "react";
import {
  cartTotalAmountSelector,
  cartListGroupSelector,
  getTotals,
  getSubTotal,
} from "../features/addToCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { calculateShippingFee, checkCoupon } from "./orderSummaryHelpers";
import { coupons } from "./couponCodeGenerator";
import { RiCoupon3Line } from "react-icons/ri";

const OrderSummary = () => {
  const cartTotalAmount = useSelector(cartTotalAmountSelector);
  const cartListGroup = useSelector(cartListGroupSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponError, setCouponError] = useState(null);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartListGroup, dispatch]);

  //shipping fee logic
  const baseRatePerPound = 2; //$2 per pound
  const shippingFee = calculateShippingFee(8, baseRatePerPound);

  //coupons Logic
  const handleCheckCoupon = (userCoupon) => {
    const upperCaseCouponCode = userCoupon.toUpperCase();
    const discount = checkCoupon(coupons, upperCaseCouponCode, cartTotalAmount);
    if (discount !== null) {
      setCouponDiscount(Math.ceil(discount));
      setCouponError(false);
      toast.success(`${userCoupon} successfully applied!`);
      console.log("initialCouponDiscount:", discount);
    } else {
      setCouponError(true);
      toast.error(`${userCoupon} doesn't exist or has expired!`);
    }
  };

  console.log("coupons:", coupons);

  //OrderTotal
  const orderSummaryTotal = Math.ceil(cartTotalAmount - couponDiscount);
  // const orderSummaryTotal = Math.ceil((cartTotalAmount + shippingFee) - couponDiscount);

  //update subTotal and navigate to checkout
  const handleCheckout = (subTotal) => {
    dispatch(getSubTotal(subTotal));
    navigate("/cart/checkout");
  };

  return (
    <section className="justify-self-center md:col-span-2 lg:col-span-1 w-full max-w-[38.6875rem] h-fit rounded-[0.625rem] py-8 px-4 border border-solid border-steam">
      <div>
        <h2 className="text-xl text-lead font-bold w-full max-w-[23.375rem] mb-5 md:mb-6">
          Order Summary
        </h2>
        <h3 className="text-lead text-base md:text-lg font-semi-bold flex justify-between">
          Price{" "}
          <span className="text-base font-normal">${cartTotalAmount}</span>
        </h3>
        {/* <h3 className="text-lead text-base md:text-lg font-semi-bold flex justify-between my-3">Shipping <span className="text-base font-normal">${shippingFee}</span></h3> */}
        <h3 className="text-lead text-base md:text-lg font-semi-bold flex justify-between">
          Discount{" "}
          <span
            className={`text-base ${
              couponDiscount ? "text-red-700" : "text-lead"
            }  font-normal`}
          >
            ${couponDiscount}
          </span>
        </h3>
        <div className="flex justify-between items-center my-3 gap-2 ">
          <div className="flex border border-solid border-steam p-2 gap-2 rounded-[0.625rem]">
            <RiCoupon3Line size={24} className="text-steam" />
            <input
              onChange={(e) => setCouponCode(e.target.value)}
              className="peer outline-none text-sm sm:text-base text-lead w-full max-w-[10.9375rem]"
              type="text"
              placeholder="Enter coupon code"
            />
          </div>
          <button
            onClick={() => handleCheckCoupon(couponCode)}
            disabled={couponCode ? false : true}
            className="disabled:cursor-not-allowed disabled:text-steam cursor-pointer"
          >
            Apply
          </button>
        </div>
        <hr />
        <h3 className="text-lead text-base md:text-lg font-semi-bold flex justify-between my-3">
          TOTAL{" "}
          <span className="text-base font-normal">${orderSummaryTotal}</span>
        </h3>
        <h3 className="text-lead text-base md:text-lg font-semi-bold flex justify-between">
          Estimated Delivery by{" "}
          <span className="text-base font-normal">02 July, 2023</span>
        </h3>
        <button
          onClick={() => handleCheckout(orderSummaryTotal)}
          className="py-[8px] px-[20px] mt-5 mx-auto transition-all duration-300  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[14px] lg:text-[16px] font-bold text-center flex items-center justify-center "
        >
          Proceed To Checkout
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
