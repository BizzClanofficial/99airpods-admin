import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import AreaChart from "./area.chart";
import Datepicker from "react-tailwindcss-datepicker";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="flex font-poppins w-full justify-end">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="sm:w-[calc(100%-223px)] w-full">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="min-h-[calc(100vh-88px)] h-auto bg-[#F8F8F8] w-full lg:px-9 px-5 pt-6">
          <h4 className="text-[25px] leading-[37.5px] font-semibold text-[#292D32]">
            Dashboard
          </h4>
          <div className="mt-3">
            <Datepicker
              containerClassName="w-fit"
              inputClassName="dark:bg-white dark:text-black"
              useRange={false}
              value={value}
              maxDate={new Date()}
              onChange={handleValueChange}
            />
          </div>
          <div className="w-[281px] h-[130px] py-[22px] px-4 bg-white mt-3 rounded-[4px]">
            <img src={"/people.svg"} alt="People" />
            <p className="mt-2 text-[#AAA9B7] text-[15px] leading-[22px]">
              Number of Visitors
            </p>
            <h3 className="font-semibold text-[40px] leading-[60px] text-[#0E0D1E]">
              2,900
            </h3>
          </div>
          <div className="w-full h-[388px] rounded-[4px] bg-white mt-4 p-5">
            <AreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
