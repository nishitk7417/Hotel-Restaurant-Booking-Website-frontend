import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check auth state on page load and when location changes
    setIsAuthenticated(!!localStorage.getItem("token"));
    setUserRole(localStorage.getItem("role") || null);
  }, [location.pathname]); // Trigger whenever route changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole(null);
    navigate("/login");
  };

  // Hide navigation links on Login/Register pages
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <nav className="shadow-lg fixed bg-white flex items-center w-full h-[5rem] z-50">
      <div className="max-w-7xl mx-auto px-4 w-[100vw] sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              StayEase
            </Link>
          </div>

          {!isAuthPage && (
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link to="/hotels" className="text-gray-700 hover:text-blue-600 transition">Hotels</Link>
              <Link to="/restaurants" className="text-gray-700 hover:text-blue-600 transition">Restaurants</Link>

              {isAuthenticated ? (
                <>
                  <Link to="/customer-dashboard" className="text-gray-700 hover:text-blue-600 transition">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Login
                  </Link>
                  <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                    Register
                  </Link>
                </>
              )}
            </div>
          )}

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && !isAuthPage && (
        <div className="md:hidden bg-white shadow-md absolute w-full mt-16">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/hotels" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Hotels
          </Link>
          <Link to="/restaurants" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Restaurants
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/customer-dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-4 py-2 text-blue-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="block px-4 py-2 text-green-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
