import { userAuth, facebook } from "../../assets";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newErrors = {};
      if (loginFormData.email.trim() === "") {
        newErrors.email = "Please Enter Your Registered Email Address";
      }
      if (loginFormData.password.trim() === "") {
        newErrors.password = "Password is required!";
      }

      //check for errors
      if (Object.values(newErrors).some((error) => error !== "")) {
        setErrors(newErrors);
      } else {
        //form submission successful
        console.log("Form submitted", loginFormData);
      }
      const formData = {
        email: loginFormData.email,
        password: loginFormData.password,
      };
      const response = await axios.post(
        "http://localhost/reactApiPhp/api/loginServer.php",
        formData
      );
      // const encryptData = response.config.data;
      // const encodeData = btoa(encryptData);

      if (response.data.message === "Login successful") {
        const { token, user } = response.data;
        const encodeData = btoa(user);

        // Store token and user data in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(encodeData));

        notification.success({
          message: "Login Successful",
          description: "Your have been logged in successfully!",
        });

        setLoginFormData({
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/shop");
        }, 2000);
      } else {
        notification.error({
          message: "Wrong Email or Password, Try Again",
          description:
            "You entered an incorrect email or password. Kindly Try again!",
        });
        return;
      }
    } catch (error) {
      notification.error({
        message: "An error occurred, Try Again",
        description: `App encountered an error while being logged in. Kindly Try again! ${error}`,
      });
      console.log(error);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  mb-0 mx-0  font-nunito bg-white  ">
      <div className="hidden h-screen md:block ">
        <img className="w-full h-full object-cover" src={userAuth} alt="" />
      </div>

      <div className="flex relative items-center bg-image">
        {/* FORM COMPONENT */}
        <form
          onSubmit={handleSubmit}
          className="xl:px-[6rem] lg:px-[2rem] px-[1rem] w-full mt-[-60px] md:mt-0 flex flex-col lg:gap-[1rem] gap-[0.5rem]  "
          action=""
        >
          <h2 className="md:text-lead text-black lg:text-[35px] text-[25px] mt-[0] md:mt-[2rem] xl:mt-0 text-center xl:text-left font-bold mb-2 lg:mb-4">
            Sign In
          </h2>
          {/* EMAIL */}
          <div className="flex flex-col gap-3">
          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            Email
          </p>
          <input
            className="md:bg-slate-200 w-full bg-white lg:p-[0.7rem] p-[0.4rem] rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
            type="email"
            value={loginFormData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
              {" "}
              {errors.email}{" "}
            </p>
          )}
          </div>

            {/* PASSWORD */}
          <div className="flex flex-col gap-3">
          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            Password
          </p>
          <div className="relative">
            <input
              className="md:bg-slate-200 bg-white lg:p-[0.7rem] w-full p-[0.4rem] rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
              type={showPassword ? "text" : "password"}
              value={loginFormData.password}
              name="password"
              onChange={handleChange}
            />
            <span
              className="cursor-pointer top-4 right-5 absolute"
              onClick={togglePassword}
            >
              {" "}
              {showPassword ? (
                <FaEye size={18} />
              ) : (
                <FaEyeSlash size={18} />
              )}{" "}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
              {" "}
              {errors.password}{" "}
            </p>
          )}
          </div>

          <Link onClick={() => navigate('/login/forgotpassword')} className="flex w-full justify-end text-blue-500 text-[1rem] font-semibold">
            <p className="cursor-pointer"> Forgot Password? </p>
          </Link>

          <div className="flex items-center mt-[2rem] ">
            <button
              className="bg-brown hover:bg-[#3F1E07] w-full text-white lg:text-[18px] text-[16px] font-bold rounded-[10px] lg:py-3 py-2"
              type="submit"
            >
              Sign In
            </button>
          </div>

          <p className="text-center md:text-bGrey text-white text-[16px]">Or</p>

          <div className="flex gap-[3rem] justify-center items-center">
            <span>
              <FcGoogle className="cursor-pointer" size={27} />
            </span>
            <span>
              <img
                className="w-[27px] h-[27px] cursor-pointer object-cover"
                src={facebook}
                alt=""
              />
            </span>
          </div>

          <p className="lg:mt-4 mt-2 text-center lg:text-[18px] text-[16px] font-semibold">
            Don&#39;t Have an account?{" "}
            <span className="md:text-lightBrown text-white font-bold relative">
              <a href="/signup">Sign Up</a>
            </span>{" "}
          </p>
        </form>
        {/* END OF FORM COMPONENT */}

        <div className="absolute cursor-pointer lg:text-lead text-black left-[1rem] top-[1rem] md:top-[0rem]">
          <Link to="/">
            <IoIosArrowBack className="xl:size-[28px] size-[26px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { userAuth, facebook } from "../../assets";
// import { IoIosArrowBack } from "react-icons/io";
// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [msg, setMsg] = useState('');
//   const [error, setError] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChanges = (e, type) => {
//     switch (type) {
//       case "email":
//         setError("");
//         setMsg("");
//         setEmail(e.target.value);
//         if (e.target.value === "") {
//           setError("This field is left blank");
//           return;
//         }
//         break;

//       case "password":
//         setError("");
//         setMsg("");
//         setPassword(e.target.value);
//         if (e.target.value === "") {
//           setError("This field is left blank")
//         }
//         break;

//       case "checked":
//         setError("");
//         setMsg("");
//         setIsChecked(!isChecked);
//         if (isChecked) {
//           setError("The checked box is unchecked")
//           return;
//         }
//         break;

//       default:
//         break;
//     }
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {

//       if (password.length < 8) {
//         setError("Insert Your Correct Password and Email");
//         return;
//       } else if (!isChecked) {
//         setError("Please Check The Box Before You Continue With Your Login Process");
//         return;
//       } else if (!email) {
//         setError("Please Enter Your Registered Email Address");
//         return;
//       }
//       const formData = { email: email, password: password };
//       const response = await axios.post('http://localhost/reactApiPhp/api/loginServer.php', formData);
//       // const encryptData = response.config.data;
//       // const encodeData = btoa(encryptData);

//       if (response.data.message === 'Login successful') {
//         const { token, user } = response.data;
//         const encodeData = btoa(user);

//         // Store token and user data in localStorage
//         localStorage.setItem('token', token);
//         localStorage.setItem('user', JSON.stringify(encodeData));

//         setMsg('Logged in Sucessfully')
//         setTimeout(() => {
//           navigate('/shop')
//         }, 2000);

//       } else {
//         setError('Wrong Email or Password Try Again');
//         return;
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <div className="grid md:grid-cols-2 grid-cols-1  mb-0 mx-0  font-nunito bg-white  ">
//       <div className="hidden h-screen md:block ">
//         <img className="w-full h-full object-cover" src={userAuth} alt="" />
//       </div>

//       <div className="flex relative items-center bg-image">
//         {/* FORM COMPONENT */}
//         <form
//           onSubmit={handleSubmit}
//           className="xl:px-[6rem] lg:px-[2rem] px-[1rem] w-full mt-[-60px] md:mt-0 flex flex-col lg:gap-[1rem] gap-[0.5rem]  "
//           action=""
//         >
//           <h2 className="md:text-lead text-black lg:text-[35px] text-[25px] mt-[0] md:mt-[2rem] xl:mt-0 text-center xl:text-left font-bold mb-2 lg:mb-4">Sign In</h2>
//           <p style={{ textAlign: "center" }}>
//             {
//               error !== "" ? (
//                 <div style={{ color: "red" }}> {error} </div>
//               ) : (
//                 <div style={{ color: "green" }}> {msg} </div>
//               )
//             }
//           </p>
//           <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">Email</p>
//           <input
//             className="md:bg-slate-200 w-full bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
//             type="email"
//             value={email}
//             name="email"
//             onChange={(e) => handleChanges(e, "email")}
//           />

//           <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">Password</p>
//           <input
//             className="md:bg-slate-200 w-full bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
//             type="password"
//             value={password}
//             name="password"
//             onChange={(e) => handleChanges(e, "password")}
//           />

//           <div className="flex gap-[1rem]">
//             <input
//               className="w-10"
//               type="checkbox"
//               checked={isChecked}
//               onChange={(e) => handleChanges(e, "checked")}
//             />
//             <p className="lg:text-[16px] text-[14px] md:text-bGrey text-white">
//               {" "}
//               Creating an account means you are okay with our{" "}
//               <span className="md:text-brown text-black  cursor-pointer">
//                 Terms of Service, Privacy Policy,
//               </span>{" "}
//               and our default{" "}
//               <span className="md:text-brown text-black  cursor-pointer">Notification Settings.</span>{" "}
//             </p>
//           </div>

//           <div className="flex items-center mt-[3rem] ">
//             <button
//               className="bg-brown hover:bg-[#3F1E07] w-full text-white lg:text-[18px] text-[16px] font-bold rounded-[10px] lg:py-3 py-2"
//               type="submit"
//             >
//               Sign In
//             </button>
//           </div>

//           <p className="text-center md:text-bGrey text-white text-[16px]">Or</p>

//           <div className="flex gap-[3rem] justify-center items-center">
//             <span>
//               <FcGoogle className="cursor-pointer" size={27} />
//             </span>
//             <span>
//               <img
//                 className="w-[27px] h-[27px] cursor-pointer object-cover"
//                 src={facebook}
//                 alt=""
//               />
//             </span>
//           </div>

//           <p className="lg:mt-7 mt-2 text-center lg:text-[18px] text-[16px] font-semibold">
//             Don&#39;t Have an account?{" "}
//             <span className="md:text-lightBrown text-white font-bold relative">
//               <a href="/signup">Sign Up</a>
//             </span>{" "}
//           </p>
//         </form>
//         {/* END OF FORM COMPONENT */}

//         <div className="absolute cursor-pointer lg:text-lead text-black left-[1rem] top-[1rem] md:top-[0rem]">
//           <Link to="/">
//             <IoIosArrowBack className="xl:size-[28px] size-[26px]" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
