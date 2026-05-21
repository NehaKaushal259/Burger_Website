import { FaUser, FaEnvelope, FaLock } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    // store user (DON'T store password in real apps)
    localStorage.setItem("user", JSON.stringify({
      name: form.name,
      email: form.email,
    }));

    alert("Registered Successfully ✅");
    navigate("/"); // redirect to home
    window.location.reload(); // refresh navbar
  };

  return (
    <div className="flex items-center justify-center -mt-[5%] h-[50rem]
    bg-gradient-to-r from-yellow-200 via-white to-yellow-200 px-4">

      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Sign up to get started
        </p>

        {/* Name */}
        <div className="flex items-center border rounded-lg px-3 py-2 mb-4 focus-within:ring-2 focus-within:ring-yellow-400">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full outline-none"
            onChange={handleChange}
            name="name"
          />
        </div>

        {/* Email */}
        <div className="flex items-center border rounded-lg px-3 py-2 mb-4 focus-within:ring-2 focus-within:ring-yellow-400">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full outline-none"
            onChange={handleChange}
            name="email"
          />
        </div>

        {/* Password */}
        <div className="flex items-center border rounded-lg px-3 py-2 mb-4 focus-within:ring-2 focus-within:ring-yellow-400">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none"
            onChange={handleChange}
            name="password"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex items-center border rounded-lg px-3 py-2 mb-4 focus-within:ring-2 focus-within:ring-yellow-400">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full outline-none"
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg 
        hover:bg-black hover:text-white transition duration-300"
        onClick={handleSubmit}
        >
          Sign Up
        </button>

      </div>
    </div>
  );
};

export default Login;