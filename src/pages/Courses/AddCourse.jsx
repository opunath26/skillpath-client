import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { FaBook, FaTags, FaAlignLeft, FaLink, FaMoneyBillWave, FaClock, FaPlusCircle } from "react-icons/fa";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.image.value,
      price: e.target.price.value,
      duration: e.target.duration.value,
      instructorName: user?.email || "unknown",
      createdAt: new Date(),
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
    <div className="flex justify-center items-center bg-slate-50 px-4 py-12 min-h-screen">
      <div className="bg-white shadow-2xl border border-slate-100 rounded-[2rem] w-full max-w-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-[#0D9488] p-8 text-white text-center">
          <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 rounded-2xl w-16 h-16">
            <FaPlusCircle className="text-3xl" />
          </div>
          <h2 className="font-black text-3xl tracking-tight">Create New Course</h2>
          <p className="opacity-90 mt-2 text-[#e2f3f1]">Fill in the details to publish your course</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-12">
          
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 mb-2 font-bold text-slate-700 text-sm uppercase tracking-wider">
                <FaBook className="text-[#0D9488]" /> Course Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Ex: Advanced React Masterclass"
                className="bg-slate-50 px-5 py-3.5 border border-slate-200 focus:border-[#0D9488] rounded-2xl focus:outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full transition-all"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-bold text-slate-700 text-sm uppercase tracking-wider">
                <FaTags className="text-[#0D9488]" /> Category
              </label>
              <select
                name="category"
                className="bg-slate-50 px-5 py-3.5 border border-slate-200 focus:border-[#0D9488] rounded-2xl focus:outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Career">Career</option>
                <option value="Management">Management</option>
                <option value="Soft Skills">Soft Skills</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-bold text-slate-700 text-sm uppercase tracking-wider">
                <FaMoneyBillWave className="text-[#0D9488]" /> Price (৳)
              </label>
              <input
                type="number"
                name="price"
                placeholder="Ex: 2500"
                className="bg-slate-50 px-5 py-3.5 border border-slate-200 focus:border-[#0D9488] rounded-2xl focus:outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full transition-all"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-bold text-slate-700 text-sm uppercase tracking-wider">
                <FaClock className="text-[#0D9488]" /> Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="Ex: 8 Weeks"
                className="bg-slate-50 px-5 py-3.5 border border-slate-200 focus:border-[#0D9488] rounded-2xl focus:outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full transition-all"
                required
              />
            </div>

             {/* Thumbnail URL */}
             <div>
              <label className="flex items-center gap-2 mb-2 font-bold text-slate-700 text-sm uppercase tracking-wider">
                <FaLink className="text-[#0D9488]" /> Thumbnail URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Paste image link"
                className="bg-slate-50 px-5 py-3.5 border border-slate-200 focus:border-[#0D9488] rounded-2xl focus:outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full transition-all"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-bold text-slate-700 text-sm uppercase tracking-wider">
              <FaAlignLeft className="text-[#0D9488]" /> Course Description
            </label>
            <textarea
              name="description"
              placeholder="What will students learn in this course?"
              rows="4"
              className="bg-slate-50 px-5 py-3.5 border border-slate-200 focus:border-[#0D9488] rounded-2xl focus:outline-none focus:ring-[#0D9488]/10 focus:ring-4 w-full transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex justify-center items-center gap-3 bg-[#0D9488] hover:bg-[#0b7a6f] shadow-[#0D9488]/20 shadow-xl mt-4 py-4 rounded-2xl w-full font-black text-white text-lg active:scale-[0.98] transition-all duration-300 transform"
          >
            <FaPlusCircle /> Publish Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;