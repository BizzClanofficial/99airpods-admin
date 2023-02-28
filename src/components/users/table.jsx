import React from "react";
import { Table } from "antd";
import { BsPersonFill } from "react-icons/bs";
const columns = [
  {
    title: "",
    dataIndex: "profile",
    render: (text) => (
      //   <img
      //     src={text}
      //     alt="profile"
      //     className="w-10 h-10 rounded-full object-cover"
      //     />
      <div className="w-10 h-10 rounded-full object-cover bg-[#F5F5F5] flex items-center justify-center">
        <BsPersonFill className="text-[#ABAFB3] text-2xl m-auto" />
      </div>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a className="text-sm text-[#ABAFB3]">{text}</a>,
  },
  {
    title: "Airpod",
    dataIndex: "airpod",
    render: (text) => <a className="text-sm text-[#ABAFB3]">{text}</a>,
  },
  {
    title: "Phone Number",
    dataIndex: "phone-number",
    render: (text) => <a className="text-sm text-[#ABAFB3]">{text}</a>,
  },
  {
    title: "Language",
    dataIndex: "language",
    render: (text) => <a className="text-sm text-[#ABAFB3]">{text}</a>,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    airpod: "99 B2_A3-G1T",
    "phone-number": "+1 (231) 324-7785",
    language: "English",
  },
  {
    key: "2",
    name: "John Brown",
    airpod: "99 B2_A3-G1T",
    "phone-number": "+1 (231) 324-7785",
    language: "English",
  },
  {
    key: "3",
    name: "Joe Black",
    airpod: "99 B2_A3-G1T",
    "phone-number": "+1 (231) 324-7785",
    language: "English",
  },
  {
    key: "4",
    name: "Disabled User",
    airpod: "99 B2_A3-G1T",
    "phone-number": "+1 (231) 324-7785",
    language: "English",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const TableComp = () => {
  return (
    <div className="mt-3">
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        size="small"
        scroll={{ x: 1000 }}
        responsive={true}
      />
    </div>
  );
};

export default TableComp;
