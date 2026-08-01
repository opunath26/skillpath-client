import React from "react";
import { FaDiscord, FaTelegramPlane, FaCode, FaFileCode, FaComments, FaUsers } from "react-icons/fa";

const CommunityBanner = () => {
  return (
    <section className="mx-auto px-4 sm:px-8 py-12 max-w-7xl">
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl p-6 sm:p-10 md:p-12 border border-slate-700/60 rounded-3xl overflow-hidden">
        {/* Glowing Background Elements */}
        <div className="-top-24 -right-24 absolute bg-indigo-500/15 blur-3xl rounded-full w-96 h-96 pointer-events-none" />
        <div className="-bottom-24 -left-24 absolute bg-sky-500/15 blur-3xl rounded-full w-96 h-96 pointer-events-none" />

        <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center gap-10">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl lg:text-left text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-4 py-1.5 border border-indigo-500/20 rounded-full font-bold text-indigo-400 text-xs uppercase tracking-wider">
              <FaUsers size={14} /> Join Our Tech Community
            </div>

            {/* Heading */}
            <h2 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Join our <span className="bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-teal-400 text-transparent">5,000+ developer</span> community!
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Not ready to enroll in a course yet? No problem! Get access to free coding resources, exclusive cheatsheets, daily tech discussions, and live Q&A sessions.
            </p>

            {/* Features Pill List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <span className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 border border-slate-700/80 rounded-xl font-medium text-slate-300 text-xs">
                <FaFileCode className="text-indigo-400" /> Free Cheatsheets & Guides
              </span>
              <span className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 border border-slate-700/80 rounded-xl font-medium text-slate-300 text-xs">
                <FaComments className="text-sky-400" /> Live Q&A & Support
              </span>
              <span className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 border border-slate-700/80 rounded-xl font-medium text-slate-300 text-xs">
                <FaCode className="text-teal-400" /> Code Reviews
              </span>
            </div>
          </div>

          {/* Right Action Buttons Card */}
          <div className="flex sm:flex-row flex-col lg:flex-col gap-4 w-full lg:w-auto max-w-md shrink-0">
            {/* Discord Button Card */}
            <a
              href="https://discord.gg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#5865F2] hover:bg-[#4752C4] shadow-[#5865F2]/25 shadow-lg p-4 rounded-2xl active:scale-95 transition-all duration-300"
            >
              <div className="flex justify-center items-center bg-white/20 rounded-xl w-12 h-12 text-white group-hover:scale-110 transition-transform shrink-0">
                <FaDiscord size={28} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-white text-base">Join Discord</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold text-[10px] text-white">
                    3.2k Active
                  </span>
                </div>
                <p className="text-indigo-100 text-xs">Interactive channels & live voice sessions</p>
              </div>
            </a>

            {/* Telegram Button Card */}
            <a
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#229ED9] hover:bg-[#1d8cb3] shadow-[#229ED9]/25 shadow-lg p-4 rounded-2xl active:scale-95 transition-all duration-300"
            >
              <div className="flex justify-center items-center bg-white/20 rounded-xl w-12 h-12 text-white group-hover:scale-110 transition-transform shrink-0">
                <FaTelegramPlane size={26} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-white text-base">Join Telegram</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold text-[10px] text-white">
                    1.8k Members
                  </span>
                </div>
                <p className="text-sky-100 text-xs">Instant updates, PDF resources & daily tips</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBanner;