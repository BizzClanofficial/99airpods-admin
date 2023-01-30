import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import clsx from "clsx";
import { BiLogOut } from "react-icons/bi";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        "min-w-[223px] min-h-screen bg-black py-11 items-center flex flex-col px-5 fixed z-50 h-full  duration-500",
        sidebarOpen ? "left-0" : " sm:left-0 -left-full"
      )}
    >
      <img src={Logo} alt="Logo" className="!w-[30px] !h-[38px]" />
      <div className="mt-14 flex flex-col h-full justify-between">
        <div className="space-y-5">
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
        <button
          onClick={() => navigate("/login")}
          className={clsx(
            "flex items-center gap-2 cursor-pointer text-[#7E7D88] hover:text-white"
          )}
        >
          <BiLogOut />
          <p className="text-[15px] leading-[22.5px]">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
