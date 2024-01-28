import React, { useState } from 'react'
import {forgotPassword} from '../../assets'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'

const ForgotPassword1 = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const onFormSubmission = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Input Field cannot be empty!")
      return;
    }
    console.log("Form submitted successfully!, ", email)
    notification.success({
      message: "Confirmation Message Sent",
      description: "A message has been sent to your email, click and continue!",
    });
    navigate('/login/resetPassword')
  }

  return (
    <div className=' grid mx-[8rem] md:grid-cols-2 grid-cols-1  mb-0 font-nunito bg-white'>
        <div className='h-screen w-full'>
          <img className='h-full w-full object-cover' src={forgotPassword} alt="" />
        </div>

        <form className='flex justify-center gap-[3rem] flex-col' onSubmit={onFormSubmission} action="">
          <h2 className='text-[3rem] font-extrabold text-violet-900'> Reset Password? </h2>
          <p className='text-violet-900 text-[1.6rem] font-semibold'> Enter the email address associated with your account and we will send you an email with confirmation to reset your password. </p>

          <div>
          <input  placeholder='Enter Email Address' className='w-full text-violet-900 lg:p-[1rem] placeholder:text-[1.5rem] p-[0.4rem] text-[1.8rem] lg:mb-2 mb-0 border-violet-700
           placeholder:text-violet-400 border-b-[3px] outline-none' type="email" value={email} onChange={(e) => {
            setEmail(e.target.value)
            setError("")
           }} name="email" id="email" />

          {error && <p className='text-red-500 text-[1.2rem]'>{error}</p>}
          </div>
          
           
        
          <div className='justify-end flex w-full'>
          <button type='submit' className='bg-violet-900 text-white text-[1.5rem] font-semibold rounded-xl px-[3rem] flex justify-center items-center py-[1rem]'>
            Next
          </button>
          </div>
        </form>

    </div>
  )
}

export default ForgotPassword1