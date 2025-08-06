import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleLogin = () => {
    btnNameReact === "Login"
      ? setBtnNameReact("Logout")
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
        <Link to="/">Home</Link>
        <Link to="/grocery">Grocery</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
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
