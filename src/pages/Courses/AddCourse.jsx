import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import {
  FaBook,
  FaTags,
  FaAlignLeft,
  FaLink,
  FaMoneyBillWave,
  FaClock,
  FaPlusCircle,
  FaUser,
  FaEnvelope,
  FaImage,
  FaStar,
} from "react-icons/fa";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Thumbnail preview state
  const [imagePreview, setImagePreview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      thumbnail: form.thumbnail.value,
      price: form.price.value,
      duration: form.duration.value,
      rating: form.rating.value || "5.0",
      instructorName: form.instructorName.value || user?.displayName || "Anonymous Instructor",
      instructorEmail: form.instructorEmail.value || user?.email || "",
      instructorPhoto: form.instructorPhoto.value || user?.photoURL || "https://i.ibb.co/mJR9n0K/user-placeholder.png",
      students: [],
      createdAt: new Date().toISOString(),
    };

    fetch("https://skill-path-server-five.vercel.app/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("✅ Course added successfully!");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("❌ Failed to add course");
      });
  };

  return (
    <div className="flex justify-center items-center bg-slate-50/50 px-4 py-12 min-h-screen">
      <div className="bg-white/80 shadow-xl backdrop-blur-md border border-slate-200/80 rounded-3xl w-full max-w-3xl overflow-hidden">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 p-8 overflow-hidden text-white text-center">
          <div className="top-0 right-0 absolute bg-teal-500/10 blur-2xl rounded-full w-48 h-48 pointer-events-none" />
          
          <div className="flex justify-center items-center bg-white/10 backdrop-blur-md mx-auto mb-3 border border-white/15 rounded-2xl w-14 h-14">
            <FaPlusCircle className="text-teal-400 text-2xl" />
          </div>
          <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight">Create New Course</h2>
          <p className="mt-1 text-slate-300 text-xs md:text-sm">Fill in all details to publish your course to students</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-10">
          
          {/* Section 1: Course Info */}
          <div className="space-y-4">
            <h3 className="pb-2 border-slate-100 border-b font-extrabold text-slate-800 text-base">
              1. General Course Information
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
                  placeholder="Ex: Advanced React & Next.js Masterclass"
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
                  placeholder="Ex: 499"
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
                  placeholder="Ex: 8 Weeks"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaStar className="text-amber-500" /> Initial Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue="5.0"
                  placeholder="Ex: 4.9"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
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
                  placeholder="Paste ImgBB or Image Link"
                  value={imagePreview}
                  onChange={(e) => setImagePreview(e.target.value)}
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
                {imagePreview && (
                  <div className="mt-2 border border-slate-200 rounded-xl w-48 max-h-40 aspect-video overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Thumbnail Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Instructor Info */}
          <div className="space-y-4 pt-2">
            <h3 className="pb-2 border-slate-100 border-b font-extrabold text-slate-800 text-base">
              2. Instructor Details
            </h3>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              {/* Instructor Name */}
              <div>
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaUser className="text-teal-600" /> Instructor Name
                </label>
                <input
                  type="text"
                  name="instructorName"
                  defaultValue={user?.displayName || ""}
                  placeholder="Ex: Jhankar Mahbub"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
              </div>

              {/* Instructor Email */}
              <div>
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaEnvelope className="text-teal-600" /> Instructor Email
                </label>
                <input
                  type="email"
                  name="instructorEmail"
                  defaultValue={user?.email || ""}
                  placeholder="instructor@skillpath.com"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
              </div>

              {/* Instructor Photo URL */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  <FaImage className="text-teal-600" /> Instructor Photo URL
                </label>
                <input
                  type="text"
                  name="instructorPhoto"
                  defaultValue={user?.photoURL || ""}
                  placeholder="Paste instructor photo link"
                  className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  required
                />
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
              placeholder="Write a clear summary of what students will learn..."
              rows="4"
              className="bg-slate-50 px-4 py-3 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 shadow-lg shadow-teal-600/20 mt-4 py-3.5 rounded-2xl w-full font-bold text-white text-base active:scale-[0.98] transition-all cursor-pointer"
          >
            <FaPlusCircle /> Publish Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;