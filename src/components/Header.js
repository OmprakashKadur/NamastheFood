import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import {useSelector} from "react-redux"
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const {loggedInUser} = useContext(UserContext);

  //subscribing to the store using Selector
  const cartItems = useSelector((store)=> store.cart.items)

console.log(cartItems)
  const handleLogin = () => {
    btnNameReact === "Login"
      ? setBtnNameReact("LogOut")
      : setBtnNameReact("Login");
  };
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-md">
      {/* <div><img src="/Images/foodFireLogo.png" alt="logo" className="h-10" /></div> */}
      <div>
        <img
          src="https://foodfire.netlify.app/Food%20Fire%20Logo.feaf9db9.png"
          alt="Namasthe Food"
          className="h-10"
        />
      </div>
      <nav className="flex gap-4 p-2 m-2">
        <div>Online Status: {onlineStatus ? "🟢" : "🔴"}</div>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/grocery" end>
          Grocery
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
        <NavLink to="/contact" end>
          Contact
        </NavLink>
       <NavLink to="/cart">Cart - ({cartItems.length} items)</NavLink>
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded curser-pointer"
          onClick={handleLogin}
        >
          {btnNameReact}
        </button>
        <div className="font-bold px-2">{loggedInUser}</div>
      </nav>
    </div>
  );
};

export default Header;
