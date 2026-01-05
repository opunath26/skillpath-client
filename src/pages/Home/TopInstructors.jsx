import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://skill-path-server-five.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data.slice(0, 4)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto px-6 md:px-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-extrabold text-slate-900 text-4xl">
            Meet Our Expert Instructors
          </h2>
          <div className="bg-[#0D9488] mx-auto rounded-full w-20 h-1.5"></div>
        </div>

        {/* Grid layout */}
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((inst, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white shadow-sm hover:shadow-xl p-8 border border-slate-100 rounded-3xl text-center transition-all duration-300"
            >
              {/* Profile Image with subtle ring effect */}
              <div className="inline-block relative mb-6">
                <div className="absolute inset-0 bg-[#0D9488] opacity-0 group-hover:opacity-20 blur-md rounded-full transition-opacity duration-300"></div>
                <img
                  src={inst.instructorPhoto}
                  alt={inst.instructorName}
                  className="z-10 relative shadow-md mx-auto rounded-full ring-4 ring-slate-50 group-hover:ring-[#0D9488]/30 w-28 h-28 object-cover transition-all duration-300"
                />
              </div>

              {/* Information */}
              <h3 className="mb-1 font-bold text-slate-800 group-hover:text-[#0D9488] text-xl transition-colors">
                {inst.instructorName}
              </h3>
              <p className="mb-6 text-slate-500 text-sm">{inst.instructorEmail}</p>

              {/* Stats - Badge style */}
              <div className="flex justify-center items-center gap-3">
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 border border-slate-100 rounded-lg font-bold text-slate-700 text-xs">
                  <span className="text-[#0D9488]">📚</span> {inst.totalCourses} Courses
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 border border-amber-100 rounded-lg font-bold text-amber-700 text-xs">
                  <span>⭐</span> {inst.avgRating}
                </div>
              </div>
              
              {/* Optional: Profile view link */}
              <button className="opacity-0 group-hover:opacity-100 mt-6 font-bold text-[#0D9488] text-sm transition-all translate-y-2 group-hover:translate-y-0 duration-300 transform">
                View Profile →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;