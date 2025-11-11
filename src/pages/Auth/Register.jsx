import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { FaUser, FaLock, FaEnvelope, FaImage, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    setError("");

    createUser(email, password, name, photoURL)
      .then((user) => {
         console.log("Registered user:", user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registration Successful!",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          background: "#39b8ad",
          color: "#fff",
        });

        // Backend e save korar data
        const newUser = { name, email, photoURL };

        // 🔥 User save to MongoDB
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("✅ User saved to DB:", data);
          })
          .catch((err) => {
            console.error("❌ Error saving user:", err);
          });

        form.reset();
        navigate("/");
      })
      .catch((err) => {
        console.error("Firebase registration error:", err);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Registration Failed!",
          text: err.message,
          showConfirmButton: false,
          timer: 2500,
          toast: true,
        });
        setError(err.message);
      });
  };

  // 🔹 Google sign-in handler
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const googleUser = result.user;
        const newUser = {
          name: googleUser.displayName,
          email: googleUser.email,
          photoURL: googleUser.photoURL,
        };

        // Google user save to DB
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Google Sign-in Successful!",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          background: "#39b8ad",
          color: "#fff",
        });

        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-[#39b8ad] to-[#2ea99f] p-6 min-h-screen">
      <div className="bg-white/90 shadow-2xl backdrop-blur-lg p-8 rounded-2xl w-full max-w-md">
        <h2 className="mb-6 font-bold text-[#39b8ad] text-3xl text-center">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <FaUser className="top-3 left-3 absolute text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="py-2 pr-4 pl-10 border rounded-md focus:outline-none focus:ring-[#39b8ad] focus:ring-2 w-full"
            />
          </div>

          {/* Photo URL */}
          <div className="relative">
            <FaImage className="top-3 left-3 absolute text-gray-400" />
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL (optional)"
              className="py-2 pr-4 pl-10 border rounded-md focus:outline-none focus:ring-[#39b8ad] focus:ring-2 w-full"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="top-3 left-3 absolute text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="py-2 pr-4 pl-10 border rounded-md focus:outline-none focus:ring-[#39b8ad] focus:ring-2 w-full"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="top-3 left-3 absolute text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="py-2 pr-4 pl-10 border rounded-md focus:outline-none focus:ring-[#39b8ad] focus:ring-2 w-full"
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Register button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#39b8ad] hover:from-[#2ea99f] to-[#2ea99f] hover:to-[#39b8ad] shadow-md py-2 rounded-md w-full font-semibold text-white hover:scale-105 transition-all duration-500"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow border-gray-300 border-t"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-gray-300 border-t"></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center gap-2 hover:bg-[#39b8ad] py-2 border border-[#39b8ad] rounded-md w-full font-semibold text-[#39b8ad] hover:text-white transition-all duration-500"
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p className="mt-5 text-gray-600 text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-[#39b8ad] hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
