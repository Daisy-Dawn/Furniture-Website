import { useEffect, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { cart, heart, logo, userIcon } from "../assets/index";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";



const Header = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('user'));
    const decodeData = atob(storeUser);
    setUser(decodeData);

  }, []);

  const handleLogout = () => {
    //  clear the token and user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // redirect to login page 
    navigate('/login');
  };

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [user, setUser] = useState(null);

  const handleToggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const navLinks = [
    { id: "", text: "Home" },
    { id: "about", text: "About" },
    { id: "shop", text: "Shop" },
    { id: "contact", text: "Contact" },
    { id: "blog", text: "Blog" },
  ];

  const navLinks2 = [
    // { id: "wishlist", text: userIcon },
    { id: "wishlist", text: heart, number: 1 },
    { id: "cart", text: cart, number: 1 },
  ];

  // const navLinks3 = [
  //   { id: "login", text: "Login" },
  //   { id: "signup", text: "Sign Up" },
  // ];

  return (
    <div className="flex sticky top-0 w-full z-20 justify-between items-center px-[2rem] md:px-[3rem] lg:px-[5rem] h-[70px] font-nunito  bg-white">
      <div>
        <img
          className="lg:w-[150px] w-[100px] sm:w-[120px]"
          src={logo}
          alt=""
        />
      </div>

      <ul className="list-none md:flex hidden justify-between items-center gap-3 lg:gap-5 md:gap-5 text-[16px] ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`text-black hover:text-brown font-medium ${active === link.text ? "text-brown" : "text-black"
              }`}
            onClick={() => setActive(link.text)}
          >
            <Link to={`/${link.id}`}>{link.text}</Link>
          </li>
        ))}
      </ul>

      <ul className="list-none flex  justify-between items-center gap-3 lg:gap-5 md:gap-5 text-[16px] ">
        <li
          onClick={handleToggleDropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative text-black hover:text-brown cursor-pointer font-medium userIconContainer`}
        >
          <img src={userIcon} alt="" />
          {isDropdownVisible && (
            <div className="absolute left-[-3rem] flex-col w-[8rem] text-center hidden bg-slate-100 divide-y divide-black userIconDisplay">
              {user ? (
                // If user is authenticated, display logout
                <>
                  <button
                    onClick={handleLogout}
                    className="py-[6px] hover:bg-slate-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                // If user is not authenticated, display signup and login links
                <>
                  <Link to="signup" className="py-[6px] hover:bg-slate-200">
                    Sign Up
                  </Link>
                  <Link to="login" className="py-[6px] hover:bg-slate-200">
                    Login
                  </Link>
                </>
              )}
            </div>
          )}
        </li>
        {navLinks2.map((link) => (
          <li
            key={link.id}
            className={`text-black hover:text-brown relative font-medium ${active === link.text ? "text-brown" : "text-black"
              }`}
            onClick={() => setActive(link.text)}
          >
            {/* {link.text === ""} */}
            <Link to={`/${link.id}`}>
              <img src={link.text} alt="" />
            </Link>
            <p className="absolute top-[-5px] left-2 text-white rounded-full bg-red-600 px-1  text-[11px] ">
              {" "}
              {link.number}{" "}
            </p>
          </li>
        ))}
      </ul>

      {/* responsiveness */}
      <div className="flex md:hidden  justify-end items-center z-10">
        <div className="text-brown z-10" onClick={() => setToggle(!toggle)}>
          {" "}
          {toggle ? (
            <GrClose className="cursor-pointer" size={24} />
          ) : (
            <BsFillMenuButtonWideFill className="cursor-pointer " size={24} />
          )}{" "}
        </div>

        <div
          className={`${!toggle ? "hidden" : "flex"
            }  px-8 flex-col py-6 absolute top-20 bg-[#1A1E1C] right-0 mx-8 my-2 min-w-[50%] rounded-xl sidebar`}
        >
          <ul className="list-none text-[14px] cursor-pointer gap-8 flex flex-col flex-1 items-start justify-end ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-white hover:text-yellow-300 ${active === link.text ? "text-yellow-300" : "text-white"
                  }`}
                onClick={() => setActive(link.text)}
              >
                <Link to={`/${link.id}`}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
