import React, { useState, useEffect } from "react";
import { Modal, Result } from "antd";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleCancel = () => {
    // Navigate before closing the modal
    navigate("/shop");

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        className="payment-modal"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="flex justify-center items-center  h-[20rem]">
          <Result
            status="success"
            title="Payment Successfully Received"
            subTitle="Thank You for Shopping with us! Click the Cancel button to go back and continue shopping."
          />
        </div>
      </Modal>
    </div>
  );
};

export default PaymentSuccess;