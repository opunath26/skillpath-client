import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { FaUserGraduate, FaClock, FaSearch, FaTag, FaStar } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://skill-path-server-five.vercel.app/courses");
        setCourses(res.data);
        setFilteredCourses(res.data);

        const uniqueCategories = ["All", ...new Set(res.data.map(c => c.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load courses:", err);
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  useEffect(() => {
    let updatedCourses = [...courses];
    if (selectedCategory !== "All") {
      updatedCourses = updatedCourses.filter(c => c.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      updatedCourses = updatedCourses.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredCourses(updatedCourses);
  }, [selectedCategory, searchQuery, courses]);

  if (loading) return <Spinner />;

  return (
    <div className="bg-white mx-auto px-4 py-12 min-h-screen container">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-2 font-extrabold text-slate-900 text-4xl tracking-tight">
          Discover Your Next Skill
        </h1>
        <p className="text-slate-500 text-lg">High-quality courses designed for professional growth.</p>
      </div>

      {/* Filter & Search Bar - Minimal Design */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 border ${selectedCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-50 focus:bg-white py-2.5 pr-4 pl-10 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400 w-full transition-all"
          />
          <FaSearch className="top-3.5 left-3 absolute text-slate-400" />
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {filteredCourses.map(course => (
            <div
              key={course._id}
              onClick={() => navigate(`/courseDetails/${course._id}`)}
              className="group flex flex-col bg-white shadow-sm hover:shadow-xl border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Image with subtle zoom effect */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="top-4 left-4 absolute bg-white/90 shadow-sm backdrop-blur-sm px-3 py-1 border border-slate-200 rounded-full font-bold text-slate-800 text-xs">
                  {course.category}
                </div>
              </div>

              <div className="flex flex-col flex-grow p-6">
                {/* Rating & Stats */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    <FaStar /> <span className="font-semibold text-slate-700">{course.rating || "4.5"}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <FaUserGraduate /> {course.students?.length || 0} students
                  </div>
                </div>

                <h2 className="mb-3 font-bold text-slate-800 group-hover:text-slate-900 text-xl line-clamp-2">
                  {course.title}
                </h2>

                {/* Course Metadata */}
                <div className="flex items-center gap-4 mb-6 text-slate-500 text-sm">
                  <div className="flex items-center gap-1.5">
                    <FaClock className="text-slate-400" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <FaTag className="text-slate-400" /> <span className="font-bold text-lg">৳</span>{course.price}
                  </div>
                </div>

                {/* Action Button - Minimalist */}
                <div className="mt-auto">
                  <button
                    className="shadow-md border-none w-full font-bold text-white active:scale-95 transition-transform btn btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
      ))}
    </div>
  ) : (
    <div className="py-20 text-center">
      <p className="text-slate-400 text-lg italic">No courses found matching your criteria.</p>
    </div>
  )
}
    </div >
  );
};

export default AllCourses;