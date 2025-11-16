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
    <div className="bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fce4ec] py-20">
      <h2 className="mb-12 font-extrabold text-gray-800 text-4xl text-center tracking-wide">
        Meet Our Expert Instructor
      </h2>

      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-8">
        {instructors.map((inst, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{
              rotate: [-1, 1, -1, 0],
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            className="relative bg-white shadow-lg border-4 border-transparent hover:border-teal-400 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-teal-100 via-transparent to-transparent opacity-40"></div>

            <div className="z-10 relative p-6 text-center">
              <motion.img
                src={inst.instructorPhoto}
                alt={inst.instructorName}
                className="shadow-md mx-auto mb-5 border-4 border-teal-300 rounded-full w-32 h-32 object-cover"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />

              <h3 className="mb-2 font-bold text-gray-800 text-xl">{inst.instructorName}</h3>
              <p className="mb-3 text-gray-500 text-sm">{inst.instructorEmail}</p>

              <div className="flex justify-center gap-6 text-gray-600 text-sm">
                <span className="bg-teal-100 px-3 py-1 rounded-full font-medium">
                  📚 {inst.totalCourses} Courses
                </span>
                <span className="bg-yellow-100 px-3 py-1 rounded-full font-medium">
                  ⭐ {inst.avgRating}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
