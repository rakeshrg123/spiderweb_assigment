import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi2";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EventDetailView = ({ event }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [activeTab, setActiveTab] = useState("Assign Coordinator/Coordinator");
  const [selectedRoom, setSelectedRoom] = useState(1);

  // Define tabs
  const tabs = [
    "Event Details",
    "Assign Coordinator/Coordinator",
    "Session Management",
    "Generate SOW",
  ];

  // Define meeting rooms
  const meetingRooms = [
    {
      id: 1,
      name: "Meeting Room 1",
      positions: 12,
      startFrom: "12 Jan, 2023",
      endsAt: "15 Jan, 2023",
    },
    {
      id: 2,
      name: "Meeting Room 2",
      positions: 12,
      startFrom: "12 Jan, 2023",
      endsAt: "15 Jan, 2023",
    },
    {
      id: 3,
      name: "Meeting Room 3",
      positions: 12,
      startFrom: "12 Jan, 2023",
      endsAt: "15 Jan, 2023",
    },
    {
      id: 4,
      name: "Meeting Room 4",
      positions: 12,
      startFrom: "12 Jan, 2023",
      endsAt: "15 Jan, 2023",
    },
    {
      id: 5,
      name: "Meeting Room 5",
      positions: 12,
      startFrom: "12 Jan, 2023",
      endsAt: "15 Jan, 2023",
    },
  ];

  // Camera positions for each room
  const positions = Array(5).fill({
    name: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: 20,
  });

  return (
    <div className="col-span-4 border-2 rounded-xl border-[#D175B6] p-4">
      {/* Header with back button and event name */}
      <div className="flex items-center gap-2 mb-4 text-white">
        <button
          onClick={() => navigate(-1)} // Use navigate(-1) to go back
          className="flex items-center justify-center text-white cursor-pointer"
        >
          <HiArrowLeft className="text-xl" />
        </button>
        <h2 className="text-2xl font-semibold">
          Event Name{" "}
          <span className="text-lg font-normal">(Venue Details)</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex mb-6">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab ? "bg-[#D175B6] text-white" : "text-[#D175B6]"
            } border border-[#D175B6] ${
              index === 0 ? "rounded-tl-md rounded-bl-md" : ""
            } ${
              index === tabs.length - 1 ? "rounded-tr-md rounded-br-md" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Assign Coordinator
          </h3>

          <div className="relative mb-2">
            <input
              type="text"
              placeholder="Search Coordinator"
              className="w-full pl-4 pr-10 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D175B6] text-white"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              <HiChevronDown />
            </span>
          </div>

          <button className="text-[#D175B6] font-medium">
            Add New Coordinator
          </button>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">
            Assign Contractor
          </h3>

          <div className="bg-black border border-[#D175B6] rounded-lg overflow-hidden">
            {meetingRooms.map((room) => (
              <div
                key={room.id}
                className={`${
                  selectedRoom === room.id
                    ? "bg-[#D175B6]"
                    : "bg-black hover:bg-gray-900"
                } p-4 mb-2 cursor-pointer`}
                onClick={() => setSelectedRoom(room.id)}
              >
                <div className="flex items-center">
                  <h4 className="text-white font-semibold">
                    {room.name}
                    <span className="inline-flex items-center ml-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-4 h-4 text-pink-300"
                        stroke="currentColor"
                      >
                        <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" />
                      </svg>
                    </span>
                    <span className="ml-1 text-pink-300">
                      {room.positions} Positions
                    </span>
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Start from {room.startFrom} - Ends at {room.endsAt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Event Name <span className="font-normal">(Venue Here)</span>
          </h3>

          <div className=" rounded p-3 mb-4 border border-[#D175B6]">
            <div className="flex justify-between">
              <div>
                <span className="text-[#dad4d4] text-md">Start: </span>
                <span className="font-medium text-[#fff]">12-12-2023</span>
              </div>
              <div>
                <span className="text-[#dad4d4] text-md">Ends: </span>
                <span className="font-medium text-[#fff]">15-12-2023</span>
              </div>
            </div>
          </div>

          <div className=" rounded p-3 mb-6 border border-[#D175B6]">
            <span className="text-[#dad4d4] text-md">Venue Address: </span>
            <span className="font-medium text-[#fff]">
              Some Location 12, Name Here, City, State.
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-4">Positions</h3>

          <div className="bg-black rounded-lg overflow-hidden border border-[#D175B6]">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-3 text-left">Position</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Info</th>
                  <th className="p-3 text-left">Quantity</th>
                  <th className="p-3 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {positions.map((position, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="p-3">{position.name}</td>
                    <td className="p-3">{position.time}</td>
                    <td className="p-3">{position.info}</td>
                    <td className="p-3">{position.quantity}</td>
                    <td className="p-3">
                      <div className="relative">
                        <select
                          className="w-full bg-black text-white py-1 px-3 rounded border border-[#D175B6] appearance-none"
                          defaultValue="Select Contractor"
                        >
                          <option>Select Contractor</option>
                          <option>Contractor 1</option>
                          <option>Contractor 2</option>
                        </select>
                        <HiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-end p-3 gap-2">
              <button className="text-white">←</button>
              <button className="text-white">○</button>
              <button className="text-[#D175B6]">●</button>
              <button className="text-white">→</button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#D175B6] text-white py-2 px-12 rounded-lg font-medium">
          Save Edits
        </button>
      </div>
    </div>
  );
};

export default EventDetailView;
