import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  setCheckoutFormData,
  setTotalPayment,
} from "../features/checkoutFormSlice";
import PaymentModal from "../payment/PaymentModal";
import { orderSummarySelector } from "../features/addToCartSlice";
import { cartListGroupSelector } from "../features/addToCartSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Use shallowEqual to memoize the selector
  const productsInCheckout = useSelector(cartListGroupSelector);
  const orderSummary = useSelector(orderSummarySelector, shallowEqual);

  // Access the individual properties for order summary total
  const { cartTotalAmount, shippingFee} = orderSummary;
  

  // Calculate the orderSummaryTotal
  // const orderSummaryTotal = Math.ceil(cartTotalAmount - couponDiscount);
  // console.log('orderSummaryTotal:', orderSummaryTotal);

  // Conditionally set the shipping fee to 0 if there are no items in the cart
  const displayedShippingFee = productsInCheckout.length > 0 ? shippingFee : 0;

  const totalCheckoutPayment = cartTotalAmount + displayedShippingFee;

  dispatch(setTotalPayment(totalCheckoutPayment));

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isFormValid, setFormValid] = useState(false)
  const togglePaymentModal = () => {
    setShowPaymentModal(!showPaymentModal)
  }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    contactNumber: "",
    email: "",
    otherNotes: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    contactNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // function to check if the user is logged in
  const checkUserAuthentication = () => {
    const storeUser = JSON.parse(localStorage.getItem('user'));
    const googleStoreUser = JSON.parse(localStorage.getItem('googleToken'));
    return storeUser || googleStoreUser;
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!checkUserAuthentication()) {
      // Navigate to the login page if the user is not logged in
      navigate('/login');
      return;
    }

    //validate inputs
    const newErrors = {};
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required!";
    }
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required!";
    }
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required!";
    }
    if (formData.city.trim() === "") {
      newErrors.city = "City is required!";
    }
    if (formData.state.trim() === "") {
      newErrors.state = "State is required!";
    }
    if (formData.country.trim() === "") {
      newErrors.country = "Country is required!";
    }
    if (formData.contactNumber.trim() === "") {
      newErrors.contactNumber = "Contact Number is required!";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required!";
    }

    //check for errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
    } else {
      setFormValid(true)
      //form submission successful
      // console.log("Form submitted", formData);
      setShowPaymentModal(!showPaymentModal);
      dispatch(setCheckoutFormData(formData));
      
    }
    if (isFormValid) {
      togglePaymentModal()
    }
  };

  return (
    <div className="xl:px-[5rem] md:px-[2rem] px-[1rem] font-nunito md:py-[3rem] py-[1rem]">
      <h2 className="capitalize text-center text-lead font-bold text-[1.5rem] lg:text-[2.5rem] mb-[1rem] lg:mb-[2rem] ">
        {" "}
        Cart <span className="text-brown">Checkout</span>{" "}
      </h2>
      <form className="" action="">
        <div className="grid grid-cols-1 gap-[3rem] lg:grid-cols-2">
          <div className="flex w-full flex-col gap-[1rem]">
            <h2 className="text-lead font-extrabold text-[1rem] lg:text-[1.6rem] mb-[0.5rem] lg:mb-[1rem] ">
              Billing Details
            </h2>
            {/* FIRST NAME */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600">*</span> First Name
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                id="firstName"
              />
              {errors.firstName && (
                <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.firstName}{" "}
                </p>
              )}
            </div>

            {/* LAST NAME */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600">*</span> Last Name
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                id="lastName"
              />
              {errors.lastName && (
                <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.lastName}{" "}
                </p>
              )}
            </div>

            {/* COMPANY NAME */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  (Optional)
                </span>{" "}
                Company Name
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                name="companyName"
                id="companyName"
              />
            </div>

            {/* ADDRESS */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600">*</span> Address
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.address}
                onChange={handleChange}
                name="address"
                id="address"
              />
              {errors.address && (
                <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.address}{" "}
                </p>
              )}
            </div>

            {/* CITY */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600">*</span> City
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.city}
                onChange={handleChange}
                name="city"
                id="city"
              />
              {errors.city && (
                <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.city}{" "}
                </p>
              )}
            </div>

            {/* STATE */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600">*</span> State
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.state}
                onChange={handleChange}
                name="state"
                id="state"
              />
              {errors.state && (
                <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.state}{" "}
                </p>
              )}
            </div>

            {/* COUNTRY */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600">*</span> Country
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.country}
                onChange={handleChange}
                name="country"
                id="country"
              />
              {errors.country && (
                <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.country}{" "}
                </p>
              )}
            </div>

            {/* PIN CODE */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  (Optional)
                </span>{" "}
                Postal Code
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.postalCode}
                onChange={handleChange}
                name="postalCode"
                id="postalCode"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600">*</span> Contact Number
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem] rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="tel"
                value={formData.contactNumber}
                onChange={handleChange}
                name="contactNumber"
                id="contactNumber"
              />
              {errors.contactNumber && (
                <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.contactNumber}{" "}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600">*</span> Email
              </p>
              <input
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem]  rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                id="email"
              />
              {errors.email && (
                <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.email}{" "}
                </p>
              )}
            </div>

            {/* OTHER NOTES */}
            <div className="flex flex-col mb-[1rem] gap-2">
              <p className="text-lead text-[1rem] lg:text-[1.13rem] font-semibold">
                {" "}
                <span className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                  (Optional){" "}
                </span>{" "}
                Other Notes
              </p>
              <textarea
                rows={5}
                className="bg-lynx lg:p-[0.7rem] p-[0.4rem]  rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                type="text"
                value={formData.otherNotes}
                onChange={handleChange}
                name="otherNotes"
                id="otherNotes"
              />
            </div>
          </div>

          {/* CART COMPONENT */}
          <div className="flex flex-col mt-0 lg:mt-[1rem] items-center ">
            {/* CART CARD */}
            <div className="border border-steam w-full md:py-[2rem] py-[1rem] px-[1rem] lg:px-[2rem] rounded-[0.625rem]">
              {productsInCheckout.map((product) => (
                <div
                  key={product.id}
                  className="flex md:flex-row flex-col items-center mb-[1rem] lg:items-start gap-[0.5rem] md:gap-[2rem]"
                >
                  <div className="max-w-[7rem] rounded-[10px] h-[6rem]">
                    <img
                      className="w-full h-full object-cover rounded-[10px]"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-[0.5rem] h-[6rem] lg:gap-[0.5rem]">
                    <h2 className="text-lead text-center min-[500px]:text-[1.15rem] lg:text-left text-[1rem] xl:text-[1.25rem] font-bold ">
                      {product.name}
                    </h2>
                    <p className="font-semibold text-bGrey text-[0.9rem] min-[500px]:text-[1rem] text-center md:text-left xl:text-[1.2rem]">
                      Color <span className="text-lead"> {product.color} </span>{" "}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex lg:mt-[1.5rem] mt-[1rem] justify-between">
                <p className="text-lead text-[1rem] md:text-[1.15rem] xl:text-[1.25rem] font-semibold">
                  Total Price of Products
                </p>
                <p className="text-lead text-[1rem] md:text-[1.15rem] xl:text-[1.25rem] font-semibold">
                  $ {cartTotalAmount}{" "}
                </p>
              </div>

              <div className="flex lg:mt-[1.5rem] mt-[1rem] justify-between">
                <p className="text-lead text-[1rem] md:text-[1.15rem] xl:text-[1.25rem] font-semibold">
                  Shipping
                </p>
                <p className="text-lead text-[1rem] md:text-[1.15rem] xl:text-[1.25rem] font-semibold">
                  {" "}
                  ${displayedShippingFee}{" "}
                </p>
              </div>

              <div className="flex lg:mt-[1.5rem] mt-[1rem] justify-between">
                <p className="text-lead text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] font-bold">
                  TOTAL
                </p>
                <p className="text-brown text-[1.1rem] md:text-[1.2rem] xl:text-[1.35rem] font-bold">
                  $ {totalCheckoutPayment}{" "}
                </p>
              </div>

              <div className="flex mt-[1.5rem] justify-center">
                <button
                  type="submit"
                  disabled={totalCheckoutPayment === 0}
                  onClick={handleCheckout}
                  className="py-[12px] px-[20px] disabled:bg-stone-600 disabled:cursor-not-allowed rounded-[10px] font-nunito bg-lead hover:bg-stone-600 transition-all duration-300 text-white text-[14px] lg:text-[18px] font-bold text-center flex items-center justify-center"
                >
                  {" "}
                  Place Order{" "}
                </button>
              </div>

            </div>
          </div>
        </div>
      </form>
      {/* Render PaymentModal conditionally */}
      {showPaymentModal && <PaymentModal onClose={togglePaymentModal} />}
    </div>
  );
};

export default CheckoutForm;
