import React, { useState } from "react";
import { userAuth, facebook, sofa3 } from "../../assets";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { notification } from "antd";
import { auth } from "../../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const signIn = async (data) => {
    try {
      console.log("Signing in...");
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("Sign-in successful");
      console.log(data);
      notification.success({
        message: "Account Logged in successfully",
        description: `You are now logged in with ${data.email}. You are now free to purchase as much as you like. Enjoy!`,
      });
      navigate("/shop");
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = (data) => {
    signIn(data);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  mb-0 mx-0 font-nunito bg-white">
      <div className="hidden h-[720px] md:block ">
        <img className="w-full h-full object-cover" src={sofa3} alt="" />
      </div>

      <div className="flex relative items-center h-full bg-image">
        {/* FORM COMPONENT */}
        <form
          onSubmit={onSubmit}
          className="xl:px-[6rem] lg:px-[2rem] px-[1rem] w-full flex flex-col lg:gap-[1rem] gap-[0.5rem]  "
        >
          <h2 className="md:text-lead text-black lg:text-[35px] text-[25px] mt-[2rem] xl:mt-0 text-center lg:text-left font-bold mb-2 lg:mb-4">
            Sign In
          </h2>
          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            Email
          </p>
          <input
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] rounded-[10px] lg:mb-2 mb-0 border-none outline-none"
            type="email"
            required
            value={values.email}
            onChange={(e) =>
              setValues((prevValue) => ({
                ...prevValue,
                email: e.target.value,
              }))
            }
          />

          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            Password
          </p>
          <input
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
            type="password"
            required
            value={values.password}
            onChange={(e) =>
              setValues((prevValue) => ({
                ...prevValue,
                password: e.target.value,
              }))
            }
          />

          <div className="flex items-center mt-2 ">
            <button
              className="bg-brown w-full text-white lg:text-[18px] text-[16px] font-bold rounded-[10px] lg:py-3 py-2"
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

          <p className="lg:mt-7 mt-2 text-center lg:text-[18px] text-[16px] font-semibold">
            Don't Have an account?{" "}
            <span className="md:text-lightBrown text-white font-bold relative">
              <a href="/signup">Sign Up</a>
            </span>{" "}
          </p>
        </form>
        {/* END OF FORM COMPONENT */}

        <div className="absolute cursor-pointer lg:text-lead text-black left-[1rem] top-[1rem] md:top-[0.5rem]">
          <Link to="/">
            <IoIosArrowBack className="xl:size-[28px] size-[26px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
