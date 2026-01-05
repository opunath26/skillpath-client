import React, { useContext } from "react";
import { NavLink, useNavigate, Link } from "react-router"; 
import { AuthContext } from "../../context/AuthProvider";
import { FaUserCircle, FaSignOutAlt, FaThLarge, FaUserAlt } from "react-icons/fa";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((err) => console.error(err));
  };

  const renderNavLink = (to, label) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative px-3 py-2 text-base font-semibold transition duration-300
          ${isActive ? "text-[#0D9488]" : "text-gray-700 hover:text-[#0D9488]"}
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full
          after:h-[2px] after:rounded-full after:scale-x-0 after:bg-[#0D9488]
          after:transition-transform after:duration-300 hover:after:scale-x-100
          ${isActive ? "after:scale-x-100" : ""}`
        }
      >
        {label}
      </NavLink>
    </li>
  );

  const links = (
    <>
      {renderNavLink("/", "Home")}
      {renderNavLink("/allCourses", "All Courses")}
      {renderNavLink("/about", "About Us")} 
      
      {user && (
        <>
          {renderNavLink("/dashboard", "Dashboard")}
          {renderNavLink("/myCourse", "My Learning")}
        </>
      )}
    </>
  );

  return (
    <div className="top-0 z-50 sticky bg-white/90 shadow-sm backdrop-blur-md px-2 md:px-10 border-gray-100 border-b transition-all duration-300 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="z-[1] bg-white shadow-xl mt-3 p-4 border border-gray-50 rounded-xl w-64 menu menu-sm dropdown-content">
            {links}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2 font-black text-2xl md:text-3xl tracking-tight">
          <span className="text-gray-800">Skill</span>
          <span className="text-[#0D9488]">Path</span>
        </Link>
      </div>

      <div className="hidden lg:flex navbar-center">
        <ul className="gap-4 px-1 menu menu-horizontal">
          {links}
        </ul>
      </div>

      <div className="gap-4 navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="shadow-sm border-2 border-transparent rounded-full hover:ring-[#0D9488] hover:ring-2 transition-all duration-300 cursor-pointer avatar">
              <div className="rounded-full ring ring-[#0D9488]/20 ring-offset-base-100 w-10">
                <img src={user.photoURL || "https://i.ibb.co/mJR9n0K/user-placeholder.png"} alt="User" />
              </div>
            </div>
            <ul tabIndex={0} className="z-[2] bg-white shadow-2xl mt-3 p-2 border border-gray-100 rounded-2xl w-60 overflow-hidden menu menu-sm dropdown-content">
              <li className="bg-gray-50/50 mb-2 px-4 py-3 menu-title">
                <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Signed in as</p>
                <p className="font-bold text-gray-800 truncate">{user.displayName || "Learner"}</p>
              </li>
              <li><Link to="/dashboard/profile" className="flex items-center gap-2 py-3 text-gray-600 hover:text-[#0D9488]"><FaUserAlt className="text-xs"/> Profile</Link></li>
              <li><Link to="/dashboard" className="flex items-center gap-2 py-3 text-gray-600 hover:text-[#0D9488]"><FaThLarge className="text-xs"/> Dashboard</Link></li>
              <div className="opacity-50 my-0 divider"></div>
              <li><button onClick={handleLogout} className="flex items-center gap-2 hover:bg-red-50 py-3 font-bold text-red-500"><FaSignOutAlt className="text-xs"/> Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden sm:inline-flex px-4 font-semibold text-gray-600 hover:text-[#0D9488]">Sign In</Link>
            <Link 
              to="/register" 
              className="bg-[#0D9488] hover:bg-[#0b7a6f] shadow-md hover:shadow-lg px-6 py-2.5 rounded-xl font-bold text-white active:scale-95 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;