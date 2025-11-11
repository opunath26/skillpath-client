import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const activeColor = "#39b8ad";
  console.log(activeColor);
  
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative px-3 py-2 text-lg font-medium transition duration-300
            ${isActive ? "text-[#39b8ad]" : "text-gray-700 hover:text-[#39b8ad]"}
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full
            after:h-[2px] after:rounded-full after:scale-x-0 after:bg-[#39b8ad]
            after:transition-transform after:duration-300 hover:after:scale-x-100
            ${isActive ? "after:scale-x-100" : ""}`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allCourses"
          className={({ isActive }) =>
            `relative px-3 py-2 text-lg font-medium transition duration-300
            ${isActive ? "text-[#39b8ad]" : "text-gray-700 hover:text-[#39b8ad]"}
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full
            after:h-[2px] after:rounded-full after:scale-x-0 after:bg-[#39b8ad]
            after:transition-transform after:duration-300 hover:after:scale-x-100
            ${isActive ? "after:scale-x-100" : ""}`
          }
        >
          All Courses
        </NavLink>
      </li>
      
    </>
  );

  return (
    <div className="top-0 z-50 sticky bg-white shadow-md navbar">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="z-[1] bg-white shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content"
          >
            {links}
          </ul>
        </div>

        {/* LOGO */}
        <a
          href="/"
          className="font-bold hover:text-[#39b8ad] text-3xl transition-colors duration-300"
        >
          Skill <span className="text-[#39b8ad]">Path</span>
        </a>
      </div>

      {/* Desktop Menu*/}
      <div className="hidden lg:flex navbar-center">
        <ul className="gap-2 px-1 menu menu-horizontal">{links}</ul>
      </div>

      {/* User Photo or Icon */}
      <div className="flex items-center gap-3 navbar-end">
        {user ? (
          <img
            src={user.photoURL || "https://via.placeholder.com/40"}
            alt="User"
            className="border-[#39b8ad] border-2 rounded-full w-10 h-10"
            title={user.displayName || "User"}
          />
        ) : (
          <FaUserCircle className="text-gray-500 text-3xl" />
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-[#39b8ad] hover:from-[#2ea99f] to-[#2ea99f] hover:to-[#39b8ad] shadow-md hover:shadow-lg px-6 py-2 rounded-md font-semibold text-white hover:scale-105 transition-all duration-500 transform"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-[#39b8ad] hover:from-[#2ea99f] to-[#2ea99f] hover:to-[#39b8ad] shadow-md hover:shadow-lg px-6 py-2 rounded-md font-semibold text-white hover:scale-105 transition-all duration-500 transform"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
