import { useState } from 'react'
import { resetPassword } from '../../assets'
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { notification } from "antd";
import axios from 'axios'; 
// import { useParams } from 'react-router-dom';

const ForgotPassword2 = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // these get the token from the url and send it to the backend
  const fetchUrl = window.location.href;
  const urlPath = fetchUrl.split('?')
  const token = urlPath[1];
  // console.log("token store", token);



  const onFormSubmission = async (e) => {
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
    // console.log('Form submitted successfully!, ', password);

    const response = await axios.post('https://freefurnitura.000webhostapp.com/reactApiPhp/api/completeResetPassword.php', {
      password: password, token: token,
    });

    if (!token) {
      // handle  an error message using the notification for error
      notification.success({
        message: "Your token is missing",
        description: "parse error: A wrong password reset please try again!",
      });
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }

    // these send a notification to the user saying password reseted successfully
    if (response.data.success) { // do not touch this response
      notification.success({
        message: "Password has been updated Successful",
        description: "You can now login to your account with your new password!",
      });
      setTimeout(() => {
        navigate('/login');
      }, 5000);

    } else if (response.data.error) { // do not touch this response
      // handle error notification for the password update

      notification.error({
        message: "Something went wrong",
        description: "Parse Error: could be ur token is invalid or expires. Please try again!",
      });
    } else if (response.data.failed) { // do not touch this response
      // handle error notification for the password update
      notification.error({
        message: "Your token has expired",
        description: "password reset failed please try again!",
      });
      setTimeout(() => {
        navigate('/login')
      }, 5000);

    } else {
      // handle error notification for the password update
      notification.error({
        message: "invalid data",
        description: "password reset failed please try again!",
      });
    }


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