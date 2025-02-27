import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col px-5 pt-[6rem]">
      <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
      <nav className="flex flex-col space-y-3">
        <Link className="hover:bg-gray-700 p-3 rounded" to="/customer-dashboard">
          My Bookings
        </Link>
        <Link className="hover:bg-gray-700 p-3 rounded" to="/profile">
          My Profile
        </Link>
        <button 
          className="mt-auto bg-red-500 hover:bg-red-600 p-3 rounded"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
