import React from "react";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiPlus } from "react-icons/hi2";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [openEvents, setOpenEvents] = useState(true);
  const [openUsers, setOpenUsers] = useState(false);
  const sidebarConfig = [
    {
      id: "events",
      title: "Events",
      items: [
        { label: "New Requests" },
        { label: "Estimate", count: 9 },
        { label: "Events" },
        { label: "Partial Requests" },
      ],
    },
    {
      id: "positions",
      title: "Positions",
      items: [],
    },
    {
      id: "contractors",
      title: "Contractors",
      items: [],
    },
    {
      id: "users",
      title: "Users",
      items: [
        { label: "Admins" },
        { label: "Clients" },
        { label: "Coordinators" },
      ],
    },
    {
      id: "profile",
      title: "Profile",
      items: [],
    },
  ];
  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-4 ">
      <Sidebar sections={sidebarConfig} onLogout={handleLogout} />
        <div className="col-span-4 border-2 rounded-xl border-[#D175B6]">
          <div className="container mx-auto rounded-xl shadow-[0px_0px_20px_5px_rgba(209,_117,_182,_0.5)] text-white">
            {/* Header Section */}
            <div className="flex justify-between items-center p-4">
              <h2 className="text-2xl font-semibold">Event Requests</h2>
              <div className="flex  items-center gap-2">
                <div className="relative w-full">
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-400" />
                  <input
                    type="text"
                    placeholder="Search here"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-white-600 focus:outline-none focus:ring-2 focus:ring-[#D175B6] text-white"
                  />
                </div>
                <button className="bg-gradient-to-r from-[#FF00FF] to-[#8F00FF]  px-2 pb-1 w-10 h-10 rounded-md border-2 border-white flex items-center justify-center">
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>
            </div>

            {/* Scrollable Table Container */}
            <div className="w-full overflow-x-auto">
              <table className="min-w-[1000px] border-collapse border border-[#D175B6]">
                <thead>
                  <tr className="bg-[#D175B6] text-white">
                    <th className="p-3 text-left sticky left-0 bg-[#D175B6] z-10 min-w-[200px]">
                      Event Name
                    </th>
                    <th className="p-3 text-left min-w-[150px]">Event Start</th>
                    <th className="p-3 text-left min-w-[150px]">Event End</th>
                    <th className="p-3 text-left min-w-[200px]">Client Name</th>
                    <th className="p-3 text-left min-w-[200px]">
                      Contact Info
                    </th>
                    <th className="p-3 text-left min-w-[300px]">Venue</th>
                    <th className="p-3 text-left min-w-[150px]">City</th>
                    <th className="p-3 text-left min-w-[150px]">State</th>
                    <th className="p-3 text-left min-w-[150px]">Zip-code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-t border-[#D175B6]">
                    <td className="flex items-center gap-4 p-3 sticky left-0 backdrop-blur-md bg-opacity-10 z-10 min-w-[200px]">
                      <FiEye />
                      Filled Name
                    </td>
                    <td className="p-3">Jan 12, 2024</td>
                    <td className="p-3">Jan 14, 2024</td>
                    <td className="p-3">Muhammad Asad</td>
                    <td className="p-3">+1234 566 7890</td>
                    <td className="p-3">Lorem Ipsum Dolor Sit Amet</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
          </div>
          <div className="flex  mt-auto justify-center bg-black rounded-b-xl items-center space-x-4">
            <button className=" py-1 text-white">&larr;</button>
            <button className=" py-1 text-white">1</button>
            <button className=" py-1 text-white">2</button>
            <button className=" py-1 text-white">3</button>
            <button className=" py-1 text-[#D175B6] font-bold">4</button>
            <button className=" py-1 text-white">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
