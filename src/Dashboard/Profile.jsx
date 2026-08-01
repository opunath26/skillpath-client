import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { 
  FaEdit, 
  FaEnvelope, 
  FaUser, 
  FaBookOpen, 
  FaAward, 
  FaTimes, 
  FaCamera, 
  FaSave,
  FaCalendarAlt,
  FaShieldAlt
} from "react-icons/fa";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [enrolledCount, setEnrolledCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  // Sync state when user object changes
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  // Fetch real enrolled courses count
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://skill-path-server-five.vercel.app/enrollments?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEnrolledCount(data.length);
        }
      })
      .catch((err) => console.error("Error fetching stats:", err));
  }, [user?.email]);

  // Handle Profile Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (updateUserProfile) {
        await updateUserProfile(name, photoURL);
      }
      
      setIsModalOpen(false);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Profile updated successfully!",
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        background: "#0D9488",
        color: "#fff",
      });
    } catch (error) {
      console.error("Update profile error:", error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Failed to update profile!",
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        background: "#E11D48",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50/50 p-3 sm:p-6 md:p-10 min-h-screen">
      {/* Profile Header Card */}
      <div className="bg-white shadow-slate-200/50 shadow-sm backdrop-blur-md mx-auto border border-slate-200/80 rounded-3xl max-w-5xl overflow-hidden">
        
        {/* Cover Photo Header */}
        <div className="relative bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 h-36 md:h-56 overflow-hidden">
          <div className="top-0 right-0 absolute bg-teal-500/20 blur-3xl rounded-full w-72 h-72 pointer-events-none" />
          <div className="-bottom-10 left-1/3 absolute bg-teal-400/10 blur-2xl rounded-full w-48 h-48 pointer-events-none" />
        </div>

        <div className="relative px-5 sm:px-8 md:px-12 pb-10">
          {/* User Image & Action */}
          <div className="flex sm:flex-row flex-col justify-between items-start sm:items-end gap-4 -mt-16 sm:-mt-20 md:-mt-24 mb-6">
            <div className="group relative">
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/mJR9n0K/user-placeholder.png"
                }
                alt="Profile"
                className="shadow-xl border-2 border-teal-500/30 rounded-3xl ring-4 ring-white w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 object-cover transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://i.ibb.co/mJR9n0K/user-placeholder.png";
                }}
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className="right-2 bottom-2 absolute bg-teal-600 hover:bg-teal-700 shadow-md p-2.5 rounded-xl text-white active:scale-95 transition-transform cursor-pointer"
                title="Change Photo"
              >
                <FaCamera size={14} />
              </button>
            </div>

            {/* Edit Profile Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-teal-500/10 hover:bg-teal-600 px-5 py-2.5 rounded-xl font-bold text-teal-700 hover:text-white active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
            >
              <FaEdit /> Edit Profile
            </button>
          </div>

          {/* User Basic Info */}
          <div className="space-y-1">
            <h1 className="font-extrabold text-slate-800 text-2xl sm:text-3xl tracking-tight">
              {user?.displayName || "Learner Name"}
            </h1>
            <p className="flex items-center gap-2 font-semibold text-teal-600 text-sm">
              <FaUser className="text-xs" /> Student / Developer
            </p>
          </div>

          {/* Details & Stats Grid */}
          <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 mt-8">
            
            {/* Info Cards Column */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-4 bg-slate-50/80 p-4 border border-slate-200/60 rounded-2xl">
                <div className="flex justify-center items-center bg-white shadow-sm border border-slate-100 rounded-xl w-12 h-12 text-teal-600 shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="font-semibold text-slate-800 text-sm md:text-base truncate">
                    {user?.email || "Not Provided"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50/80 p-4 border border-slate-200/60 rounded-2xl">
                <div className="flex justify-center items-center bg-white shadow-sm border border-slate-100 rounded-xl w-12 h-12 text-teal-600 shrink-0">
                  <FaUser size={18} />
                </div>
                <div>
                  <p className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">
                    Full Name
                  </p>
                  <p className="font-semibold text-slate-800 text-sm md:text-base">
                    {user?.displayName || "Anonymous User"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50/80 p-4 border border-slate-200/60 rounded-2xl">
                <div className="flex justify-center items-center bg-white shadow-sm border border-slate-100 rounded-xl w-12 h-12 text-teal-600 shrink-0">
                  <FaShieldAlt size={18} />
                </div>
                <div>
                  <p className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">
                    Account Status
                  </p>
                  <p className="flex items-center gap-1.5 font-semibold text-emerald-600 text-sm md:text-base">
                    <span className="bg-emerald-500 rounded-full w-2 h-2 animate-pulse" /> Verified Student
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="gap-4 grid grid-cols-2 lg:grid-cols-1">
              <div className="flex flex-col justify-center items-center bg-teal-500/5 p-6 border border-teal-500/10 rounded-3xl text-center">
                <div className="bg-teal-500/10 mb-3 p-3 rounded-2xl text-teal-600">
                  <FaBookOpen size={24} />
                </div>
                <h3 className="font-extrabold text-slate-800 text-3xl">
                  {enrolledCount}
                </h3>
                <p className="mt-1 font-semibold text-slate-500 text-xs">
                  Courses Enrolled
                </p>
              </div>

              <div className="flex flex-col justify-center items-center bg-amber-500/5 p-6 border border-amber-500/10 rounded-3xl text-center">
                <div className="bg-amber-500/10 mb-3 p-3 rounded-2xl text-amber-500">
                  <FaAward size={24} />
                </div>
                <h3 className="font-extrabold text-slate-800 text-3xl">
                  01
                </h3>
                <p className="mt-1 font-semibold text-slate-500 text-xs">
                  Certificates Earned
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white shadow-2xl border border-slate-100 rounded-3xl w-full max-w-md overflow-hidden animate-in duration-200 fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-teal-900 to-slate-900 p-6 text-white">
              <h3 className="flex items-center gap-2 font-extrabold text-lg">
                <FaEdit className="text-teal-400" /> Edit Profile
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-300 hover:text-white transition-colors"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleUpdate} className="space-y-4 p-6">
              <div>
                <label className="block mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
              </div>

              <div>
                <label className="block mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="Paste image link"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                />
              </div>

              {photoURL && (
                <div className="flex items-center gap-3 bg-slate-50 p-2.5 border border-slate-200/80 rounded-xl">
                  <img
                    src={photoURL}
                    alt="Preview"
                    className="rounded-lg w-10 h-10 object-cover"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <span className="font-medium text-slate-500 text-xs">
                    Image preview
                  </span>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-slate-100 hover:bg-slate-200 px-5 py-3 rounded-xl w-1/3 font-bold text-slate-600 text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 shadow-md shadow-teal-600/20 py-3 rounded-xl w-2/3 font-bold text-white text-xs transition-all cursor-pointer"
                >
                  <FaSave /> {loading ? "Updating..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;