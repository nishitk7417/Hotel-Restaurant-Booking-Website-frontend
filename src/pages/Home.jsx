import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white w-[100%] min-h-screen border-4">
      
      <section
        className="bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2022/09/21/17/02/blue-background-7470781_1280.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 text-center rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Find Your Perfect Stay & Dine Experience
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Discover and book the best hotels & restaurants near you.
          </p>
          <div className="mt-6 flex">
            <Link
              to="/hotels"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Hotels
            </Link>
            <Link
              to="/restaurants"
              className="ml-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Explore Restaurants
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Popular Choices</h2>
        <p className="text-center text-gray-500 mt-2">
          Top-rated hotels & restaurants picked for you
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="bg-[url(public/Assets/istockphoto-1448506100-612x612.jpg)]"
              alt="Hotel"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Grand Elite Hotel</h3>
              <p className="text-gray-600 text-sm mt-2">5-star luxury with world-class amenities.</p>
              <Link to="/hotels" className="mt-4 inline-block text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="public/Assets/luxury-classic-modern-bedroom-suite-hotel_105762-1787.avif"
              alt="Restaurant"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Gourmet Paradise</h3>
              <p className="text-gray-600 text-sm mt-2">Experience fine dining like never before.</p>
              <Link to="/restaurants" className="mt-4 inline-block text-green-500 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose StayEase?</h2>
          <p className="text-gray-600 mt-2">
            We make booking seamless, affordable, and trustworthy.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl font-bold mx-auto">
                H
              </div>
              <h3 className="text-lg font-semibold mt-4">Best Hotels</h3>
              <p className="text-gray-600 mt-2">Verified properties with the best services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="w-14 h-14 bg-green-600 text-white flex items-center justify-center rounded-full text-xl font-bold mx-auto">
                R
              </div>
              <h3 className="text-lg font-semibold mt-4">Top Restaurants</h3>
              <p className="text-gray-600 mt-2">Curated dining experiences you’ll love.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="w-14 h-14 bg-purple-600 text-white flex items-center justify-center rounded-full text-xl font-bold mx-auto">
                T
              </div>
              <h3 className="text-lg font-semibold mt-4">Trusted by Thousands</h3>
              <p className="text-gray-600 mt-2">Reliable and secure bookings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Start Your Journey Today</h2>
        <p className="text-gray-500 mt-2">Join thousands of users enjoying seamless bookings.</p>
        <Link
          to="/register"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
