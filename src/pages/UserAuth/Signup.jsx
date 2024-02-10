import { userAuth } from "../../assets";
import { IoIosArrowBack } from "react-icons/io";
// import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../cssLoader/loader.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { notification } from "antd";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";




const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
    isChecked: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    isChecked: false,
  });

  // this for google login/reg authentication
  const responseSuccess = async (response) => {
    const decode = jwtDecode(response?.credential)
    const googletok = decode.email_verified;

    // Store the token in local storage
    localStorage.setItem('googleToken', JSON.stringify(googletok))

    // getting the email and name from the google auth
    const googleFormData = { name: decode.name, email: decode.email, picture: decode.picture }

    // getting api from the backend
    const url = ('http://localhost/reactApiPhp/api/googleAuth.php');

    // sending the google details to the server-side
    await axios.post(url, googleFormData);

    if (googletok === true) {
      navigate('/shop');
    } else {
      console.error('Something went wrong.')
    }
    console.log(decode)
  };
  const responseError = (err) => {
    console.log(err);
  }

  // facebook authentication
  // const responseFacebook = () => {

  // }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupFormData({
      ...signupFormData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    //validate inputs
    try {
      setIsLoading(true);
      e.preventDefault();
      const newErrors = {};
      if (signupFormData.username.trim() === "") {
        newErrors.username = "Please enter a username!";
      }
      if (signupFormData.password.trim() === "") {
        newErrors.password = "Password is required!";
      } else if (signupFormData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      if (signupFormData.email.trim() === "") {
        newErrors.email = "Please enter your valid email address!";
      }
      if (signupFormData.isChecked === false) {
        newErrors.isChecked =
          "Please check the box before you continue with your registration";
      }

      //check for errors
      if (Object.values(newErrors).some((error) => error !== "")) {
        setErrors(newErrors);
      } else {
        //form submission successful
        console.log("Form submitted", signupFormData);
      }

      const formData = {
        username: signupFormData.username,
        email: signupFormData.email,
        password: signupFormData.password,
      };
      const results = await axios.post(
        "http://localhost/reactApiPhp/api/server.php",
        formData
      );
      // const encryptData = results.config.data;
      // const encodeData = btoa(encryptData);

      if (results.data.success) {
        const { token, user } = results.data;
        notification.success({
          message: "Registration Successful",
          description: "Your have been registered successfully!",
        });

        setSignupFormData({
          username: "",
          email: "",
          password: "",
          isChecked: false,
        });

        // Store token and user data in localStorage
        const encodeData = btoa(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(encodeData));
        setTimeout(() => {
          navigate("/shop");
        }, 3000);
      } else if (results.data.error) {
        notification.error({
          message: "Registration Failed",
          description: "Opss, Email Address Already Exists Try Again!",
        });
        setSignupFormData({
          username: "",
          email: "",
          password: "",
          isChecked: false,
        });
      } else {
        notification.error({
          message: "Registration Failed",
          description:
            "There was an error submitting the form. Please try again Later.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Registration Failed",
        description: `Could not register your account try again later..., ${error}`,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  mb-0 mx-0 font-nunito bg-white">
      <div className="hidden md:block">
        <img className="w-full h-full object-cover" src={userAuth} alt="" />
      </div>

      <div className="flex relative justify-center items-center h-full bg-image py-4">
        {/* FORM COMPONENT */}
        <form
          onSubmit={handleSubmit}
          className="w-[80%] flex flex-col lg:gap-[1rem] gap-[0.5rem]"
          action=""
        >
          <div style={{ alignItems: "center" }}>
            {isLoading && <span className="loader"></span>}
          </div>

          <h2 className="md:text-lead text-black lg:text-4xl text-2xl mt-[2rem] xl:mt-0 text-center  font-bold mb-2 lg:mb-4">
            Sign Up
          </h2>
          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            {" "}
            <span className="text-red-600">*</span> User Name
          </p>
          <input
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
            type="text"
            value={signupFormData.username}
            name="username"
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
              {" "}
              {errors.username}{" "}
            </p>
          )}

          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            {" "}
            <span className="text-red-600">*</span> Email
          </p>
          <input
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
            type="email"
            value={signupFormData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-600 text-[0.75rem] lg:text-[1rem]">
              {" "}
              {errors.email}{" "}
            </p>
          )}

          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            {" "}
            <span className="text-red-600">*</span> Password
          </p>
          <div className="flex items-center gap-3 md:bg-slate-200 bg-white lg:mb-2 mb-0 lg:p-[0.7rem] w-full p-[0.4rem] rounded-[10px]">
            <input
              className="w-full border-none outline-none bg-transparent"
              type={showPassword ? "text" : "password"}
              value={signupFormData.password}
              name="password"
              onChange={handleChange}
            />
            <span
              className="cursor-pointer"
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

          <div className="flex gap-[1rem]">
            <input
              className="w-10 cursor-pointer"
              type="checkbox"
              checked={signupFormData.isChecked}
              onChange={(e) =>
                setSignupFormData({
                  ...signupFormData,
                  isChecked: e.target.checked,
                })
              }
            />
            <div>
              <p className="lg:text-[16px] text-[14px] md:text-bGrey text-white">
                {" "}
                Creating an account means you are okay with our{" "}
                <span className="md:text-brown text-black  cursor-pointer">
                  Terms of Service, Privacy Policy,
                </span>{" "}
                and our default{" "}
                <span className="md:text-brown text-black  cursor-pointer">
                  Notification Settings.
                </span>{" "}
              </p>
              {errors.isChecked && (
                <p className="text-red-600 mt-2 text-[0.75rem] lg:text-[1rem]">
                  {" "}
                  {errors.isChecked}{" "}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center mt-2 ">
            <button
              className="bg-brown hover:bg-opacity-95 w-full text-white lg:text-lg text-base font-bold rounded-[0.625rem] lg:py-3 py-2 transition-all duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </div>

          <p className="text-center md:text-bGrey text-white text-[16px]">Or</p>

          <div className="flex justify-center flex-wrap sm:flex-nowrap sm:justify-evenly items-center">
            <span>
              {/* <FcGoogle  className="cursor-pointer" size={27} /> */}
            </span>
            <GoogleLogin
              onSuccess={responseSuccess}
              onError={responseError}
              className="transition-all duration-300 p-0"

            />
            <span>
              {/* <img
                className="w-[27px] h-[27px] cursor-pointer object-cover"
                src={facebook}
                alt=""
              /> */}
              <LoginSocialFacebook
                appId="1627797028031102"
                onResolve={(res) => {
                  console.log(res);
                }}
                onReject={(error) => {
                  console.log(error);
                }}>
                <FacebookLoginButton
                  className="cursor-pointer object-cover transition-all duration-300"
                  style={{ width: "fit-content", fontSize: "1rem", height: "40px" }}
                />
              </LoginSocialFacebook>

            </span>
          </div>

          <p className="lg:mt-7 mt-2 text-center lg:text-[18px] text-[16px] font-semibold">
            Already have an account?{" "}
            <span className="md:text-lightBrown text-white font-bold relative">
              <a href="/login">Sign In</a>
            </span>{" "}
          </p>
        </form>
        {/* END OF FORM COMPONENT */}

        <div className="absolute cursor-pointer lg:text-lead text-black left-[1rem] top-[1rem] hover:-translate-x-1 transition-all duration-300">
          <Link to="/">
            <IoIosArrowBack className="xl:size-[28px] size-[26px]" />
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Signup;

// import { userAuth, facebook } from "../../assets";
// import { IoIosArrowBack } from "react-icons/io";
// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "../../cssLoader/loader.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [msg, setMsg] = useState('');
//   const [error, setError] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChanges = (e, type) => {
//     switch (type) {
//       case "username":
//         setError("");
//         setMsg("");
//         setUsername(e.target.value);
//         if (e.target.value === "") {
//           setError("This field is left blank!");
//           return;
//         }
//         break;

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
//     try {
//       setIsLoading(true);
//       e.preventDefault();
//       if (password.length < 8) {
//         setError("Your password should be atleast or above 8 characters");
//         return;
//       } else if (!isChecked) {
//         setError("Please check the box before you continue with your registration");
//         return;
//       } else if (!email) {
//         setError("Please enter your valid email address");
//         return;
//       } else if (!username) {
//         setError("Please enter your valid name");
//         return;
//       }

//       const formData = { username: username, email: email, password: password };
//       const results = await axios.post("http://localhost/reactApiPhp/api/server.php", formData);
//       // const encryptData = results.config.data;
//       // const encodeData = btoa(encryptData);

//       if (results.data.success) {
//         const { token, user } = results.data
//         setMsg("Registered Successfully");

//         // Store token and user data in localStorage
//         const encodeData = btoa(user);
//         localStorage.setItem('token', token);
//         localStorage.setItem('user', JSON.stringify(encodeData));
//         setTimeout(() => {
//           navigate("/shop");
//         }, 3000)

//       } else if (results.data.error) {
//         setError("Opss, Email Address Already Exists Try Again!");

//       }
//       else {
//         setError("Registration Failed!");

//       }

//     } catch (error) {
//       setError("Could not register your account try again later...", error);
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="grid md:grid-cols-2 grid-cols-1  mb-0 mx-0 font-nunito bg-white  ">
//       <div className="hidden md:block ">
//         <img className="w-full h-full object-cover" src={userAuth} alt="" />
//       </div>

//       <div className="flex relative items-center h-full bg-image">
//         {/* FORM COMPONENT */}
//         <form
//           onSubmit={handleSubmit}

//           className="xl:px-[6rem] lg:px-[2rem] px-[1rem] flex flex-col lg:gap-[1rem] gap-[0.5rem]    "
//           action=""
//         >
//           <div style={{ alignItems: "center" }}>
//             {
//               isLoading && <span className="loader"></span>
//             }
//           </div>

//           <h2 className="md:text-lead text-black lg:text-[35px] text-[25px] mt-[2rem] xl:mt-0 text-center lg:text-left font-bold mb-2 lg:mb-4">Sign Up</h2>
//           <p style={{ textAlign: "center" }}>
//             {
//               error !== "" ? (
//                 <div style={{ color: "red" }}> {error} </div>
//               ) : (
//                 <div style={{ color: "green" }}> {msg} </div>
//               )
//             }
//           </p>
//           <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">User Name</p>
//           <input
//             className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
//             type="text"
//             value={username}
//             name="username"
//             onChange={(e) => handleChanges(e, "username")}
//           />
//           <p className="text-red-600 text-[15px] block">
//             {" "}
//             {/* {errors.userName?.message}{" "} */}
//           </p>

//           <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">Email</p>
//           <input
//             className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
//             type="email"
//             value={email}
//             name="email"
//             onChange={(e) => handleChanges(e, "email")}

//           />
//           <p className="text-red-600 text-[15px] block">
//             {" "}

//           </p>

//           <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">Password</p>
//           <input
//             className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
//             type="password"
//             value={password}
//             name="password"
//             onChange={(e) => handleChanges(e, "password")}

//           />
//           <p className="text-red-600 text-[15px] block">
//             {" "}

//           </p>

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

//           {/* {errors.acceptTerms && (
//             <p className="text-red-500 text-sm">{errors.acceptTerms.message}</p>
//           )} */}

//           <div className="flex items-center mt-2 ">
//             <button
//               className="bg-brown w-full text-white lg:text-[18px] text-[16px] font-bold rounded-[10px] lg:py-3 py-2"
//               type="submit"
//             >
//               Sign Up
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
//             Already have an account?{" "}
//             <span className="md:text-lightBrown text-white font-bold relative">
//               <a href="/login">Sign In</a>
//             </span>{" "}
//           </p>
//         </form>
//         {/* END OF FORM COMPONENT */}

//         <div className="absolute cursor-pointer lg:text-lead text-black left-[1rem] top-[1rem] lg:top-[0rem]">
//           <Link to="/">
//             <IoIosArrowBack className="xl:size-[28px] size-[26px]" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
