import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerDashboard from "./pages/Dashboard/CustomerDashboard";
import Navbar from "./components/Navbar";
import HotelList from "./pages/HotelDetails"
import RestaurantList from "./pages/rastaurantDetail"

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
          
          {/* <Route path="/vendor-dashboard" element={<VendorDashboard />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App
