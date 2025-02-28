import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetailView from "./pages/EventDetailView";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <div className="container mx-auto grid grid-cols-5 gap-4 z-10 mb-10">
        <Sidebar sections={sidebarConfig} onLogout={handleLogout} />
        <div className="col-span-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewDetails" element={<EventDetailView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;