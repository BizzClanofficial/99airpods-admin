import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";

const Home = () => {
  return (
    <div className="flex font-poppins">
      <Sidebar />
      <div className="flex flex-grow">
        <Header />
      </div>
    </div>
  );
};

export default Home;
