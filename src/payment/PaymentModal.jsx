import { useState } from 'react'
import { Modal } from 'antd'
import { paystack1, paypal_icon, debitCard } from '../assets'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// import MasterCardDetails from "./MasterCardDetails";
import PayStackCardDetails from './PayStackCardDetails'
import PaypalCardDetails from './PaypalCardDetails'
import { useNavigate } from 'react-router-dom'

const PaymentModal = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true) // Keep it open initially
  const [activePaymentOption, setActivePaymentOption] = useState(null)
  const navigate = useNavigate()

  const handleCancel = () => {
    onClose() // Call the callback function to update showPaymentModal in CheckoutForm
    setIsModalOpen(false)
  }

  const handlePaymentOptionClick = index => {
    setActivePaymentOption(index)
  }

  const handleNextStepClick = () => {
    if (activePaymentOption !== null) {
      setIsModalOpen(false) // Close payment method modal when "NEXT STEP" is clicked
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <div className=' flex justify-center font-nunito items-center '>
      <Modal
        className='payment-modal'
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div className='flex lg:mx-[2rem] lg:my-[1.5rem] flex-col gap-[1rem]'>
          <div className='flex justify-center mb-[1rem] gap-4'>
            <span className='lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-bGrey'></span>
            <span className='lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-steam'></span>
            <span className='lg:w-[1.2rem] w-[0.75rem] h-[0.75rem] lg:h-[1.2rem] rounded-full bg-steam'></span>
          </div>
          <h2 className='text-lead text-[1.2rem] lg:text-[1.7rem] font-bold text-center'>
            PAYMENT METHOD
          </h2>

          <section className='flex lg:mt-[1.5rem] flex-col'>
            {/* DEBIT CARD */}
            <div
              className={`flex justify-between border-y-2 lg:py-[1.5rem] py-[1rem] cursor-pointer border-bGrey items-center gap-10 ${
                activePaymentOption === 0 ? 'active-payment-option' : ''
              }`}
              onClick={() => handlePaymentOptionClick(0)}
            >
              <div className='flex items-center gap-4'>
                <div className='lg:w-[2.5rem] w-[2rem] h-[1.5rem] lg:h-[2rem]'>
                  <img className='w-full h-full ' src={debitCard} alt='' />
                </div>
                <p
                  className={` text-[1rem] lg:text-[1.3rem] uppercase font-semibold ${
                    activePaymentOption === 0 ? 'text-black' : 'text-bGrey'
                  }`}
                >
                  Debit Card
                </p>
              </div>
              {activePaymentOption === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: '0.3' }}
                >
                  <FaCheck size={22} className='lg:ml-20 ml-5 text-green-600' />
                </motion.div>
              )}
            </div>

            {/* PAYPAL CARD */}
            <div
              className={`flex justify-between border-b-2 lg:py-[1.5rem] py-[1rem] cursor-pointer border-bGrey items-center gap-10 ${
                activePaymentOption === 1 ? 'active-payment-option' : ''
              }`}
              onClick={() => handlePaymentOptionClick(1)}
            >
              <div className='flex gap-4 items-center'>
                <div className='lg:w-[2.5rem] w-[2rem] h-[1.5rem] lg:h-[2rem]'>
                  <img className='w-full h-full ' src={paypal_icon} alt='' />
                </div>
                <p
                  className={` text-[1rem] lg:text-[1.3rem] uppercase font-semibold ${
                    activePaymentOption === 1 ? 'text-black' : 'text-bGrey'
                  }`}
                >
                  PAYPAL
                </p>
              </div>
              {activePaymentOption === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: '0.3' }}
                >
                  <FaCheck size={22} className='lg:ml-20 ml-5 text-green-600' />
                </motion.div>
              )}
            </div>

            {/* PAYSTACK CARD */}
            <div
              className={`flex justify-between border-b-2 lg:py-[1.5rem] py-[1rem] cursor-pointer border-bGrey items-center gap-10 ${
                activePaymentOption === 2 ? 'active-payment-option' : ''
              }`}
              onClick={() => handlePaymentOptionClick(2)}
            >
              <div className='flex items-center gap-4'>
                <div className='lg:w-[2.5rem] w-[2rem] h-[1.5rem] lg:h-[2rem]'>
                  <img className='w-full h-full ' src={paystack1} alt='' />
                </div>
                <p
                  className={` text-[1rem] lg:text-[1.3rem] uppercase font-semibold ${
                    activePaymentOption === 2 ? 'text-black' : 'text-bGrey'
                  }`}
                >
                  PAYSTACK
                </p>
              </div>
              {activePaymentOption === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: '0.3' }}
                >
                  <FaCheck size={22} className='lg:ml-20 ml-5 text-green-600' />
                </motion.div>
              )}
            </div>
          </section>
        </div>

        {/* NEXT STEP BUTTON */}
        <motion.div
          whileTap={{ scale: '.97' }}
          onClick={handleNextStepClick}
          className='group bg-lighterBlue hover:bg-blue transition-all duration-300 lg:py-[1.4rem]  py-[1rem] max-w-[90%] mx-auto cursor-pointer items-center justify-center gap-4 flex rounded-[0.625rem]'
        >
          <p className='text-white font-semibold text-[1rem] lg:text-[1.3rem]'>
            NEXT STEP
          </p>
          <FaLongArrowAltRight
            size={24}
            className='group-hover:translate-x-1 transition-all duration-300 text-white font-semibold'
          />
        </motion.div>
      </Modal>

      {/* Render the appropriate card details component */}
      {isModalOpen == false &&
        activePaymentOption !== null &&
        activePaymentOption === 0 &&
        navigate('/cart/checkout/continuepayment')}
      {isModalOpen == false &&
        activePaymentOption !== null &&
        activePaymentOption === 1 && <PaypalCardDetails />}
      {isModalOpen == false &&
        activePaymentOption !== null &&
        activePaymentOption === 2 && <PayStackCardDetails />}
    </div>
  )
}

export default PaymentModal
