import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserGraduate, FaClock } from "react-icons/fa";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="mx-auto px-4 py-8 container">
      <h1 className="mb-8 font-bold text-3xl">All Courses</h1>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {courses.map(course => (
          <div key={course._id} className="bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-shadow duration-300">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="mb-3 font-semibold text-xl">{course.title}</h2>
              <p className="flex items-center mb-2 text-gray-600">
                <FaClock className="mr-2 text-teal-500" /> Duration: {course.duration}
              </p>
              <p className="flex items-center mb-4 text-gray-600">
                <FaUserGraduate className="mr-2 text-teal-500" /> Students: {course.students?.length || 0}
              </p>
              <p className="mb-4 font-bold text-gray-800">Price: ${course.price}</p>
              <button 
                className="py-2 rounded-full w-full font-semibold text-white"
                style={{ backgroundColor: "#39b8ad" }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
