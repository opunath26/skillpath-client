import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Star, ArrowRight, Mail } from "lucide-react";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://skill-path-server-five.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setInstructors(data.slice(0, 4));
        } else {
          setInstructors([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching instructors:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-slate-50/50 py-20 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="space-y-3 mx-auto mb-12 md:mb-16 max-w-2xl text-center">
          <span className="inline-block bg-teal-50 px-4 py-1.5 border border-teal-200/60 rounded-full font-bold text-teal-700 text-xs uppercase tracking-wider">
            Meet Our Team
          </span>
          <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Top & Expert Instructors
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Learn from industry pioneers with real-world experience and passion for teaching.
          </p>
        </div>

        {/* Skeleton Loader */}
        {loading ? (
          <div className="gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="space-y-4 bg-white p-8 border border-slate-100 rounded-3xl text-center animate-pulse"
              >
                <div className="bg-slate-200 mx-auto rounded-full w-28 h-28" />
                <div className="bg-slate-200 mx-auto rounded w-3/4 h-5" />
                <div className="bg-slate-200 mx-auto rounded w-1/2 h-4" />
                <div className="bg-slate-100 mx-auto rounded-xl w-full h-10" />
              </div>
            ))}
          </div>
        ) : instructors.length === 0 ? (
          <p className="py-10 text-slate-500 text-center">No instructors found.</p>
        ) : (
          /* Grid layout */
          <div className="gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((inst, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between bg-white hover:bg-slate-900/5 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 p-6 border border-slate-200/80 hover:border-teal-400/50 rounded-3xl text-center transition-all duration-300"
              >
                <div>
                  {/* Profile Image with Glow Effect */}
                  <div className="inline-block relative mb-5">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 blur-lg rounded-full transition duration-500"></div>
                    <img
                      src={
                        inst.instructorPhoto ||
                        "https://i.ibb.co.com/PZ1JgZzN/lreora.jpg"
                      }
                      alt={inst.instructorName || "Instructor"}
                      className="z-10 relative shadow-md mx-auto rounded-full ring-4 ring-white group-hover:ring-teal-100 w-28 h-28 object-cover group-hover:scale-105 transition-all duration-300"
                      onError={(e) => {
                        e.target.src = "https://i.ibb.co.com/PZ1JgZzN/lreora.jpg";
                      }}
                    />
                  </div>

                  {/* Information */}
                  <h3 className="mb-1 font-bold text-slate-900 group-hover:text-teal-600 text-lg sm:text-xl line-clamp-1 transition-colors">
                    {inst.instructorName || "Instructor Name"}
                  </h3>
                  
                  {/* Designation */}
                  <p className="mb-2 font-medium text-teal-700/90 text-xs sm:text-sm line-clamp-1">
                    {inst.designation || "Senior Instructor"}
                  </p>

                  {/* Email */}
                  <div className="flex justify-center items-center gap-1.5 mb-5 text-slate-400 text-xs truncate">
                    <Mail className="w-3.5 h-3.5" />
                    <span className="truncate">{inst.instructorEmail}</span>
                  </div>

                  {/* Stats Badges */}
                  <div className="gap-2 grid grid-cols-2 bg-slate-50 p-2.5 border border-slate-100/80 rounded-2xl">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-700 text-xs">
                      <BookOpen className="w-4 h-4 text-teal-600" />
                      <span>{inst.totalCourses || 0} Courses</span>
                    </div>
                    <div className="flex justify-end items-center gap-1.5 font-bold text-amber-600 text-xs">
                      <Star className="fill-amber-400 w-4 h-4 text-amber-400" />
                      <span>{inst.avgRating || "5.0"}</span>
                    </div>
                  </div>
                </div>

                {/* Profile Link Button */}
                <div className="pt-5">
                  <button className="flex justify-center items-center gap-2 bg-slate-100 group-hover:bg-teal-600 px-4 py-2.5 rounded-xl w-full font-semibold text-slate-700 group-hover:text-white text-xs sm:text-sm transition-all duration-300">
                    <span>View Profile</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopInstructors;