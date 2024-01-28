import { useState } from "react";
import { useSelector} from "react-redux";
import { cartListGroupSelector } from "../features/addToCartSlice";
import CartCard from "./CartCard";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const CartList = () => {
  const cartListGroup = useSelector(cartListGroupSelector);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination
  const totalPages = Math.ceil(cartListGroup.length / 3);
  const productsForCurrentCartList = cartListGroup.slice((currentPage - 1) * 3, currentPage * 3);
  
  
  return (
    <section className="col-span-2 justify-self-center flex flex-col gap-4 w-full h-fit max-w-[44rem] rounded-[0.625rem] py-8 px-4 border border-solid border-steam">
        {
            productsForCurrentCartList.map((product) => (
              <>
                <CartCard key={product.id} product={product} id={product.id}  image={product.image} title={product.name} color={product.color} quantity={product.quantity} price={product.price} />
              </>
            ))
        }
        <div className={`${cartListGroup.length > 3 ? "flex" : "hidden"} mt-4 gap-12 justify-center`}>
          <button className='group' onClick={() => setCurrentPage(prevPage => prevPage > 1 ? prevPage - 1 : 1)} disabled={currentPage === 1}><FaLongArrowAltLeft className='group-disabled:text-bGrey group-disabled:opacity-50 group-disabled:cursor-not-allowed transition-all duration-300 text-2xl md:text-3xl' /></button>
          <p className='text-bGrey text-base font-bold'>{currentPage} of {totalPages} pages</p>
          <button className='group' onClick={() => setCurrentPage(prevPage => prevPage < totalPages ? prevPage + 1 : totalPages)} disabled={currentPage === totalPages}><FaLongArrowAltRight className='group-disabled:text-bGrey group-disabled:opacity-50 group-disabled:cursor-not-allowed transition-all duration-300 text-xl sm:text-2xl md:text-3xl' /></button>
        </div> 
    </section>
  )
}

export default CartList;