import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowRight, FaStar, FaBookOpen } from "react-icons/fa";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://skill-path-server-five.vercel.app/courses")
      .then((res) => {
        setCourses(res.data.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-slate-50/50 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex md:flex-row flex-col justify-between md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="inline-block bg-primary/10 px-3.5 py-1.5 rounded-full font-semibold text-primary text-sm uppercase tracking-wider">
              Popular Programs
            </span>
            <h2 className="font-extrabold text-slate-900 text-3xl md:text-4xl tracking-tight">
              Browse Our Featured Courses
            </h2>
            <p className="max-w-xl text-slate-600 text-base">
              Explore our top-rated courses crafted by industry experts to help
              you build real-world skills and advance your career.
            </p>
          </div>

          <Link
            to="/allCourses"
            className="group inline-flex justify-center items-center self-start md:self-auto gap-2 bg-white hover:bg-slate-100 shadow-sm px-6 py-3.5 border border-slate-200 rounded-xl font-semibold text-slate-800 hover:text-primary transition-all duration-300"
          >
            <span>View All Courses</span>
            <FaArrowRight className="text-primary transition-transform group-hover:translate-x-1.5 duration-200" />
          </Link>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className="bg-white shadow-sm p-4 border border-slate-100 rounded-2xl animate-pulse"
              >
                <div className="bg-slate-200 mb-4 rounded-xl w-full h-48"></div>
                <div className="space-y-3">
                  <div className="bg-slate-200 rounded w-1/3 h-4"></div>
                  <div className="bg-slate-200 rounded w-3/4 h-6"></div>
                  <div className="bg-slate-200 mt-4 rounded-xl w-full h-10"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Courses Grid */
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course._id}
                onClick={() => navigate(`/courseDetails/${course._id}`)}
                className="group flex flex-col justify-between bg-white shadow-sm hover:shadow-xl border border-slate-100 hover:border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Course Image & Price Badge */}
                  <div className="relative bg-slate-100 w-full h-48 overflow-hidden">
                    <img
                      src={
                        course.thumbnail ||
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
                      }
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600";
                      }}
                    />
                    <div className="top-3 right-3 absolute bg-white/90 shadow-sm backdrop-blur-md px-3 py-1 rounded-full font-bold text-primary text-xs">
                      ৳{course.price || "0"}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2.5 font-medium text-slate-500 text-xs">
                      <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">
                        <FaBookOpen className="text-primary" />
                        {course.category || "Development"}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-amber-500">
                        <FaStar />
                        {course.rating || "4.8"}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 group-hover:text-primary text-base line-clamp-2 leading-snug transition-colors duration-200">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-5 pt-0">
                  <button className="bg-slate-900 group-hover:bg-primary shadow-sm py-2.5 rounded-xl w-full font-semibold text-white text-xs transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;