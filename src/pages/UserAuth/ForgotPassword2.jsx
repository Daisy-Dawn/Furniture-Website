import React, { useState } from 'react'
import {resetPassword} from '../../assets'
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { notification } from "antd";

const ForgotPassword2 = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const onFormSubmission = (e) => {
    e.preventDefault();

    // Check if password is empty
    if (!password) {
      setError('Password cannot be empty.');
      return;
    }

     // Check if confirmPassword is equal to password
     if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Check if password and confirmPassword are at least 8 characters long
    if (password.length < 8 || confirmPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    // If all checks pass, proceed with form submission
    console.log('Form submitted successfully!, ', password);
    notification.success({
      message: "Password Reset Successful",
      description: "Your password has been resetted successfully!",
    });
    navigate('/shop');
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };


  return (
    <div className='h-screen lg:h-full grid mx-[1rem] xl:mx-[8rem] lg:mx-[2rem] md:grid-cols-2 grid-cols-1 gap-[3rem]  mb-0 font-nunito bg-white'>
        <div className='h-screen w-full hidden md:block'>
          <img className='h-full w-full object-contain' src={resetPassword} alt="" />
        </div>

        <form className='flex justify-center gap-[2rem] flex-col' onSubmit={onFormSubmission} action="">
          <h2 className='lg:text-[3rem] text-[2.4rem] font-extrabold text-violet-900'>Create New Password </h2>
          <p className='text-violet-900 lg:text-[1.6rem] text-[1.15rem] font-semibold'> This password should be different from the previous password </p>

          <div className='relative'>
          <input
          // required
          placeholder='Enter Password'
          className='w-full text-violet-900 lg:p-[0.75rem] placeholder:text-[1.2rem] p-[0.4rem] text-[1.3rem] lg:mb-2 mb-0 border-violet-700 placeholder:text-violet-400 border-b-[3px] outline-none'
          type={showPassword ? " text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          id='password'
        />
          <span className='cursor-pointer text-violet-900 top-4 right-5 absolute' onClick={togglePassword}>
            {' '}
            {showPassword ? <FaEye size={23} /> : <FaEyeSlash size={23} />}{' '}
          </span>
          </div>

        <div className='relative'>
        <input
          // required
          placeholder='Confirm Password'
          className='w-full text-violet-900 lg:p-[0.75rem] placeholder:text-[1.2rem] p-[0.4rem] text-[1.3rem] lg:mb-2 mb-0 border-violet-700 placeholder:text-violet-400 border-b-[3px] outline-none'
          type={showPassword2 ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name='confirmPassword'
          id='confirmPassword'
        />
        <span className='cursor-pointer text-violet-900 top-4 right-5 absolute' onClick={togglePassword2}>
            {' '}
            {showPassword2 ? <FaEye size={23} /> : <FaEyeSlash size={23} />}{' '}
          </span>

        </div>

        {error && <p className='text-red-500 text-[1.2rem]'>{error}</p>}
        
          <div className='justify-end flex w-full'>
          <button type='submit' className='bg-violet-900 text-white text-[1.2rem] font-semibold rounded-xl px-[2rem] lg:px-[3rem] flex justify-center items-center py-[1rem]'>
            Reset Password
          </button>
          </div>
        </form>

    </div>
  )
}

export default ForgotPassword2