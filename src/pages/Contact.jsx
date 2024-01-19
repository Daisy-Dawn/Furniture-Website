// import React from "react";
import { LuMail } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { FaGithub, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { useState } from "react";
import axios from "axios";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const Contact = () => {
  // const navigate = useNavigate()
  const [name, SetName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleChanges = (e, type) => {
    switch (type) {

      case "name":
        setError("");
        setMsg("");
        SetName(e.target.value);
        if (e.target.value === "") {
          setError("This field is empty")

        }
        break;

      case "email":
        setError("");
        setMsg("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("This field is empty");

        }
        break;

      case "subject":
        setError("");
        setMsg("");
        setSubject(e.target.value);
        if (e.target.value === "") {
          setError("This field is empty")
        }
        break;

      case "phone":
        setError("");
        setMsg("");
        setPhone(e.target.value);
        if (e.target.value === "") {
          setError("This field is empty")

        }
        break;

      case "message":
        setError("");
        setMsg("");
        setMessage(e.target.value);
        if (e.target.value === "") {
          setError("This field is empty")

        }
        break;


      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name) {
        setError('Please enter your name.');
        return false;
      } else if (!email) {
        setError('Please enter your email adress.');
        return false;
      } else if (!subject) {
        setError('Please enter your subject.');
        return false;
      } else if (!phone) {
        setError('Please enter your phone number.')
        return false;
      } else if (!message) {
        setError('Please enter your messages.')
        return false;
      }

      const data = { name: name, email: email, subject: subject, phone: phone, message: message };
      const response = await axios.post('http://localhost/reactApiPhp/api/contactServer.php', data);

      if (response.data.success) {
        setMsg('Your form has been successfully submitted, you will recieve a response shortly.')
      } else if (response.data.error) {
        setError('Email already exist, use another email to contact us')
      } else {
        setError('Error contacting us')
      }
    } catch (error) {
      console.error(error)
    }
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

      <p style={{ textAlign: "center" }}>
        {
          error !== "" ? (
            <div style={{ color: "red" }}> {error} </div>
          ) : (
            <div style={{ color: "green" }}> {msg} </div>
          )
        }
      </p>

      {/* FORM COMPONENT */}
      <h2 className="text-lead font-bold lg:text-[30px] text-[25px] text-left mb-[0.7rem] lg:mb-[1.5rem]">Get a quote</h2>

      <form onSubmit={handleSubmit} >
        <div className="grid w-full gap-[1.3rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* First Column */}
          <div className="">
            {/* NAME SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Name</p>
            <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none"
              type="text"
              value={name}
              name="name"
              onChange={(e) => handleChanges(e, "name")}
            />


            {/* SUBJECT SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Subject</p>
            <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none"
              type="text"
              value={subject}
              name="subject"
              onChange={(e) => handleChanges(e, "subject")}
            />


            {/* MESSAGE SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Message</p>
            <textarea className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
              cols="30"
              rows="7"
              value={message}
              name="message"
              onChange={(e) => handleChanges(e, "message")}
            ></textarea>

          </div>

          <div>
            {/* SECOND SECTION */}
            {/* EMAIL SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] mt-[-20px] lg:mt-0 font-semibold mb-2">Email</p>
            <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
              type="email"
              value={email}
              name="email"
              onChange={(e) => handleChanges(e, "email")}
            />


            {/* Phone SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Phone</p>
            <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
              type="tel"
              value={phone}
              name="phone"
              onChange={(e) => handleChanges(e, "phone")}
            />

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
          <button
            type="submit"
            className="flex justify-center items-center bg-lead rounded-[10px] md:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] lg:hidden xl:block"> Send Now</button>
        </div>
        <button type="submit" className=" justify-center items-center bg-lead rounded-[10px] md:w-1/2 lg:w-1/3 xl:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] hidden lg:flex xl:hidden"> Sending Now</button>
      </form>
    </div>
  );
};

export default Contact;
