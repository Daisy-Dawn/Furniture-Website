import React, { useState } from "react";
import { userAuth, facebook, sofa3 } from "../../assets";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { auth } from "../../config/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const Signup = ({}) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    checkbox: false,
  });

  const [passwordPattern, setPasswordPattern] = useState("");

  const signUp = async (data) => {
    try {
      const passwordPattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      setPasswordPattern("");
      if (!passwordPattern.test(values.password)) {
        setPasswordPattern(
          "Password must be at least 8 characters long and at least one letter, one number and one special character"
        );
        return;
      }
      console.log("Creating User .....");
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("User created successfully");
      console.log(data);
      console.log(data.userName);
      notification.success({
        message: "Account created successfully",
        description:
          "Your personal Account has been created successfully. You are now free to purchase as much as you like. Enjoy!",
      });
      navigate("/shop");
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signUp(e);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  mb-0 mx-0 font-nunito bg-white  ">
      <div className="hidden md:block ">
        <img className="w-full h-full object-cover" src={userAuth} alt="" />
      </div>

      <div className="flex relative items-center h-full bg-image">
        {/* FORM COMPONENT */}
        <form
          onSubmit={onSubmit}
          className="xl:px-[6rem] lg:px-[2rem] px-[1rem] flex flex-col lg:gap-[1rem] gap-[0.5rem]    "
        >
          <h2 className="md:text-lead text-black lg:text-[35px] text-[25px] mt-[2rem] xl:mt-0 text-center lg:text-left font-bold mb-2 lg:mb-4">
            Sign Up
          </h2>
          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            User Name
          </p>
          <input
            required
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
            type="text"
            value={values.username}
            onChange={(e) =>
              setValues((prevValue) => ({
                ...prevValue,
                username: e.target.value,
              }))
            }
          />

          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">
            Email
          </p>
          <input
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
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
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
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
          <p className="text-red-600 text-[15px] block">{passwordPattern}</p>

          <div className="flex gap-[1rem]">
            <input
              className="w-10"
              type="checkbox"
              required
              value={values.checkbox}
              onChange={(e) =>
                setValues((prevValue) => ({
                  ...prevValue,
                  chekcked: e.target.checked,
                }))
              }
            />
            <p className="lg:text-[16px] text-[14px] md:text-bGrey text-white">
              Creating an account means you're okay with our
              <span className="md:text-brown text-black  cursor-pointer">
                {" "}
                Terms of Service, Privacy Policy,{" "}
              </span>{" "}
              and our default
              <span className="md:text-brown text-black  cursor-pointer">
                {" "}
                Notification Settings.
              </span>
            </p>
          </div>

          <div className="flex items-center mt-2 ">
            <button
              className="bg-brown w-full text-white lg:text-[18px] text-[16px] font-bold rounded-[10px] lg:py-3 py-2"
              type="submit"
            >
              Sign Up
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
              <a href="/login">Sign In</a>
            </span>{" "}
          </p>
        </form>
        {/* END OF FORM COMPONENT */}

        <div className="absolute cursor-pointer lg:text-lead text-black left-[1rem] top-[1rem] lg:top-[0rem]">
          <Link to="/">
            <IoIosArrowBack className="xl:size-[28px] size-[26px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
