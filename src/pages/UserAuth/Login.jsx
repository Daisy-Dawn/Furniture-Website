import React from "react";
import { room8, room4, facebook } from "../../assets";
import { SiApple } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-2 mb-6 mx-10 font-nunito bg-white  ">
      <div>
        <img className="w-full h-[600px] object-cover" src={room4} alt="" />
      </div>
      <div className="flex relative items-center  h-full">
        <form className="px-[6rem] flex flex-col gap-[1rem]  " action="">
          <h2 className="text-lead text-[35px] font-bold mb-4">Sign In</h2>
          <p className="font-semibold text-[18px] text-lead">Email</p>
          <input
            className="bg-slate-200 p-[0.7rem] rounded-[10px] mb-2 border-none outline-none  "
            type="email"
            name=""
            id=""
          />

          <p className="font-semibold text-[18px] text-lead">Password</p>
          <input
            className="bg-slate-200 p-[0.7rem] rounded-[10px] mb-2 border-none outline-none  "
            type="password"
            name=""
            id=""
          />

          <div className="flex gap-[1rem]">
            <input className="w-10 " type="checkbox" name="" id="" />
            <p className="text-[16px] text-bGrey">
              {" "}
              Creating an account means you're okay with our{" "}
              <span className="text-brown">
                Terms of Service, Privacy Policy,
              </span>{" "}
              and our default{" "}
              <span className="text-brown">Notification Settings.</span>{" "}
            </p>
          </div>

          <div className="flex items-center mt-2 ">
            <button
              className="bg-brown w-full text-white text-[18px] font-bold rounded-[10px] py-3"
              type="submit"
            >
              Sign In
            </button>
          </div>

          <p className="text-center text-bGrey text-[16px]">Or</p>

          <div className="flex gap-[2rem] justify-center items-center">
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
            <span>
              <SiApple className="cursor-pointer" size={27} />
            </span>
          </div>

          <p className="mt-7 text-center text-[18px] font-semibold">
            Don't Have an account?{" "}
            <span className="text-lightBrown font-bold relative">
              <a href="/signup">Sign Up</a>
            </span>{" "}
          </p>
        </form>

        <div className="absolute cursor-pointer text-lead left-[1rem] top-[0rem]">
          <Link to="/home"><IoIosArrowBack size={28} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
