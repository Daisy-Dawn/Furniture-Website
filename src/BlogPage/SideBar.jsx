import { useContext, useRef } from "react";
import { CategoryContext } from "./CategoryContext";
import { blogSmall1 } from "../assets";
import { CiSearch } from "react-icons/ci";

const SideBar = () => {
    const { setCategory, setSearchTerm, blogCardData } = useContext(CategoryContext);
    const searchInputRef = useRef(); //get reference of the input value
    const filteredRecentPosts = blogCardData.slice(-3); //filter and get the last three blog titles
    const barStoolCategory = blogCardData.filter((blog) => blog.category === "bar stool");
    const cabinetCategory = blogCardData.filter((blog) => blog.category === "cabinet");
    const coffeeTableCategory = blogCardData.filter((blog) => blog.category === "coffee table");
    const kitchenCategory = blogCardData.filter((blog) => blog.category === "kitchen furniture");
    const officeChairCategory = blogCardData.filter((blog) => blog.category === "office chair");

    console.log(barStoolCategory);
  return (
    <aside className="justify-self-center flex flex-col md:justify-self-auto md:col-span-full md:grid md:grid-cols-2 gap-16 lg:col-span-1 lg:flex lg:flex-col">
        {/* search container */}
        <div className="w-full max-w-[23.375rem] md:items-start flex items-center p-2 gap-2 bg-white drop-shadow-[0_4px_120px_rgba(175, 173, 181, 0.15)]">
            <input type="text" ref={searchInputRef} className="flex-1 outline-none text-xl text-bGrey font-semibold" placeholder="Search.." />
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
            <div className="my-9">
                <img src={blogSmall1} className="rounded-[0.625rem]" alt="blog image" />
            </div>
            <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem]">Is your living room decor in desperate need of a refresh? Whether you haven't redecorated in a 
                decade or just want an easy trick to perk up an outdated sofa. 
            </p>
        </div>

        {/* Recent blog titles container */}
        <div>
            <h2 className="text-xl text-lead font-bold w-full max-w-[23.375rem] mb-10">Recent Post</h2>
            {filteredRecentPosts.map((recentBlog, index) => <p key={index}  className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] my-10">{recentBlog.description}</p>  )}
        </div>

        {/* category buttons container */}
        <div>
            <h2 className="text-xl text-lead font-bold w-full max-w-[23.375rem] mb-10">Categories</h2>
            <button onClick={()=> setCategory("bar stool")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block">
                Bar stool({barStoolCategory.length})
            </button>
            <button onClick={()=> setCategory("cabinet")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block my-10">
                Cabinet({cabinetCategory.length})
            </button>
            <button onClick={()=> setCategory("coffee table")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block">
                Coffee Table({coffeeTableCategory.length})
            </button>
            <button onClick={()=> setCategory("kitchen furniture")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block my-10">
                Kitchen furniture({kitchenCategory.length})
            </button>
            <button onClick={()=> setCategory("office chair")} className="text-lg text-bGrey font-normal max-w-[23.375rem] block">
                Office chair({officeChairCategory.length})
            </button>
        </div>

        <div>
            <h2 className="text-xl text-lead font-bold w-full max-w-[23.375rem] mb-5 md:mb-10">Tags</h2>
            <div className="flex">
                <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] my-10">Modern</p>
                <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] my-10">Elegant</p>
                <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] my-10">modern</p>
                <p className="text-lg text-bGrey font-normal w-full max-w-[23.375rem] my-10">Stylish</p>
            </div>
        </div>
    </aside>
  )
}

export default SideBar;