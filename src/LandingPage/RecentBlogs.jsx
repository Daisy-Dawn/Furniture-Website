import React from "react";
import BlogList from "../data/BlogList";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const recentBlogs = BlogList.slice(0, 3);

  return (
    <div className="flex flex-col xl:mx-[5rem] md:mx-[2rem] mb-[2rem] mx-[1rem] xl:py-[4rem] md:py-[1rem] py-[2rem] gap-[5rem] md:gap-[3rem] xl:gap-[5rem]  justify-center">
     <div className="flex justify-center items-center gap-5">
        <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
        <h2 className="md:text-[25px] text-[20px] font-bold text-lead">Recent Blogs</h2>
        <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
        {recentBlogs.map((blog) => (
          <div key={blog.id} className="cursor-pointer relative group">
            <Link to={`/blog/${blog.id}`}>
              <div className="relative overflow-hidden">
                <img
                  className="rounded-[0.625rem] w-full h-[18.875rem] object-cover"
                  src={blog.banner}
                  alt=""
                />
                <div className="dark-transparency rounded-[0.625rem] hover:bg-black hover:bg-opacity-40 absolute inset-0  transition-all duration-300">
                  {/* Add any additional content or styling here */}
                </div>
              </div>
              <h2 className="text-lead text-center md:text-left text-[18px] font-semibold mt-2">
                {blog.title}
              </h2>
              <p className="text-[17px] text-center md:text-left text-bGrey font-semibold text-ellipsis overflow-hidden text-nowrap">
                {blog.description}
              </p>

              <div className="flex justify-center md:justify-start mt-[10px] md:mt-[15px]">
                <button className="text-brown text-[20px] font-semibold underline">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
