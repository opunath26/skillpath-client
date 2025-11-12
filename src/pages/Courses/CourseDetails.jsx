import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaUsers, FaClock, FaStar } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider.jsx";

const CourseDetails = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // useNavigate hook

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="font-semibold text-gray-600 text-xl animate-pulse">
          Loading course details...
        </p>
      </div>
    );
  }

  const handleEnroll = () => {
  navigate(`/enrollModal/${course._id}`); //  course._id path param 
};

  return (
    <div className="mx-auto mt-10 p-6 max-w-5xl">
      {/* Image Section */}
      <div className="shadow-lg rounded-2xl overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-80 object-cover hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Title and Info */}
      <div className="mt-6">
        <h2 className="font-bold text-gray-800 text-3xl">{course.title}</h2>

        <div className="flex flex-wrap gap-6 mt-4 text-gray-600">
          <p className="flex items-center gap-2">
            <FaClock className="text-[#39b8ad]" /> {course.duration}
          </p>
          <p className="flex items-center gap-2">
            <FaUsers className="text-[#39b8ad]" /> {course.students?.length || 0} Students
          </p>
          <p className="flex items-center gap-2">
            <FaStar className="text-yellow-500" /> {course.rating}
          </p>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">{course.description}</p>
      </div>

      {/* Instructor Info */}
      <div className="flex items-center gap-4 bg-gray-100 mt-8 p-4 rounded-xl">
        <img
          src={course.instructorPhoto}
          alt={course.instructorName}
          className="border-[#39b8ad] border-2 rounded-full w-16 h-16 object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800 text-lg">{course.instructorName}</h4>
          <p className="text-gray-600 text-sm">{course.instructorEmail}</p>
        </div>
      </div>

      {/* Price + Enroll Button */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <h3 className="font-bold text-[#39b8ad] text-2xl">Price: ${course.price}</h3>
        <button
          onClick={handleEnroll}
          className="bg-[#39b8ad] hover:bg-[#2fa097] px-6 py-3 rounded-full font-semibold text-white transition-all"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
