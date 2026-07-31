import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import { FaUser, FaLock, FaEnvelope, FaImage, FaGoogle, FaArrowRight } from "react-icons/fa";
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
      background: icon === "success" ? "#0D9488" : "#f87171",
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
      .then(() => {
        showToast("success", "Registration Successful!");
        const newUser = { name, email, photoURL };

        fetch("https://skill-path-server-five.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        form.reset();
        navigate("/");
      })
      .catch((err) => {
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
    <div className="flex justify-center items-center bg-slate-50 p-4 md:p-10 min-h-screen">
      <div className="flex md:flex-row-reverse flex-col bg-white shadow-2xl border border-slate-100 rounded-[2.5rem] w-full max-w-5xl overflow-hidden">
        
        {/* Left Side: Visual/Image Section */}
        <div className="hidden relative md:flex justify-center items-center bg-[#0D9488] p-12 md:w-1/2 overflow-hidden">
          <div className="top-[-10%] right-[-10%] absolute bg-white/10 blur-3xl rounded-full w-64 h-64"></div>
          <div className="bottom-[-10%] left-[-10%] absolute bg-black/10 blur-3xl rounded-full w-64 h-64"></div>
          
          <div className="z-10 relative text-white text-center">
            <img 
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg" 
              alt="Register illustration" 
              className="drop-shadow-2xl mx-auto w-full max-w-sm animate-float"
            />
            <h2 className="mt-8 font-black text-3xl">Join the Community!</h2>
            <p className="opacity-90 mx-auto mt-4 max-w-xs text-[#e2f3f1]">
              Create an account today and start your journey to mastering new skills.
            </p>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="flex flex-col justify-center p-8 md:p-16 md:w-1/2">
          <div className="mb-8">
            <h2 className="font-black text-slate-800 text-3xl tracking-tight">
              Create <span className="text-[#0D9488]">Account</span>
            </h2>
            <p className="mt-2 font-medium text-slate-500">Join us to start learning.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <FaUser className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="bg-slate-50 py-3.5 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-2xl outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full font-medium transition-all"
              />
            </div>

            {/* Photo URL */}
            <div className="relative">
              <FaImage className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL (Optional)"
                className="bg-slate-50 py-3.5 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-2xl outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full font-medium transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="relative">
              <FaEnvelope className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-slate-50 py-3.5 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-2xl outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full font-medium transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="bg-slate-50 py-3.5 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-2xl outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full font-medium transition-all"
              />
            </div>

            {error && <p className="ml-2 font-medium text-red-500 text-xs">{error}</p>}

            <button
              type="submit"
              className="group flex justify-center items-center gap-2 bg-[#0D9488] hover:bg-[#0b7a6f] shadow-[#0D9488]/20 shadow-xl mt-2 py-4 rounded-2xl w-full font-black text-white text-lg active:scale-[0.98] transition-all"
            >
              Register Now <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-slate-200 border-t"></div>
            <span className="mx-4 font-bold text-slate-400 text-xs uppercase">OR</span>
            <div className="flex-grow border-slate-200 border-t"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center gap-3 hover:bg-slate-50 py-3.5 border-2 border-slate-100 rounded-2xl w-full font-bold text-slate-700 transition-all"
          >
            <FaGoogle className="text-red-500 text-xl" /> Continue with Google
          </button>

          <p className="mt-8 font-medium text-slate-500 text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-black text-[#0D9488] hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;