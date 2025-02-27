import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import CustomerDashboard from "./pages/Dashboard/CustomerDashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import HotelList from "./pages/HotelDetails.jsx";
import RestaurantList from "./pages/RastaurantDetail.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";

import './App.css'

function App() {

  return (
    <Router>
      <div className="bg-red-300 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/hotels" element={<HotelList/>}/>
          <Route path="/restaurants" element={<RestaurantList/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>

          
          {/* <Route path="/vendor-dashboard" element={<VendorDashboard />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App
