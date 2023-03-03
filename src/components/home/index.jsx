import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  return (
    <div className="flex font-poppins w-full justify-end">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="sm:w-[calc(100%-223px)] w-full">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="py-5 lg:px-9 px-5 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Heading 1</h2>
            <ReactQuill theme="snow" value={value1} onChange={setValue1} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Heading 2</h2>
            <ReactQuill theme="snow" value={value2} onChange={setValue2} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Heading 3</h2>
            <ReactQuill theme="snow" value={value3} onChange={setValue3} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Heading 4</h2>
            <ReactQuill theme="snow" value={value4} onChange={setValue4} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Heading 5</h2>
            <ReactQuill theme="snow" value={value5} onChange={setValue5} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Heading 6</h2>
            <ReactQuill theme="snow" value={value6} onChange={setValue6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
