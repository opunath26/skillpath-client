import React from "react";
import { Link, useNavigate } from "react-router";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-center items-center bg-slate-900 px-4 min-h-screen overflow-hidden text-center">
      {/* Background Glowing Orbs */}
      <div className="top-1/4 left-1/2 absolute bg-teal-500/20 blur-[120px] rounded-full w-96 h-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="right-10 bottom-10 absolute bg-rose-500/10 blur-[100px] rounded-full w-80 h-80 pointer-events-none" />

      <div className="z-10 relative bg-slate-800/50 shadow-2xl backdrop-blur-xl p-8 sm:p-12 border border-slate-700/60 rounded-3xl w-full max-w-lg">
        {/* Warning Badge Icon */}
        <div className="flex justify-center items-center bg-teal-500/10 mx-auto mb-6 border border-teal-500/20 rounded-2xl w-16 h-16 text-teal-400">
          <FaExclamationTriangle size={30} />
        </div>

        {/* 404 Big Gradient Text */}
        <h1 className="bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-rose-400 font-black text-transparent text-8xl sm:text-9xl tracking-tight">
          404
        </h1>

        <h2 className="mt-4 font-bold text-white text-2xl sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex sm:flex-row flex-col justify-center items-center gap-3 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex justify-center items-center gap-2 bg-slate-700/80 hover:bg-slate-700 px-5 py-3 border border-slate-600 rounded-xl w-full sm:w-auto font-semibold text-slate-200 hover:text-white text-sm active:scale-95 transition-all cursor-pointer"
          >
            <FaArrowLeft size={14} /> Go Back
          </button>

          <Link
            to="/"
            className="flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-500 shadow-lg shadow-teal-600/20 px-6 py-3 rounded-xl w-full sm:w-auto font-bold text-white text-sm active:scale-95 transition-all cursor-pointer"
          >
            <FaHome size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;