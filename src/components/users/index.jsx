import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";

const Users = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex font-poppins w-full justify-end">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="sm:w-[calc(100%-223px)] w-full">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="min-h-[calc(100vh-88px)] h-auto bg-[#F8F8F8] w-full lg:px-9 px-5 pt-6">
          <h4 className="text-[25px] leading-[37.5px] font-semibold text-[#292D32]">
            Users
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Users;
