import React from "react";
import { LuMail } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { FaGithub, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      subject: "",
      message: "",
      email: "",
      phone: "",
    },
  });

  console.log(errors);

  const onSubmit = (data) => {
    navigate('/')
    console.log(data)
  }

  const contactList = [
    {
      icon: <FaPhoneAlt />,
      href: "#",
      text: "123-456-789",
    },
    {
      icon: <LuMail />,
      href: "#",
      text: "info@furniture.com",
    },
    {
      icon: <GiWorld />,
      href: "#",
      text: "www.furnitures.com",
    },
  ];

  const socialIconList = [
    {
      icon: <FaGithub />,
      href: "#",
    },
    {
      icon: <GrInstagram />,
      href: "#",
    },
    {
      icon: <FaTwitter />,
      href: "#",
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
    },
    {
      icon: <SiUpwork />,
      href: "#",
    },
  ];
  return (
    <div className="flex flex-col justify-center  min-h-screen xl:mx-[4rem] 2xl:mx-[8rem] lg:mx-[2rem] mx-[1rem] mb-[5rem]  font-nunito">
      <div className="flex flex-col items-center">
        <h2 className="text-lead text-center font-bold text-[30px] lg:text-[45px]">Contact</h2>
        <p className="text-center mt-[1rem] lg:mb-[3rem] mb-[1rem] text-bGrey lg:w-[50%] w-[90%] font-semibold text-[16px] lg:text-[20px]">
          We display products based on the latest products we have, if you want to
          see our old products please enter the name of the item.
        </p>
      </div>

      {/* FORM COMPONENT */}
      <h2 className="text-lead font-bold lg:text-[30px] text-[25px] text-left mb-[0.7rem] lg:mb-[1.5rem]">Get a quote</h2>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="grid w-full gap-[1.3rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {/* First Column */}
          <div className="">
          {/* NAME SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Name</p>
            <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none" type="text" {...register("name", {
              required: "This Field is required"})} />
              <p className="text-red-600 mt-[-15px] text-[15px] block">{errors.name?.message}</p>

              {/* SUBJECT SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Subject</p>
            <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none" type="text" {...register("subject", {
              required: "This Field is required"})} />
              <p className="text-red-600 mt-[-15px] text-[15px] block">{errors.subject?.message}</p>

              {/* MESSAGE SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Message</p>
            <textarea className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none" {...register("message", {
              required: "This Field is required"})} cols="30" rows="7"></textarea>
              <p className="text-red-600 mt-[-15px] text-[15px] block">{errors.message?.message}</p>
          </div>

          <div>
          {/* SECOND SECTION */}
          {/* EMAIL SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] mt-[-20px] lg:mt-0 font-semibold mb-2">Email</p>
            <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none" type="email" {...register("email", {
              required: "This Field is required",
              pattern: {
                value: /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
                message: "Not a Valid Email Address",
              },
            })} />
            <p className="text-red-600 mt-[-15px] text-[15px] block">{errors.email?.message}</p>

            {/* Phone SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Phone</p>
            <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none" type="tel" {...register("phone", {
              required: "This Field is required"})} />
              <p className="text-red-600 mt-[-15px] text-[15px] block">{errors.phone?.message}</p>
          </div>

          {/* THIRD SECTION */}

          <div className="bg-lynx flex flex-col xl:py-[6rem] py-[2rem] xl:px-[4rem] px-[1rem] gap-[3rem] rounded-[10px]">
            {contactList.map((contact, index) => (
              <div key={index} className="flex gap-[1.2rem]">
                <span className="size-[20px] text-lead w-[30px] h-[30px] rounded-full bg-steam flex items-center justify-center">{contact.icon}</span>
                <a href={contact.href}> {contact.text} </a>
              </div>
            ))}
            <div className="flex items-center  w-full md:w-fit md:justify-center gap-[2rem]">
              {socialIconList.map((icon, index) => (
                <div
                  className="w-[28px] h-[28px]  rounded-full bg-lead flex justify-center items-center "
                  key={index}
                >
                  <a href={icon.href} target="_blank" rel="noopener noreferrer">
                    <span className="size-[18] text-lynx">
                      {icon.icon}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="flex justify-center items-center bg-lead rounded-[10px] md:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] lg:hidden xl:block"> Send Now</button>
        </div>
        <button type="submit" className=" justify-center items-center bg-lead rounded-[10px] md:w-1/2 lg:w-1/3 xl:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] hidden lg:flex xl:hidden"> Send Now</button>
      </form>
    </div>
  );
};

export default Contact;
