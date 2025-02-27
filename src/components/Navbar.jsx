import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"));
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
    setUserRole(localStorage.getItem("role") || "");
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole("");
    navigate("/login");
  };

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const dashboardPath = userRole === "Customer" ? "/customer-dashboard" : "/vendor-dashboard";

  return (
    <nav className="shadow-lg flex items-center w-full h-[5rem] rounded-b-lg z-50 ">
      <div className="max-w-7xl mx-auto px-4 w-full sm:px-6 lg:px-8 flex justify-between items-center">
        
        <Link to="/" className="text-4xl font-bold text-gray-600">
          StayEase
        </Link>

        {!isAuthPage && (
          <div className="hidden md:flex flex-grow justify-center gap-6">
            {["/", "/hotels", "/restaurants", "/contact", "/about"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-1 rounded-lg transition ${
                  location.pathname === path ? "bg-purple-300 text-purple-800" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        )}

        {!isAuthPage && (
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to={dashboardPath}
                  className="px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-200 transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-lg bg-blue-600 text-white transition ${
                    location.pathname === "/login" ? "bg-blue-600 text-white" : "hover:bg-blue-700"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-lg bg-green-600 text-white transition ${
                    location.pathname === "/register" ? "bg-green-500 text-white" : "hover:bg-green-700"
                  }`}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && !isAuthPage && (
        <div className="md:hidden bg-white shadow-md w-full mt-[8rem]">
          {["/", "/hotels", "/restaurants"].map((path) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 transition ${
                location.pathname === path ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}

          {isAuthenticated ? (
            <>
              <Link
                to={dashboardPath}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-green-600 hover:bg-gray-100"
              >
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
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 transition ${
                  location.pathname === "/login" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 transition ${
                  location.pathname === "/register" ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
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
