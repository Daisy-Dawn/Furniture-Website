import { Modal, Spin } from "antd";
import React, { useState, useEffect } from "react";

const PayStackCardDetails = () => {
  const [isPayStackModalOpen, setIsPayStackModalOpen] = useState(true);

  const handleCancel = () => {
    setIsPayStackModalOpen(false);
    window.location.reload();
  };
  return (
    <div>
      <Modal
        className="payment-modal"
        open={isPayStackModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="flex flex-col justify-center items-center  h-[20rem]">
          <div className="flex justify-center mb-[1rem] gap-4">
            <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-bGrey"></span>
            <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-steam"></span>
            <span className="w-[1.2rem] h-[1.2rem] rounded-full bg-steam"></span>
          </div>
          <h2 className="text-[1.5rem] font-semibold mb-[3rem] text-lead capitalize">
            {" "}
            Developers at work{" "}
          </h2>
          <div>
            <Spin size="large" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PayStackCardDetails;
