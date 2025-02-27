import React from "react";
import { LuChevronDown } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";

export default function Home() {
  const [openEvents, setOpenEvents] = useState(true);
  const [openUsers, setOpenUsers] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-4 ">
        <div className="col-span-1 flex flex-col gap-4 border-2 text-white border-[#d175b6] p-4 rounded-xl shadow-[0px_-1px_27px_5px_rgba(209,_117,_182,_0.35)]">
          {/* <div className="flex flex-col gap-2">
            <button className="text-[#D175B6] rounded-md flex items-center justify-between w-full p-2 border-2 border-[#D175B6] ">
              <p>Events</p>
              <LuChevronDown />
            </button>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
              <p className="text-white">-</p>
                <button className="text-[#D175B6] rounded-md flex items-center justify-between w-full p-2 border-1 border-[#D175B6] ">
                  <p className="text-xs">New Requests</p>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-white">-</p>
                <button className="text-white  ">
                  <p className="text-xs">New Requests</p>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-white">-</p>
                <button className="text-white  ">
                  <p className="text-xs">New Requests</p>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-white">-</p>
                <button className="text-white ">
                  <p className="text-xs">New Requests</p>
                </button>
              </div>
            </div>
          </div>
          <div className="p-2"><p className="text-white">Positions</p></div>
          <div className="p-2"><p className="text-white">Contractors</p></div>
          <div className="flex flex-col gap-2">
            <button className="text-white  flex items-center justify-between w-full p-2 ">
              <p>Users</p>
              <LuChevronDown />
            </button>
            <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <p className="text-white">-</p>
                <button className="text-white  ">
                  <p className="text-xs">New Requests</p>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-white">-</p>
                <button className="text-white  ">
                  <p className="text-xs">New Requests</p>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-white">-</p>
                <button className="text-white  ">
                  <p className="text-xs">New Requests</p>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-white">-</p>
                <button className="text-white ">
                  <p className="text-xs">New Requests</p>
                </button>
              </div>
            </div>
          </div>
          <div className="p-2"><p className="text-white">Profile</p></div>
          <button className="flex items-center text-white gap-3 justify-center bg-black rounded-md p-3 mt-auto"><TbLogout2 className="w-5 h-5" /><p className="text-sm">Logout</p></button> */}
          {/* <div className="w-64  text-white p-4 rounded-xl shadow-[0px_-1px_27px_5px_rgba(209,_117,_182,_0.35)] border-2 border-[#D175B6]"> */}
          {/* Events Section */}
          <div>
            <button
              onClick={() => setOpenEvents(!openEvents)}
              className="text-[#D175B6] flex items-center justify-between w-full p-2 border-2 border-[#D175B6] rounded-md"
            >
              <p>Events</p>
              <LuChevronDown
                className={`${
                  openEvents ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
            {openEvents && (
              <div className="ml-4 mt-2   border-l-2 border-[#ffffff] ">
                <div className="flex items-center gap-2">
                  <svg
                    width="29"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#D175B6]"
                  >
                    <path
                      d="M 10 0 V 12 Q 10 15 13 15 H 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>

                  <button className="text-[#D175B6] flex justify-between items-center w-full p-2 mt-2 border border-[#D175B6] rounded-md">
                    <p className="text-xs">New Requests</p>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="29"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ffffff]"
                  >
                    <path
                      d="M 10 0 V 12 Q 10 15 13 15 H 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <p className="text-xs cursor-pointer mt-2  flex items-center justify-between w-full">
                    Estimate{" "}
                    <span className="bg-[#ffffff] px-2 py-1 rounded-full text-[#D175B6] text-xs">
                      9
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="29"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ffffff]"
                  >
                    <path
                      d="M 10 0 V 12 Q 10 15 13 15 H 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <p className="text-xs cursor-pointer mt-2">Events</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="29"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ffffff]"
                  >
                    <path
                      d="M 10 0 V 12 Q 10 15 13 15 H 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <p className="text-xs cursor-pointer mt-2">Partial Requests</p>
                </div>
              </div>
            )}
          </div>

          {/* Static Sections */}
          <div className="mt-4 p-2 flex flex-col gap-4">
            <p className="text-sm">Positions</p>
            <p className="text-sm">Contractors</p>
          </div>

          {/* Users Section */}
          <div className="mt-4">
            <button
              onClick={() => setOpenUsers(!openUsers)}
              className="flex items-center justify-between w-full p-2"
            >
              <p>Users</p>
              <LuChevronDown
                className={`${
                  openUsers ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
            {openUsers && (
              <div className="ml-4 mt-2 border-l-2 border-[#ffffff] ">
                <div className="flex items-center gap-2">
                   <svg
                    width="29"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ffffff]"
                  >
                    <path
                      d="M 10 0 V 12 Q 10 15 13 15 H 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <p className="text-xs cursor-pointer mt-2">Admins</p>
                </div>
                <div className="flex items-center gap-2">
                   <svg
                    width="29"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ffffff]"
                  >
                    <path
                      d="M 10 0 V 12 Q 10 15 13 15 H 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <p className="text-xs cursor-pointer mt-2">Clients</p>
                </div>
                <div className="flex items-center gap-2">
                   <svg
                    width="29"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ffffff]"
                  >
                    <path
                      d="M 10 0 V 12 Q 10 15 13 15 H 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <p className="text-xs cursor-pointer mt-2">Coordinators</p>
                </div>
              </div>
            )}
            {/* </div> */}

            {/* Profile Section */}
            <div className="mt-4 mb-4 p-2">
              <p className="text-sm">Profile</p>
            </div>

            {/* Logout Button */}
            <button className="flex items-center gap-3 justify-center bg-black border border-white rounded-md p-3 mt-auto w-full hover:bg-[#D175B6] transition">
              <TbLogout2 className="w-5 h-5" />
              <p className="text-sm">Logout</p>
            </button>
          </div>
        </div>
        <div className="col-span-4 border-2 rounded-xl border-[#D175B6]"></div>
      </div>
    </div>
  );
}
