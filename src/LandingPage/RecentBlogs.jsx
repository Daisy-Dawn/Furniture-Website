import React from "react";
import { room4, room5, room8 } from "../assets";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const blog = [
    {
      image: room4,
      title: "First Time Home Owner Ideas",
      content: " by Nana Ama on Nov 18th, 2022",
      href: "/blog",
    },
    {
      image: room5,
      title: "First Time Home Owner Ideas",
      content: " by Nana Ama on Nov 18th, 2022",
      href: "/blog",
    },
    {
      image: room8,
      title: "First Time Home Owner Ideas",
      content: " by Nana Ama on Nov 18th, 2022",
      href: "/blog",
    },
  ];

  return (
    <div className="flex flex-col mx-[5rem] py-[4rem] gap-[5rem]  justify-center">
      <div className="flex justify-center items-center gap-5">
        <div className="w-[50px] h-[3px] bg-lead"></div>
        <h2 className="text-[25px] font-bold text-lead"> Recent Blogs</h2>
        <div className="w-[50px] h-[3px] bg-lead"></div>
      </div>

      <div className="grid grid-cols-3 gap-[0.5rem]">
        {blog.map((blog, index) => (
          <div key={index} className="cursor-pointer relative group">
            <Link to={blog.href}>
              <div className="w-[430px] h-[300px] relative overflow-hidden">
                <img
                  className="w-full h-[300px] object-cover"
                  src={blog.image}
                  alt=""
                />
                <div className="dark-transparency hover:bg-black hover:bg-opacity-40 absolute inset-0  transition-opacity">
                  {/* Add any additional content or styling here */}
                </div>
              </div>
              <h2 className="text-lead text-[18px] font-semibold mt-2">
                {blog.title}
              </h2>
              <p className="text-[17px] text-bGrey font-semibold">
                {blog.content}
              </p>

              <button className="text-brown text-[20px] font-semibold underline mt-[15px]">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
