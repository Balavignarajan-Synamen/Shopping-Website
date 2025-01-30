"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Your existing desktop navbar */}
      <div className="hidden lg:block">
        <div className="container">
          <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackkish">
            <Link className="navbar_link relative" href="#">
              HOME
            </Link>
            <Link className="navbar_link relative" href="#">
              CATEGORIES
            </Link>
            <Link className="navbar_link relative" href="#">
              MEN'S
            </Link>
            <Link className="navbar_link relative" href="#">
              WOMEN'S
            </Link>
            <Link className="navbar_link relative" href="#">
              JEWELRY
            </Link>
            <Link className="navbar_link relative" href="#">
              PERFUME
            </Link>
            <Link className="navbar_link relative" href="#">
              BLOG
            </Link>
            <Link className="navbar_link relative" href="#">
              HOT OFFERS
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile navbar with hamburger */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={toggleSidebar}
            className="text-blackkish focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
        )}

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-blackkish">Menu</h2>
              <button
                onClick={toggleSidebar}
                className="text-blackkish focus:outline-none"
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                className="navbar_link relative"
                href="#"
                onClick={toggleSidebar}
              >
                HOME
              </Link>
              <Link
                className="navbar_link relative"
                href="#"
                onClick={toggleSidebar}
              >
                CATEGORIES
              </Link>
              <Link
                className="navbar_link relative"
                href="#"
                onClick={toggleSidebar}
              >
                MEN'S
              </Link>
              <Link
                className="navbar_link relative"
                href="#"
                onClick={toggleSidebar}
              >
                WOMEN'S
              </Link>
              <Link
                className="navbar_link relative"
                href="#"
                onClick={toggleSidebar}
              >
                JEWELRY
              </Link>
              <Link
                className="navbar_link relative"
                href="#"
                onClick={toggleSidebar}
              >
                PERFUME
              </Link>
              <Link
                className="navbar_link relative"
                href="#"
                onClick={toggleSidebar}
              >
                BLOG
              </Link>
              <Link
                className="navbar_link relative"
                href="#"
                onClick={toggleSidebar}
              >
                HOT OFFERS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
