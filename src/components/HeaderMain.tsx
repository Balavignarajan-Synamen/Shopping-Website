"use client";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.success("Wishlist added successfully", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Flip,
  });
};

const HeaderMain = () => {
  return (
    <>
      <div className="border-b border-gray-200 py-4 md:py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto pb-4 md:pb-0">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-[60%] lg:w-[50%] mb-4 md:mb-0">
            <input
              className="border border-gray-300 p-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="text"
              placeholder="Search for products..."
            />
            <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-gray-600 text-2xl">
            <BiUser className="cursor-pointer hover:text-black transition" />

            <div className="relative cursor-pointer" onClick={notify}>
              <FiHeart className="hover:text-black transition" />
              <span className="bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
                1
              </span>
            </div>

            <div className="relative cursor-pointer">
              <HiOutlineShoppingBag className="hover:text-black transition" />
              <span className="bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default HeaderMain;
