import React, { useContext, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import {
  FaUserAlt,
  FaThLarge,
  FaSignOutAlt,
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaBookOpen,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        setMobileMenuOpen(false);
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/allCourses", label: "All Courses", icon: <FaBookOpen /> },
    { path: "/about", label: "About Us", icon: <FaInfoCircle /> },
    ...(user
      ? [
          // { path: "/dashboard", label: "Dashboard", icon: <FaThLarge /> },
          { path: "/myCourse", label: "My Learning", icon: <FaBookOpen /> },
        ]
      : []),
  ];

  return (
    <header className="top-0 z-50 sticky bg-slate-900/90 shadow-lg backdrop-blur-md border-slate-800 border-b transition-all duration-300">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-8 max-w-7xl h-20">
        
        {/* LOGO WITH ANIMATION */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex justify-center items-center bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 shadow-lg shadow-teal-500/30 rounded-2xl w-11 h-11 text-white group-hover:scale-105 transition-transform duration-300">
            <FaGraduationCap className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="top-0 right-0 absolute bg-emerald-400 rounded-full w-3 h-3 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-2xl leading-none tracking-tight">
              Skill<span className="text-teal-400">Path</span>
            </span>
            <span className="mt-1 font-medium text-[10px] text-slate-400 uppercase tracking-widest">
              Learn & Grow
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-800/60 p-1.5 border border-slate-700/50 rounded-full">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-teal-500 text-white shadow-md shadow-teal-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE USER / AUTH BUTTONS */}
        <div className="hidden sm:flex items-center gap-4">
          {user ? (
            <div className="group relative">
              <div className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-800 p-1.5 pr-4 border border-slate-700/60 rounded-full transition-all cursor-pointer">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/mJR9n0K/user-placeholder.png"
                  }
                  alt="User Avatar"
                  className="rounded-full ring-2 ring-teal-500/50 w-9 h-9 object-cover"
                />
                <div className="text-left">
                  <p className="max-w-[100px] font-bold text-white text-xs truncate">
                    {user?.displayName || "Learner"}
                  </p>
                  <p className="font-medium text-[10px] text-teal-400">Active</p>
                </div>
              </div>

              {/* DROPDOWN MENU */}
              <div className="invisible group-hover:visible top-full right-0 absolute opacity-0 group-hover:opacity-100 pt-2 w-56 transition-all duration-200">
                <div className="bg-slate-800 shadow-2xl p-2 border border-slate-700 rounded-2xl">
                  <div className="bg-slate-900/60 mb-2 p-3 rounded-xl">
                    <p className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">
                      Signed in as
                    </p>
                    <p className="font-semibold text-white text-sm truncate">
                      {user?.email}
                    </p>
                  </div>
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center gap-2.5 hover:bg-slate-700/60 p-2.5 rounded-lg text-slate-300 hover:text-teal-400 text-sm transition"
                  >
                    <FaUserAlt className="text-xs" /> Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2.5 hover:bg-slate-700/60 p-2.5 rounded-lg text-slate-300 hover:text-teal-400 text-sm transition"
                  >
                    <FaThLarge className="text-xs" /> Dashboard
                  </Link>
                  <hr className="my-1 border-slate-700" />
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2.5 hover:bg-rose-500/10 p-2.5 rounded-lg w-full text-rose-400 text-sm text-left transition"
                  >
                    <FaSignOutAlt className="text-xs" /> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hover:bg-slate-800 px-4 py-2 rounded-xl font-semibold text-slate-300 hover:text-white text-sm transition"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-teal-500 hover:bg-teal-400 shadow-lg shadow-teal-500/20 px-5 py-2.5 rounded-xl font-bold text-white text-sm active:scale-95 transition"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-slate-800 p-2.5 border border-slate-700 rounded-xl text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 p-4 border-slate-800 border-b">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition ${
                    isActive
                      ? "bg-teal-500 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}

            <hr className="my-2 border-slate-800" />

            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 bg-rose-500/10 px-4 py-3 rounded-xl font-bold text-rose-400 active:scale-95 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-slate-800 py-3 rounded-xl font-bold text-white text-center"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-teal-500 py-3 rounded-xl font-bold text-white text-center"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;