import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "/api/v1/users/login",
        { email, password },
        { withCredentials: true } // Ensures cookies are sent/received
      );

      console.log("Login response:", response.data);

      const userToken = response.data?.data?.accessToken;
      const userRole = response.data?.data?.user?.role;
      if (!userRole) {
        throw new Error("User role not found");
      }

      // Store role in localStorage (token is in cookies)
      localStorage.setItem("role", userRole);
      localStorage.setItem("token", userToken);

      // Redirect based on user role
      if (userRole === "Customer") {
        navigate("/customer-dashboard");
      } else if (userRole === "Vendor") {
        navigate("/vendor-dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/Assets/360_F_653012686_damKXIEkKFYgwiHfdCTiwgOiuon6dAP8.jpg')] bg-cover bg-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full mx-6 max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <p className="text-gray-500 text-center mt-2">Access your account</p>

        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
