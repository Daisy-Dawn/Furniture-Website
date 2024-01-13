import React, { useState } from "react";
import Main from "../components/shopComponent/Main";
import Aside from "../components/shopComponent/Aside";
import { BiSearchAlt } from "react-icons/bi";
import ProductList from "../data/ProductsList";
import { Pagination } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Shop = () => {
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = ProductList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate the range of products displayed on the current page
  const startProductIndex = indexOfFirstProduct + 1;
  const endProductIndex = Math.min(indexOfLastProduct, ProductList.length);

  const itemRender = (page, type, originalElement) => {
    const handleClick = () => {
      if (type === "prev") {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      } else if (type === "next") {
        setCurrentPage((prev) =>
          Math.min(prev + 1, Math.ceil(ProductList.length / productsPerPage))
        );
      }
    };

    if (type === "prev") {
      return (
        <a href="#product" className="flex items-center" onClick={handleClick}>
          <IoIosArrowBack /> Previous
        </a>
      );
    }
    if (type === "next") {
      return (
        <a href="#product" className="flex items-center" onClick={handleClick}>
          Next <IoIosArrowForward />
        </a>
      );
    }
    return originalElement;
  };

  return (
    <div className="lg:py-[3rem] py-[1rem] xl:px-[4rem] lg:px-[3rem] px-[1rem] gap-[2rem] grid grid-cols-6 lg:grid-cols-12 font-nunito bg-white  ">
      <header className="col-span-6 lg:col-span-12">
        <div className=" w-full justify-center mb-[2.5rem] items-center  flex flex-col">
          <h2 className="text-center text-lead lg:text-[45px] sm:text-[30px] text-[25px] font-bold">
            Shops
          </h2>
          <p className="lg:text-[20px] sm:text-[16px] text-[13px] font-semibold text-bGrey text-center  lg:w-[50%]">
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item.
          </p>
        </div>

        {/* RESULTS */}

        <div className="grid grid-cols-6 lg:grid-cols-12 items-center">
          <p className="lg:text-[18px] sm:text-[15px] text-[10px] text-bGrey font-semibold col-span-3 lg:col-span-9">
            Showing {startProductIndex}-{endProductIndex} of{" "}
            {ProductList.length} results
          </p>

          {/* SEARCH */}

          <div className="relative col-span-3  lg:col-span-3">
            <input
              className="rounded-[8px] text-[12px] sm:text-[14px] lg:text-[16px] sm:p-3 p-1 w-full bg-lynx border-0 outline-none placeholder:font-semibold lg:placeholder:text-[18px] sm:placeholder:text-[15px] placeholder:text-[10px] placeholder:text-bGrey  "
              type="search"
              placeholder="Search...."
              name=""
              id=""
            />
            <span className="absolute top-2 lg:top-4 right-[10%] lg:right-[17%]">
              {" "}
              <BiSearchAlt className="lg:size-5 size-4 text-lead" />{" "}
            </span>
          </div>
        </div>
      </header>

      {/* MAIN COMPONENT */}

      <main className="lg:col-span-9 col-span-6 grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[1rem]">
        {currentProduct.map((product) => (
          <Main
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
          />
        ))}
      </main>

      {/* ASIDE COMPONENT */}
      <aside className=" col-span-6 order-6 lg:order-5 lg:col-span-3">
        <Aside />
      </aside>

      {/* PAGINATION  */}
      <div className="col-span-6 lg:col-span-12 flex order-5 lg:order-6 justify-center items-center mt-0 lg:mt-8">
        <Pagination
          className="text-lead font-semibold text-[12px] lg:text-[16px]"
          total={ProductList.length}
          current={currentPage}
          pageSize={productsPerPage}
          itemRender={itemRender}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Shop;
