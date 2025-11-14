import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { FaEye, FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import MyCourses from "./MyCourses";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!user?.email) return;

    fetch("http://localhost:3000/courses")
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
      const res = await fetch(`http://localhost:3000/courses/${id}`, {
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
        {/* Add Course */}
      <div>
        {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-2xl">Dashboard</h2>
        <button
          onClick={() => navigate("/addCourse")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition"
        >
          <FaPlus /> Add New Course
        </button>
      </div>

      {/* My Courses */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-xl">My Courses</h3>
          <p className="text-gray-600">Total Courses: {courses.length}</p>
        </div>

        {courses.length === 0 ? (
          <p className="py-4 text-gray-500 text-center">
            No courses added yet.
          </p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b text-left">
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={course._id}
                  className="hover:bg-gray-50 border-b transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={course.thumbnail || course.image}
                      alt={course.title}
                      className="rounded-md w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="p-3 font-medium">{course.title}</td>
                  <td className="flex justify-center items-center gap-4 p-3">
                    <button
                      onClick={() => navigate(`/courseDetails/${course._id}`)} // View
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                    >
                      <FaEye /> View
                    </button>

                    <button
                      onClick={() => navigate(`/updateCourse/${course._id}`)} // Update
                      className="flex items-center gap-1 text-green-600 hover:text-green-800"
                    >
                      <FaEdit /> Update
                    </button>

                    <button
                      onClick={() => handleDelete(course._id)} // Delete
                      className="flex items-center gap-1 text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </div>

      {/* My Courses */}
      <div className="mt-20">
        <MyCourses />
      </div>
    </div>
  );
};

export default Dashboard;
