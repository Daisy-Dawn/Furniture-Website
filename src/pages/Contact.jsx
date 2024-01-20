import React, { useState, useMemo } from "react";
import { LuMail } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { FaGithub, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const Contact = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
    phone: "",
  });
  const [emailPattern, setEmailPattern] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Reset all error messages
    setEmailPattern("");

    // Validate email
    if (!emailPattern.test(inputFields.email)) {
      setEmailPattern("This is not a valid email address!");
      return;
    }
    notification.success({
      message: "Message Sent Successfully!",
      description:
        "Your Message was successfully sent and we will get back to you shortly.",
    });
    navigate("/");
    console.log("Success:", inputFields);
  };

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
        <h2 className="text-lead text-center font-bold text-[30px] lg:text-[45px]">
          Contact
        </h2>
        <p className="text-center mt-[1rem] lg:mb-[3rem] mb-[1rem] text-bGrey lg:w-[50%] w-[90%] font-semibold text-[16px] lg:text-[20px]">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item.
        </p>
      </div>

      {/* FORM COMPONENT */}
      <h2 className="text-lead font-bold lg:text-[30px] text-[25px] text-left mb-[0.7rem] lg:mb-[1.5rem]">
        Get a quote
      </h2>
      <form className="" onSubmit={onSubmit}>
        <div className="grid w-full gap-[1.3rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* First Column */}
          <div className="">
            {/* NAME SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">
              Name
            </p>
            <input
              required
              value={inputFields.name}
              onChange={(e) =>
                setInputFields((prevFiled) => ({
                  ...prevFiled,
                  name: e.target.value,
                }))
              }
              className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none"
            />

            {/* SUBJECT SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">
              Subject
            </p>
            <input
              required
              value={inputFields.subject}
              onChange={(e) =>
                setInputFields((prevFiled) => ({
                  ...prevFiled,
                  subject: e.target.value,
                }))
              }
              className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none"
              type="text"
            />

            {/* MESSAGE SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">
              Message
            </p>
            <textarea
              required
              value={inputFields.message}
              onChange={(e) =>
                setInputFields((prevFiled) => ({
                  ...prevFiled,
                  message: e.target.value,
                }))
              }
              className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
              cols="30"
              rows="7"
            ></textarea>
          </div>

          <div>
            {/* SECOND SECTION */}
            {/* EMAIL SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] mt-[-20px] lg:mt-0 font-semibold mb-2">
              Email
            </p>
            <input
              required
              value={inputFields.email}
              onChange={(e) =>
                setInputFields((prevFiled) => ({
                  ...prevFiled,
                  email: e.target.value,
                }))
              }
              className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
              type="email"
            />
            <p className="text-red-600"> {emailPattern} </p>

            {/* Phone SECTION */}
            <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">
              Phone
            </p>
            <input
              required
              value={inputFields.phone}
              onChange={(e) =>
                setInputFields((prevFiled) => ({
                  ...prevFiled,
                  phone: e.target.value,
                }))
              }
              className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
              type="tel"
            />
          </div>

          {/* THIRD SECTION */}

          <div className="bg-lynx flex flex-col xl:py-[6rem] py-[2rem] xl:px-[4rem] px-[1rem] gap-[3rem] rounded-[10px]">
            {contactList.map((contact, index) => (
              <div key={index} className="flex gap-[1.2rem]">
                <span className="size-[20px] text-lead w-[30px] h-[30px] rounded-full bg-steam flex items-center justify-center">
                  {contact.icon}
                </span>
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
                    <span className="size-[18] text-lynx">{icon.icon}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center bg-lead rounded-[10px] md:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] lg:hidden xl:block"
          >
            {" "}
            Send Now
          </button>
        </div>
        <button
          type="submit"
          className=" justify-center items-center bg-lead rounded-[10px] md:w-1/2 lg:w-1/3 xl:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] hidden lg:flex xl:hidden"
        >
          {" "}
          Send Now
        </button>
      </form>
    </div>
  );
};

export default Contact;

// import React, { useState } from "react";
// import { LuMail } from "react-icons/lu";
// import { GiWorld } from "react-icons/gi";
// import { FaGithub, FaTwitter, FaPhoneAlt } from "react-icons/fa";
// import { GrInstagram } from "react-icons/gr";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { SiUpwork } from "react-icons/si";
// import { useNavigate } from "react-router-dom";
// import {Form} from 'antd'

// const Contact = () => {
//   const [name, setName] = useState("")
//   const [subject, setSubject] = useState("")
//   const [message, setMessage] = useState("")
//   const [email, seteEmail] = useState("")
//   const [phone, setPhone] = useState("")

//   const navigate = useNavigate()

//   const onFinish = (data) => {
//     navigate('/')
//     console.log('Success:', data);
//   }

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   const validateMessages = {
//     required: '${name} is required!',
//     types: {
//       email: "${name} is not a valid Email!",
//       tel: "${name} is not a valid Telephone Number!",
//     }
//   }

//   const contactList = [
//     {
//       icon: <FaPhoneAlt />,
//       href: "#",
//       text: "123-456-789",
//     },
//     {
//       icon: <LuMail />,
//       href: "#",
//       text: "info@furniture.com",
//     },
//     {
//       icon: <GiWorld />,
//       href: "#",
//       text: "www.furnitures.com",
//     },
//   ];

//   const socialIconList = [
//     {
//       icon: <FaGithub />,
//       href: "#",
//     },
//     {
//       icon: <GrInstagram />,
//       href: "#",
//     },
//     {
//       icon: <FaTwitter />,
//       href: "#",
//     },
//     {
//       icon: <FaLinkedinIn />,
//       href: "#",
//     },
//     {
//       icon: <SiUpwork />,
//       href: "#",
//     },
//   ];
//   return (
//     <div className="flex flex-col justify-center  min-h-screen xl:mx-[4rem] 2xl:mx-[8rem] lg:mx-[2rem] mx-[1rem] mb-[5rem]  font-nunito">
//       <div className="flex flex-col items-center">
//         <h2 className="text-lead text-center font-bold text-[30px] lg:text-[45px]">Contact</h2>
//         <p className="text-center mt-[1rem] lg:mb-[3rem] mb-[1rem] text-bGrey lg:w-[50%] w-[90%] font-semibold text-[16px] lg:text-[20px]">
//           We display products based on the latest products we have, if you want to
//           see our old products please enter the name of the item.
//         </p>
//       </div>

//       {/* FORM COMPONENT */}
//       <h2 className="text-lead font-bold lg:text-[30px] text-[25px] text-left mb-[0.7rem] lg:mb-[1.5rem]">Get a quote</h2>
//       <Form className="" onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages} autoComplete="on">
//         <div className="grid w-full gap-[1.3rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
//         {/* First Column */}
//           <div className="">
//           {/* NAME SECTION */}
//             <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Name</p>
//             <Form.Item

//             name="Name"
//             rules={[
//               {
//                 required: true,
//               }
//             ]}
//             >
//             <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none" />
//             </Form.Item>

//               {/* SUBJECT SECTION */}
//             <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Subject</p>
//             <Form.Item
//              name="Subject"
//               rules={[
//                 {
//                   required: true,
//                 }
//               ]}
//             >
//               <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none" type="text" />
//             </Form.Item>

//               {/* MESSAGE SECTION */}
//             <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Message</p>
//             <Form.Item
//               name="Message"
//               rules={[
//                 {
//                   required: true,
//                 }
//               ]}
//             >
//              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none" cols="30" rows="7"></textarea>
//             </Form.Item>
//           </div>

//           <div>
//           {/* SECOND SECTION */}
//           {/* EMAIL SECTION */}
//             <p className="text-lead lg:text-[20px] text-[16px] mt-[-20px] lg:mt-0 font-semibold mb-2">Email</p>
//             <Form.Item
//               name="Email"
//               rules={[
//                 {
//                   required: true,
//                   type: "email"
//                 }
//               ]}
//             >
//               <input value={email} onChange={(e) => seteEmail(e.target.value)} className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none" type="email"/>

//             </Form.Item>

//             {/* Phone SECTION */}
//             <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Phone</p>
//             <Form.Item
//               name="Phone"
//               rules={[
//                 {
//                   required: true,
//                   type: 'tel',
//                 }
//               ]}
//             >
//               <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none" type="tel" />
//             </Form.Item>
//           </div>

//           {/* THIRD SECTION */}

//           <div className="bg-lynx flex flex-col xl:py-[6rem] py-[2rem] xl:px-[4rem] px-[1rem] gap-[3rem] rounded-[10px]">
//             {contactList.map((contact, index) => (
//               <div key={index} className="flex gap-[1.2rem]">
//                 <span className="size-[20px] text-lead w-[30px] h-[30px] rounded-full bg-steam flex items-center justify-center">{contact.icon}</span>
//                 <a href={contact.href}> {contact.text} </a>
//               </div>
//             ))}
//             <div className="flex items-center  w-full md:w-fit md:justify-center gap-[2rem]">
//               {socialIconList.map((icon, index) => (
//                 <div
//                   className="w-[28px] h-[28px]  rounded-full bg-lead flex justify-center items-center "
//                   key={index}
//                 >
//                   <a href={icon.href} target="_blank" rel="noopener noreferrer">
//                     <span className="size-[18] text-lynx">
//                       {icon.icon}
//                     </span>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button type="submit" className="flex justify-center items-center bg-lead rounded-[10px] md:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] lg:hidden xl:block"> Send Now</button>
//         </div>
//         <button type="submit" className=" justify-center items-center bg-lead rounded-[10px] md:w-1/2 lg:w-1/3 xl:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] hidden lg:flex xl:hidden"> Send Now</button>
//       </Form>
//     </div>
//   );
// };

// export default Contact;
