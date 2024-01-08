import React from "react";
import { room8, room4, facebook } from "../../assets";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../../config/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = ({}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      acceptTerms: false,
      userName: "",
    },
  });
  console.log(errors);

  const signUp = async (data) => {
    try {
      console.log("Creating User .....");
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      // Set the display name for the user
      // await updateProfile(userCredential.user, {
      //   displayName: data.userName,
      // });

      console.log("User created successfully");
      console.log(data);
      console.log(data.userName);
      navigate("/shop");
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = (data) => {
    signUp(data);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  mb-0 mx-0 font-nunito bg-white  ">
      <div className="hidden md:block ">
        <img className="w-full h-full object-cover" src={room4} alt="" />
      </div>

      <div className="flex relative items-center h-full bg-image">
        {/* FORM COMPONENT */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="xl:px-[6rem] lg:px-[2rem] px-[1rem] flex flex-col lg:gap-[1rem] gap-[0.5rem]    "
          action=""
        >
          <h2 className="md:text-lead text-black lg:text-[35px] text-[25px] mt-[2rem] xl:mt-0 text-center lg:text-left font-bold mb-2 lg:mb-4">Sign Up</h2>
          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">User Name</p>
          <input
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
            type="text"
            {...register("userName", {
              required: "This Field is required",
              minLength: {
                value: 7,
                message: "Name is too short",
              },
            })}
          />
          <p className="text-red-600 text-[15px] block">
            {" "}
            {errors.userName?.message}{" "}
          </p>

          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">Email</p>
          <input
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
            type="email"
            {...register("email", {
              required: "This Field is required",
              pattern: {
                value: /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
                message: "Not a Valid Email Address",
              },
            })}
          />
          <p className="text-red-600 text-[15px] block">
            {" "}
            {errors.email?.message}{" "}
          </p>

          <p className="lg:font-semibold font-bold lg:text-[18px] text-[16px] text-black md:text-lead">Password</p>
          <input
            className="md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none  "
            type="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Length should be up to 6 characters",
              },
            })}
          />
          <p className="text-red-600 text-[15px] block">
            {" "}
            {errors.password?.message}{" "}
          </p>

          <div className="flex gap-[1rem]">
            <input
              className="w-10"
              type="checkbox"
              {...register("acceptTerms", {
                required: "Please accept the terms",
              })}
            />
            <p className="lg:text-[16px] text-[14px] md:text-bGrey text-white">
              {" "}
              Creating an account means you're okay with our{" "}
              <span className="md:text-brown text-black  cursor-pointer">
                Terms of Service, Privacy Policy,
              </span>{" "}
              and our default{" "}
              <span className="md:text-brown text-black  cursor-pointer">Notification Settings.</span>{" "}
            </p>
          </div>

          {errors.acceptTerms && (
            <p className="text-red-500 text-sm">{errors.acceptTerms.message}</p>
          )}

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
            <IoIosArrowBack className="xl:size-[28px] size-[26px]"  />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
