import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    payment: "Cash On Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    // Save checkout data
    localStorage.setItem(
      "checkoutData",
      JSON.stringify(formData)
    );

    // redirect
    navigate("/checkout-success");
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-8 font-serif">
          Checkout
        </h1>

        <form onSubmit={handleOrder} className="space-y-5">

          {/* Name */}
          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-2 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-2 outline-none"
              placeholder="Enter phone number"
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold">Address</label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-2 outline-none"
              rows="4"
              placeholder="Enter delivery address"
            />
          </div>

          {/* City */}
          <div>
            <label className="font-semibold">City</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-2 outline-none"
              placeholder="Enter city"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="font-semibold">Payment Method</label>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-2 outline-none"
            >
              <option>Cash On Delivery</option>
              <option>UPI</option>
              <option>Credit Card</option>
            </select>
          </div>

          {/* Button */}
          <Link to="/checkoutPage">
            <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-xl font-bold text-lg transition duration-300"
            >
                Place Order
            </button>
          </Link>

        </form>

      </div>

    </section>
  );
};

export default Checkout;