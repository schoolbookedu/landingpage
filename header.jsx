"use client";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setIsMenuOpen(false);
    setActiveLink(link);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    handleMenuToggle();
  };

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-[#0B004E] py-2 px-[20px] lg:px-[150px] lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2">
          <Link className="text-xl text-white dark:text-neutral-200" href="/">
            <Image
              src="/logo.png"
              alt="schoolbook logo"
              width="69"
              height="69"
            />
          </Link>
        </div>
        <button
          className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <div className={`my-4 lg:my-0 ${activeLink === "/" ? "active" : ""}`}>
            <Link
              href="/"
              className={`text-white font-semibold hover:text-[#FFEE52] [&.active]:text-[#FFEE52] ${
                activeLink === "/" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("/");
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
          </div>
          <div className={`my-4 lg:my-0 ${activeLink === "/" ? "active" : ""}`}>
            <Link
              href="/about"
              className={`text-white font-semibold hover:text-[#FFEE52] [&.active]:text-[#FFEE52] ${
                activeLink === "/about" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("/about");
                setIsMenuOpen(false);
              }}
            >
              About Us
            </Link>
          </div>
          <div className={`my-4 lg:my-0 ${activeLink === "/" ? "active" : ""}`}>
            <Link
              href="/contact"
              className={`text-white font-semibold hover:text-[#FFEE52] [&.active]:text-[#FFEE52] ${
                activeLink === "/contact" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("/contact");
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </Link>
          </div>
          <div className={`my-4 lg:my-0 ${activeLink === "/" ? "active" : ""}`}>
            <Link
              href="/faq"
              className={`text-white font-semibold hover:text-[#FFEE52] [&.active]:text-[#FFEE52] ${
                activeLink === "/faq" ? "active" : ""
              }`}
              onClick={() => {
                handleLinkClick("/faq");
                setIsMenuOpen(false);
              }}
            >
              FAQ
            </Link>
          </div>

          <div
            className="group relative cursor-pointer py-2"
            onClick={handleDropdownToggle}
            onBlur={handleDropdownClose}
          >
            <div className="flex items-center justify-between space-x-2 px-1">
              <span className="text-white font-semibold text-base cursor-pointer hover:text-[#FFEE52] active:text-[#FFEE52]">
                Login/Sign Up
              </span>
              <BiChevronDown
                className={`h-6 w-6 text-white hover:text-[#FFEE52] active:text-[#FFEE52] ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`${
                isDropdownOpen ? "visible" : "invisible"
              } absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-white shadow-xl mt-2`}
            >
              <Link
                href="#"
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-[#0B004E] hover:text-[#407BFF] active:text-[#407BFF] md:mx-2"
                onClick={handleDropdownItemClick}
              >
                As a Student
              </Link>

              <Link
                href="#"
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-[#0B004E] hover:text-[#407BFF] active:text-[#407BFF] md:mx-2"
                onClick={handleDropdownItemClick}
              >
                As a Tutor
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "fixed top-5  left-0 w-full bg-[#F0F0F0] border-[#ffffff] border-[1px]flex justify-center"
            : "hidden"
        } lg:hidden mt-16 z-50`}
        id="navbarSupportedContent3"
      >
        <div className="lg:flex lg:justify-end lg:items-center h-full w-full ">
          <div className="lg:flex lg:space-x-4 text-center">
            <div className="py-4 border-[#ffffff] border-b-[1px] ">
              <Link
                className="active text-[#0B004E] hover:text-[#FFEE52] active:text-[#FFEE52] font-semibold"
                aria-current="page"
                href="/"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                Home
              </Link>
            </div>
            <div className="py-4 border-[#ffffff] border-b-[1px] ">
              <Link
                className="text-[#0B004E] hover:text-[#FFEE52] active:text-[#FFEE52] lg:px-2 font-semibold"
                href="/about"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                About Us
              </Link>
            </div>
            <div className="py-4 border-[#ffffff] border-b-[1px] ">
              <Link
                className="text-[#0B004E] hover:text-[#FFEE52] active:text-[#FFEE52] lg:px-2 font-semibold"
                href="#"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                Contact Us
              </Link>
            </div>
            <div className="py-4 border-[#ffffff] border-b-[1px] ">
              <Link
                className="text-[#0B004E] hover:text-[#FFEE52] active:text-[#FFEE52] lg:px-2 font-semibold"
                href="#"
                onClick={() => {
                  handleMenuToggle();
                }}
              >
                FAQ
              </Link>
            </div>
            <div className="group relative cursor-pointer py-2">
              <div
                className="flex items-center justify-center space-x-2 px-1 py-4 "
                onClick={handleDropdownToggle}
                onBlur={handleDropdownClose}
              >
                <span className="text-[#0B004E] font-semibold text-base cursor-pointer hover:text-[#FFEE52] active:text-[#FFEE52]">
                  Login/Sign Up
                </span>
                <BiChevronDown
                  className={`h-6 w-6 text-[#0B004E] ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`${
                  isDropdownOpen ? "visible" : "invisible"
                } absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl mt-2`}
              >
                <Link
                  href="#"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-[#0B004E]  hover:text-[#407BFF] active:text-[#407BFF] md:mx-2"
                  onClick={handleDropdownItemClick}
                >
                  As a Student
                </Link>

                <Link
                  href="#"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-[#0B004E] hover:text-[#407BFF] active:text-[#407BFF] md:mx-2"
                  onClick={handleDropdownItemClick}
                >
                  As a Tutor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
