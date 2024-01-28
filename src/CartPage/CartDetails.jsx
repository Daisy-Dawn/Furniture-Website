import { useSelector } from "react-redux";
import { cartListGroupSelector } from "../features/addToCartSlice";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";
import EmptyCartList from "../components/EmptyCartList";

const CartDetails = () => {
  const cartListGroup = useSelector(cartListGroupSelector);
  const cartItemsAvailable = cartListGroup.length > 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ]  gap-y-4 md:gap-4 xl:px-[5rem] md:px-[2rem] px-[1rem] md:py-[3rem] py-[1rem]">
      {
        cartItemsAvailable ? (
          <>
            <CartList />
            <OrderSummary />
          </>
        ) : (
          <div className="col-span-3 justify-self-center">
            <EmptyCartList />
          </div>
        )
      }
    </div>
  )
}

export default CartDetails