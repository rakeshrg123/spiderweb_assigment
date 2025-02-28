import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetailView from "./pages/EventDetailView";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { SidebarProvider } from "./context/SidebarContext";
import MobileSidebarWrapper from "./components/MobileSidebarWrapper";

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
  { id: "positions", title: "Positions", items: [] },
  { id: "contractors", title: "Contractors", items: [] },
  {
    id: "users",
    title: "Users",
    items: [
      { label: "Admins" },
      { label: "Clients" },
      { label: "Coordinators" },
    ],
  },
  { id: "profile", title: "Profile", items: [] },
];

function App() {
  const handleLogout = () => console.log("Logout clicked");

  return (
    <Router>
      <SidebarProvider>
        <Navbar />
        <MobileSidebarWrapper sections={sidebarConfig} onLogout={handleLogout} />
        
        <div className="container mx-auto grid grid-cols-5 gap-4 z-10 mb-10 relative">
          {/* Desktop Sidebar */}
          <div className="hidden md:block col-span-1">
            <Sidebar sections={sidebarConfig} onLogout={handleLogout} />
          </div>
          
          <div className="col-span-5 md:col-span-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/viewDetails" element={<EventDetailView />} />
            </Routes>
          </div>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;