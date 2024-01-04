import React from "react";
import { image3, footerLogo, phoneIcon, mailIcon } from "../assets";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  const backgroundImageUrl = image3;
  const footerLink1 = [
    {
      content: "About Us",
      href: "/about",
    },
    {
      content: "Shop",
      href: "/shop",
    },
    {
      content: "Blog",
      href: "/blog",
    },
  ];
  const footerLink2 = [
    {
      content: "Contact",
      href: "/contact",
    },
    {
      content: "FAQ",
      href: "/home",
    },
    {
      content: "Service",
      href: "/shop",
    },
  ];

  return (
    <div className="flex flex-col font-nunito ">
      <div
        className="relative min-h-[300px] bg-cover bg-center text-white items-center  flex flex-col justify-center p-20"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Dark overlay with transparency */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative  flex flex-col justify-center items-center gap-[2rem] w-full">
          {/* Your content goes here */}
          <h1 className="text-center text-[48px] font-bold">
            Subscribe Now To Get Services Best Of Us
          </h1>
          <p className="text-lg w-[40%] text-center ">
            We recommended you to subscribe to our newspaper, enter your email
            below to get our daily update about us.
          </p>

          <div className="relative w-[50%] ">
            <input
              className="w-full py-[1.3rem] px-[1.3rem] rounded-[10px] text-[18px] text-lead border-none outline-none placeholder:text-lead placeholder:font-semibold placeholder:text-[18px] "
              placeholder="Enter your email address"
              type="email"
            />
            <button className=" absolute top-[10px] right-[1rem] text-center font-bold text-[18px] py-[10px] px-[20px] text-white flex justify-center items-center bg-lead rounded-[10px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-lead px-[5rem] pt-[5rem] pb-[2rem] flex flex-col text-steam">
        <div className="grid grid-cols-3">
          <div className="flex gap-[2rem] flex-col">
            <div className="w-[180px] h-[50px] flex items-center justify-center">
              <img
                className="object-cover"
                src={footerLogo}
                alt=""
              />
            </div>
            <p className="w-[80%] text-[18px] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
          <div className=" grid col-span-2 grid-cols-3 px-[5rem]">
            <div className="flex flex-col gap-[1rem]">
              <Link className="text-white font-bold text-[20px] mb-2" to="/home">Customer</Link>
              {footerLink1.map((link, index) => (
                <div key={index}>
                  <Link className="text-[16px]" to={link.href}> {link.content} </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[1rem]">
              <Link className="text-white font-bold text-[20px] mb-2" to="/home">Information</Link>
              {footerLink2.map((link, index) => (
                <div key={index}>
                  <Link className="text-[16px]" to={link.href}> {link.content} </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[1rem]">
            <Link className="text-white font-bold text-[20px] mb-2" to="/home">Contact Info</Link>
            <Link className="text-[16px]" to="/home">2118 Thornridge Cir. Syracuse, Connecticut 35624.</Link>
            <div className="flex gap-3 items-center">
                <img className="w-[35px] h-[35px] object-cover  " src={phoneIcon} alt="" />
                <a href="https://wa.link/o81wxs" target="_blank" rel="noopener noreferrer">+234 705 862 5305</a>
            </div>
            <div className="flex gap-3 items-center">
                <img className="w-[35px] h-[35px] object-cover  " src={mailIcon} alt="" />
                <p>agboella20@gmail.com</p>
            </div>
            </div>
          </div>
        </div>

        <div className="mt-[4rem]">
          <div className="w-full h-[1px] bg-steam"></div>
          <div className="flex mt-8 justify-between items-center">
            <div>
              <a className="text-[16px] font-semibold" href="/home">@ 2023 Daisy Dawn Cooperation. All Rights Reserved</a>
            </div>

            <div className="flex items-center justify-center gap-[1rem]">
                <div className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center  ">
                  <a href="https://github.com/Daisy-Dawn/" target="_blank" rel="noopener noreferrer"> <FaGithub size={18} className="text-lead" /> </a>
                </div>
                <div className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center  ">
                  <a href="https://www.instagram.com/daisydawn20?igsh=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"> <GrInstagram size={18} className="text-lead" /> </a>
                </div>
                <div className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center  ">
                  <a href="https://twitter.com/AgboEmmanuella7" target="_blank" rel="noopener noreferrer"> <FaTwitter size={18} className="text-lead" /> </a>
                </div>
                <div className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center  ">
                  <a href="https://www.linkedin.com/in/agbo-emmanuella7/" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn size={18} className="text-lead" /> </a>
                </div>
                <div className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center  ">
                  <a href="https://www.upwork.com/freelancers/~01a0b25d4aca6eaeae" target="_blank" rel="noopener noreferrer"> <SiUpwork size={18} className="text-lead" /> </a>
                </div>
                <div className="w-[28px] h-[28px] rounded-full bg-steam flex justify-center items-center  ">
                  <a href="https://wa.link/o81wxs" target="_blank" rel="noopener noreferrer"> <IoLogoWhatsapp size={18} className="text-lead" /> </a>
                </div>

                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
