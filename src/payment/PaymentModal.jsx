import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { paystack1, visa_icon, mastercard, paypal_icon } from "../assets";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import VisaCardDetails from "./VisaCardDetails";
import MasterCardDetails from "./MasterCardDetails";
import PayStackCardDetails from "./PayStackCardDetails";
import PaypalCardDetails from "./PaypalCardDetails";

const PaymentModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Keep it open initially
  const [activePaymentOption, setActivePaymentOption] = useState(null);

  const handleCancel = () => {
    setIsModalOpen(false);
    // Reload the page
    window.location.reload();
  };

  const handlePaymentOptionClick = (index) => {
    setActivePaymentOption(index);
  };

  const handleNextStepClick = () => {
    if (activePaymentOption !== null) {
      setIsModalOpen(false); // Close payment method modal when "NEXT STEP" is clicked
    } else {
      setIsModalOpen(true)
    }
  };

  return (
    <div className=" flex justify-center font-nunito items-center ">
      <Modal
        className="payment-modal"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="flex lg:mx-[2rem] lg:my-[1.5rem] flex-col gap-[1rem]">
          <div className="flex justify-center mb-[1rem] gap-4">
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-bGrey"></span>
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-steam"></span>
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-steam"></span>
          </div>
          <h2 className="text-lead text-[1.2rem] lg:text-[1.7rem] font-bold text-center">
            PAYMENT METHOD
          </h2>

          <section className="flex lg:mt-[1.5rem] flex-col">
            {/* VISA CARD */}
            <div
              className={`flex border-y-2 lg:py-[1.5rem] py-[1rem] cursor-pointer border-bGrey items-center gap-10 ${
                activePaymentOption === 0 ? "active-payment-option" : ""
              }`}
              onClick={() => handlePaymentOptionClick(0)}
            >
              <div className="lg:w-[2.5rem] w-[2rem] h-[1.5rem] lg:h-[2rem]">
                <img className="w-full h-full " src={visa_icon} alt="" />
              </div>
              <p
                className={` text-[1rem] lg:text-[1.3rem] uppercase font-semibold ${
                  activePaymentOption === 0 ? "text-black" : "text-bGrey"
                }`}
              >
                Visa Card
              </p>
              {activePaymentOption === 0 && (
                <FaCheck size={22} className="lg:ml-20 ml-5 text-green-600" />
              )}
            </div>

            {/* MASTER CARD */}
            <div
              className={`flex border-b-2 lg:py-[1.5rem] py-[1rem] cursor-pointer border-bGrey items-center gap-10 ${
                activePaymentOption === 1 ? "active-payment-option" : ""
              }`}
              onClick={() => handlePaymentOptionClick(1)}
            >
              <div className="lg:w-[2.5rem] w-[2rem] h-[1.5rem] lg:h-[2rem]">
                <img className="w-full h-full " src={mastercard} alt="" />
              </div>
              <p
                className={` text-[1rem] lg:text-[1.3rem] uppercase font-semibold ${
                  activePaymentOption === 1 ? "text-black" : "text-bGrey"
                }`}
              >
                MASTERCARD
              </p>
              {activePaymentOption === 1 && (
                <FaCheck size={22} className="lg:ml-20 ml-5 text-green-600" />
              )}
            </div>

            {/* PAYPAL CARD */}
            <div
              className={`flex border-b-2 lg:py-[1.5rem] py-[1rem] cursor-pointer border-bGrey items-center gap-10 ${
                activePaymentOption === 1 ? "active-payment-option" : ""
              }`}
              onClick={() => handlePaymentOptionClick(2)}
            >
              <div className="lg:w-[2.5rem] w-[2rem] h-[1.5rem] lg:h-[2rem]">
                <img className="w-full h-full " src={paypal_icon} alt="" />
              </div>
              <p
                className={` text-[1rem] lg:text-[1.3rem] uppercase font-semibold ${
                  activePaymentOption === 2 ? "text-black" : "text-bGrey"
                }`}
              >
                PAYPAL
              </p>
              {activePaymentOption === 2 && (
                <FaCheck size={22} className="lg:ml-20 ml-5 text-green-600" />
              )}
            </div>

            {/* PAYSTACK CARD */}
            <div
              className={`flex border-b-2 lg:py-[1.5rem] py-[1rem] cursor-pointer border-bGrey items-center gap-10 ${
                activePaymentOption === 1 ? "active-payment-option" : ""
              }`}
              onClick={() => handlePaymentOptionClick(3)}
            >
              <div className="lg:w-[2.5rem] w-[2rem] h-[1.5rem] lg:h-[2rem]">
                <img className="w-full h-full " src={paystack1} alt="" />
              </div>
              <p
                className={` text-[1rem] lg:text-[1.3rem] uppercase font-semibold ${
                  activePaymentOption === 3 ? "text-black" : "text-bGrey"
                }`}
              >
                PAYSTACK
              </p>
              {activePaymentOption === 3 && (
                <FaCheck size={22} className="lg:ml-20 ml-5 text-green-600" />
              )}
            </div>
          </section>
        </div>

        {/* NEXT STEP BUTTON */}
        <div
          onClick={handleNextStepClick}
          className="lg:py-[2rem] py-[1rem] cursor-pointer items-center justify-center gap-4 bg-blue-600 flex"
        >
          <p className="text-white font-semibold text-[1rem] lg:text-[1.3rem]">NEXT STEP</p>
          <FaLongArrowAltRight size={24} className="text-white font-semibold" />
        </div>
      </Modal>

      {/* Render the appropriate card details component */}
      {isModalOpen == false &&
        activePaymentOption !== null &&
        activePaymentOption === 0 && <VisaCardDetails />}
      {isModalOpen == false &&
        activePaymentOption !== null &&
        activePaymentOption === 1 && <MasterCardDetails />}
      {isModalOpen == false &&
        activePaymentOption !== null &&
        activePaymentOption === 2 && <PaypalCardDetails />}
      {isModalOpen == false &&
        activePaymentOption !== null &&
        activePaymentOption === 3 && <PayStackCardDetails />}
    </div>
  );
};

export default PaymentModal;
