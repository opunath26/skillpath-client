import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          background: "#39b8ad",
          color: "#fff",
        });
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Login Failed!",
          text: err.message,
          showConfirmButton: false,
          timer: 2500,
          toast: true,
        });
      });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-[#39b8ad] to-[#2ea99f] p-6 min-h-screen">
      <div className="bg-white/90 shadow-2xl backdrop-blur-lg p-8 rounded-2xl w-full max-w-md">
        <h2 className="mb-6 font-bold text-[#39b8ad] text-3xl text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-[#39b8ad] focus:ring-2 w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-[#39b8ad] focus:ring-2 w-full"
            />
          </div>

          {/* Forget Password */}
          <div className="text-right">
            <p className="text-[#39b8ad] text-sm hover:underline cursor-pointer">
              Forget Password?
            </p>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#39b8ad] hover:bg-[#2ea99f] py-2 rounded-lg w-full text-white transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-5 text-gray-600 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#39b8ad] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
