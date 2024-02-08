import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { cart, heart, logo, userIcon, commentPic1 } from "../assets/index";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { googleLogout } from "@react-oauth/google";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const numberOfCartItems = useSelector(state => state.addToCart.numberOfCartItems)
  const numberOfWishlistItems = useSelector(state => state.addToWishlist.numberOfWishlistItems)
  

  // framer motion helper
  const variants = {
    hidden:{
      opacity:0,
      y:10
    },
    visible:{
      opacity:1,
      y:0
    }
  }

 

  // Check if the user is authenticated
  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('user'));
    const googleStoreUser = JSON.parse(localStorage.getItem('googleToken'));
    setUser(storeUser);
    setSuccess(googleStoreUser);

  }, []);

  const handleLogout = () => {
    //  clear the token and user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('googleToken');
    // log out function to log the user out of google and set the profile array to null
    googleLogout();
    // redirect to login page 
    navigate('/login');
  }

  // const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleToggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleHideNavbarWhenClicked = ()=>{
    setToggle(false);
  }

   //navLinks data
   const navLinks = [
    { id: "", text: "Home" },
    { id: "about", text: "About" },
    { id: "shop", text: "Shop" },
    { id: "contact", text: "Contact" },
    { id: "blog", text: "Blog" },
  ];

  const navLinks2 = [
    { id: "wishlist", text: heart, number: numberOfWishlistItems },
    { id: "cart", text: cart, number: numberOfCartItems },
  ];

  // const navLinks3 = [
  //   { id: "login", text: "Login" },
  //   { id: "signup", text: "Sign Up" },
  // ];

  return (
    <div className="flex sticky top-0 w-full z-20 justify-between items-center px-[2rem] md:px-[3rem] lg:px-[5rem] h-[70px] font-nunito bg-white shadow-sm">
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
            className={`text-black font-medium`}
          >
            <NavLink 
              to={`/${link.id}`}
              className={({isActive})=> isActive ? "nav-link active" : ""}
            >{link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      

      <ul className="list-none flex  justify-between items-center gap-3 lg:gap-5 md:gap-5 text-[16px] ">
        <li
          onClick={handleToggleDropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative text-black hover:text-brown cursor-pointer font-medium `}
        >
          {user || success ? (
            <div className="relative border-2 border-solid border-steam hover:border-lead hover:border-opacity-80 transition-all duration-200 rounded-full">
              <img src={commentPic1} className="rounded-full w-5 h-5 object-cover" alt="user avatar" />
            </div>
          ) : (
              <img src={userIcon} alt="user icon image" />
          )}
          
          <AnimatePresence>
            {isDropdownVisible && (
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{duration:"0.3", ease:"easeOut"}}
                style={{x: "-50%"}}
                className="absolute left-1/2 top-12  py-4 flex flex-col w-40 text-center bg-slate-100 ">
                {user || success ? (
                  // If user is authenticated, display logout
                  <button
                    onClick={handleLogout}
                    className="py-[6px] hover:bg-slate-200"
                  >
                    Logout
                  </button>
                ) : (
                  // If user is not authenticated, display signup and login links
                  <>
                    <Link to="signup" className="py-[6px] hover:underline transition-all duration-300">
                      Sign Up
                    </Link>
                    <Link to="login" className="py-[6px] hover:underline transition-all duration-300">
                      Login
                    </Link>
                  </>
                )}
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent border-none"></div>
                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-100"></div>
              </motion.div>
              
            )}
          </AnimatePresence>
        </li>
        {navLinks2.map((link) => (
          <li
            key={link.id}
            className={`text-black hover:text-brown relative font-medium "
              }`}
            
          >
            <NavLink 
              to={`/${link.id}`}
            ><img src={link.text} alt="" /></NavLink>
            {link.number > 0 && (
              <p className="absolute top-[-5px] left-2 text-white rounded-full bg-red-600 px-1 text-[11px]">
                {link.number}
              </p>
            )}
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
                className={`text-white hover:text-yellow-300`}
                
              >
                <NavLink 
                  to={`/${link.id}`}
                  onClick={handleHideNavbarWhenClicked}
                  className={({isActive}) => isActive ? "nav-link actife" : "nav-link"}
                >{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
