import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import EventDetailView from "./pages/EventDetailView";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/viewDetails" element={<EventDetailView />} />
      </Routes>
    </Router>
  );
}

export default App;