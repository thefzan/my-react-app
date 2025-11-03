import React from "react";
import W_logo from "../assets/W_Logo.png";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#272623] w-full  mt-4 pt-2">
      {/* Footer Logo Section */}
      <div className=" w-[350px] flex justify-center m-auto ">
        <img src={W_logo} alt="" className="w-[200px]" />
      </div>
      {/* Number and Email */}
      <div className="flex justify-center text-white w-[350px] m-auto text-[14px]">
        <IoIosCall className="mt-1" />
        <h1 className="pe-2 border-e me-1 font-serif">+91 7408780796</h1>
        <MdOutlineMailOutline className="mt-1 me-1" />
        <h1 className="font-serif">thefzan06@gmail.com</h1>
      </div>

      {/* Social Media */}
      <div className="w-[350px] m-auto flex gap-2 justify-center mt-2">
        <div className="bg-white/30 w-9 rounded-full h-9 flex justify-center items-center">
          <FaFacebookF />
        </div>
        <div className="bg-white/30 w-9 rounded-full h-9 flex justify-center items-center">
          <GrInstagram />
        </div>
        <div className="bg-white/30 w-9 rounded-full h-9 flex justify-center items-center">
          <FaTwitter />
        </div>
      </div>
      {/* WhatsAPP */}
      <div className="flex justify-center text-white bg-[#219E37] w-[175px] m-auto mt-3 mb-3 rounded-md h-8 items-center">
        <FaWhatsapp className="mt-0.3 me-2 text-[24px]" />
        <h2 className="text-[20px] font-serif font-bold">WhatsApp</h2>
      </div>
      {/* Copyright */}
      <div className="text-center text-white pb-8 font-serif">
        <h4 className="text-sm">© 2025 Khushbu Sehat Ghar  |  All Right Reserved</h4>
        <h4 className="text-sm ">Devloped By Syed Faizan</h4>
      </div>
    </div>
  );
};

export default Footer;
