import { useState } from 'react'
import { forgotPassword } from '../../assets'
// import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import axios from 'axios'

const ForgotPassword1 = () => {
  // const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  // const [response, setResponse] = useState('');

  // const userEmail = { email: email }

  const onFormSubmission = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Input Field cannot be empty!")
      return;
    }
    const response = await axios.post('http://localhost/reactApiPhp/api/sendResetPassword.php', {
      userEmail: email,
    });

    if (response.data) {
      notification.success({
        message: "Confirmation Message Sent",
        description: "A message has been sent to your email, click and continue!",
      });
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else {
      // handle an error message here using the notification.antd
      notification.error({
        message: "something went wrong",
        description: "Could not sent data to server",
      });
    }
  }

  return (
    <div className='h-screen lg:h-full grid mx-[1rem] xl:mx-[8rem] lg:mx-[2rem] md:grid-cols-2 grid-cols-1  mb-0 font-nunito bg-white'>
      <div className='h-screen w-full hidden md:block'>
        <img className='h-full w-full object-contain' src={forgotPassword} alt="" />
      </div>

      <form className='flex justify-center gap-[3rem] flex-col' onSubmit={onFormSubmission} action="">
        <h2 className='lg:text-[3rem] text-[2.4rem] font-extrabold text-violet-900'> Reset Password? </h2>
        <p className='text-violet-900 lg:text-[1.6rem] text-[1.15rem] font-semibold'> Enter the email address associated with your account and we will send you an email with confirmation to reset your password. </p>

        <div>
          <input placeholder='Enter Email Address' className='w-full text-violet-900 lg:p-[1rem] lg:placeholder:text-[1.5rem] placeholder:text-[1rem] p-[0.4rem] text-[1.2rem] lg:text-[1.8rem] lg:mb-2 mb-0 border-violet-700
           placeholder:text-violet-400 border-b-[3px] outline-none' type="email" value={email} onChange={(e) => {
              setEmail(e.target.value)
              setError("")
            }} name="email" id="email" />

          {error && <p className='text-red-500 text-[1rem] lg:text-[1.2rem]'>{error}</p>}
        </div>



        <div className='justify-end flex w-full'>
          <button type='submit' className='bg-violet-900 text-white text-[1.2rem] lg:text-[1.5rem] font-semibold rounded-xl px-[2.2rem] lg:px-[3rem] flex justify-center items-center py-[0.75rem] lg:py-[1rem]'>
            Send
          </button>
        </div>
      </form>
      {/* {response && <p>Response: {response}</p>} */}
    </div>
  )
}

export default ForgotPassword1