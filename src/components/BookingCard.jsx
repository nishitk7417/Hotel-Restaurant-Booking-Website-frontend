const BookingCard = ({ booking }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold">{booking.listingId.name}</h3>
        <p className="text-gray-600">Check-in: {booking.bookingDates.checkIn}</p>
        <p className="text-gray-600">Check-out: {booking.bookingDates.checkOut}</p>
        <p className={`font-semibold ${booking.status === "Cancelled" ? "text-red-500" : "text-green-500"}`}>
          {booking.status}
        </p>
      </div>
    );
  };
  
  export default BookingCard;
  