// import React from "react";
import { useState } from "react";
// import React from "react";
import { LuMail } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { FaGithub, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import axios from "axios";

// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const BlogProductList = () => {
    // const navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState();
    const [bannerDescription, setBannerDescription] = useState('');

    const handleChanges = (e, type) => {
        switch (type) {


            case "title":
                setError("");
                setMsg("");
                setTitle(e.target.value);
                if (e.target.value === "") {
                    setError("This field is empty");

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

            case "author":
                setError("");
                setMsg("");
                setAuthor(e.target.value);
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


            default:
                break;
        }
    }

    const uploadProduct = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('bannerdescription', bannerDescription);
        formData.append('image', image);





        const url = "http://localhost/reactApiPhp/api/blogList.php";
        const responses = await axios.post(url, formData, {
            headers: { 'Content-Type': "multipart/form-data" },
        });

        if (responses.data.success) {
            setMsg("Product uploaded successfully");
            console.log(responses)
            // window.location.reload();
        } else {
            setError("product could not be uploaded")
            console.error(responses)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!title) {
                setError('Please enter the field.');
                return false;
            } else if (!author) {
                setError('Please enter the field.');
                return false;
            } else if (!description) {
                setError('Please enter the field.');
                return false;
            } else if (!category) {
                setError('Please enter the field.');
                return false;
            }

            const res = await uploadProduct();
            console.log(res);
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
                <h2 className="text-lead text-center font-bold text-[30px] lg:text-[45px]">Blog List Form</h2>
                <p className="text-center mt-[1rem] lg:mb-[3rem] mb-[1rem] text-bGrey lg:w-[50%] w-[90%] font-semibold text-[16px] lg:text-[20px]">
                    Here is to upload bed form data to the database.
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
            <h2 className="text-lead font-bold lg:text-[30px] text-[25px] text-left mb-[0.7rem] lg:mb-[1.5rem]">upload Blog Post</h2>

            <form onSubmit={handleSubmit} >
                <div className="grid w-full gap-[1.3rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {/* First Column */}
                    <div className="">



                        {/* SUBJECT SECTION */}
                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">title</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none"
                            type="text"
                            value={title}
                            name="title"
                            onChange={(e) => handleChanges(e, "title")}
                        />

                        {/* IMAGE */}
                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Banner</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />

                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Banner Description</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            type="text"
                            value={bannerDescription}
                            name="author"
                            onChange={(e) => setBannerDescription(e.target.value)}
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
                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">Category</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            type="text"
                            value={category}
                            name="category"
                            onChange={(e) => handleChanges(e, "category")}
                        />
                        <p className="text-lead lg:text-[20px] text-[16px] font-semibold mb-2">author</p>
                        <input className="w-full bg-slate-200 p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none"
                            type="text"
                            value={author}
                            name="author"
                            onChange={(e) => handleChanges(e, "author")}
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
export default BlogProductList;