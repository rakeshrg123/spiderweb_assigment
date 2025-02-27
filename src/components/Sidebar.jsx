import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = ({ sections, onLogout }) => {
  const [openSections, setOpenSections] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="col-span-1 flex flex-col gap-4 border-2 text-white border-[#d175b6] p-4 rounded-xl shadow-[0px_-1px_27px_5px_rgba(209,_117,_182,_0.35)]">
      {sections.map((section) => (
        <div key={section.id} className="relative">
          <button
            onClick={() => toggleSection(section.id)}
            className={`flex items-center justify-between w-full p-2 rounded-md ${
              openSections[section.id]
                ? "text-[#D175B6] border-2 border-[#D175B6]"
                : "text-white"
            }`}
          >
            <p>{section.title}</p>
            {section.items.length > 0 && (
              <LuChevronDown
                className={`${
                  openSections[section.id] ? "rotate-180" : ""
                } transition-transform`}
              />
            )}
          </button>
          {openSections[section.id] && section.items.length > 0 && (
            <div className="ml-4 mt-2">
              {section.items.map((item, index) => {
                const itemId = `${section.id}-${index}`;
                const isHovered = hoveredItem === itemId;
                
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 relative h-10"
                    onMouseEnter={() => handleMouseEnter(itemId)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="h-full relative w-4 overflow-hidden">
                      <svg
                        width="12"
                        height="40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0"
                      >
                        <path
                          d="M13 39.7a.7.7 0 1 0 0-1.4v1.4ZM.3 0v29.968h1.4V0H.3Zm0 29.968c0 4.1 1.026 6.621 2.896 8.07C5.024 39.452 7.492 39.7 10 39.7v-1.4c-2.493 0-4.525-.269-5.947-1.37-1.38-1.068-2.353-3.063-2.353-6.962H.3ZM10 39.7h3v-1.4h-3v1.4Z"
                          fill={isHovered ? "#D175B6" : "#fff"}
                          className="transition-colors duration-200"
                        />
                      </svg>
                    </div>
                    <p 
                      className={`text-xs cursor-pointer w-full flex items-center gap-4 absolute -bottom-1.5 left-6 z-10 transition-colors duration-200 ${
                        isHovered ? "text-[#D175B6]" : "text-white"
                      }`}
                    >
                      {item.label}
                      {item.count && (
                        <span className={`px-1 py-0 rounded-full text-xs ${
                          isHovered 
                            ? "bg-[#D175B6] text-white" 
                            : "bg-[#ffffff] text-[#D175B6]"
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="flex items-center gap-3 justify-center bg-black border border-white rounded-md p-3 mt-auto w-full hover:bg-[#D175B6] transition"
      >
        <TbLogout2 className="w-5 h-5" />
        <p className="text-sm">Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;