import { flower5, footerLogo, phoneIcon, mailIcon } from "../assets";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import {motion} from "framer-motion";
import Surface from "./animationComponents/Surface";
import { Tooltip } from "antd";

const Footer = () => {
  const backgroundImageUrl = flower5;
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
      href: "/",
    },
    {
      content: "Service",
      href: "/shop",
    },
  ];

  const socialIconList = [
    {
      icon: <FaGithub />,
      href: "#",
      style: "hover:text-[#bd2c00]",
      title:"github"
    },
    {
      icon: <GrInstagram />,
      href: "#",
      style: "hover:text-[#C13584]",
      title:"instagram"
    },
    {
      icon: <FaTwitter />,
      href: "#",
      style: "hover:text-[#55acee]",
      title:"twitter"
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
      style: "hover:text-[#0077B5]",
      title:"linkedIn"
    },
    {
      icon: <SiUpwork />,
      href: "#",
      style: "hover:text-[#0085CA]",
      title:"upwork"
    },
    {
      icon: <IoLogoWhatsapp />,
      href: "#",
      style: "hover:text-[#25D366]",
      title:"whatsapp"
    },
  ];




  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');


  const handleChanges = (e, type) => {
    switch (type) {
      case "email":
        setError("");
        setMsg("");
        setEmail(e.target.value);
        
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if (email === "") {
      //   setError("This field is left blank");
      //   return;
      // }
      if (!email) {
        setError("Insert a valid email address to recieve our best offers");
        return;

      }
      const formData = { email: email };
      const response = await axios.post('http://localhost/reactApiPhp/api/subcribe.php', formData);


      if (response.data.success) {
        setMsg("You've successfully subscribed to our newsletter!")

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else if (response.data.error) {
        setError('Email address already exists');

      } else {
        setError('Error subscribing to newsletter');
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col font-nunito">
      <div className="relative min-h-[300px] bg-cover bg-center text-white items-center  flex flex-col justify-center xl:p-20 md:p-10 p-3"style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        {/* Dark overlay with transparency */}
        <div className="absolute inset-0 bg-black bg-opacity-40">
        </div>
        <div className="relative  flex flex-col justify-center items-center md:gap-[2rem] gap-[1rem] w-full">
          {/* Your content goes here */}
          <Surface>
            <h1 className="text-center mx-auto xl:text-[48px] lg:text-[40px] md:text-[45px] text-[25px] font-bold">
              Subscribe Now To Get Services Best Of Us
            </h1>
          </Surface>
          <Surface>
            <p className="text-lg mx-auto xl:w-[40%] lg:w-[80%] w-[90%] text-center ">
              We recommended you to subscribe to our newspaper, enter your email
              below to get our daily update about us.
            </p>
          </Surface>
          <h6 style={{ textAlign: "center" }}>
            {
              error !== "" ? (
                <div style={{ color: "red" }}> {error} </div>
              ) : (
                <div style={{ color: "green" }}> {msg} </div>
              )
            }
          </h6>
          <motion.div 
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.7}}
            className="md:relative xl:w-[50%] w-[90%] ">
            <form onSubmit={handleSubmit}>
              <input
                className="w-full md:py-[1.3rem] py-[1rem] md:px-[1.3rem] px-[1rem] rounded-[10px] md:text-[18px] text-[16px] text-lead border-none outline-none placeholder:text-bGrey placeholder:font-semibold md:placeholder:text-[18px] placeholder:text-[15px] "
                placeholder="Enter your email address"
                type="email"
                value={email}
                name="email"
                onChange={(e) => handleChanges(e, "email")}
              />
              <div className="flex justify-center md:justify-start">
                <button className="disabled:opacity-80 disabled:cursor-not-allowed mt-[10px] md:mt-[0px] md:absolute md:top-[10px] md:right-[1rem] text-center font-bold text-[18px] py-[10px] px-[20px] text-white flex justify-center items-center bg-lead rounded-[10px] transition-all duration-300"
                  type="submit"
                  disabled={email === "" ? true : false}

                >
                  Subscribe
                </button>

              </div>
            </form>
          </motion.div>
         

        </div>
      </div>
      <div className="bg-lead md:px-[5rem] lg:px-[2rem] xl:px-[5rem] px-[1.3rem] xl:pt-[5rem] lg:pt-[3rem] pt-[2rem] pb-[2rem] flex flex-col text-steam">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="flex lg:gap-[2rem] gap-[1rem] mb-0 md:mb-[2rem] lg:mb-0 flex-col">
            <div className="md:w-[180px] w-[150px] h-[50px] flex items-center justify-center">
              <img className="object-cover" src={footerLogo} alt="" />
            </div>
            <p className="lg:w-[80%] w-full md:text-[18px] text-[14px] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy text
              ever since.
            </p>
          </div>

          <div className="grid col-span-2 md:grid-cols-3 grid-cols-1 px-[0rem] mt-[25px] md:mt-[0px] xl:px-[5rem]">
            <div className="flex flex-col md:gap-[1rem] gap-[0.5rem]">
              <Link
                className="text-white font-bold lg:text-[20px] md:text-[18px] text-[16px] mb-1 md:mb-2"
                to="/"
              >
                Customer
              </Link>
              {footerLink1.map((link, index) => (
                <div key={index}>
                  <Link
                    className="lg:text-[16px] md:text-[15px] text-[13px]"
                    to={link.href}
                  >
                    {" "}
                    {link.content}{" "}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:gap-[1rem] gap-[0.5rem] mt-[1.5rem] md:mt-[0]">
              <Link
                className="text-white font-bold lg:text-[20px] md:text-[18px] text-[16px]  mb-1 md:mb-2"
                to="/"
              >
                Information
              </Link>
              {footerLink2.map((link, index) => (
                <div key={index}>
                  <Link
                    className="lg:text-[16px] md:text-[15px] text-[13px]"
                    to={link.href}
                  >
                    {" "}
                    {link.content}{" "}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:gap-[1rem] gap-[0.75rem] mt-[1.5rem] md:mt-[0]">
              <Link
                className="text-white font-bold lg:text-[20px] md:text-[18px] text-[16px]  mb-1 md:mb-2"
                to="/"
              >
                Contact Info
              </Link>
              <Link
                className="lg:text-[16px] md:text-[15px] text-[13px]"
                to="/h"
              >
                2118 Thornridge Cir. Syracuse, Connecticut 35624.
              </Link>
              <div className="flex gap-5 items-center">
                <img
                  className="w-[35px] h-[35px] object-cover  "
                  src={phoneIcon}
                  alt=""
                />
                <a
                  className="lg:text-[16px] md:text-[15px] text-[13px]"
                  href="https://wa.link/o81wxs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +234 705 862 5305
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  className="w-[35px] h-[35px] object-cover  "
                  src={mailIcon}
                  alt=""
                />
                <p className="lg:text-[16px] md:text-[15px] text-[13px]">
                  agboella20@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-[4rem] mt-[3rem]">
          <div className="w-full h-[1px] bg-steam"></div>
          <div className="flex flex-col md:flex-row md:mt-8 mt-4 md:justify-between md:items-center items-start">
            <div className="mb-[1rem] md:mb-0">
              <a
                className="lg:text-[16px] md:text-[14px] text-[12px] font-semibold"
                href="/"
              >
                @ 2024 Daisy Dawn Cooperation. All Rights Reserved
              </a>
            </div>

            <div className="flex items-center justify-between w-full md:w-fit md:justify-center gap-[1rem]">
              {socialIconList.map((icon, index) => (
                <div
                  className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center "
                  key={index}
                >
                  <Tooltip 
                    title={icon.title === "github" ? "github" :
                     icon.title === "instagram" ? "instagram" : 
                     icon.title === "twitter" ? "twitter" : 
                     icon.title === "linkedIn" ? "linkedIn" : 
                     icon.title === "upwork" ? "upwork" : "whatsapp"
                    }
                  >
                    <a href={icon.href} target="_blank" rel="noopener noreferrer">
                      {" "}
                      <span className={`${icon.style} transition-all duration-300 size-[18px] text-lead`}>
                        {icon.icon}
                      </span>{" "}
                    </a>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
