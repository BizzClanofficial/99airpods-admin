import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import Sidebar from "../sidebar";
import TableComp from "./table";

const Users = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex font-poppins w-full justify-end">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="sm:w-[calc(100%-223px)] w-full">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="min-h-[calc(100vh-88px)] h-auto bg-[#F8F8F8] w-full lg:px-9 px-5 pt-6">
          <h4 className="text-[25px] leading-[37.5px] font-semibold text-[#292D32]">
            Users
          </h4>
          <div className="mt-4 flex justify-end w-full">
            <Link
              to="/add-user"
              className="border border-[#BC433D] bg-transparent py-2 px-4 text-xs text-[#BC433D] rounded-md hover:bg-[#BC433D] hover:text-white transition duration-300 ease-in-out"
            >
              + Add User
            </Link>
          </div>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Users;
