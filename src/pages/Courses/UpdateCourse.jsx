import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaUsers, FaClock, FaStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const UpdateCourse = () => {
  const loadedCourse = useLoaderData();
  const courseData = loadedCourse.result;
  const [course, setCourse] = useState(courseData);
  const [thumbnailPreview, setThumbnailPreview] = useState(course.image || "");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  // Handle update (PATCH request)
  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/courses/${course._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: course.title,
          duration: course.duration,
          price: course.price,
          description: course.description,
          image: course.image, // Updated image
        }),
      });

      const data = await response.json();

      if (data.modifiedCount || data.success) {
        toast.success("✅ Course updated successfully!");
        navigate("/allcourses");
      } else {
        toast.error("❌ Failed to update course!");
      }
    } catch (error) {
      console.error("Error updating course:", error);
      toast.error("❌ Something went wrong!");
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 max-w-5xl">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Image Section */}
      <div className="shadow-lg rounded-2xl overflow-hidden">
        <img
          src={thumbnailPreview}
          alt={course.title}
          className="w-full h-80 object-cover hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Editable Fields */}
      <div className="space-y-4 mt-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            className="p-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Duration</label>
          <input
            type="text"
            name="duration"
            value={course.duration}
            onChange={handleChange}
            className="p-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={course.price}
            onChange={handleChange}
            className="p-2 border rounded-lg w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            className="p-2 border rounded-lg w-full h-28"
          ></textarea>
        </div>

        {/* Thumbnail / Image Change */}
<div>
  <label className="block mb-1 font-semibold text-gray-700">Course Image URL</label>
  <input
    type="text"
    name="image"
    value={course.image}
    onChange={(e) => {
      handleChange(e);
      setThumbnailPreview(e.target.value);
    }}
    placeholder="Enter image URL"
    className="p-2 border rounded-lg w-full"
  />
  {thumbnailPreview ? (
    <img
      src={thumbnailPreview}
      alt="Thumbnail Preview"
      className="mt-2 border rounded-lg w-full h-40 object-cover"
    />
  ) : null}
</div>

      </div>

      {/* Course Info */}
      <div className="flex flex-wrap gap-6 mt-6 text-gray-600">
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

      {/* Instructor Info */}
      <div className="flex items-center gap-4 bg-gray-100 mt-8 p-4 rounded-xl">
        <img
          src={course.instructorPhoto}
          alt={course.instructorPhoto}
          className="border-[#39b8ad] border-2 rounded-full w-16 h-16 object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800 text-lg">{course.instructorName}</h4>
          <p className="text-gray-600 text-sm">{course.instructorPhoto}</p>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8 pt-6 border-t">
        <button
          onClick={handleSave}
          className="bg-[#39b8ad] hover:bg-[#2fa097] px-8 py-3 rounded-full font-semibold text-white transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateCourse;
