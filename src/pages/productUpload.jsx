// import React from "react";
import { useState } from "react";
// import axios from "axios";
// import React from "react";
import { LuMail } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { FaGithub, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const ProductUpload = () => {
    // const navigate = useNavigate()
    const [name, SetName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [ratings, setRatings] = useState('');
    const [description, setDescription] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState();

    const handleChanges = (e, type) => {
        switch (type) {

            case "name":
                setError("");
                setMsg("");
                setImage('')
                SetName(e.target.value);
                if (e.target.value === "") {
                    setError("This field is empty")

                }
                break;

            case "title":
                setError("");
                setMsg("");
                setTitle(e.target.value);
                if (e.target.value === "") {
                    setError("This field is empty");

                }
                break;

            case "price":
                setError("");
                setMsg("");
                setPrice(e.target.value);
                if (e.target.value === "") {
                    setError("This field is empty")
                }
                break;

            case "ratings":
                setError("");
                setMsg("");
                setRatings(e.target.value);
                if (e.target.value === "") {
                    setError("This field is empty")

                }
                break;

            case "description":
                setError("");
                setMsg("");
                setDescription(e.target.value);
                if (e.target.value === "") {
                    setError("This field is empty")

                }
                break;
            case "category":
                setError("");
                setMsg("");
                setCategory(e.target.value);
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
                setError('Please enter the field.');
                return false;
            } else if (!title) {
                setError('Please enter the field.');
                return false;
            } else if (!price) {
                setError('Please enter the field.');
                return false;
            } else if (!ratings) {
                setError('Please enter the field.');
                return false;
            } else if (!description) {
                setError('Please enter the field.');
                return false;
            } else if (!image) {
                setError('Please enter the field.');
                return false;
            } else if (!category) {
                setError('Please enter the field.');
                return false;
            }

            // const data = { name: name, title: title, price: price, ratings: ratings, description: description };
            // // const response = await axios.post('http://localhost/reactApiPhp/api/contactServer.php', data);

            // if (response.data.success) {
            //     setMsg('Your form has been successfully submitted, you will recieve a response shortly.')
            // } else if (response.data.error) {
            //     setError('Email already exist, use another email to contact us')
            // } else {
            //     setError('Error contacting us')
            // }
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
                <h2 className="text-lead text-center font-bold text-[30px] lg:text-[45px]">ProductUpload</h2>
                <p className="text-center mt-[1rem] lg:mb-[3rem] mb-[1rem] text-bGrey lg:w-[50%] w-[90%] font-semibold text-[16px] lg:text-[20px]">
                    Here is to upload product database for diplay on the productlist
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
            <h2 className="text-lead font-bold lg:text-[30px] text-[25px] text-left mb-[0.7rem] lg:mb-[1.5rem]">upload products</h2>

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
                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Title</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none"
                            type="text"
                            value={title}
                            name="title"
                            onChange={(e) => handleChanges(e, "title")}
                        />


                        {/* MESSAGE SECTION */}
                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Product Description</p>
                        <textarea className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            cols="30"
                            rows="7"
                            value={description}
                            name="description"
                            onChange={(e) => handleChanges(e, "description")}
                        ></textarea>

                    </div>

                    <div>
                        {/* SECOND SECTION */}
                        {/* EMAIL SECTION */}
                        <p className="text-lead lg:text-[20px] text-[16px] mt-[-20px] lg:mt-0 font-semibold mb-2">Price</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            type="number"
                            value={price}
                            name="price"
                            onChange={(e) => handleChanges(e, "price")}
                        />


                        {/* Phone SECTION */}
                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Ratings</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            type="number"
                            value={ratings}
                            name="ratings"
                            onChange={(e) => handleChanges(e, "ratings")}
                        />

                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Image</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            type="file"
                            value={image}
                            name="image"
                            onChange={(e) => handleChanges(e, "image")}
                        />
                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Category</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            type="file"
                            value={category}
                            name="category"
                            onChange={(e) => handleChanges(e, "category")}
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
                {/* <button type="submit" className=" justify-center items-center bg-lead rounded-[10px] md:w-1/2 lg:w-1/3 xl:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] hidden lg:flex xl:hidden"> Sending Now</button> */}
            </form>
        </div>
    );
};
export default ProductUpload;