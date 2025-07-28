import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Payment = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Payment Submitted:", formData);
    toast.success("Payment Successful");
    navigate("/dashboard")
    setFormData({
      fullName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });

    // Integrate payment gateway logic here (Stripe, Razorpay, etc.)
  };

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl grid md:grid-cols-2 gap-10 p-8 border border-orange-300">
        {/* Payment Form */}
        <form onSubmit={handlePayment} className="space-y-5">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Payment Details
          </h2>

          <input
            type="text"
            name="fullName"
            placeholder="Cardholder Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-orange-400"
            required
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-orange-400"
            required
            maxLength={16}
          />

          <div className="flex gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-orange-400"
              required
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-orange-400"
              required
              maxLength={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Pay Now
          </button>
        </form>

        {/* Summary Section */}
        <div className="bg-orange-100 p-6 rounded-xl border border-orange-300">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">
            Order Summary
          </h2>
          <ul className="text-gray-700 space-y-2 mb-4">
            <li className="flex justify-between">
              <span>Course Name:</span>
              <span>Full Stack Development</span>
            </li>
            <li className="flex justify-between">
              <span>Duration:</span>
              <span>6 Months</span>
            </li>
            <li className="flex justify-between">
              <span>Fees:</span>
              <span>₹25,000</span>
            </li>
          </ul>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-orange-700 text-lg">
            <span>Total:</span>
            <span>₹25,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
