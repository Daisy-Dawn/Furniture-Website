import CartDetails from "../CartPage/CartDetails";
import CartHero from "../CartPage/CartHero";
import { useSelector } from "react-redux";
import { cartListGroupSelector } from "../features/addToCartSlice";
const Cart = () => {
  const cartListGroup = useSelector(cartListGroupSelector);
  return (
    <div>
      <div className={`${cartListGroup.length !== 0 ? "block" : "hidden"}`}>
        <CartHero />
      </div>
      <div>
        <CartDetails />
      </div>
    </div>
  )
}

export default Cart;