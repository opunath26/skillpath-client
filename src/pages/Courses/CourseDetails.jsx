import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaUsers, FaClock, FaStar, FaCheckCircle, FaGlobe, FaCertificate } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider.jsx";
import Spinner from "../../components/Spinner.jsx";

const CourseDetails = () => {
  const { result: course } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  const handleEnroll = () => {
    navigate(`/enrollModal/${course._id}`);
  };

  return (
    <div className="bg-slate-50 pb-20 min-h-screen">
      {/* Header Banner Section */}
      <div className="bg-slate-900 py-12 md:py-20 text-white">
        <div className="mx-auto px-4 md:px-10 max-w-7xl container">
          <div className="gap-12 grid lg:grid-cols-3">
            
            {/* Left Side: Course Title & Meta */}
            <div className="lg:col-span-2">
              <nav className="mb-4 font-bold text-[#0D9488] text-sm uppercase tracking-widest">
                Courses / {course.category || "Development"}
              </nav>
              <h1 className="mb-6 font-black text-3xl md:text-5xl leading-tight">
                {course.title}
              </h1>
              <p className="mb-8 max-w-2xl text-slate-400 text-lg leading-relaxed">
                {course.description.substring(0, 160)}...
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 font-bold text-amber-400">
                    <FaStar /> {course.rating}
                  </span>
                  <span className="text-slate-500">(1,250 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#0D9488]" />
                  <span>{course.students?.length || 0} students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-slate-500" />
                  <span>English</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={course.instructorPhoto || "https://i.ibb.co/mJR9n0K/user-placeholder.png"}
                  alt={course.instructorName}
                  className="border-[#0D9488] border-2 rounded-full w-12 h-12 object-cover"
                />
                <p>Created by <span className="font-bold text-[#0D9488] underline cursor-pointer">{course.instructorName}</span></p>
              </div>
            </div>

            {/* Right Side: Sticky Pricing Card */}
            <div className="lg:block relative">
              <div className="top-0 z-20 lg:absolute bg-white shadow-2xl border border-slate-100 rounded-3xl w-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-black text-slate-800 text-4xl">
                      <span className="font-bold">৳</span>{course.price}
                    </span>
                    <span className="text-slate-400 text-lg line-through">৳99.99</span>
                    <span className="bg-red-100 px-2 py-1 rounded font-bold text-red-600 text-xs uppercase">80% OFF</span>
                  </div>

                  <button
                    onClick={handleEnroll}
                    className="bg-[#0D9488] hover:bg-[#0b7a6f] shadow-[#0D9488]/20 shadow-lg mb-4 py-4 rounded-xl w-full font-black text-white text-lg active:scale-95 transition-all"
                  >
                    Enroll Now
                  </button>
                  <p className="mb-6 font-medium text-slate-500 text-xs text-center">30-Day Money-Back Guarantee</p>

                  <div className="space-y-4">
                    <p className="font-bold text-slate-700 text-sm uppercase tracking-wider">This course includes:</p>
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <FaClock className="text-[#0D9488]" /> <span>{course.duration} on-demand video</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <FaCheckCircle className="text-[#0D9488]" /> <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <FaCertificate className="text-[#0D9488]" /> <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="mx-auto mt-12 px-4 md:px-10 max-w-7xl container">
        <div className="gap-12 grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* What you'll learn */}
            <div className="bg-white mb-10 p-8 border border-slate-200 rounded-3xl">
              <h3 className="mb-6 font-bold text-slate-800 text-2xl">What you'll learn</h3>
              <div className="gap-4 grid md:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-3 text-slate-600">
                    <FaCheckCircle className="mt-1 text-[#0D9488] shrink-0" />
                    <span className="text-sm md:text-base leading-relaxed">Master industry-standard tools and professional workflows.</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="max-w-none prose prose-slate">
              <h3 className="mb-4 font-bold text-slate-800 text-2xl tracking-tight">Description</h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;