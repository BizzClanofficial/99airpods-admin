import React from "react";
import { BiSearch } from "react-icons/bi";
import Profile from "../../assets/car.jpeg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="py-5 lg:px-9 px-5 w-full flex sm:justify-between gap-5 h-fit items-center flex-wrap-reverse justify-end">
      <div className="bg-[#F8F8F8] w-[233px] h-12 flex gap-2 items-center px-3 rounded-md focus-within:ring-1">
        <input
          type="search"
          className="bg-transparent w-full focus:ring-0 focus:outline-none"
          placeholder="Search"
        />
        <BiSearch className="text-xl text-[#929292]" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 bg-[#F8F8F8] rounded-[40px] items-center pr-5 cursor-pointer">
          <img
            src={Profile}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm text-[#292D32]">Waqar</p>
        </div>
        <div
          className={`flex sm:hidden cursor-pointer`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <IoMdClose className="text-2xl text-black" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl text-black" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
