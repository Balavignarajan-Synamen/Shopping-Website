import React from 'react';
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-0">
            <div className="bg-gray-200 rounded-md p-2 text-sm cursor-pointer hover:bg-blue-600 hover:text-white">
              <BsFacebook />
            </div>
            <div className="bg-gray-200 rounded-md p-2 text-sm cursor-pointer hover:bg-sky-400 hover:text-white">
              <BsTwitter />
            </div>
            <div className="bg-gray-200 rounded-md p-2 text-sm cursor-pointer hover:bg-pink-500 hover:text-white">
              <FaInstagram />
            </div>
            <div className="bg-gray-200 rounded-md p-2 text-sm cursor-pointer hover:bg-blue-700 hover:text-white">
              <FaLinkedin />
            </div>
          </div>
          
          {/* Offer Text */}
          <div className="text-gray-600 text-xs sm:text-sm uppercase text-center">
            <b>Free Shipping</b> this week on orders over $55
          </div>
          
          {/* Dropdowns */}
          <div className="flex gap-2 sm:gap-4">
            <select className="bg-white border border-gray-300 rounded-md text-gray-600 text-xs sm:text-sm px-2 py-1 cursor-pointer focus:ring-2 focus:ring-gray-400">
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="INR">INR ₹</option>
            </select>
            
            <select className="bg-white border border-gray-300 rounded-md text-gray-600 text-xs sm:text-sm px-2 py-1 cursor-pointer focus:ring-2 focus:ring-gray-400">
              <option>English</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
