import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function Profile() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contactDetails: "",
    role: "Customer", // Default role
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("/api/v1/users/current-user", {
          withCredentials: true,
        });
        const userData = response.data.data;
        
        // Update state with fetched data
        setData({
          name: userData.name || "",
          email: userData.email || "",
          contactDetails: userData.contactDetails || "Not Provided",
          role: userData.role || "Customer",
        });

      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error.response?.data?.message || "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="flex bg-gray-500 text-white min-h-screen">
      <Sidebar />
      <div className="flex-grow p-6">
        <h2 className="text-3xl font-bold mb-4">Profile</h2>

        {loading ? (
          <p className="text-gray-300">Loading profile...</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-lg">
              <strong>Name:</strong> {data.name}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {data.email}
            </p>
            <p className="text-lg">
              <strong>Contact:</strong> {data.contactDetails}
            </p>
            <p className="text-lg">
              <strong>Role:</strong> {data.role}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
