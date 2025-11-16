import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://skill-path-server-five.vercel.app/courses")
      .then(res => {
        setCourses(res.data.slice(0, 6));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="mx-auto mt-20 px-4 py-8 container">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-3xl">Browse Our Best Courses</h2>
        <button
          onClick={() => navigate("/allCourses")}
          className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-white transition-colors"
        >
          View All Courses
        </button>
      </div>

      {/* Courses Grid */}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-13">
        {courses.map(course => (
          <div
            key={course._id}
            className="bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/courseDetails/${course._id}`)}
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="mb-2 font-semibold text-xl">{course.title}</h3>
              <p className="mb-2 font-bold text-gray-800">Price: ${course.price}</p>
              <button
                className="py-2 rounded-full w-full font-semibold text-white"
                style={{ backgroundColor: "#39b8ad" }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
