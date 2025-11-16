import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../../context/AuthProvider";

const MySwal = withReactContent(Swal);

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
        MySwal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: "#38b2ac",
          color: "#fff",
          customClass: {
            popup: "shadow-xl rounded-xl",
          },
        });
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        MySwal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "Login Failed!",
          text: err.message,
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          background: "#e53e3e",
          color: "#fff",
          customClass: {
            popup: "shadow-xl rounded-xl",
          },
        });
      });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-6 min-h-screen">
      <div className="bg-white/90 shadow-2xl backdrop-blur-lg p-8 rounded-2xl w-full max-w-md">
        <h2 className="mb-6 font-bold text-[#38b2ac] text-3xl text-center">
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
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-[#38b2ac] focus:ring-2 w-full"
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
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-[#38b2ac] focus:ring-2 w-full"
            />
          </div>

          {/* Forget Password */}
          <div className="text-right">
            <p className="text-[#38b2ac] text-sm hover:underline cursor-pointer">
              Forget Password?
            </p>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#38b2ac] hover:bg-[#2c7a7b] py-2 rounded-lg w-full text-white transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-5 text-gray-600 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#38b2ac] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
