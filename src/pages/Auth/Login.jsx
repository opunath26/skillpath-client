import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../../context/AuthProvider";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

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
          title: "Welcome Back!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: "#0D9488",
          color: "#fff",
        });
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        setError("Invalid email or password. Please try again.");
        MySwal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "Login Failed!",
          showConfirmButton: false,
          timer: 3000,
          background: "#e53e3e",
          color: "#fff",
        });
      });
  };

  return (
    <div className="flex justify-center items-center bg-slate-50 p-4 md:p-10 min-h-screen">
      <div className="flex md:flex-row flex-col bg-white shadow-2xl border border-slate-100 rounded-[2.5rem] w-full max-w-5xl overflow-hidden">
        
        {/* Left Side: Visual/Image Section */}
        <div className="hidden relative md:flex justify-center items-center bg-[#0D9488] p-12 md:w-1/2 overflow-hidden">
          {/* Decorative Circles */}
          <div className="top-[-10%] left-[-10%] absolute bg-white/10 blur-3xl rounded-full w-64 h-64"></div>
          <div className="right-[-10%] bottom-[-10%] absolute bg-black/10 blur-3xl rounded-full w-64 h-64"></div>
          
          <div className="z-10 relative text-center">
            <img 
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg" 
              alt="Login illustration" 
              className="drop-shadow-2xl mx-auto w-full max-w-sm animate-float"
            />
            <h2 className="mt-8 font-black text-white text-3xl">Your journey starts here.</h2>
            <p className="opacity-90 mx-auto mt-4 max-w-xs text-[#e2f3f1]">
              Log in to access your dashboard, courses, and premium learning materials.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex flex-col justify-center p-8 md:p-16 md:w-1/2">
          <div className="mb-10 md:text-left text-center">
            <h2 className="font-black text-slate-800 text-3xl md:text-4xl tracking-tight">
              Welcome <span className="text-[#0D9488]">Back!</span>
            </h2>
            <p className="mt-2 font-medium text-slate-500">Please enter your details to login.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="ml-1 font-bold text-slate-700 text-sm uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  className="bg-slate-50 py-4 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-2xl outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full font-medium transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="font-bold text-slate-700 text-sm uppercase tracking-wider">
                  Password
                </label>
                <button type="button" className="font-bold text-[#0D9488] text-xs hover:underline">
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <FaLock className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="bg-slate-50 py-4 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-2xl outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full font-medium transition-all"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 p-4 border border-red-100 rounded-xl font-medium text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="group flex justify-center items-center gap-2 bg-[#0D9488] hover:bg-[#0b7a6f] shadow-[#0D9488]/20 shadow-xl py-4 rounded-2xl w-full font-black text-white text-lg active:scale-[0.98] transition-all"
            >
              Sign In 
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-10 text-center">
            <p className="font-medium text-slate-500">
              New to Skill Path?{" "}
              <Link to="/register" className="font-black text-[#0D9488] hover:underline underline-offset-4">
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;