import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import clsx from "clsx";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-[223px] min-h-screen bg-black pt-11 items-center flex flex-col">
      <img src={Logo} alt="Logo" className="!w-[30px] !h-[38px]" />
      <div className="mt-14 space-y-5">
        <Link
          to="/dashboard"
          className={clsx(
            "flex items-center gap-2 cursor-pointer",
            location.pathname === "/dashboard"
              ? "text-white"
              : "text-[#7E7D88] hover:text-white"
          )}
        >
          <RxDashboard />
          <p className="text-[15px] leading-[22.5px]">Dashboard</p>
        </Link>
        <Link
          to="/home"
          className={clsx(
            "flex items-center gap-2 cursor-pointer",
            location.pathname === "/home"
              ? "text-white"
              : "text-[#7E7D88] hover:text-white"
          )}
        >
          <MdOutlineSpaceDashboard />
          <p className="text-[15px] leading-[22.5px]">Home Page</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
