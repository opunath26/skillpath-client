import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import { FaSpinner } from "react-icons/fa";

const EnrollModal = () => {
  const { id } = useParams(); // courseId from URL
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  // Fetch course data from backend
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error("Failed to load course:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  // Enroll handler
  const handleEnroll = async () => {
    if (!user?.email) {
      alert("Please login first to enroll!");
      navigate("/login");
      return;
    }

    const enrollmentData = {
      courseId: course._id,
      studentEmail: user.email,
      courseTitle: course.title,
      price: course.price,
      createdAt: new Date(),
    };

    try {
      setEnrolling(true);
      const res = await axios.post("http://localhost:3000/enroll", enrollmentData);

      if (res.data.success) {
        alert("✅ Successfully Enrolled!");
        navigate("/myCourses");
      } else {
        alert(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Enrollment failed:", error);
      alert("⚠️ Failed to enroll. Try again!");
    } finally {
      setEnrolling(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="text-[#39b8ad] text-3xl animate-spin" />
        <p className="ml-3 font-semibold text-gray-700 text-lg">
          Loading course details...
        </p>
      </div>
    );
  }

  // Course not found
  if (!course) {
    return (
      <p className="mt-10 text-gray-500 text-center">Course not found!</p>
    );
  }

  return (
    <div className="bg-white shadow-lg mx-auto mt-10 p-6 rounded-2xl max-w-2xl">
      <h2 className="mb-4 font-bold text-gray-800 text-2xl">
        Enroll in: {course.title}
      </h2>

      <img
        src={course.image}
        alt={course.title}
        className="mb-5 rounded-xl w-full h-60 object-cover"
      />

      <p className="mb-3 text-gray-600">{course.description}</p>
      <p className="mb-3 font-semibold text-gray-700">
        Instructor: {course.instructorName}
      </p>
      <p className="mb-6 font-bold text-[#39b8ad] text-lg">
        Price: ${course.price}
      </p>

      <button
        onClick={handleEnroll}
        disabled={enrolling}
        className={`${
          enrolling ? "bg-gray-400" : "bg-[#39b8ad] hover:bg-[#2fa097]"
        } text-white px-6 py-3 rounded-full font-semibold transition-all`}
      >
        {enrolling ? "Enrolling..." : "Confirm Enroll"}
      </button>
    </div>
  );
};

export default EnrollModal;
