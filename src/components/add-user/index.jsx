import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import Header from "../header";
import Sidebar from "../sidebar";

const AddUser = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [previewImageState, setPreviewImageState] = useState(null);

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setPreviewImageState(previewUrl);
  };

  return (
    <div className="flex font-poppins w-full justify-end">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="sm:w-[calc(100%-223px)] w-full">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="min-h-[calc(100vh-88px)] h-auto bg-[#F8F8F8] w-full lg:px-9 px-5 pt-6">
          <h4 className="text-[25px] leading-[37.5px] font-semibold text-[#292D32]">
            Add User
          </h4>
          <div className="w-full max-w-[746px] min-h-[520px] h-auto bg-white rounded-md mt-5 md:px-8 px-4 py-9">
            <div className="relative w-full justify-center flex">
              {previewImageState ? (
                <img
                  src={previewImageState}
                  alt="Image"
                  className="w-[113px] h-[113px] rounded-full object-cover cursor-pointer"
                  onClick={() => setPreviewImageState(null)}
                />
              ) : (
                <div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="sr-only"
                    onChange={handleSelectImage}
                  />
                  <label
                    for="file"
                    className="w-[113px] h-[113px] rounded-full bg-[#F5F5F5] hover:bg-gray-200 cursor-pointer flex items-center justify-center relative"
                  >
                    <BsPersonFill className="w-[57.41px] h-[65.61px] text-[#D8D8D8]" />
                    <span className="bg-[#BC433D] w-8 h-8 rounded-lg absolute -bottom-3 text-white text-center flex items-center justify-center">
                      +
                    </span>
                  </label>
                </div>
              )}
            </div>
            <div className="flex mt-[54px] gap-10 sm:flex-row flex-col">
              <div className="w-full border-b border-[#C5C5C5] pb-1 px-[6px] flex gap-4 items-center">
                <BsPerson className="text-[#BC433D] w-6 h-6 flex-shrink-0" />
                <div>
                  <label htmlFor="name" className="text-xs text-[#3D3D3DCC]/80">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Write Here..."
                    className="w-full border-none focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div className="w-full border-b border-[#C5C5C5] pb-1 px-[6px] flex gap-4 items-center">
                <BiPhoneCall className="text-[#BC433D] w-6 h-6 flex-shrink-0" />
                <div>
                  <label
                    htmlFor="mobile-phone"
                    className="text-xs text-[#3D3D3DCC]/80"
                  >
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    name="mobile-phone"
                    placeholder="Write Here..."
                    className="w-full border-none focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="w-full max-w-[324px] border-b border-[#C5C5C5] pb-1 px-[6px] flex gap-4 items-center mt-7">
              <span className="w-6 h-6 flex-shrink-0 object-cover rounded-full bg-gray-300"></span>
              <div className="w-full">
                <label
                  htmlFor="language"
                  className="text-xs text-[#3D3D3DCC]/80"
                >
                  Language
                </label>
                <select
                  name="language"
                  id="language"
                  placeholder="Write Here..."
                  className="w-full border-none focus:outline-none text-sm"
                >
                  <option value="">Write Here...</option>
                  <option value="english">English</option>
                  <option value="arabic">Arabic</option>
                </select>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="bg-[#BC433D] text-white w-full max-w-[280px] py-4 rounded-md mt-14 hover:bg-[#7e3e3a]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
