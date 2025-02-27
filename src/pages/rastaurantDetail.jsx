import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/listings");
        const data = await response.json();

        if (response.ok) {
          const filteredRestaurants = data.data.filter((listing) => listing.type === "Restaurant");
          setRestaurants(filteredRestaurants);
        } else {
          console.error("Failed to fetch listings:", data.message);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();

    const storedRole = localStorage.getItem("role"); // Example: "vendor" or "customer"
    setUserRole(storedRole);
  }, []);

  if (restaurants.length === 0) return <p className="text-center text-4xl pt-[8rem] font-medium">No restaurants available.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 pt-30">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Popular Restaurants</h1>

        {userRole === "Vendor" && (
          <div className="space-x-3">
            <Link
              to="/create-listing"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Create Listing
            </Link>
            <Link
              to="/update-listing"
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
            >
              Update Listing
            </Link>
            <Link
              to="/delete-listing"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete Listing
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={restaurant.images[0] || "https://via.placeholder.com/500"}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{restaurant.name}</h2>
              <p className="text-gray-600">{restaurant.address}</p>
              <p className="text-lg font-semibold text-blue-600 mt-2">Avg. Price: ₹{restaurant.pricing}</p>
              <Link
                to={`/restaurant/${restaurant._id}`}
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

export default RestaurantList;
