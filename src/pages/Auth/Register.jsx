import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { FaUser, FaLock, FaEnvelope, FaImage, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const showToast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: icon === "success" ? "#39b8ad" : "#f87171",
      color: "#fff",
    });
  };

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
        showToast("success", "Registration Successful!");

        // Backend e save korar data
        const newUser = { name, email, photoURL };

        fetch("https://skill-path-server-five.vercel.app/users", {
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
        showToast("error", err.message);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const googleUser = result.user;
        const newUser = {
          name: googleUser.displayName,
          email: googleUser.email,
          photoURL: googleUser.photoURL,
        };

        fetch("https://skill-path-server-five.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        showToast("success", "Google Sign-in Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        showToast("error", err.message);
      });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br p-6 min-h-screen">
      <div className="bg-white/90 shadow-2xl backdrop-blur-lg p-8 rounded-2xl w-full max-w-md">
        <h2 className="mb-6 font-bold text-[#39b8ad] text-3xl text-center">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
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

          <div className="relative">
            <FaImage className="top-3 left-3 absolute text-gray-400" />
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL (optional)"
              className="py-2 pr-4 pl-10 border rounded-md focus:outline-none focus:ring-[#39b8ad] focus:ring-2 w-full"
            />
          </div>

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

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="bg-gradient-to-r from-[#39b8ad] hover:from-[#2ea99f] to-[#2ea99f] hover:to-[#39b8ad] shadow-md py-2 rounded-md w-full font-semibold text-white hover:scale-105 transition-all duration-500"
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-5">
          <div className="flex-grow border-gray-300 border-t"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-gray-300 border-t"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center gap-2 hover:bg-[#39b8ad] py-2 border border-[#39b8ad] rounded-md w-full font-semibold text-[#39b8ad] hover:text-white transition-all duration-500"
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p className="mt-5 text-gray-600 text-center">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-[#39b8ad] hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
