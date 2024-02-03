import { Modal } from "antd";
import axios from "axios";
import { useState, } from "react";
import { PaystackButton } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../features/addToCartSlice";
import {paystackImg} from '../assets'

const PayStackCardDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPayStackModalOpen, setIsPayStackModalOpen] = useState(true);
  // total amount of the cart from redux store
  const totalCheckout = useSelector(
    (state) => state.checkoutForm.totalPayment
  );

  const amount = totalCheckout * 100;


  // all billing details called from redux store
  const { firstName, lastName, email, contactNumber, companyName,
    address, city, state, country, postalCode, otherNotes,
  } = useSelector((state) => state.form.checkoutFormData);

  // all the input from billing details called to be sent to the database
  const billingData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    contactNumber: contactNumber,
    companyName: companyName,
    address: address,
    city: city,
    state: state,
    country: country,
    postalCode: postalCode,
    otherNotes: otherNotes,
  }
  const publicKey = "pk_test_2d7205534e94ff5347ca44cc86690e8f5665258e";

  // the api to the backend
  const ApiUrl = "http://localhost/reactApiPhp/api/billingDetails.php";
  // this is sending the data to the database using axios
  const sendToDB = () => {
    axios.post(ApiUrl, billingData)
      .then((response) => {
        console.log("the database data", response.data)
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });

  }

  // the logic for paystack
  const componentProps = {
    reference: (new Date()).getTime().toString(),
    email,
    amount,
    metadata: {
      firstName, lastName,
      contactNumber,
    },
    publicKey,
    text: "Continue with your payment",
    onSuccess: (response) => {
      // upon success payment this below should happen
      if (response) {
        console.log(response)
        console.log(billingData)
        sendToDB();
        // axios.post(ApiUrl, billingData)
        navigate("/shop")
        dispatch(resetCart());
        alert("Your payment was successful!")
      }
      // upon successful payment the modal closes programatically
    },
    onClose: () => alert("Are you sure you want to close the tab??"),  //this will close the model when the close button is triggered
  }

  const handleCancel = () => {
    setIsPayStackModalOpen(false);
  };
  return (
    <div>
      <Modal
        className="payment-modal"
        open={isPayStackModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="flex flex-col my-[1rem] gap-[2rem] justify-center items-center  h-full">
        <div className="w-[35%] flex justify-center">
                    <img src={paystackImg} alt="" />
                </div>
          <button type="submit"
            className="py-[1rem] px-[2rem]  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[14px] lg:text-[18px] font-bold text-center flex items-center justify-center"
          > <PaystackButton {...componentProps} /></button>
        </div>
      </Modal>
    </div>
  );
};

export default PayStackCardDetails;
