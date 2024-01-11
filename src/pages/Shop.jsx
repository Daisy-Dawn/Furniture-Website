import React from "react";
import Main from "../components/shopComponent/Main";
import Aside from "../components/shopComponent/Aside";
import { BiSearchAlt } from "react-icons/bi";

const Shop = () => {
  return (
    <div className="py-[5rem] px-[4rem] gap-[2rem] grid grid-cols-12 font-nunito bg-white  ">
      <header className="    col-span-12">
        <div className=" w-full justify-center mb-[2.5rem] items-center flex flex-col">
          <h2 className="text-center text-lead text-[45px] font-bold">Shops</h2>
          <p className="text-[20px] font-semibold text-bGrey text-center w-[50%]">
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item.
          </p>
        </div>

        <div className="grid grid-cols-12 items-center">
          <p className="text-[18px] text-bGrey font-semibold col-span-9">
            Showing 1-9 of 57 results
          </p>

          <div className="relative  col-span-3">
            <input
              className="rounded-[8px] p-3 w-full bg-lynx border-0 outline-none placeholder:font-semibold placeholder:text-[18px] placeholder:text-bGrey  "
              type="search"
              placeholder="Search...."
              name=""
              id=""
            />
            <span className="absolute  top-4 right-[17%]">
              {" "}
              <BiSearchAlt className="size-5 text-lead" />{" "}
            </span>
          </div>
        </div>
      </header>

      <main className=" col-span-9">
        <Main />
      </main>

      <aside className=" col-span-3">
        <Aside />
      </aside>
    </div>
  );
};

export default Shop;
