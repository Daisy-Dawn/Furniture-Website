import { useState, useEffect } from "react";
import Main from "../components/shopComponent/Main";
import Aside from "../components/shopComponent/Aside";
import { BiSearchAlt } from "react-icons/bi";
import { Pagination } from "antd";
import ProductsList from "../data/ProductsList";
import Recommended from "../components/shopComponent/Recommended";
import { useNavigate, } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productNotFound, setProductNotFound] = useState(false);
  const productPerPage = 15;

  //shuffle product list
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledProducts = shuffleArray(ProductsList)

  //input filter
  const [query, setQuery] = useState("");

  const filteredItems = shuffledProducts.filter(
    (product) =>
      product.productName
        .toLocaleLowerCase()
        .indexOf(query.toLocaleLowerCase()) !== -1
  );

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1); // Reset the current page to 1 when the search query changes
    return filteredItems;
  };

  //RADIO FILTER
  const handleChange = (event, type) => {
    if (type === "price") {
      const selectedPrice = parseInt(event.target.value, 10); // Parse the value to an integer
      setSelectedPrice(selectedPrice);
      setCurrentPage(1); // Reset the current page to 1 when a price is clicked
    } else {
      setSelectedCategory(event.target.value);
      setCurrentPage(1); // Reset the current page to 1 when a category is clicked
    }
  };

  //price filter
  const handleChangePrice = (value) => setSelectedPrice(value);

  //button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset the current page to 1 when a category is clicked
  };

  // Filtered data based on all filters
  const filteredData = (products, selected, query, price) => {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
      return filteredProducts
    }

    //selected fliter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, price, color, productName }) =>
          category === selected ||
          color === selected ||
          productName === selected ||
          price === selected
      );
      // setQuery("")
    }

    

    // Price filter
    if (price !== null) {
      if (price === '') {
        return filteredProducts
      }
      if (price === 1001) {
        // Handle "Over $1000" case separately
        filteredProducts = filteredProducts.filter(
          (product) => product.price > 1000
        );
      } else {
        // Filter based on the selected price range
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= price && product.price > price - 150
        );
      }
    }
    return filteredProducts;
  };

  const result = filteredData(
    shuffledProducts,
    selectedCategory,
    query,
    selectedPrice
  );

  const lastIndexOfProduct = currentPage * productPerPage;
  const indexOfFirstProduct = lastIndexOfProduct - productPerPage;
  const currentProducts = result.slice(indexOfFirstProduct, lastIndexOfProduct);

  //pagination
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="lg:py-[3rem] py-[1rem] xl:px-[4rem] lg:px-[3rem] px-[1rem] items-start gap-[2rem] grid grid-cols-6 lg:grid-cols-12 font-nunito bg-white  ">
      <header className="col-span-6 lg:col-span-12">
        <div className=" w-full justify-center mb-[2rem] lg:mb-[2.5rem] items-center  flex flex-col">
          <h2 className="text-center text-lead lg:text-[45px] sm:text-[30px] text-[25px] font-bold">
            Shops
          </h2>
          <p className="lg:text-[20px] sm:text-[16px] text-[13px] font-semibold text-bGrey text-center  lg:w-[50%]">
            We displays products based on the latest products we have, if you
            want to see our old products please enter the name of the item.
          </p>
        </div>

        {/* RESULTS */}

        <div className="grid grid-cols-6 gap-[1rem] lg:gap-0 lg:grid-cols-12 items-center">
          <p className="lg:text-[18px] sm:text-[15px] order-3 lg:order-1 text-[10px] text-bGrey font-semibold col-span-6 lg:col-span-9">
            Showing {indexOfFirstProduct + 1} - {lastIndexOfProduct > result.length ? result.length : lastIndexOfProduct} of {result.length} results
          </p>

          {/* SEARCH */}

          <div className="flex items-center gap-2 rounded-[0.625rem] sm:p-3 p-1 bg-lynx col-span-6 lg:order-3  lg:col-span-3">
            <input
              className="text-xs sm:text-sm lg:text-base w-full bg-transparent outline-none placeholder:font-semibold lg:placeholder:text-[0.9375rem] sm:placeholder:text-[0.9375rem] placeholder:text-[0.625rem] placeholder:text-bGrey"
              placeholder="Search by product name...."
              type="text"
              onChange={handleInputChange}
              value={query}
            />
            <span>
              <BiSearchAlt className="lg:size-5 size-4 text-lead" />{" "}
            </span>
          </div>
        </div>
      </header>

      <section className="col-span-6 lg:col-span-12">
        <Recommended handleClick={handleClick} />
      </section>

      {/* MAIN COMPONENT */}

      <main className="lg:col-span-9 col-span-6 items-start  lg:gap-[1rem]">
        <Main productNotFound={productNotFound} currentProducts={currentProducts} />
      </main>

      {/* ASIDE COMPONENT */}
      <aside className=" col-span-6 order-6 lg:order-5 lg:col-span-3">
        <Aside
          handleChangePrice={handleChangePrice}
          handleChange={handleChange}
        />
      </aside>

      {/* PAGINATION  */}
      <div className="col-span-6 lg:col-span-12 flex order-5 lg:order-6 justify-center items-center mt-0 lg:mt-8">
        <Pagination
          className="text-lead font-semibold text-[12px] lg:text-[16px]"
          current={currentPage}
          pageSize={productPerPage}
          onChange={handlePageChange}
          total={result.length}
          responsive
        />
      </div>
    </div>
  );
};

export default Shop;
