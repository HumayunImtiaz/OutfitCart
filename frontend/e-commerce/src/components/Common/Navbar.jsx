import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  const [navOpen, setnavOpen] = useState(false);

  const ToggleCartDrawer = () => {
    setdrawerOpen(!drawerOpen);
  };
  // sm navbar
  const ToggleNav = () => {
    setnavOpen(!navOpen);
  };

  return (
    <>
      <nav className="container max-auto flex items-center justify-between py-6 px-6">
        {/* for left logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        {/* center Navigations Link */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            MEN
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            TOPWEAR
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            BOTTOM WEAR
          </Link>
        </div>
        {/* Right- icons from React-Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={ToggleCartDrawer}
            className="relative hover:text-gray-700 "
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>
          {/* search Icons */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          {/* for small screen and hide in larg screen */}
          <button onClick={ToggleNav} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} ToggleCartDrawer={ToggleCartDrawer} />

      {/* small screen navbar open */}
      <div
        className={`fixed top-0 left-0 w-[20rem]  h-full bg-white shadow-lg tranform 
    transition-transform duration-300 flex flex-col  z-50 ${
      navOpen ? "translate-x-0" : "-translate-x-full"
    }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={ToggleNav}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={ToggleNav}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={ToggleNav}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={ToggleNav}
              className="block text-gray-600 hover:text-black"
            >
              TopWear
            </Link>
            <Link
              to="#"
              onClick={ToggleNav}
              className="block text-gray-600 hover:text-black"
            >
              BottomWaer
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
