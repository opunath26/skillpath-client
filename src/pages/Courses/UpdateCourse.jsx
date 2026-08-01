import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { 
  FaBook, 
  FaTags, 
  FaClock, 
  FaMoneyBillWave, 
  FaAlignLeft, 
  FaLink, 
  FaEdit, 
  FaStar, 
  FaUser, 
  FaSave 
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const UpdateCourse = () => {
  const loadedCourse = useLoaderData();
  const courseData = loadedCourse?.result || loadedCourse || {};
  
  const [course, setCourse] = useState(courseData);
  const [thumbnailPreview, setThumbnailPreview] = useState(course.thumbnail || course.image || "");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  // Handle update (PATCH request)
  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://skill-path-server-five.vercel.app/courses/${course._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: course.title,
            category: course.category,
            duration: course.duration,
            price: course.price,
            rating: course.rating,
            description: course.description,
            thumbnail: thumbnailPreview,
            image: thumbnailPreview,
          }),
        }
      );

      const data = await response.json();

      if (data.modifiedCount > 0 || data.acknowledged || data.success) {
        toast.success("✅ Course updated successfully!");
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        toast.error("⚠️ No changes made or update failed!");
      }
    } catch (error) {
      console.error("Error updating course:", error);
      toast.error("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-50/50 px-4 py-12 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-white/80 shadow-xl backdrop-blur-md border border-slate-200/80 rounded-3xl w-full max-w-3xl overflow-hidden">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 p-8 overflow-hidden text-white text-center">
          <div className="top-0 right-0 absolute bg-teal-500/10 blur-2xl rounded-full w-48 h-48 pointer-events-none" />
          
          <div className="flex justify-center items-center bg-white/10 backdrop-blur-md mx-auto mb-3 border border-white/15 rounded-2xl w-14 h-14">
            <FaEdit className="text-teal-400 text-2xl" />
          </div>
          <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight">Update Course Details</h2>
          <p className="mt-1 text-slate-300 text-xs md:text-sm">Modify the details below to update your course</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSave} className="space-y-6 p-6 md:p-10">
          
          {/* Section 1: General Info */}
          <div className="space-y-4">
            <h3 className="pb-2 border-slate-100 border-b font-extrabold text-slate-800 text-base">
              1. General Information
            </h3>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaBook className="text-teal-600" /> Course Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={course.title || ""}
                  onChange={handleChange}
                  placeholder="Course Title"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaTags className="text-teal-600" /> Category
                </label>
                <select
                  name="category"
                  value={course.category || ""}
                  onChange={handleChange}
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all cursor-pointer"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Design">Design</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Business">Business</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaMoneyBillWave className="text-teal-600" /> Price (৳)
                </label>
                <input
                  type="number"
                  name="price"
                  value={course.price || ""}
                  onChange={handleChange}
                  placeholder="Price"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
              </div>

              {/* Duration */}
              <div>
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaClock className="text-teal-600" /> Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={course.duration || ""}
                  onChange={handleChange}
                  placeholder="Ex: 8 Weeks"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaStar className="text-amber-500" /> Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  value={course.rating || "5.0"}
                  onChange={handleChange}
                  placeholder="Ex: 4.8"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                />
              </div>

              {/* Thumbnail URL */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaLink className="text-teal-600" /> Thumbnail Image URL
                </label>
                <input
                  type="text"
                  name="thumbnail"
                  value={thumbnailPreview}
                  onChange={(e) => setThumbnailPreview(e.target.value)}
                  placeholder="Paste Image URL"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
                {thumbnailPreview && (
                  <div className="mt-3 border border-slate-200 rounded-2xl max-w-sm aspect-video overflow-hidden">
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Instructor Read-Only Info */}
          <div className="space-y-3 pt-2">
            <h3 className="pb-2 border-slate-100 border-b font-extrabold text-slate-800 text-base">
              2. Instructor Context
            </h3>
            <div className="flex items-center gap-4 bg-slate-50 p-4 border border-slate-200/60 rounded-2xl">
              <img
                src={course.instructorPhoto || "https://i.ibb.co/mJR9n0K/user-placeholder.png"}
                alt="Instructor"
                className="border-2 border-teal-500 rounded-full w-12 h-12 object-cover"
              />
              <div>
                <h4 className="flex items-center gap-1.5 font-bold text-slate-800 text-sm">
                  <FaUser className="text-teal-600 text-xs" /> {course.instructorName || "Anonymous"}
                </h4>
                <p className="text-slate-500 text-xs">{course.instructorEmail || course.email || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Description */}
          <div className="pt-2">
            <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
              <FaAlignLeft className="text-teal-600" /> Course Description
            </label>
            <textarea
              name="description"
              value={course.description || ""}
              onChange={handleChange}
              rows="4"
              className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-slate-100 hover:bg-slate-200 px-6 py-3.5 rounded-2xl w-1/3 font-bold text-slate-600 text-sm transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-50 shadow-lg shadow-teal-600/20 py-3.5 rounded-2xl w-2/3 font-bold text-white text-base active:scale-[0.98] transition-all cursor-pointer"
            >
              <FaSave /> {loading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;