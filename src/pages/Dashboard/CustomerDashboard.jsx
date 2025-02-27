import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import BookingCard from "../../components/BookingCard.jsx";

const CustomerDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Unauthorized: No token found.");
          return;
        }

        const res = await fetch("http://localhost:8000/api/v1/bookings/", {
          headers: { Authorization: `Bearer ${token}` },
          method: "GET",
        });

        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch bookings");
        }

        setBookings(data.data || []);
      } catch (err) {
        console.error("Error fetching bookings:", err.message);
        setError(err.message);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">My Bookings</h1>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : bookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bookings.map((booking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;
