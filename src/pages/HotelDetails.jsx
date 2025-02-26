import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/listings"); // Fetch all listings
        const data = await response.json();

        if (response.ok) {
          // Filter listings where type is "Hotel"
          const filteredHotels = data.data.filter((listing) => listing.type === "Hotel");
          setHotels(filteredHotels);
        } else {
          console.error("Failed to fetch listings:", data.message);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <p className="text-center text-xl mt-10">Loading...</p>;
  if (hotels.length === 0) return <p className="text-center text-xl mt-10">No hotels available.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Popular Hotels</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={hotel.images[0] || "https://via.placeholder.com/500"}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.address}</p>
              <p className="text-lg font-semibold text-blue-600 mt-2">Avg. Price: ₹{hotel.pricing}</p>
              <Link
                to={`/hotel/${hotel._id}`}
                className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
