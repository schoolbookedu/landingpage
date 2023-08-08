import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0B004E] w-full pt-[50px] md:pt-[100px] px-[20px] md:px-[150px]">
      <div className="flex md:flex-row flex-col justify-between align-top">
        <div className="flex-initial ">
          <div className=" items-center">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width="98" height="98" />
            </Link>
          </div>
          <div className="flex justify-between mt-16">
            <div className=" md:flex space-x-4">
              <Link href="/">
                <span className="text-white font-xs  font-normal underline decoration-1">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="text-white font-xs  font-normal underline decoration-1">
                  About Us
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-white font-xs  font-normal underline decoration-1">
                  Contact Us
                </span>
              </Link>
              <Link href="/faq">
                <span className="text-white font-xs  font-normal underline decoration-1">
                  FAQ
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-initial space-y-4 pb-20 md:pt-0 pt-8">
          <h4 className="font-extrabold text-base text-white">CONTACT US</h4>
          <ul className="space-y-4">
            <li className="font-normal text-sm text-white">Contact Address: Lagos, Nigeria</li>
            <li className="font-normal text-sm text-white">Email Address: <a href="mailto:schoolbookedu.org@gmail.com">Schoolbookedu.org@gmail.com</a></li>
            <li className="font-normal text-sm text-white">Phone Number: <a href="tel:+234700777434">+234 705 077 7434</a></li>
          </ul>
          <ul className="flex flex-row md:flex space-x-4">
            <FaInstagram className="h-6 w-6 text-white"/>
            <AiOutlineLinkedin className="h-6 w-6 text-white"/>
            <FaFacebook className="h-6 w-6 text-white"/>
            <FiTwitter className="h-6 w-6 text-white"/>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="flex flex-col md:space-y-0 space-y-4 md:flex-row justify-between py-12">
        <p className="text-base font-bold text-white">Copyright 2021 SchoolBook Inc. All rights reserved</p>
        <ul className="flex flex-row space-x-4 ">
          <li className="text-sm font-bold text-white">Terms of Use</li>
          <li className="text-sm font-bold text-white">Privacy Policy</li>
          <li className="text-sm font-bold text-white">Disclaimer</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
