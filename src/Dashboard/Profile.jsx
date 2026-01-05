import React, { useContext } from "react";
import { AuthContext } from ".././context/AuthProvider";
import { FaEdit, FaEnvelope, FaUser, FaBookOpen, FaAward } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-slate-50/50 p-4 md:p-10 min-h-screen">
      {/* Profile Header Card */}
      <div className="bg-white shadow-sm mx-auto border border-slate-100 rounded-3xl max-w-5xl overflow-hidden">
        {/* Cover Photo Placeholder */}
        <div className="bg-gradient-to-r from-[#0D9488] to-[#0b7a6f] h-32 md:h-48"></div>

        <div className="relative px-6 md:px-12 pb-12">
          {/* User Image */}
          <div className="-top-16 md:-top-20 left-6 md:left-12 absolute">
            <img
              src={user?.photoURL || "https://i.ibb.co/mJR9n0K/user-placeholder.png"}
              alt="Profile"
              className="shadow-lg border-4 border-white rounded-full w-32 md:w-40 h-32 md:h-40 object-cover"
            />
          </div>

          {/* Edit Button */}
          <div className="flex justify-end pt-6">
            <button className="flex items-center gap-2 bg-[#0D9488]/10 hover:bg-[#0D9488] px-5 py-2 rounded-xl font-bold text-[#0D9488] hover:text-white transition-all duration-300">
              <FaEdit /> Edit Profile
            </button>
          </div>

          {/* User Info */}
          <div className="mt-10">
            <h1 className="font-bold text-slate-800 text-3xl uppercase tracking-tight">
              {user?.displayName || "Learner Name"}
            </h1>
            <p className="flex items-center gap-2 mt-1 font-medium text-[#0D9488]">
              <FaUser className="text-xs" /> Student / Developer
            </p>
          </div>

          {/* Details Grid */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mt-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-50 p-4 border border-slate-100 rounded-2xl">
                <div className="flex justify-center items-center bg-white shadow-sm rounded-xl w-12 h-12 text-[#0D9488]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-bold text-slate-400 text-xs uppercase tracking-wider">Email Address</p>
                  <p className="font-semibold text-slate-700">{user?.email || "Not Provided"}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-4 border border-slate-100 rounded-2xl">
                <div className="flex justify-center items-center bg-white shadow-sm rounded-xl w-12 h-12 text-[#0D9488]">
                  <FaUser />
                </div>
                <div>
                  <p className="font-bold text-slate-400 text-xs uppercase tracking-wider">Full Name</p>
                  <p className="font-semibold text-slate-700">{user?.displayName || "Anonymous"}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="gap-4 grid grid-cols-2">
              <div className="bg-[#0D9488]/5 p-6 border border-[#0D9488]/10 rounded-3xl text-center">
                <FaBookOpen className="mx-auto mb-2 text-[#0D9488] text-2xl" />
                <h3 className="font-black text-slate-800 text-2xl">12</h3>
                <p className="font-medium text-slate-500 text-sm">Courses Joined</p>
              </div>
              <div className="bg-amber-50 p-6 border border-amber-100 rounded-3xl text-center">
                <FaAward className="mx-auto mb-2 text-amber-500 text-2xl" />
                <h3 className="font-black text-slate-800 text-2xl">04</h3>
                <p className="font-medium text-slate-500 text-sm">Certificates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;