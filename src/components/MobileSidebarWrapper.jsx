import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useSidebar } from '@/context/SidebarContext';
import Sidebar from './Sidebar';

const MobileSidebarWrapper = ({ sections, onLogout }) => {
  const { isMobileSidebarOpen, toggleMobileSidebar, isMobile } = useSidebar();

  if (!isMobile) {
    return null; // Don't render anything on desktop
  }

  return (
    <>
      {/* Mobile sidebar overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-20"
          onClick={toggleMobileSidebar}
        />
      )}
      
      {/* Mobile sidebar container */}
      <div 
        className={`fixed top-0 left-0 h-full w-3/4 z-30 bg-gradient-to-br from-[#533a83] via-[#20408a] to-[#000100] transition-transform duration-300 ease-in-out pt-24 px-4 ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button */}
        <button 
          onClick={toggleMobileSidebar}
          className="absolute top-6 right-6 text-white p-2 hover:text-[#D175B6] transition-colors cursor-pointer"
        >
          <IoMdClose className="w-6 h-6" />
        </button>
        
        <Sidebar sections={sections} onLogout={onLogout} />
      </div>
    </>
  );
};

export default MobileSidebarWrapper;