import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

const TableRow = ({ event, onViewDetails }) => (
  <tr className="border-t border-[#D175B6]">
    <td className="flex items-center gap-4 h-11.5 px-4 sticky left-0 z-10 min-w-[250px] backdrop-blur-xl opacity-300 shadow-md">
      <Link to={"/viewDetails"} className="text-lg">
        <FiEye />
      </Link>
      {event.name}
    </td>
    <td className="p-3">{event.start}</td>
    <td className="p-3">{event.end}</td>
    <td className="p-3">{event.client}</td>
    <td className="p-3">{event.contact}</td>
    <td className="p-3">{event.venue}</td>
    <td className="p-3">{event.city || "-"}</td>
    <td className="p-3">{event.state || "-"}</td>
    <td className="p-3">{event.zip || "-"}</td>
  </tr>
);

const Table = ({ events, onViewDetails }) => (
  <div className="w-full overflow-x-auto">
    <table className="min-w-[1700px] border-collapse border border-[#D175B6]">
      <thead>
        <tr className="bg-[#D175B6] text-white">
          <th className="p-3 text-left min-w-[250px] sticky left-0 z-20 bg-[#D175B6] backdrop-blur-md shadow-md">
            Event Name
          </th>
          {[
            "Event Start",
            "Event End",
            "Client Name",
            "Contact Info",
            "Venue",
            "City",
            "State",
            "Zip-code",
          ].map((header, index) => (
            <th key={index} className="p-3 text-left min-w-[150px]">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <TableRow key={index} event={event} onViewDetails={onViewDetails} />
        ))}
      </tbody>
    </table>
  </div>
);

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = Array(9).fill({
    name: "Filled Name",
    start: "Jan 12, 2024",
    end: "Jan 14, 2024",
    client: "Muhammad Asad",
    contact: "+1234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  });

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="col-span-4 border-2 rounded-xl border-[#D175B6]">
      <div className="container mx-auto rounded-xl shadow-lg text-white">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-semibold">Event Requests</h2>
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-400" />
              <input
                type="text"
                placeholder="Search here"
                className="w-full pl-10 pr-4 py-2 rounded-md border border-white-600 focus:outline-none focus:ring-2 focus:ring-[#D175B6] text-white"
              />
            </div>
            <button className="bg-gradient-to-r from-[#FF00FF] to-[#8F00FF] px-2 w-10 h-10 rounded-md border-2 border-white flex items-center justify-center">
              <span className="text-xl font-extrabold">
                <HiPlus />
              </span>
            </button>
          </div>
        </div>
        <Table events={events} onViewDetails={handleViewDetails} />
      </div>
      <div className="flex mt-auto justify-center bg-black rounded-b-xl items-center space-x-4 p-2">
        {["←", "1", "2", "3", "4", "→"].map((item, index) => (
          <button
            key={index}
            className={`py-1 
    ${item === "4" ? "!text-[#D175B6] font-bold" : ""} 
    ${item === "→" ? "text-gray-500" : "text-white"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;