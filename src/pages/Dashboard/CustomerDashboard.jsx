import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import BookingCard from "../../components/BookingCard.jsx";

const CustomerDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:8000/api/v1/bookings/`, {
          headers: { Authorization: `Bearer ${token}` },
          method: "GET"
        });
        // console.log(res);
        
        const data = await res.json();
        console.log(data);
        
        if (res.ok) setBookings(data.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">My Bookings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bookings.length > 0 ? (
            bookings.map((booking) => <BookingCard key={booking._id} booking={booking} />)
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
