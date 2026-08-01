import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Outlet, useLocation } from "react-router";
import {
  FaEye,
  FaEdit,
  FaTrashAlt,
  FaPlus,
  FaBookOpen,
  FaSearch,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import MyCourses from "./MyCourses";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) return;

    fetch("https://skill-path-server-five.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        // Filter courses added by current user (by email or displayName)
        const myCourses = data.filter(
          (course) =>
            (user.email && course.email === user.email) ||
            (user.email && course.instructorEmail === user.email) ||
            (user.email && course.instructorName === user.email) ||
            (user.displayName && course.instructorName === user.displayName)
        );
        setCourses(myCourses);
      })
      .catch((err) => console.error("Error fetching courses:", err))
      .finally(() => setLoading(false));
  }, [user]);

  // Delete course function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://skill-path-server-five.vercel.app/courses/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setCourses(courses.filter((course) => course._id !== id));
      } else {
        console.error("Delete failed:", res.statusText);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // Filtered courses for local search
  const filteredCourses = courses.filter((course) =>
    course.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto p-4 md:p-8 max-w-7xl font-sans">
      {location.pathname === "/dashboard" ? (
        <div className="space-y-8 animate-in duration-300 fade-in">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 shadow-xl p-6 md:p-8 rounded-3xl text-white">
            <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-6">
              <div className="space-y-2">
                <span className="inline-block bg-teal-500/20 px-3 py-1 border border-teal-500/30 rounded-full font-semibold text-teal-300 text-xs tracking-wide">
                  Instructor Portal
                </span>
                <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight">
                  Welcome Back, {user?.displayName || "Instructor"}! 👋
                </h2>
                <p className="max-w-xl text-slate-300 text-xs md:text-sm">
                  Manage your created courses, track content updates, and keep your course library up-to-date.
                </p>
              </div>

              <button
                onClick={() => navigate("/addCourse")}
                className="flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7a6f] shadow-lg shadow-teal-900/30 px-6 py-3.5 rounded-2xl font-bold text-white text-sm active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
              >
                <FaPlus className="text-xs" /> Add New Course
              </button>
            </div>
          </div>

          {/* My Courses Section */}
          <div className="bg-white/90 shadow-slate-200/50 shadow-sm backdrop-blur-md p-6 border border-slate-200/80 rounded-3xl">
            {/* Header & Search Bar */}
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-4 mb-6 pb-5 border-slate-100 border-b">
              <div className="flex items-center gap-3">
                <div className="bg-teal-50 p-3 rounded-2xl text-[#0D9488]">
                  <FaBookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-xl">
                    My Added Courses
                  </h3>
                  <p className="text-slate-400 text-xs">
                    Overview of all the courses you have authored
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Search Box */}
                <div className="relative w-full md:w-64">
                  <FaSearch className="top-1/2 left-3.5 absolute text-slate-400 -translate-y-1/2" size={14} />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-slate-50 py-2 pr-4 pl-9 border border-slate-200 focus:border-[#0D9488] rounded-xl focus:outline-none w-full text-slate-700 text-xs transition-all"
                  />
                </div>

                <span className="bg-teal-500/10 px-4 py-2 border border-teal-500/20 rounded-xl font-bold text-[#0D9488] text-xs shrink-0">
                  Total: {courses.length}
                </span>
              </div>
            </div>

            {/* Courses Table */}
            {loading ? (
              <div className="py-16 text-center">
                <div className="inline-block border-[#0D9488] border-4 border-t-transparent rounded-full w-8 h-8 animate-spin" />
                <p className="mt-3 font-semibold text-slate-400 text-xs">
                  Loading your courses...
                </p>
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="bg-slate-50/50 my-2 py-14 border border-slate-200/60 border-dashed rounded-2xl text-center">
                <p className="font-semibold text-slate-400 text-sm italic">
                  {searchTerm ? "No matching courses found." : "No courses added yet."}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-slate-100 border-b text-left">
                      <th className="p-4 rounded-l-xl font-bold text-slate-500 text-xs uppercase tracking-wider">
                        #
                      </th>
                      <th className="p-4 font-bold text-slate-500 text-xs uppercase tracking-wider">
                        Thumbnail
                      </th>
                      <th className="p-4 font-bold text-slate-500 text-xs uppercase tracking-wider">
                        Course Title
                      </th>
                      <th className="p-4 rounded-r-xl font-bold text-slate-500 text-xs text-center uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredCourses.map((course, index) => (
                      <tr
                        key={course._id}
                        className="group hover:bg-teal-50/30 transition-colors duration-200"
                      >
                        <td className="p-4 font-bold text-slate-400 text-xs">
                          {index + 1}
                        </td>
                        <td className="p-4">
                          <img
                            src={
                              course.thumbnail ||
                              course.image ||
                              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
                            }
                            alt={course.title}
                            className="shadow-sm border border-slate-200/80 rounded-xl w-14 h-14 object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.src =
                                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800";
                            }}
                          />
                        </td>
                        <td className="p-4 font-bold text-slate-800 text-sm md:text-base">
                          {course.title}
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center items-center gap-2">
                            <button
                              onClick={() =>
                                navigate(`/courseDetails/${course._id}`)
                              }
                              className="hover:bg-blue-100/70 p-2.5 rounded-xl text-blue-600 transition-colors cursor-pointer"
                              title="View Course"
                            >
                              <FaEye size={16} />
                            </button>

                            <button
                              onClick={() =>
                                navigate(`/updateCourse/${course._id}`)
                              }
                              className="hover:bg-emerald-100/70 p-2.5 rounded-xl text-emerald-600 transition-colors cursor-pointer"
                              title="Edit Course"
                            >
                              <FaEdit size={16} />
                            </button>

                            <button
                              onClick={() => handleDelete(course._id)}
                              className="hover:bg-rose-100/70 p-2.5 rounded-xl text-rose-600 transition-colors cursor-pointer"
                              title="Delete Course"
                            >
                              <FaTrashAlt size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Enrolled Courses Section */}
          <div className="pt-4">
            <MyCourses />
          </div>
        </div>
      ) : (
        <div className="animate-in duration-300 fade-in">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Dashboard;