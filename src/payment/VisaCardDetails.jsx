import { Modal } from "antd";
import React, { useState, useEffect } from "react";
import PlsWait from "./PlsWait";
import PaymentSuccess from "./PaymentSuccess";
import { useSelector } from "react-redux";

const VisaCardDetails = () => {
  const totalCheckoutPayment = useSelector(
    (state) => state.checkoutForm.totalPayment
  );
  const [isVisaModalOpen, setIsVisaModalOpen] = useState(true);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const subTotal = totalCheckoutPayment;
  const platformFee = 15;
  const totalAmount = totalCheckoutPayment + platformFee;

  const subTotalView = `$${subTotal}`;
  const platformFeeView = `$${platformFee}`;
  const totalAmountView = `$${totalAmount}`;

  const [formData, setFormData] = useState({
    cardHolderName: "",
    expiryDate: "",
    debitCardNumber: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    cardHolderName: "",
    expiryDate: "",
    debitCardNumber: "",
    cvv: "",
  });

  const handleCancel = () => {
    setIsVisaModalOpen(false);
  };

  const cleanFormattedValue = (name, value) => {
    if (name === "debitCardNumber" || name === "expiryDate") {
      // Remove spaces and slashes
      return value.replace(/[ /]/g, "");
    }
    return value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "expiryDate") {
      // Ensure only numbers are entered
      const numericValue = value.replace(/\D/g, "");

      // Format the value with a slash after the first 2 digits
      let formattedValue = "";
      for (let i = 0; i < numericValue.length; i++) {
        if (i === 2) {
          formattedValue += "/";
        }
        formattedValue += numericValue[i];
      }

      // Ensure the length does not exceed 5 characters (2 digits + 1 slash + 2 digits)
      formattedValue = formattedValue.slice(0, 5);

      setFormData({
        ...formData,
        [name]: formattedValue,
      });

      setErrors({
        ...errors,
        [name]: "",
      });
    } else if (name === "debitCardNumber") {
      // Ensure only numbers are entered
      const numericValue = value.replace(/\D/g, "");

      // Format the value with spaces every 4 digits
      let formattedValue = "";
      for (let i = 0; i < numericValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += " ";
        }
        formattedValue += numericValue[i];
      }

      // Ensure the length does not exceed 16 characters
      formattedValue = formattedValue.slice(0, 19);

      setFormData({
        ...formData,
        [name]: formattedValue,
      });

      setErrors({
        ...errors,
        [name]: "",
      });
    } else if (name === "cvv") {
      // Ensure only numbers are entered
      const numericValue = value.replace(/\D/g, "");

      // Ensure the length does not exceed 3 characters
      const formattedValue = numericValue.slice(0, 3);

      setFormData({
        ...formData,
        [name]: formattedValue,
      });

      setErrors({
        ...errors,
        [name]: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clean formatted values before submission
    const cleanedFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [
        key,
        cleanFormattedValue(key, value),
      ])
    );

    // Validate inputs
    const newErrors = {};
    if (cleanedFormData.cardHolderName.trim() === "") {
      newErrors.cardHolderName = "Card Holder Name is required!";
    }
    if (cleanedFormData.expiryDate.trim() === "") {
      newErrors.expiryDate = "Expiry Date is required!";
    }
    if (cleanedFormData.debitCardNumber.trim() === "") {
      newErrors.debitCardNumber = "Debit Card Number is required!";
    }
    if (cleanedFormData.cvv.trim() === "") {
      newErrors.cvv = "CVV is required!";
    }

    // If there are errors, set them
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
    } else {
      // Form submission successful
      console.log("Form submitted, Visa Debit Card Details:", cleanedFormData);
      setIsVisaModalOpen(false);
      setIsProcessingPayment(true);

      // Simulate API call or any asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Hide PlsWait component after processing is done
      setIsProcessingPayment(false);

      //display the payment successful component
      setPaymentSuccessful(true);
    }
  };

  return (
    <div>
      <Modal
        className="payment-modal"
        open={isVisaModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="flex lg:mx-[1.5rem] lg:my-[1.5rem] flex-col gap-[1rem]">
          <div className="flex justify-center mb-[1rem] gap-4">
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-bGrey"></span>
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-bGrey"></span>
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-steam"></span>
          </div>
          <h2 className="text-lead text-[1.3rem] lg:text-[1.7rem] font-bold text-center">
            CARD DETAILS
          </h2>

          <form onSubmit={handleSubmit} action="">
            <section className="grid gap-[1.5rem] grid-cols-1 lg:grid-cols-2">
              <div className="flex w-full flex-col gap-[0.5rem]">
                {/* CARD HOLDER NAME */}
                <div className="flex flex-col gap-1">
                  <p className="text-lead capitalize font-semibold text-[1rem] lg:text-[1.25rem]">
                    {" "}
                    <span className="text-red-600 ">*</span> Card Holder Name{" "}
                  </p>
                  <input
                    className="bg-slate-200 lg:p-[0.7rem] text-[1rem] p-[0.4rem] w-full rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                    type="text"
                    value={formData.cardHolderName}
                    onChange={handleChange}
                    name="cardHolderName"
                    id="cardHolderName"
                  />
                  {errors.cardHolderName && (
                    <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                      {" "}
                      {errors.cardHolderName}{" "}
                    </p>
                  )}
                </div>

                {/* Expiry Date */}
                <div className="flex flex-col gap-1">
                  <p className="text-lead font-semibold capitalize text-[1rem] lg:text-[1.25rem]">
                    {" "}
                    <span className="text-red-600">*</span> Expiry Date{" "}
                  </p>
                  <input
                    className="bg-slate-200 lg:p-[0.7rem] text-[1rem] p-[0.4rem] w-full rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                    type="text"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    name="expiryDate"
                    id="expiryDate"
                  />
                  {errors.expiryDate && (
                    <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                      {" "}
                      {errors.expiryDate}{" "}
                    </p>
                  )}
                </div>

                {/* Sub Total */}
                <div className="flex flex-col gap-1">
                  <p className="text-lead font-semibold capitalize text-[1rem] lg:text-[1.25rem]">
                    {" "}
                    Sub Total{" "}
                  </p>
                  <input
                    className="bg-slate-200 cursor-not-allowed lg:p-[0.7rem] text-[1.1rem] lg:text-[1.25rem] p-[0.4rem] w-full capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                    type="text"
                    value={subTotalView}
                    disabled
                    name="subTotal"
                    id="subTotal"
                  />
                </div>

                {/* Total Amount */}
                <div className="flex flex-col gap-1">
                  <p className="text-lead font-semibold capitalize text-[1rem] lg:text-[1.25rem]">
                    {" "}
                    Total Amount{" "}
                  </p>
                  <input
                    className="bg-slate-200 cursor-not-allowed lg:p-[0.7rem] text-[1.1rem] lg:text-[1.25rem] p-[0.4rem] w-full capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                    type="text"
                    value={totalAmountView}
                    disabled
                    name="totalAmount"
                    id="totalAmount"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-[0.5rem]">
                {/* Debit Card Number */}
                <div className="flex flex-col gap-1">
                  <p className="text-lead capitalize font-semibold text-[1rem] lg:text-[1.25rem]">
                    {" "}
                    <span className="text-red-600">*</span> Debit Card Number{" "}
                  </p>
                  <input
                    className="bg-slate-200 lg:p-[0.7rem] text-[1rem] p-[0.4rem] w-full capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                    type="text"
                    value={formData.debitCardNumber}
                    onChange={handleChange}
                    name="debitCardNumber"
                    id="debitCardNumber"
                  />
                  {errors.debitCardNumber && (
                    <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                      {" "}
                      {errors.debitCardNumber}{" "}
                    </p>
                  )}
                </div>

                {/* CVV */}
                <div className="flex flex-col gap-1">
                  <p className="text-lead capitalize font-semibold text-[1rem] lg:text-[1.25rem]">
                    {" "}
                    <span className="text-red-600">*</span> CVV{" "}
                  </p>
                  <input
                    className="bg-slate-200 lg:p-[0.7rem] text-[1rem] p-[0.4rem] w-full capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                    type="text"
                    value={formData.cvv}
                    onChange={handleChange}
                    name="cvv"
                    id="cvv"
                  />
                  {errors.cvv && (
                    <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
                      {" "}
                      {errors.cvv}{" "}
                    </p>
                  )}
                </div>

                {/* Platform Fee */}
                <div className="flex flex-col gap-1">
                  <p className="text-lead capitalize font-semibold text-[1rem] lg:text-[1.25rem]">
                    {" "}
                    Platform Fee{" "}
                  </p>
                  <input
                    className="bg-slate-200 cursor-not-allowed lg:p-[0.7rem] text-[1.1rem] lg:text-[1.25rem] p-[0.4rem] w-full capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
                    type="text"
                    value={platformFeeView}
                    disabled
                    name="platformFee"
                    id="platformFee"
                  />
                </div>
              </div>
            </section>

            <div className="flex mt-[1.5rem] justify-center">
              <button
                type="submit"
                className="py-[0.8rem] px-[2rem]  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[14px] lg:text-[18px] font-bold text-center flex items-center justify-center"
              >
                Make Payment
              </button>
            </div>
          </form>
        </div>
      </Modal>
      {/* Render PlsWait component conditionally based on isProcessingPayment */}
      {isProcessingPayment && <PlsWait />}
      {paymentSuccessful && <PaymentSuccess />}
    </div>
  );
};

export default VisaCardDetails;
