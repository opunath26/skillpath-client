import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Outlet, useLocation } from "react-router";
import { FaEye, FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import MyCourses from "./MyCourses";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user?.email) return;

    fetch("https://skill-path-server-five.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        const myCourses = data.filter(
          (course) => course.instructorName === user.email
        );
        setCourses(myCourses);
      })
      .catch((err) => console.error("Error fetching courses:", err));
  }, [user]);

  // Delete course
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://skill-path-server-five.vercel.app/courses/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setCourses(courses.filter((course) => course._id !== id));
      } else {
        console.error("Delete failed:", res.statusText);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="mx-auto p-6 max-w-6xl">
      
      {location.pathname === "/dashboard" ? (
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-slate-800 text-2xl">Instructor Dashboard</h2>
            <button
              onClick={() => navigate("/addCourse")}
              className="flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7a6f] shadow-md hover:shadow-lg px-5 py-2.5 rounded-xl font-bold text-white transition-all duration-300"
            >
              <FaPlus /> Add New Course
            </button>
          </div>

          {/* My Courses Table Card */}
          <div className="bg-white shadow-sm p-6 border border-slate-100 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-700 text-xl">My Courses</h3>
              <span className="bg-[#0D9488]/10 px-4 py-1 rounded-full font-bold text-[#0D9488] text-sm">
                Total: {courses.length}
              </span>
            </div>

            {courses.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-gray-400 italic">No courses added yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-slate-100 border-b text-left">
                      <th className="p-4 font-bold text-slate-600 text-xs uppercase tracking-wider">#</th>
                      <th className="p-4 font-bold text-slate-600 text-xs uppercase tracking-wider">Thumbnail</th>
                      <th className="p-4 font-bold text-slate-600 text-xs uppercase tracking-wider">Course Title</th>
                      <th className="p-4 font-bold text-slate-600 text-xs text-center uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course, index) => (
                      <tr
                        key={course._id}
                        className="hover:bg-slate-50/50 border-slate-50 border-b transition-colors duration-200"
                      >
                        <td className="p-4 font-medium text-slate-500">{index + 1}</td>
                        <td className="p-4">
                          <img
                            src={course.thumbnail || course.image}
                            alt={course.title}
                            className="shadow-sm border border-slate-100 rounded-xl w-14 h-14 object-cover"
                          />
                        </td>
                        <td className="p-4 font-bold text-slate-700">{course.title}</td>
                        <td className="p-4">
                          <div className="flex justify-center items-center gap-3">
                            <button
                              onClick={() => navigate(`/courseDetails/${course._id}`)}
                              className="hover:bg-blue-50 p-2 rounded-lg text-blue-500 transition-colors"
                              title="View Course"
                            >
                              <FaEye size={18} />
                            </button>

                            <button
                              onClick={() => navigate(`/updateCourse/${course._id}`)}
                              className="hover:bg-emerald-50 p-2 rounded-lg text-emerald-500 transition-colors"
                              title="Edit Course"
                            >
                              <FaEdit size={18} />
                            </button>

                            <button
                              onClick={() => handleDelete(course._id)}
                              className="hover:bg-red-50 p-2 rounded-lg text-red-500 transition-colors"
                              title="Delete Course"
                            >
                              <FaTrashAlt size={18} />
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
          <div className="mt-16">
            <MyCourses />
          </div>
        </div>
      ) : (
        <div className="animate-in duration-500 fade-in">
           <Outlet />
        </div>
      )}
    </div>
  );
};

export default Dashboard;