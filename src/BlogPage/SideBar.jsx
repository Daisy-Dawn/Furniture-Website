import { useContext, useRef } from "react";
import { CategoryContext } from "./CategoryContext";
import { blogSmall1 } from "../assets";
import { CiSearch } from "react-icons/ci";

const SideBar = () => {
    const { setCategory, setSearchTerm, blogData } = useContext(CategoryContext);
    const searchInputRef = useRef(); //get reference of the input value
    const filteredRecentPosts = blogData.slice(0,3); //filter and get the last three blog titles
    const barStoolCategory = blogData.filter((blog) => blog.category === "bar stool");
    const cabinetCategory = blogData.filter((blog) => blog.category === "cabinet");
    const coffeeTableCategory = blogData.filter((blog) => blog.category === "coffee table");
    const kitchenCategory = blogData.filter((blog) => blog.category === "kitchen furniture");
    const officeChairCategory = blogData.filter((blog) => blog.category === "office chair");

  return (
    <aside className="justify-self-center flex flex-col md:justify-self-auto md:col-span-full md:grid md:grid-cols-2 gap-10 lg:col-span-1 lg:flex lg:flex-col">
        {/* search container */}
        <div className="w-full max-w-[23.375rem] md:items-start flex items-center p-2 gap-2 bg-white drop-shadow-[0_4px_120px_rgba(175, 173, 181, 0.15)]">
            <input type="text" ref={searchInputRef} className="flex-1 outline-none text-lg text-bGrey font-semibold" placeholder="Search for tags.." />
            <CiSearch 
                size={24} 
                onClick={()=> {
                    setSearchTerm(searchInputRef.current.value);
                    searchInputRef.current.value = "";
                }} 
                className="cursor-pointer" 
            />
        </div>
        
        <div className=" md:items-start">
            <h2 className="text-xl text-lead font-bold w-full max-w-[23.375rem] ">
                Easy and Unexpected Living Room Decorating 
            </h2>
            <div className="my-4">
                <img src={blogSmall1} className="rounded-[0.625rem] skeleton object-cover h-[12.5rem]" alt="blog image" />
            </div>
            <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem]">Is your living room decor in desperate need of a refresh? Whether you haven&#39;t redecorated in a 
                decade or just want an easy trick to perk up an outdated sofa. 
            </p>
        </div>

        {/* Recent blog titles container */}
        <div>
            <h2 className="text-xl text-lead font-bold w-full max-w-[23.375rem] mb-6">Recent Post</h2>
            {filteredRecentPosts.map((recentBlog, index) => <p key={index}  className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] my-6 text-ellipsis whitespace-nowrap overflow-hidden">{recentBlog.description}</p>  )}
        </div>

        {/* category buttons container */}
        <div>
            <h2 className="text-xl text-lead font-bold w-full max-w-[23.375rem] mb-6">Categories</h2>
            <button onClick={()=> setCategory("bar stool")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block">
                Bar stool({barStoolCategory.length})
            </button>
            <button onClick={()=> setCategory("cabinet")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block my-6">
                Cabinet({cabinetCategory.length})
            </button>
            <button onClick={()=> setCategory("coffee table")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block">
                Coffee Table({coffeeTableCategory.length})
            </button>
            <button onClick={()=> setCategory("kitchen furniture")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block my-6">
                Kitchen furniture({kitchenCategory.length})
            </button>
            <button onClick={()=> setCategory("office chair")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block">
                Office chair({officeChairCategory.length})
            </button>
        </div>

        {/* Tags */}
        <div>
            <h2 className="text-xl text-lead font-bold w-full max-w-[23.375rem] mb-5 md:mb-6">Tags</h2>
            <div className="flex">
                <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] mb-6">Modern</p>
                <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] mb-6">Elegant</p>
                <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] mb-6">modern</p>
                <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem]">Stylish</p>
            </div>
        </div>
    </aside>
  )
}

export default SideBar;