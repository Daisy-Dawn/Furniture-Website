import { Modal, Spin } from "antd";
import React, { useState, useEffect } from "react";

const PlsWait = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
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
        <div className="flex flex-col justify-center items-center  h-[20rem]">
        <div className="flex justify-center mb-[1rem] gap-4">
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-bGrey"></span>
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-bGrey"></span>
            <span className="lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-bGrey"></span>
          </div>
          <h2 className="text-[1.5rem] font-semibold mb-[3rem] text-lead capitalize"> Please Wait </h2>
          <div>
            <Spin size="large" />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PlsWait