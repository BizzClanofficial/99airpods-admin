import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";

const Dashboard = () => {
  return (
    <div className="flex font-poppins">
      <Sidebar />
      <div className="flex flex-grow flex-col">
        <Header />
        <div className="min-h-[calc(100vh-88px)] h-auto bg-[#F8F8F8] w-full lg:px-9 px-5 pt-6">
          <h4 className="text-[25px] leading-[37.5px] font-semibold text-[#292D32]">
            Dashboard
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
